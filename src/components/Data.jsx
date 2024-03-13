import React, { useState } from 'react';
import { useFormContext } from './FormContext';

const Data = () => {
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
          <h3>Edit Form Data</h3>
          Name:<input
            type="text"
            name="first"
            value={editedFormData.first}
            onChange={handleInputChange}
                        className='form-input border border-gray-600 h-10 rounded-md mr-4 mb-2 px-2'

          />
          Address Line 1:<input
            type="text"
            name="add1"
            value={editedFormData.add1}
            onChange={handleInputChange}

            className='form-input border border-gray-600 h-10 rounded-md mr-4 mb-2 px-2'
          /><br/>
          Email:<input
            type="email"
            name="email"
            value={editedFormData.email}
            onChange={handleInputChange}
                        className='form-input border border-gray-600 h-10 rounded-md mr-4 px-2'

          />
          Phone no:<input
            type="number"
            name="number"
            value={editedFormData.number}
            onChange={handleInputChange}
                        className='form-input border border-gray-600 h-10 rounded-md mr-4 px-2'

          /><br/>
          PAN:<input
            type="pan"
            name="pan"
            value={editedFormData.pan}
            onChange={handleInputChange}
                        className='form-input border border-gray-600 h-10 rounded-md mr-4 px-2'

          />
          <button className="mt-4 mb-4 mr-4 bg-white text-black border border-black rounded-full w-32 py-2 px-4 rounded" onClick={handleSaveClick}>Save</button>
        </form>
      ) : (
        <div>
          <p className='text-gray-500'>{formData.first}</p>
          <p className='text-gray-500'>{formData.add1}</p>
          <p className='text-gray-500'>{formData.email}</p>
          <p className='text-gray-500'>{formData.number}</p>
          <p className='text-gray-500'>{formData.pan}</p>

          <button className='mt-4 mb-4 bg-white text-black border border-black rounded-full w-32 py-2 px-4 rounded' onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Data;

