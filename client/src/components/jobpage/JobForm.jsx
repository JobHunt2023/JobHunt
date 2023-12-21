// JobForm.js
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const JobForm = ({ onRequestClose }) => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    company: "",
    workplaceType: "One-site",
    jobLocation: "",
    jobType: "Full-Time",
    description: "",
    responsibilities: "",
    requirements: [],
    applicationProcess: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        name === "requirements"
          ? value.split(",").map((item) => item.trim())
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request using Axios
      const response = await axios.post("YOUR_API_ENDPOINT", formData);

      // Handle the response or any additional logic here
      console.log("Response:", response.data);
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
    }
  };

  return (
    <div className="absolute z-[55]  flex items-center justify-center top-32 w-1/2 ">
      <form
        onSubmit={handleSubmit}
        className=" bg-bg-white p-8 rounded-lg shadow-md w-full"
      >
        <button
          className="flex justify-end w-full text-dark-color"
          onClick={onRequestClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            data-slot="icon"
            class="w-6 h-6 text-dark-color"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex justify-center items-center">
          <h2 className="text-2xl font-semibold mb-4 text-dark-color text-center">
            Job Application Form
          </h2>
        </div>
        <div className="flex gap-12 w-full">
          <div className="w-1/2">
            <div className="mb-4">
              <label
                htmlFor="jobTitle"
                className="block text-sm font-medium text-dark-color mb-1"
              >
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full p-1 border border-light-color rounded-md focus:outline-none focus:ring focus:border-text-dark-color"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-dark-color mb-1"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-1 border border-light-color rounded-md focus:outline-none focus:ring focus:border-text-dark-color"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="workplaceType"
                className="block text-sm font-medium text-dark-color mb-1"
              >
                Workplace Type
              </label>
              <select
                id="workplaceType"
                name="workplaceType"
                value={formData.workplaceType}
                onChange={handleChange}
                className="w-full p-1 border border-light-color rounded-md focus:outline-none focus:ring focus:border-text-dark-color"
              >
                <option value="One-site">One-site</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="jobLocation"
                className="block text-sm font-medium text-dark-color mb-1"
              >
                Job Location
              </label>
              <input
                type="text"
                id="jobLocation"
                name="jobLocation"
                value={formData.jobLocation}
                onChange={handleChange}
                className="w-full p-1 border border-light-color rounded-md focus:outline-none focus:ring focus:border-text-dark-color"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="jobType"
                className="block text-sm font-medium text-dark-color mb-1"
              >
                Job Type
              </label>
              <select
                id="jobType"
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="w-full p-1 border border-light-color rounded-md focus:outline-none focus:ring focus:border-text-dark-color"
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Contract">Contract</option>
                <option value="Other">Other</option>
                <option value="Temporary">Temporary</option>
                <option value="Volunteer">Volunteer</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
          </div>
          <div className="w-1/2">
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-dark-color mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-1 border border-light-color rounded-md focus:outline-none focus:ring focus:border-text-dark-color"
                row="1"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="responsibilities"
                className="block text-sm font-medium text-dark-color mb-1"
              >
                Responsibilities
              </label>
              <textarea
                id="responsibilities"
                name="responsibilities"
                value={formData.responsibilities}
                onChange={handleChange}
                className="w-full p-1 border border-light-color rounded-md focus:outline-none focus:ring focus:border-text-dark-color"
                row="1"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="requirements"
                className="block text-sm font-medium text-dark-color mb-1"
              >
                Requirements (comma-separated)
              </label>
              <input
                type="text"
                id="requirements"
                name="requirements"
                value={formData.requirements.join(", ")}
                onChange={handleChange}
                className="w-full p-1 border border-light-color rounded-md focus:outline-none focus:ring focus:border-text-dark-color"
                row="1"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="applicationProcess"
                className="block text-sm font-medium text-dark-color mb-1"
              >
                Application Process
              </label>
              <textarea
                id="applicationProcess"
                name="applicationProcess"
                value={formData.applicationProcess}
                onChange={handleChange}
                className="w-full p-1 border border-light-color rounded-md focus:outline-none focus:ring focus:border-text-dark-color"
                row="1"
                required
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            to="/"
            className="bg-dark-btn-color text-dark-btn-txt-color py-2 px-4 rounded-md hover:bg-dark-btn-color/50 focus:outline-none focus:ring focus:border-text-dark-color"
          >
            Submit
          </Link>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
