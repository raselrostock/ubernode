import React from "react";
import SignUpLink from "./links/SignUpLink";

const HomePageButtonPanel = () => {
  return (
    <div className="flex flex-col items-center w-full px-5">
      <SignUpLink linkText="User Sign Up" linkType="user" />
      <SignUpLink linkText="Captain Sign Up" linkType="captain" />
    </div>
  );
};

export default HomePageButtonPanel;
