import React from "react";

const SignuoBtn = ({ btnText, btnType }) => {
  return (
    <button
      className={`text-xl font-semibold w-full flex justify-center items-center py-1 rounded-md ${
        btnType === "user" ? "text-white bg-black" : "text-black bg-white"
      } `}
    >
      {btnText}
    </button>
  );
};

export default SignuoBtn;
