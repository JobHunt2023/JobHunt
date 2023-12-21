import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "./Search";

function Job() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name_event: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/AllJobs")
      .then((response) => {
        // Handle the response data here
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);

  console.log(products);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request with the data to your API endpoint
    axios
      .post(" http://localhost:3004/posts", formData)
      .then((response) => {
        // Handle the success response here
        if (response.status === 201) {
            // Swal.fire({
            //   icon: 'success',
            //   title: 'Event Created Successfully!',
            //   text: 'Your event has been created successfully.',
            //   timer: 3000,
            //   iconColor: "#FE7A00",
            //   confirmButtonColor:"#FE7A00"
            // });
          }
        
      })
      .catch((error) => {
        console.error("An error occurred while sending the message:", error);
      });
  };
  return (
    <div className="pt-24 ">
      <>

        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <div className="flex flex-col items-center justify-center min-h-screen ">
          {/* dark theme */}
          <div className="container  m-4">
            
            <div className="max-w-3xl w-full mx-auto grid gap-4 grid-cols-1">
              {/* alert */}
              <div className="flex flex-row mb-16">
      <Search/>
      </div>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                {" "}
                <div className="flex flex-col justify-center p-4  border-light-color shadow-md hover:shodow-lg rounded-2xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <div className="font-medium leading-none text-dark-color">
                          Post a free job{" "}
                        </div>
                        <p className="text-sm text-dark-color/50 leading-none mt-1">
                          By deleting your account.
                        </p>
                      </div>
                    </div>
                    <a className="flex-no-shrink text-xs  font-medium tracking-wider  text-dark-color hover:text-dark-color/85 transition ease-in duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 20 20"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg> */}
                    </a>
                  </div>
                </div>
                <div className="flex flex-col p-4 shadow-md hover:shodow-lg rounded-2xl">
                  <div className="flex">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6588/6588143.png"
                      alt="Just a flower"
                      className=" w-16  object-fit  h-16 rounded-2xl"
                    />
                    <div className="flex flex-col justify-center w-full px-2 py-1">
                      <div className="flex justify-between items-center ">
                        <div className="flex flex-col">
                          <label
                            className="block mb-2 text-sm font-bold text-black dark:text-black "
                            htmlFor="Direction"
                          >
                            Upload CV
                          </label>
                          <input
                            className="w-full h-15 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                            id="file"
                            type="file"
                            placeholder="ID photo"
                            value={formData.name_event}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                name_event: e.target.value,
                              })
                            }
                            // value={formData.idphoto}
                            //  onChange={(e) => setFormData({ ...formData, idphoto: e.target.value })}
                          />{" "}
                        </div>

                        <div class="flex  items-center gap-x-2 justify-center">
                          <button
                            class="text-gray-500 transition-colors  duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none"
                            // onClick={handleModalEditOpen}
                          >
                            <svg
                              class="text-orange-500 w-5 h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              {" "}
                              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />{" "}
                              <path
                                fill-rule="evenodd"
                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </button>

                          <button
                            class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                            // onClick={() => handleSoftDelete(product.id)}
                          >
                            <svg
                                                    onClick={handleSubmit}        class="text-orange-500 w-5 h-5"

                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              {" "}
                              <path stroke="none" d="M0 0h24v24H0z" />{" "}
                              <path d="M5 12l5 5l10 -10" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* profile card */}

              <div className="flex flex-col  top-0 z-10">
                {products.slice(0, 4).map((product) => (
                  <div key={product.id} className=" border  rounded-2xl p-4">
                    <div className="flex-none sm:flex">
                      <div className=" relative h-32 w-32   sm:mb-0 mb-3">
                        <img
                          src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                          alt="aji"
                          className=" w-32 h-32 object-cover rounded-2xl"
                        />
                      </div>
                      <div className="flex-auto sm:ml-5 justify-evenly">
                        <div className="flex items-center justify-between sm:mt-2">
                          <div className="flex items-center">
                            <div className="flex flex-col">
                              <div className="w-full flex-none text-lg text-black font-bold leading-none">
                                {product.title}
                              </div>
                              <div className="flex-auto text-gray-500 my-1">
                                <span className="mr-3 "> {product.author}</span>
                                <span className="mr-3 border-r border-gray-500  max-h-0" />
                                <span>Cochin, IND</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center">
                          <div className="flex-1 inline-flex items-center">
                            <p className="text-gray-500"> Followers</p>
                          </div>
                        </div>
                        <div className="flex pt-2  text-sm text-gray-400">
                          <div className="flex-1 inline-flex   items-center ml-2 space-x-2">
                            <a
                              hre="https://www.behance.net/ajeeshmon"
                              target="_blank"
                            >
                              <svg
                                className=" cursor-pointer w-5 h-5 p-1  rounded-2xl hover:bg-blue-500 hover:text-white transition ease-in duration-300"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width={48}
                                height={48}
                                viewBox="0 0 172 172"
                                style={{ fill: "#4a90e2" }}
                              >
                                <g
                                  fill="none"
                                  fillRule="nonzero"
                                  stroke="none"
                                  strokeWidth={1}
                                  strokeLinecap="butt"
                                  strokeLinejoin="miter"
                                  strokeMiterlimit={10}
                                  strokeDasharray=""
                                  strokeDashoffset={0}
                                  fontFamily="none"
                                  fontWeight="none"
                                  fontSize="none"
                                  textAnchor="none"
                                  style={{ mixBlendMode: "normal" }}
                                >
                                  <path d="M0,172v-172h172v172z" fill="none" />
                                  <g fill="#ffffff">
                                    <path d="M71.66667,82.41667c3.58333,0 14.33333,-5.79783 14.33333,-20.13117c0,-22.28475 -19.72983,-26.45217 -41.95367,-26.45217c-4.19967,0 -17.00292,0.00717 -26.12967,0.00358c-5.93758,-0.00358 -10.75,4.81242 -10.75,10.75v78.82975c0,5.93758 4.81242,10.75 10.75,10.75h42.28333c15.83475,0 29.25792,-12.52733 29.38333,-28.36208c0.16842,-21.77233 -17.91667,-25.38792 -17.91667,-25.38792zM28.66667,53.75h25.08333c5.93758,0 10.75,4.81242 10.75,10.75c0,5.93758 -4.81242,10.75 -10.75,10.75h-25.08333zM55.54167,118.25h-26.875v-25.08333h26.875c6.92658,0 12.54167,5.61508 12.54167,12.54167c0,6.92658 -5.61508,12.54167 -12.54167,12.54167zM163.0775,103.91667c2.97058,0 5.375,-2.40442 5.37858,-5.375v0c0,-20.77975 -14.37275,-37.625 -35.83333,-37.625c-19.79075,0 -35.83333,16.84525 -35.83333,37.625c0,20.77975 16.04258,37.625 35.83333,37.625c17.51175,0 27.2405,-8.1915 31.992,-20.22075c0.91733,-2.31842 -0.8815,-4.83033 -3.3755,-4.83033h-8.60358c-1.30792,0 -2.46533,0.74175 -3.14258,1.86333c-3.27517,5.41083 -8.27392,8.85442 -15.00342,8.85442c-10.07633,0 -17.415,-7.65042 -19.2855,-17.91667h38.4205zM132.62275,75.25c7.44258,0 14.65583,5.934 16.69117,14.33333h-33.22825c2.69825,-8.41725 9.08375,-14.33333 16.53708,-14.33333zM148.70833,53.75h-28.66667c-2.967,0 -5.375,-2.408 -5.375,-5.375v0c0,-2.967 2.408,-5.375 5.375,-5.375h28.66667c2.967,0 5.375,2.408 5.375,5.375v0c0,2.967 -2.408,5.375 -5.375,5.375z" />
                                  </g>
                                </g>
                              </svg>
                            </a>
                            <a
                              hre="https://www.linkedin.com/in/ajeeshmon"
                              target="_blank"
                            >
                              <svg
                                className="cursor-pointer w-5 h-5 p-1  rounded-2xl hover:bg-blue-500 hover:text-white transition ease-in duration-300"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width={30}
                                height={30}
                                viewBox="0 0 172 172"
                                style={{ fill: "#ffffff" }}
                              >
                                <g
                                  fill="none"
                                  fillRule="nonzero"
                                  stroke="none"
                                  strokeWidth={1}
                                  strokeLinecap="butt"
                                  strokeLinejoin="miter"
                                  strokeMiterlimit={10}
                                  strokeDasharray=""
                                  strokeDashoffset={0}
                                  fontFamily="none"
                                  fontWeight="none"
                                  fontSize="none"
                                  textAnchor="none"
                                  style={{ mixBlendMode: "normal" }}
                                >
                                  <path d="M0,172v-172h172v172z" fill="none" />
                                  <g fill="#ffffff">
                                    <path d="M51.6,143.33333h-28.66667v-86h28.66667zM37.2724,45.86667c-7.9292,0 -14.33907,-6.42707 -14.33907,-14.33907c0,-7.912 6.42133,-14.3276 14.33907,-14.3276c7.90053,0 14.3276,6.42707 14.3276,14.3276c0,7.912 -6.42707,14.33907 -14.3276,14.33907zM154.8,143.33333h-27.56013v-41.85333c0,-9.98173 -0.1892,-22.81867 -14.3276,-22.81867c-14.35053,0 -16.55787,10.8704 -16.55787,22.09627v42.57573h-27.5544v-86.06307h26.4536v11.75907h0.37267c3.6808,-6.76533 12.6764,-13.8976 26.0924,-13.8976c27.92133,0 33.08133,17.82493 33.08133,40.99907z" />
                                  </g>
                                </g>
                              </svg>
                            </a>
                            <a
                              hre="https://twitter.com/ajeemon?lang=en"
                              target="_blank"
                            >
                              <svg
                                className="cursor-pointer w-5 h-5 p-1  rounded-2xl hover:bg-blue-400 hover:text-white transition ease-in duration-300"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width={24}
                                height={24}
                                viewBox="0 0 172 172"
                                style={{ fill: "#ffffff" }}
                              >
                                <g
                                  fill="none"
                                  fillRule="nonzero"
                                  stroke="none"
                                  strokeWidth={1}
                                  strokeLinecap="butt"
                                  strokeLinejoin="miter"
                                  strokeMiterlimit={10}
                                  strokeDasharray=""
                                  strokeDashoffset={0}
                                  fontFamily="none"
                                  fontWeight="none"
                                  fontSize="none"
                                  textAnchor="none"
                                  style={{ mixBlendMode: "normal" }}
                                >
                                  <path d="M0,172v-172h172v172z" fill="none" />
                                  <g fill="#ffffff">
                                    <path d="M155.04367,28.88883c-5.84083,2.75917 -15.781,7.9335 -20.77617,8.9225c-0.1935,0.05017 -0.35117,0.11467 -0.5375,0.16483c-5.8265,-5.74767 -13.81017,-9.3095 -22.64667,-9.3095c-17.80917,0 -32.25,14.44083 -32.25,32.25c0,0.93883 -0.07883,2.666 0,3.58333c-23.06233,0 -39.904,-12.03283 -52.51017,-27.4985c-1.68417,-2.07833 -3.47583,-0.99617 -3.8485,0.48017c-0.8385,3.33967 -1.12517,8.9225 -1.12517,12.90717c0,10.0405 7.8475,19.90183 20.06667,26.015c-2.25033,0.5805 -4.73,0.99617 -7.31,0.99617c-3.03867,0 -6.536,-0.7955 -9.59617,-2.40083c-1.13233,-0.59483 -3.57617,-0.43 -2.85233,2.46533c2.9025,11.60283 16.1465,19.75133 27.97867,22.1235c-2.6875,1.58383 -8.42083,1.26133 -11.05817,1.26133c-0.97467,0 -4.3645,-0.22933 -6.5575,-0.50167c-1.9995,-0.24367 -5.074,0.27233 -2.50117,4.171c5.5255,8.3635 18.02417,13.61667 28.78133,13.81733c-9.90433,7.76867 -26.101,10.60667 -41.61683,10.60667c-3.139,-0.07167 -2.98133,3.5045 -0.4515,4.83033c11.44517,6.00567 30.19317,9.56033 43.58767,9.56033c53.24833,0 83.51317,-40.58483 83.51317,-78.8405c0,-0.61633 -0.01433,-1.90633 -0.03583,-3.2035c0,-0.129 0.03583,-0.25083 0.03583,-0.37983c0,-0.1935 -0.05733,-0.37983 -0.05733,-0.57333c-0.0215,-0.97467 -0.043,-1.88483 -0.0645,-2.35783c4.22117,-3.04583 10.6855,-8.33483 13.9535,-12.384c1.11083,-1.376 0.215,-3.04583 -1.29717,-2.52267c-3.8915,1.3545 -10.621,3.9775 -14.835,4.47917c8.43517,-5.58283 12.60617,-10.44183 16.1895,-15.83833c1.2255,-1.84183 -0.30817,-3.71233 -2.17867,-2.82367z" />
                                  </g>
                                </g>
                              </svg>
                            </a>
                          </div>
                          <a
                            href="https://www.behance.net/ajeeshmon"
                            target="_blank"
                            className="flex-no-shrink bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300"
                          >
                            Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/*-stats*/}

              <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                {/*confirm modal*/}
                <div className="flex flex-col p-4 relative items-center justify-center  border   rounded-2xl">
                  <div className="">
                    <div className="text-center p-5 flex-auto justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 -m-1 flex items-center text-blue-400 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <svg
                        class="text-gray-600 w-10 h-10"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        className="w-16 h-16 flex items-center text-gray-600 mx-auto"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        {" "}
                        <path
                          fill-rule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        />{" "}
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                      <h2 className="text-xl font-bold py-4 text-gray-600">
                        Job seeker guidance
                      </h2>
                      <p className="text-lg text-gray-400 px-8">
                        Explore our curated guide of expert-led courses, such as
                        how to improve your resume and grow your network, to
                        help you land your next opportunity.
                      </p>
                    </div>
                  </div>
                </div>
                {/*elements*/}
                <div className="flex flex-col space-y-4">
                  {/* elements 1 */}
                  <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center mr-auto">
                        <div className="inline-flex w-12 h-12">
                          <img
                            src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                            alt="aji"
                            className=" relative w-12 h-12 object-cover rounded-2xl"
                          />
                          <span className="animate-ping absolute w-12 h-12 inline-flex border-2 rounded-2xl border-green-400 opacity-75" />
                          <span />
                        </div>
                        <div className="flex flex-col ml-3">
                          <div className="font-medium leading-none text-gray-100">
                            Aji
                          </div>
                          <p className="text-sm text-gray-500 leading-none mt-1">
                            UI/UX Designer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*elements 2*/}
                  <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center mr-auto">
                        <div className="inline-flex w-12 h-12">
                          <img
                            src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                            alt="aji"
                            className=" relative p-1 w-12 h-12 object-cover rounded-2xl"
                          />
                          <span className="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-green-400 opacity-75" />
                          <span />
                        </div>
                        <div className="flex flex-col ml-3 min-w-0">
                          <div className="font-medium leading-none text-gray-100">
                            Groupname
                          </div>
                          <p className="text-sm text-gray-500 leading-none mt-1 truncate">
                            Beautiful hand-crafted SVG icons
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*elements 2*/}
                  <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center mr-auto">
                        <div className="inline-flex w-12 h-12">
                          <img
                            src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                            alt="aji"
                            className=" relative p-1 w-12 h-12 object-cover rounded-2xl"
                          />
                          <span className="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-gray-600 opacity-75" />
                          <span />
                        </div>
                        <div className="flex flex-col ml-3 min-w-0">
                          <div className="font-medium leading-none text-gray-100">
                            Ajimon
                          </div>
                          <p className="text-sm text-gray-500 leading-none mt-1 truncate">
                            Jul 066, 2021, 8.25 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center mr-auto">
                        <div className="inline-flex w-12 h-12">
                          <img
                            src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                            alt="aji"
                            className=" relative p-1 w-12 h-12 object-cover rounded-2xl"
                          />
                          <span className="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-gray-600 opacity-75" />
                          <span />
                        </div>
                        <div className="flex flex-col ml-3 min-w-0">
                          <div className="font-medium leading-none text-gray-100">
                            Ajimon
                          </div>
                          <p className="text-sm text-gray-500 leading-none mt-1 truncate">
                            Jul 066, 2021, 8.25 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Job;
