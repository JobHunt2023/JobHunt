import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Education() {
  const [allEducation, setAllEducation] = useState([]);
  const [newEducation, setNewEducation] = useState('');

  useEffect(() => {
    fetchEducation();
  }, []);

  const fetchEducation = async () => {
    try {
      const response = await axios.get('http://localhost:3001/Education');
      setAllEducation(response.data);
    } catch (error) {
      console.error('Error fetching education:', error);
    }
  };

  const addEducation = async () => {
    try {
      const newEducationData = {
        name: newEducation,
        id: allEducation.length + 1 // Generate a unique ID based on the current number of education entries
      };

      await axios.post('http://localhost:3001/Education', newEducationData);
      setAllEducation([...allEducation, newEducationData]);
      setNewEducation('');
    } catch (error) {
      console.error('Error adding education:', error);
    }
  };

  const deleteEducation = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/Education/${id}`);
      const updatedEducation = allEducation.filter(education => education.id !== id);
      setAllEducation(updatedEducation);
    } catch (error) {
      console.error('Error deleting education:', error);
    }
  };

  return (
    <div>
      <div className="container mx-auto w-3/4 bg-bg-white shadow-lg rounded-[2rem]">
        <h1 className="text-2xl text-dark-color font-semibold my-4 p-6">Education</h1>
        <div className="flex justify-between">
          <input
            type="text"
            value={newEducation}
            onChange={(e) => setNewEducation(e.target.value)}
            className="border border-light-color p-4 rounded-md flex-1 mx-8 "
            placeholder="Add a new education"
          />
          <button
            onClick={addEducation}
            className="text-dark-color px-4 py-2 rounded-[1rem] border border-dark-color hover:bg-dark-btn-color hover:text-dark-btn-txt-color mr-12"
          >
            Add
          </button>
        </div>
        <ul className="mt-4 mb-10  py-6">
          {allEducation.map((education) => (
            <li key={education.id} className="border border-light-color p-2 my-2 rounded-lg flex justify-between items-center ">
              {education.name}
              <button
                onClick={() => deleteEducation(education.id)}
                className="text-red-500 ml-4"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Education;