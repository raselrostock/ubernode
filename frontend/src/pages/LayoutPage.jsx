import Header from "../components/Header";
import { Outlet } from "react-router";
const LayoutPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center ">
      <Header />
      <main className="w-full h-[calc(100vh_-_10vh)] flex flex-col items-center">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutPage;
