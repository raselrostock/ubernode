import uberMapBg from "../assets/map/uber-map-bg.jpg";
const MapBg = () => {
  return (
    <div className="w-full h-[60vh] ">
      <img src={uberMapBg} alt="" className=" object-cover w-full" />
    </div>
  );
};

export default MapBg;
