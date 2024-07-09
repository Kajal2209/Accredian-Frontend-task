import React, { useState } from 'react';
import axios from 'axios';

const FormPopup = ({ showPopup, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    referral_code: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://accredian-backend-8pqw.onrender.com/api/refer-check', formData);
      console.log(response.data);
      alert('Referral successfully completed');
    } catch (error) {
      console.error(error);
      alert('Error submitting referral');
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-lg w-80 relative">
        <h2 className="text-2xl mb-4">Referral Form</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="referralCode" className="block mb-1">Referral Code</label>
            <input
              type="text"
              id="referral_code"
              name="referral_code"
              value={formData.referral_code}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
          <p className="text-gray-500 text-sm mt-2">*For testing purposes use this referral code: REF123</p>
        </form>
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default FormPopup;
