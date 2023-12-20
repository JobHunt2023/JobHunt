import React from "react";

export const ConnectRequestList = () => {
  return (
    <>
      <div class=" p-3 flex items-center justify-between border-t border-light-color cursor-pointer hover:bg-light-color/25">
        <div class="flex items-center">
          {/* <img
            class="rounded-full h-10 w-10"
            src=""
          /> */}
          <div className="h-10 w-10 rounded-full bg-dark-color"></div>

          <div class="ml-2 flex flex-col">
            <div class="leading-snug text-sm text-dark-color font-bold">
              john doe
            </div>
            <div class="leading-snug text-xs text-dark-color/90">
              Requestedd to connect
            </div>
          </div>
        </div>
        {/* <button class="h-8 px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">
            Follow
          </button> */}
      </div>
    </>
  );
};
