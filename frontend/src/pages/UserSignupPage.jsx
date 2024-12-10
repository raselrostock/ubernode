import React from "react";
import UserSignupForm from "../components/signup/UserSignupForm";
import { Link } from "react-router";
import SignUpLink from "../components/links/SignUpLink";

const UserSignupPage = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5">
      <h2 className="text-2xl font-semibold">User Signup Form</h2>
      <UserSignupForm />
      <div>
        <h3 className="text-xs text-blue-400 font-normal">
          Already have an account?{" "}
          <Link to="/user/login" className="bg-blue-500 text-white px-2 py-1">
            Login
          </Link>
        </h3>
      </div>
      <div className="flex flex-col items-center w-full px-5">
        <SignUpLink linkText="Captain Sign Up" linkType="captain" />
        <SignUpLink linkText="Captain Login" linkType="captain" />
      </div>
    </div>
  );
};

export default UserSignupPage;
