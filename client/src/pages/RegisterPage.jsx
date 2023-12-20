import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (password === confirmPassword) {
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Confirmed Password:", confirmPassword);
    } else {
      console.log("Passwords do not match");
    }
  };

  return (
    <section className="h-screen">
      <div className="h-full">
        {/* Right column container with background */}
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-around">
          {/* Left column container */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form>
              {/* Sign up section */}
              <div className="flex flex-row items-center justify-center lg:justify-center">
                <p className="mb-0 mr-4 text-3xl text-[#3B564D] font-bold">Create an account</p>
              </div>

              {/* Separator */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                {/* <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                  Or
                </p> */}
              </div>

              {/* Email input */}
              <input
                type="email"
                className="mb-6 border border-neutral-300 rounded-md px-3 py-2 w-full"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Password input */}
              <input
                type="password"
                className="mb-6 border border-neutral-300 rounded-md px-3 py-2 w-full"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* Confirm Password input */}
              <input
                type="password"
                className="mb-6 border border-neutral-300 rounded-md px-3 py-2 w-full"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {/* Register button */}
              <div className="text-center lg:text-left text-[#3B564D]">
                <button
                  type="button"
                  className="inline-block rounded bg-[#B9C5B1] hover:bg-[#a6b49c] px-7 py-2 text-sm font-medium uppercase text-white transition duration-150 ease-in-out"
                  onClick={handleRegister}
                >
                  Register
                </button>

                {/* Login link */}
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Already have an account?{" "}
                  <Link
                    to="/LoginPage"
                    className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>

          {/* Right column image */}
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://orders.rivieragourmet.com/image-files/login-green.png"
              className="w-full"
              alt="Register Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
