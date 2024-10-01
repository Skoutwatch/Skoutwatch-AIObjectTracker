import Navbar from "../components/navbar";
import left from "./assets/arrow-left.svg";

const Result = () => {
  return (
    <>
      <Navbar />
      <div className=" w-full px-8 py-6 mt-20">
        <div className=" flex items-center space-x-3">
          {/* <span className=" flex items-center space-x-1">
            <img src={left} alt="" />
            <p className=" text-base font-LatoNormal font-medium text-[#D99A26]">
              Back
            </p>
          </span> */}
          <p className=" font-LatoNormal font-semibold text-[#231546] text-2xl">
            Segmentation
          </p>
        </div>

        <p className=" font-Inter font-semibold text-base text-black mt-10">
          Object tracking
        </p>
        <p className=" text-xs text-[#000000B2] font-normal font-Inter mt-2">
          You'll be able to see the results from our AI, segmenting and tracking
          objects and applying visual effects to your video here.
        </p>

        <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* input video */}
          <div className=" w-full">
            <p className=" font-semibold font-Inter text-base text-black">
              Input Video
            </p>
            <div className=" w-full h-[300px] mt-2 rounded-[10px] bg-[#EAEBF0] text-center">
              Fake Input video goes here
            </div>
          </div>
          {/* Output video */}
          <div className=" w-full">
            <p className=" font-semibold font-Inter text-base text-black">
              Output
            </p>
            <div className=" w-full h-[300px] mt-2 rounded-[10px] bg-[#EAEBF0] text-center">
              Fake Output video goes here
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;