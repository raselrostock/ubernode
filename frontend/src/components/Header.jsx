import { Link } from "react-router";
import logoBlack from "./../assets/logo/logo-black.png";

const Header = () => {
  return (
    <header className="border  w-full flex justify-items-start items-center h-[10vh] px-5">
      <Link to={"/"}>
        <img src={logoBlack} alt="Uber logo black" className="w-[70px]" />
      </Link>
    </header>
  );
};

export default Header;
