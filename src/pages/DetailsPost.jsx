import React from 'react';

const DetailsPost = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-5">
        <h1 className="text-2xl font-bold">Experiencia Relajante En Hotel Caribe</h1>
        <div className="text-gray-600">Cartagena, Colombia</div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-yellow-400 text-lg leading-none">★★★★☆</div>
          <div className="flex space-x-2">
            <button className="text-blue-500 hover:text-blue-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 14.828a4 4 0 00-5.656-5.656"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 10a2 2 0 100-4 2 2 0 000 4zm.828 9.172a4 4 0 005.656-5.656"></path></svg>
            </button>
            <button className="text-blue-500 hover:text-blue-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 sm:grid-cols-4 lg:grid-cols-4 p-5">
        <img src="/path/to/image1.jpg" alt="Street view" className="w-full h-48 object-cover col-span-2 sm:col-span-3 lg:col-span-3"/>
        <img src="/path/to/image2.jpg" alt="Sunset" className="w-full h-48 object-cover"/>
        <img src="/path/to/image3.jpg" alt="Beach view" className="w-full h-48 object-cover"/>
        <img src="/path/to/image4.jpg" alt="Patio view" className="w-full h-48 object-cover"/>
      </div>
    </div>
  );
}

export default DetailsPost;

