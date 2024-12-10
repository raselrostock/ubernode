import { Link } from "react-router";

const SignUpLink = ({ linkText, linkType }) => {
  return (
    <Link
      to="/user/signup"
      className={`text-xl font-semibold w-full flex justify-center items-center py-1 rounded-md ${
        linkType === "user" ? "text-white bg-black" : "text-black bg-white"
      } `}
    >
      {linkText}
    </Link>
  );
};

export default SignUpLink;
