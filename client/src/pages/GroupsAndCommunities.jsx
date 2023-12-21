import React from "react";
import SideBarGroup from "../components/groups/SideBarGroup";
import RightSlider from "../components/groups/RightSlider";
import AllGroups from "../components/groups/AllGroups";
import HEE from "../components/groups/HEE";
import AllMembers from "../components/groups/AllMembers";

export const GroupsAndCommunities = () => {
  return (
    <div className="pt-28 pb-28 px-16  gap-8 flex flex-row">
      <SideBarGroup />
      <div className="flex flex-col">
      <AllGroups />
      <HEE />
      <AllMembers />
      </div>
      <RightSlider />
    </div>
  );
};
