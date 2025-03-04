import React, { useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const ImageUpload = ({ onUpload }) => {
  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];

    // Upload the file
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('YOUR_UPLOAD_URL', formData);

      // Handle the response, you might want to store the file URL in state
      onUpload(response.data.fileUrl);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="border-dashed border-2 p-4 mb-4">
      <input {...getInputProps()} />
      <p>Drag 'n' drop an image here, or click to select an image</p>
    </div>
  );
};

const NewPostForm = ({ formData, setFormData, onNext }) => {
  const [image, setImage] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  const handleImageUpload = (imageUrl) => {
    setImage(imageUrl);
  };

  const handleNext = () => {
    // Check if mandatory fields are filled
    if (!formData.title || !formData.brand || !formData.price || !formData.description) {
      // Display an error message or handle the lack of data in a way that makes sense for your application
      alert('Please fill in all required fields before proceeding.');
      return;
    }
  
    // Include the image URL in the form data
    const updatedFormData = { ...formData, image };
    setFormData(updatedFormData);
    setCurrentStep(2); // Move to the next step
  };
  const handleBack = () => {
    // Move to the previous step
    setCurrentStep(currentStep - 1);
  };


  const handleUpload = async () => {
  try {
    // Send post data to the backend
    const response = await axios.post('http://localhost:8080/api/posts', {
      title: formData.title,
      brand: formData.brand,
      price: formData.price,
      description: formData.description,
      image: image, // Add the image URL here
    });

    // Handle the response as needed
    console.log('Post created:', response.data);

    // Additional logic if necessary, e.g., redirect to a new page
  } catch (error) {
    console.error('Error creating post:', error);
  }
};


  

  return (
    <div>
      {currentStep === 1 && (
        <div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Product Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
              Brand
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Product Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </div>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      )}

      {currentStep === 2 && (
        <div>
          {/* Image Upload */}
          <ImageUpload onUpload={handleImageUpload} />

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      )}
    </div>
  );
};

export default NewPostForm;

