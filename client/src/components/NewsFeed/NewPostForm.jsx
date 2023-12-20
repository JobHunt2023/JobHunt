import React, { useState } from "react";
import axios from "axios";

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
    <div className="relative flex justify-center items-center w-full mt-5">
      <div className="w-full">
        <div className="border border-gray-300 rounded-md flex p-2">
          <img
            src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/10/09/3800763-77305188-2560-1440.jpg"
            alt="User"
            className="rounded-full h-12 w-12 mr-2"
          />

          <button
            onClick={openForm}
            className="bg-gray-100 text-gray-500 p-2 px-4 rounded-full hover:bg-gray-200 text-start w-full"
          >
            Post A Job
          </button>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
          <div className="z-10 w-full max-w-md mx-auto mt-8 p-4 bg-white rounded-md shadow-lg relative">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
              New Post
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-600"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-600"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="mediaFile"
                  className="block text-sm font-medium text-gray-600"
                >
                  Media File (Photo or Video)
                </label>
                <input
                  type="file"
                  accept="image/*,video/*"
                  id="mediaFile"
                  name="mediaFile"
                  onChange={handleFileChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mr-2"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={closeForm}
                  className="text-gray-600 hover:text-gray-800 cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewPostForm;
