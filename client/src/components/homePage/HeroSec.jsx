import React from "react";
import bg from "../../assets/clips/bg.png"

export const HeroSec = () => {
  return (
    <>
      <div class="bg-white relative pt-40 pb-28 lg:pt-44 mx-16 ">
        <div class="relative xl:container m-auto px-6 md:px-12 lg:px-6">
          <h1 class="sm:mx-auto sm:w-10/12 md:w-2/3 font-[#3B564D] text-[#3B564D] text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-6xl dark:text-white">
            Grow your professional network with us{" "}
          </h1>
          <div class="lg:flex">
            <div class="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
              <p class="text-[#B9C5B1] sm:text-lg dark:text-gray-300 lg:w-11/12">
                DailyBot takes chat and collaboration to the next level: daily
                standups, team check-ins, surveys, kudos, best companion bot for
                your virtual watercooler, 1:1 intros, motivation tracking and
                more.
              </p>
              <span class="block font-semibold text-[#3B564D] dark:text-gray-400">
                The best companion bot for your chat app.
              </span>
              <div class="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                <a
                  aria-label="add to slack"
                  href="#"
                  class="text-[#fff] hover:text-[#3B564D] p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:bg-[#fff] bg-[#3B564D] hover:shadow-lg hover:shadow-[#3B564D50] dark:hover:border-cyan-300/30"
                >
                  <div class="flex justify-center space-x-4">
                    
                    <span class="w-24 text-center font-medium md:block dark:text-white">
                      SIGN UP
                    </span>
                  </div>
                </a>
              </div>
              {/* <div class="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                        <a aria-label="add to slack" href="#" class="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
                            <div class="flex justify-center space-x-4">
                                <img class="w-6 h-6" src="https://tailus.io/sources/blocks/tech-startup/preview/images/slack.png" alt="slack logo" loading="lazy" width="128" height="128"/>
                                <span class="hidden font-medium md:block dark:text-white">Slack</span>
                            </div>
                        </a>    
                        <a aria-label="add to chat" href="#" class="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30">
                            <div class="flex justify-center space-x-4">
                                <img class="w-6 h-6" src="https://tailus.io/sources/blocks/tech-startup/preview/images/chat.png" alt="chat logo" loading="lazy" width="128" height="128"/>
                                <span class="hidden font-medium md:block dark:text-white">Google Chat</span>
                            </div>
                        </a>   
                        <a aria-label="add to zoom" href="#" class="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30">
                            <div class="flex justify-center space-x-4">
                                <img class="w-6 h-6" src="https://tailus.io/sources/blocks/tech-startup/preview/images/zoom.png" alt="chat logo" loading="lazy" width="128" height="128"/>
                                <span class="hidden font-medium md:block dark:text-white">Zoom</span>
                            </div>
                        </a>    
                    </div>

                    {/* <div class="dark:text-gray-300">
                        🔥🌟 
                        <span>Other integrations :</span> 
                        <a href="#" class="font-semibold text-gray-700 dark:text-gray-200">Discord,</a>
                        <a href="#" class="font-semibold text-gray-700 dark:text-gray-200">Telegram</a>
                    </div> */}
              {/* 
                    <div class="pt-12 flex gap-6 lg:gap-12 justify-between grayscale lg:w-2/3">
                        <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/airbnb.svg" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                        <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/ge.svg" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                        <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/coty.svg" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                        <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/microsoft.svg" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                    </div> */}
            </div>
            <div class="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">
              <div class="relative w-full">
                <div
                  aria-hidden="true"
                  class="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-[#15986a] to-[#afec87] blur-3xl"
                ></div>
                <img
                //   src="https://tailus.io/sources/blocks/tech-startup/preview/images/globalization-cuate.svg"
                  src={bg}
                  class="relative w-full"
                  alt="wath illustration"
                  loading="lazy"
                  width="320"
                  height="280"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
