import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { doc, getDoc, updateDoc } from 'firebase/firestore'; // Importa updateDoc
import { db } from '../firebase/firebaseConfig';
import { actionUpdateReview } from '../redux/review/reviewActions';
import StarRating from '../components/StarRating';
import fileUpload from '../services/fileUpload';

const EditReview = () => {
  const { reviewId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [primaryImage, setPrimaryImage] = useState(null);
  const [secondaryImages, setSecondaryImages] = useState([null, null, null]);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        if (!reviewId) {
          throw new Error('reviewId is undefined');
        }

        console.log('Fetching document with reviewId:', reviewId); // Para depuración

        const docRef = doc(db, 'Reviews', reviewId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const review = docSnap.data();
          formik.setValues({
            namePlace: review.namePlace || '',
            typeReviews: review.typeReviews || '',
            title: review.title || '',
            description: review.description || '',
            mainImage: review.mainImage || '',
            secondaryImages: review.secondaryImages || [null, null, null],
            price: review.price || '',
            score: review.score || 0,
            ecology: review.ecology || false,
            lowCost: review.lowCost || false,
            location: review.location || ''
          });
          setPrimaryImage(review.mainImage || null);
          setSecondaryImages(review.secondaryImages || [null, null, null]);
        } else {
          console.error('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReview();
  }, [reviewId]);

  const handlePrimaryImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPrimaryImage(file);
    }
  };

  const handleSecondaryImagesChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const updatedImages = [...secondaryImages];
      updatedImages[index] = file;
      setSecondaryImages(updatedImages);
    }
  };

  const formik = useFormik({
    initialValues: {
      namePlace: '',
      typeReviews: '',
      title: '',
      description: '',
      mainImage: '',
      secondaryImages: [],
      price: '',
      score: 0,
      ecology: false,
      lowCost: false,
      location:'',
    },
    validationSchema: Yup.object({
      namePlace: Yup.string().required('La ubicación es obligatoria'),
      typeReviews: Yup.string().required('El tipo de reseña es obligatorio'),
      title: Yup.string().max(106, 'El Titulo no debe pasar de los 106 caracteres').required('El titulo es obligatorio'),
      description: Yup.string().max(300, 'La reseña no debe pasar de los 300 caracteres').required('La reseña es obligatoria'),
      price: Yup.number().required('El precio es obligatorio'),
      score: Yup.number().required('La calificación es obligatoria').min(1, 'Selecciona al menos una estrella'),
      ecology: Yup.string().required('Seleccionar si es ecológico es obligatorio'),
      lowCost: Yup.string().required('Seleccionar si es de bajo costo es obligatorio'),
      location: Yup.string().required('La ubicación es obligatoria'),
    }),
    onSubmit: async (values) => {
      try {
        console.log('Submitting form with values:', values);

        const uploadedPrimaryImage = primaryImage ? await fileUpload(primaryImage) : formik.values.mainImage;
        const uploadedSecondaryImages = await Promise.all(
          secondaryImages.map((img, index) => img ? fileUpload(img) : formik.values.secondaryImages[index])
        );

        const updatedReviewData = {
          ...values,
          mainImage: uploadedPrimaryImage,
          secondaryImages: uploadedSecondaryImages,
        };

        console.log('Updated review data to be dispatched:', updatedReviewData);
        dispatch(actionUpdateReview(reviewId, updatedReviewData));

        // Actualiza el documento en Firestore
        const docRef = doc(db, 'Reviews', reviewId);
        await updateDoc(docRef, updatedReviewData);

        Swal.fire({
          title: 'Excelente!',
          text: 'Has actualizado con éxito la reseña',
          icon: 'success',
        }).then(() => {
          navigate('/myreviews');
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al actualizar la reseña',
          icon: 'error',
        });
      }
    },
  });

  const handleRatingChange = (newRating) => {
    formik.setFieldValue('score', newRating);
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-primary-color mb-6">Editar Reseña</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="namePlace" className="block text-sm font-medium text-gray-700">
            Ubicación
          </label>
          <input
            type="text"
            id="namePlace"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight-color focus:border-highlight-color sm:text-sm"
            placeholder="Enter location"
            {...formik.getFieldProps('namePlace')}
          />
          {formik.touched.namePlace && formik.errors.namePlace ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.namePlace}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="typeReviews" className="block text-sm font-medium text-gray-700">
            Selecciona el tipo de reseña que deseas agregar
          </label>
          <select
            id="typeReviews"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight-color focus:border-highlight-color sm:text-sm"
            {...formik.getFieldProps('typeReviews')}
          >
            <option value="" disabled>
              Seleccionar
            </option>
            <option value="Alimentación">Alimentación</option>
            <option value="Hospedaje">Hospedaje</option>
            <option value="Actividad">Actividad</option>
          </select>
          {formik.touched.typeReviews && formik.errors.typeReviews ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.typeReviews}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titulo</label>
          <input
            type="text"
            id="title"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight-color focus:border-highlight-color sm:text-sm"
            placeholder="Enter item title"
            {...formik.getFieldProps('title')}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.title}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Reseña</label>
          <textarea
            id="description"
            rows="4"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight-color focus:border-highlight-color sm:text-sm"
            placeholder="Enter item description"
            {...formik.getFieldProps('description')}
          ></textarea>
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.description}</div>
          ) : null}
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Insertar Imágen Principal</label>
          <div className="flex space-x-4 mt-2">
            <label className="w-20 h-20 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer focus:ring-2 focus:ring-highlight-color focus:outline-none">
              <input type="file" className="hidden" onChange={handlePrimaryImageChange} />
              {primaryImage ? (
                <img src={typeof primaryImage === 'string' ? primaryImage : URL.createObjectURL(primaryImage)} alt="Primary" className="w-full h-full object-cover" />
              ) : (
                <span className="text-2xl focus:ring-highlight-color">+</span>
              )}
            </label>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Insertar Imágenes Secundarias</label>
          <div className="flex space-x-4 mt-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <label
                key={index}
                className="w-20 h-20 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer focus:ring-2 focus:ring-highlight-color focus:outline-none"
              >
                <input type="file" className="hidden" onChange={(event) => handleSecondaryImagesChange(event, index)} />
                {secondaryImages[index] ? (
                  <img src={typeof secondaryImages[index] === 'string' ? secondaryImages[index] : URL.createObjectURL(secondaryImages[index])} alt={`Secondary ${index}`} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-2xl focus:ring-highlight-color">+</span>
                )}
              </label>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Precio
          </label>
          <input
            type="text"
            id="price"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight-color focus:border-highlight-color sm:text-sm"
            placeholder="Enter item price"
            {...formik.getFieldProps('price')}
          />
          {formik.touched.price && formik.errors.price ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.price}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Calificación</label>
          <StarRating rating={formik.values.score} onRatingChange={handleRatingChange} />
          {formik.touched.score && formik.errors.score ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.score}</div>
          ) : null}
        </div>
        <div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">
    Características
  </label>
  <div className="mt-1">
        <div className="flex items-center mb-2">
          <input
            id="ecology"
            name="ecology"
            type="checkbox"
            className="h-4 w-4 text-primary-color border-gray-300 rounded focus:ring-highlight-color"
            checked={formik.values.ecology}
            onChange={formik.handleChange}
          />
          <label htmlFor="ecology" className="ml-2 block text-sm text-gray-900">
            Ecológico
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="lowCost"
            name="lowCost"
            type="checkbox"
            className="h-4 w-4 text-primary-color border-gray-300 rounded focus:ring-highlight-color"
            checked={formik.values.lowCost}
            onChange={formik.handleChange}
          />
          <label htmlFor="lowCost" className="ml-2 block text-sm text-gray-900">
            Bajo costo
          </label>
        </div>
        </div>
  {formik.touched.ecology && formik.errors.ecology ? (
    <div className="text-red-500 text-xs mt-1">{formik.errors.ecology}</div>
  ) : null}
  {formik.touched.lowCost && formik.errors.lowCost ? (
    <div className="text-red-500 text-xs mt-1">{formik.errors.lowCost}</div>
  ) : null}
  
</div>

<div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Departamento y ciudad
          </label>
          <input
            type="text"
            id="location"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight-color focus:border-highlight-color sm:text-sm"
            placeholder="Enter location"
            {...formik.getFieldProps('location')}
          />
          {formik.touched.location && formik.errors.location ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.location}</div>
          ) : null}
        </div>
        <div className="flex justify-end mt-6">
          <button type="button" className="py-2 px-4 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 mr-4" onClick={() => navigate('/myreviews')}>
            Cancelar
          </button>
          <button type="submit" className="py-2 px-4 bg-highlight-color text-white rounded-md hover:bg-primary-color">
            Actualizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditReview;
