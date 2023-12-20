import React from "react";
import { NewMessageList } from "./NewMessageList";
import { ConnectRequestList } from "./ConnectRequestList";
import { AcceptedConnectionRequest } from "./AcceptedConnectionRequest";

export const NotificationList = () => {
  return (
    <>
      <div class="absolute  max-w-sm mx-auto mt-1 shadow-md bg-white  rounded-[1rem] mb-16 ">
        <NewMessageList />
        <ConnectRequestList />
        <AcceptedConnectionRequest />
      </div>
    </>
  );
};
