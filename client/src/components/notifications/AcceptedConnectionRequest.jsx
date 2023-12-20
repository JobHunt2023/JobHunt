import React from "react";

export const AcceptedConnectionRequest = () => {
  return (
    <>
      <div class="p-3 flex items-center justify-between border-t border-[#B9C5B1] cursor-pointer hover:bg-[#B9C5B125]">
        <div class="flex items-center">
          {/* <img
              class="rounded-full h-10 w-10"
              src=""
            /> */}
          <div className="h-10 w-10 rounded-full bg-[#3B564D]"></div>

          <div class="ml-2 flex flex-col">
            <div class="leading-snug text-sm text-[#3B564D] font-bold">
              Paris
            </div>
            <div class="leading-snug text-xs text-[#3B564D90]">
              Accepted your request
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
