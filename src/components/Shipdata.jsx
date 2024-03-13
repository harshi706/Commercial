import React, { useState } from 'react';
import { useFormContext } from './FormContext';

const Shipdata = () => {
  const { formData } = useFormContext();
  const [editMode, setEditMode] = useState(false);
  const [editedFormData, setEditedFormData] = useState({});

  const handleEditClick = () => {
    setEditMode(true);
    setEditedFormData(formData);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    formData.updateFormData(editedFormData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      {editMode ? (
        <form>
 
          <button className="mt-4 mb-4 mr-4 bg-white text-black border border-black rounded-full w-32 py-2 px-4 rounded" onClick={handleSaveClick}>Save</button>
        </form>
      ) : (
        <div>
          <p className='text-gray-500'>1250.00 Shipping</p><br/>
          <p className='text-gray-500'>Shipment One</p>
          <p className='text-gray-500'>Arrives Thu,14 Dec-3 Jan,Wed</p>
         

          <button className='mt-4 mb-4 bg-white text-black border border-black rounded-full w-32 py-2 px-4 rounded' onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Shipdata;

