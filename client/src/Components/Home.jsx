import pic1 from "../assets/imgs/pic1.jpg";
import pic6 from "../assets/imgs/pic6.jpg";
import pic3 from "../assets/imgs/pic3.jpg";
import pic2 from "../assets/imgs/pic2.jpg";
import pic5 from "../assets/imgs/pic5.jpg";
const Home = () => {
  return (
    <div className=" flex w-full h-full  ">
      <div className="w-1/2  flex flex-col justify-center items-center">
        <div className="w-2/3 font-semibold text-gray-700 font-culpa text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          optio itaque doloribus saepe. Quod quaerat quo fugit veritatis.
          Provident totam nobis dignissimos, eligendi repudiandae maiores quos
          ab ut numquam aut?
          <br />
          <br />
          <div className="flex flex-row w-full justify-start">
            <button className="bg-transparent flex gap-2 hover:bg-blue-500 text-gray-900 font-medium hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
              Login
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 grid grid-cols-3 grid-rows-5 gap-x-4 p-8  gap-y-4">
        {/* <div className="grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr] gap-[2px_18px]"> */}
        <div className="row-span-3 ">
          <img name="1" src={pic1} className="h-full rounded-2xl w-full"></img>
        </div>
        <div className="row-span-2 ">
          <img name="6" src={pic5} className="rounded-2xl h-full w-full "></img>
        </div>
        <div className="row-span-3 ">
          <img src={pic2} className="rounded-2xl h-full w-full " />
        </div>
        <div className="row-span-3 ">
          <img name="2" src={pic6} className="rounded-2xl h-full w-full "></img>
        </div>
        <div className="row-span-2 ">
          <img name="5" src={pic5} className="rounded-2xl h-full w-full "></img>
        </div>
        <div className="row-span-3 ">
          <img name="3" src={pic3} className="rounded-2xl h-full w-full"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
