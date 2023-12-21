import React, { useState } from "react";
import axios from "axios";
import JobForm from "../jobpage/JobForm";
import Modal from "react-modal"

const NewPostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mediaFile, setMediaFile] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setMediaFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("mediaFile", mediaFile);
      const response = await axios.post("YOUR_SERVER_API_ENDPOINT", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Post created:", response.data);
      setShowForm(false);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="relative flex justify-center  bg-bg-white items-center w-full mt-5 ">
      <div className="w-full ">
        <div className="border border-dark-color/30 rounded-[1rem] flex p-5">
          <img
            src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/10/09/3800763-77305188-2560-1440.jpg"
            alt="User"
            className="rounded-full h-12 w-12 mr-2"
          />

          <button
            onClick={openForm}
            className="bg-light-btn-color/30 text-light-btn-txt-color p-2 px-4 rounded-full hover:bg-light-btn-color text-start w-full"
          >
            Post A Job
          </button>
        </div>
      </div>

      {showForm && (
        <div className=" fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-light-color bg-opacity-50"></div>
            <JobForm  onRequestClose={closeForm} />
        </div>
      )}
    </div>
  );
};

export default NewPostForm;
