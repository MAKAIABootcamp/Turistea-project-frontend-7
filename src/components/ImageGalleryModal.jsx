import React from 'react';
import Modal from 'react-modal';

const ImageGalleryModal = ({ isOpen, onClose, images = [], namePlace, score }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Image Gallery">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{`Fotos de ${namePlace}`}</h2>
        <p className="text-xl mb-4">{`Calificación: ${score}`}</p>
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img src={image} alt={`Imagen ${index + 1}`} className="w-full h-60 object-cover rounded" />
            </div>
          ))}
        </div>
        <button onClick={onClose} className="mt-4 bg-primary-color text-white p-2 rounded">Cerrar</button>
      </div>
    </Modal>
  );
};

export default ImageGalleryModal;
