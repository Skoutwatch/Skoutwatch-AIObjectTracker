import inputAna from "./assets/inputAnal.mp4";
import outAna from "./assets/output_Anal.webm";

const ResultTrack = ({ setTrackingStep }) => {
  const handleProceed = () => {
    setTrackingStep("tracking");
  };

  return (
    <>
      <div className="absolute lg:left-[20%] top-[80px] p-6 w-[80%] h-[calc(100vh-80px)] overflow-y-auto">
        <div className=" w-full px-8 py-6">
          <div className=" flex items-center space-x-3">
            {/* <span className=" flex items-center space-x-1">
            <img src={left} alt="" />
            <p className=" text-base font-LatoNormal font-medium text-[#D99A26]">
              Back
            </p>
          </span> */}
            <div className=" flex w-full items-center justify-between">
              <p className=" font-LatoNormal font-semibold text-[#231546] text-3xl">
                Football Match Analysis
              </p>
              <div className=" flex items-center space-x-4">
                <button
                  onClick={handleProceed}
                  className="bg-[#D99A26] px-4 py-2 rounded-lg text-xs font-Inter font-medium text-[#FFFFFF]"
                >
                  Analyse another video
                </button>
                <button className="bg-[#EAEBF0] px-4 py-2 rounded-lg text-xs font-Inter font-medium text-[#000]">
                  View NFT
                </button>
              </div>
            </div>
          </div>

          <p className=" font-Inter font-semibold text-lg text-black mt-10">
            Unlock advanced performance metrics.
          </p>
          <p className=" text-sm text-[#000000B2] font-normal font-Inter mt-2">
            Explore detailed AI-driven insights, as we segment and track
            objects, applying advanced visual analytics to enhance your video.
          </p>

          <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* input video */}
            <div className=" w-full">
              <p className=" font-semibold font-Inter text-xl text-black">
                Input Video
              </p>

              <video className=" rounded-[10px] w-full mt-2" controls>
                <source src={inputAna} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* <div className=" w-full h-[300px] mt-2 rounded-[10px] bg-[#EAEBF0] text-center">
                Fake Input video goes here
              </div> */}
            </div>
            {/* Output video */}
            <div className=" w-full">
              <p className=" font-semibold font-Inter text-xl text-black">
                Output Video
              </p>
              <video className=" rounded-[10px] w-full mt-2" controls>
                <source src={outAna} type="video/webm" />
                Your browser does not support the video tag.
              </video>
              {/* <div className=" w-full h-[300px] mt-2 rounded-[10px] bg-[#EAEBF0] text-center">
                Fake Output video goes here
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultTrack;
