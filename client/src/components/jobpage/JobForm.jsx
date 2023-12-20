// JobForm.js
import React, { useState } from 'react';
import axios from 'axios';

const JobForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: '',
    workplaceType: 'One-site',
    jobLocation: '',
    jobType: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request using Axios
      const response = await axios.post('YOUR_API_ENDPOINT', formData);

      // Handle the response or any additional logic here
      console.log('Response:', response.data);
    } catch (error) {
      // Handle errors here
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-[#3B564D] text-center">Job Application Form</h2>
        <div className="mb-4">
          <label htmlFor="jobTitle" className="block text-sm font-medium text-[#3B564D] mb-1">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-[#3B564D]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block text-sm font-medium text-[#3B564D] mb-1">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-[#3B564D]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="workplaceType" className="block text-sm font-medium text-[#3B564D] mb-1">
            Workplace Type
          </label>
          <select
            id="workplaceType"
            name="workplaceType"
            value={formData.workplaceType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-[#3B564D]"
          >
            <option value="One-site">One-site</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Remote">Remote</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="jobLocation" className="block text-sm font-medium text-[#3B564D] mb-1">
            Job Location
          </label>
          <input
            type="text"
            id="jobLocation"
            name="jobLocation"
            value={formData.jobLocation}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-[#3B564D]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="jobType" className="block text-sm font-medium text-[#3B564D] mb-1">
            Job Type
          </label>
          <input
            type="text"
            id="jobType"
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-[#3B564D]"
            required
          />
        </div>
        <div className='flex justify-center'>
          <button
            type="submit"
            className="bg-[#3B564D] text-white py-2 px-4 rounded-md hover:bg-[#3B564D] focus:outline-none focus:ring focus:border-[#3B564D]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
