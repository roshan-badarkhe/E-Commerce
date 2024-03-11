import { Outlet } from "react-router-dom";
import pic11 from "../assets/imgs/pic11.png";

const Carousel = () => {
  return (
    <>
      <section
        style={{
          height: "32rem",
          maxWidth: "1600px",
          backgroundImage: `url(${pic11})`,
        }}
        className=" w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right"
      >
        <div className="container mx-auto">
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide"></div>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default Carousel;
