import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { actionAddReview } from '../redux/review/reviewActions';
import StarRating from '../components/StarRating';
import fileUpload from '../services/fileUpload';

const FormReview = () => {
  const dispatch = useDispatch();
  const [primaryImage, setPrimaryImage] = useState(null);
  const [secondaryImages, setSecondaryImages] = useState([null, null, null]);

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
      secondaryImages: '',
      price: '',
      score: 0,
      ecology: '',
      lowCost: '' 
    },
    validationSchema: Yup.object({
      namePlace: Yup.string().required('La ubicación es obligatoria'),
      typeReviews: Yup.string().required('El tipo de reseña es obligatorio'),
      title: Yup.string().max(106, "El Titulo no debe pasar de los 106 caracteres").required('El titulo es obligatorio'),
      description: Yup.string().max(300, "La reseña no debe pasar de los 300 caracteres").required('La reseña es obligatoria'),
      price: Yup.string().required('El precio es obligatorio'),
      score: Yup.number().required('La calificación es obligatoria').min(1, 'Selecciona al menos una estrella'),
      ecology: Yup.string().required('Seleccionar si es ecológico es obligatorio').notOneOf(['Seleccionar'], 'Debes seleccionar una opción'),
      lowCost: Yup.string().required('Seleccionar si es de bajo costo es obligatorio').notOneOf(['Seleccionar'], 'Debes seleccionar una opción'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log("Submitting form with values:", values);
        const mainImageUrl = primaryImage ? await fileUpload(primaryImage) : null;
        const secondaryImagesUrls = await Promise.all(secondaryImages.map(img => img ? fileUpload(img) : null));

        const reviewData = {
          ...values,
          mainImage: mainImageUrl,
          secondaryImages: secondaryImagesUrls.filter(url => url !== null),
        };
        console.log("Review data to be dispatched:", reviewData);
        dispatch(actionAddReview(reviewData));
        Swal.fire({
          title: "Excelente!",
          text: "Has creado con éxito una reseña",
          icon: "success",
        }).then(() => {
          resetForm();
          setPrimaryImage(null);
          setSecondaryImages([null, null, null]);
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        Swal.fire({
          title: "Error",
          text: "Hubo un problema al crear la reseña",
          icon: "error",
        });
      }
    },
  });

  const handleRatingChange = (newRating) => {
    formik.setFieldValue('score', newRating);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-primary-color mb-6">Creación Reseña</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="namePlace" className="block text-sm font-medium text-gray-700">
            Nombre del lugar
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
            <option value="Seleccionar" disabled>Seleccionar</option>
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
                <img src={URL.createObjectURL(primaryImage)} alt="Primary" className="w-full h-full object-cover" />
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
                  <img src={URL.createObjectURL(secondaryImages[index])} alt={`Secondary ${index}`} className="w-full h-full object-cover" />
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
            placeholder="Enter item description"
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
          <label htmlFor="ecology" className="block text-sm font-medium text-gray-700">
            Ecológico
          </label>
          <select
            id="ecology"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight-color focus:border-highlight-color sm:text-sm"
            {...formik.getFieldProps('ecology')}
          >
            <option value="Seleccionar" disabled>Seleccionar</option>
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
          {formik.touched.ecology && formik.errors.ecology ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.ecology}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="lowCost" className="block text-sm font-medium text-gray-700">
            Bajo costo
          </label>
          <select
            id="lowCost"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight-color focus:border-highlight-color sm:text-sm"
            {...formik.getFieldProps('lowCost')}
          >
            <option value="Seleccionar" disabled>Seleccionar</option>
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
          {formik.touched.lowCost && formik.errors.lowCost ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.lowCost}</div>
          ) : null}
        </div>
        <div className="flex items-center space-x-2 mb-6">
          <button
            type="button"
            className="flex items-center justify-center space-x-2 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-full shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-highlight-color focus:ring-opacity-50"
          >
            <span>Añadir otra reseña</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="#ffa317" />
            </svg>
          </button>
        </div>
        <div className="flex justify-end mt-6">
          <button type="button" className="py-2 px-4 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 mr-4">
            Cancelar
          </button>
          <button type="submit" className="py-2 px-4 bg-highlight-color text-white rounded-md hover:bg-primary-color">
            Crear
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormReview;
