import React from "react";
import NewPostForm from "../components/NewsFeed/NewPostForm";
import Posts from "../components/NewsFeed/Posts";
import { SideMenu } from "../components/NewsFeed/SideMenu";

function NewsFeed() {
  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col">
          <NewPostForm />
          <Posts />
        </div>
        <SideMenu />
      </div>
    </>
  );
}

export default NewsFeed;
