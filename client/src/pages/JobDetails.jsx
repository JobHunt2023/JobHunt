import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobDetails = ({ match }) => {
  const [jobDetails, setJobDetails] = useState(null);
  const jobId = match?.params?.id; // Use optional chaining to prevent errors if match is undefined

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        if (!jobId) {
          // jobId is undefined, handle this case as needed (e.g., redirect or show an error)
          console.error('Job ID is undefined');
          return;
        }

        // Make a GET request using Axios
        const response = await axios.get(`http://localhost/jobs/${jobId}`);

        // Set the job details in the state
        setJobDetails(response.data);
      } catch (error) {
        // Handle errors here
        console.error('Error:', error);
      }
    };

    // Call the fetchJobDetails function when the component mounts
    fetchJobDetails();
  }, [jobId]); // Add jobId to the dependency array if you're using it in the request URL

  if (!jobDetails) {
    // Loading state or error handling can be added here
    return <p>Loading...</p>;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-screen-md">
        <h2 className="text-2xl font-semibold mb-4 text-[#3B564D] text-center">Job Details</h2>

        {/* Display job details using jobDetails */}
        <p><strong>Job Title:</strong> {jobDetails.jobTitle}</p>
        <p><strong>Company:</strong> {jobDetails.company}</p>
        <p><strong>Workplace Type:</strong> {jobDetails.workplaceType}</p>
        <p><strong>Job Location:</strong> {jobDetails.jobLocation}</p>
        <p><strong>Job Type:</strong> {jobDetails.jobType}</p>

        <h3 className="text-xl font-semibold mt-4 text-[#3B564D]">Description: {jobDetails.description}</h3>
     
        <h3 className="text-xl font-semibold mt-4 text-[#3B564D]">Responsibilities: {jobDetails.responsibilities}</h3>
  
        <h3 className="text-xl font-semibold mt-4 text-[#3B564D]">Requirements</h3>
        <ul>
          {jobDetails.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mt-4 text-[#3B564D]">Application Process: {jobDetails.applicationProcess}</h3>
   
      </div>
    </div>
  );
};

export default JobDetails;
