import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Cookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);

        // Save the token in cookies
        cookies.set("userToken", data.token);
        navigate("/");
        // Redirect or perform any other action upon successful login
      } else {
        console.error("Login failed:", data);
        // Handle error, display error message, etc.
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <section className="h-screen mx-44 pt-24">
      <div className="h-full">
        {/* Left column container with background */}
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-around">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://orders.rivieragourmet.com/image-files/login-green.png"
              className="w-full"
              alt="Sample image"
            />
          </div>

          {/* Right column container */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form onSubmit={handleLogin}>
              {/* Sign in section */}
              <div className="flex flex-row items-center justify-center lg:justify-center">
                <p className="mb-0 mr-4 text-3xl text-dark-color font-bold">
                  Sign in to your account
                </p>
                {/* Facebook button */}
                {/* <button
                  type="button"
                  className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </button> */}

                {/* Twitter button */}
                {/* <button
                  type="button"
                  className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </button> */}

                {/* Linkedin button */}
                {/* <button
                  type="button"
                  className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </button> */}
              </div>
              {/* Separator */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-light-color after:mt-0.5 after:flex-1 after:border-t after:border-light-color">
                {/* <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                  Or
                </p> */}
              </div>

              {/* Email input */}
              <input
                type="email"
                name="email"
                className="mb-6 border border-light-color rounded-md px-3 py-2 w-full"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Password input */}
              <input
                type="password"
                className="mb-6 border border-light-color rounded-md px-3 py-2 w-full"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="mb-6 flex items-center justify-between text-dark-color">
                {/* Remember me checkbox */}
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem]  rounded-[0.25rem] border-[0.125rem] border-solid border-light-color "
                    type="checkbox"
                    value=""
                    id="rememberMe"
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer "
                    htmlFor="rememberMe"
                  >
                    Remember me
                  </label>
                </div>

                {/* Forgot password link */}
                <a href="#!">Forgot password?</a>
              </div>

              {/* Login button */}
              <div className="text-center lg:text-left text-dark-color">
                <button
                  type="submit"
                  className="inline-block rounded bg-dark-btn-color hover:bg-dark-btn-color50 px-7 py-2 text-sm font-medium uppercase text-dark-btn-txt-color transition duration-150 ease-in-out"
                >
                  Login
                </button>

                {/* Register link */}
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Don't have an account?{" "}
                  <Link
                    to="/RegisterPage"
                    className="underline text-dark-color transition duration-150 ease-in-out hover:text-light-color focus:text-dark-color active:text-dark-color"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
