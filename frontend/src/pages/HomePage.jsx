import React from "react";
import MapBg from "../components/MapBg";
import HomePageButtonPanel from "../components/HomePageButtonPanel";

const HomePage = () => {
  return (
    <div className="h-full w-full flex flex-col items-center relative">
      <MapBg />
      <HomePageButtonPanel />
    </div>
  );
};

export default HomePage;
