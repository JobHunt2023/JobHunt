import React from "react";
import { Link } from "react-router-dom";

export const HowItWorks = () => {
  return (
    <>
      <div class="flex h-screen items-center justify-center  px-6 md:px-60">
        <div class="space-y-6 border-l-2 border-dashed">
          <div class="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-dark-color"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="ml-6">
              <h4 class="font-bold text-dark-color">Sign up </h4>
              <p class="mt-2 max-w-screen-sm text-sm text-light-color">
                Join us and build your proffisional network rifht away
              </p>
              <Link
                to="/RegisterPage"
                class="mt-4 border border-light-color w-fit p-3 hover:bg-light-color hover:text-dark-btn-txt-color rounded-[1rem] block text-sm font-semibold text-dark-color"
              >
                Sign up
              </Link>
            </div>
          </div>
          <div class="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-dark-color"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="ml-6 mb-12">
              <h4 class="font-bold text-dark-color">Set up your profile</h4>
              <p class="mt-2 max-w-screen-sm text-sm text-light-color">
                Set your profile by adding your profissional title, skills, cv
                and more
              </p>
              {/* <span class="mt-1 block text-sm font-semibold text-[#3B564D]">2007</span> */}
            </div>
          </div>
          <div class="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-dark-color"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="ml-6 mb-12">
              <h4 class="font-bold text-dark-color">
                Search for job opportunities
              </h4>
              <p class="mt-2 max-w-screen-sm text-sm text-light-color">
                Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis
                iaculis, feugiat risus quis, aliquet urna. Quisque fringilla
                mollis risus, eu pulvinar dolor
              </p>
              {/* <span class="mt-1 block text-sm font-semibold text-[#3B564D]">2007</span> */}
            </div>
          </div>
          <div class="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-dark-color"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="ml-6 mb-12">
              <h4 class="font-bold text-dark-color">
                Tell others your recent achievements
              </h4>
              <p class="mt-2 max-w-screen-sm text-sm text-light-color">
                Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis
                iaculis, feugiat risus quis, aliquet urna. Quisque fringilla
                mollis risus, eu pulvinar dolor
              </p>
              {/* <span class="mt-1 block text-sm font-semibold text-[#3B564D]">2007</span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
