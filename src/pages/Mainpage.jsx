import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Mainpage = () => {
  const [bruno, setBruno] = React.useState("");
  const navigate = useNavigate();

  const handleCall = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/makecall", {
        number: bruno,
      });
      console.log("you just clicked submit");

      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  return (
    <div>
      {/* header */}
      <div className="w-full flex items-center px-3  [background:linear-gradient(90.01deg,_#090b1e,_#13193b_51.55%,_#090b1e)] h-[4rem] overflow-hidden text-center text-[1rem] text-white font-montserrat">
        <div className="w-max mr-10">
          <img
            className="w-[114px]"
            src={"https://i.imgur.com/YKVYapo.jpg"}
            alt=""
          />
        </div>

        <div className="flex justify-evenly items-center w-full">
          <div className="relative cursor-pointer text-[1rem] font-medium font-montserrat text-white text-center">
            Home
          </div>
          <div className="relative cursor-pointer text-[1rem] font-medium font-montserrat text-white text-center">
            About
          </div>
          <div className="relative cursor-pointer text-[1rem] font-medium font-montserrat text-white text-center">
            Services
          </div>
          <div className="relative cursor-pointer text-[1rem] font-medium font-montserrat text-white text-center">
            Pricing
          </div>
          <div className="relative cursor-pointer text-[1rem] font-medium font-montserrat text-white text-center">
            Contact Us
          </div>
          <div className="relative cursor-pointer text-[1rem] font-medium font-montserrat text-white text-center">
            Estate.AI
          </div>
        </div>
      </div>

      {/* 1st section */}
      <div className="relative h-full w-full [background:linear-gradient(90.01deg,_#090b1e,_#13193b_51.55%,_#090b1e)] ">
        <img
          className="w-full relative object-cover"
          src="https://i.imgur.com/8ruuHUG.png"
          alt=""
        />

        <div
          onClick={() => {
            navigate("/home");
          }}
          className="w-[154px] absolute z-10 flex items-center justify-center bottom-[40%] left-[45%] rounded-[65px] [background:linear-gradient(99.19deg,_#0a0d21,_#4c66ff)] box-border h-[2.563rem] overflow-hidden text-center text-[1rem] text-white font-montserrat border-[1px] border-solid border-[#828eff]"
        >
          <div className=" font-medium">Get Started</div>
        </div>
      </div>

      {/* 2 section */}
      <div className="flex justify-between  p-12 gap-5 mt-[0rem] w-full h-full [background:linear-gradient(90.01deg,_#090b1e,_#13193b_51.55%,_#090b1e)]   overflow-hidden ">
        <div>
          <div className="w-[40%] mx-auto mt-12 gap-10 flex flex-col">
            <div className="flex gap-1 items-center justify-center">
              <img
                className="w-[38px] h-[38px] object-cover "
                src="https://i.imgur.com/oc3HZTm.png"
                alt=""
              />
              <div className="w-[11.75rem] relative text-[2.25rem] font-semibold font-montserrat text-white text-center inline-block">
                Estate.AI
              </div>
            </div>
            <div className="w-[37rem] relative text-[1.625rem] font-medium font-montserrat text-white text-justify inline-block">{`EstateAI, your AI-powered real estate broker! `}</div>

            <div className="w-[558px] p-4 flex-col relative rounded-lg bg-white box-border h-[13.063rem] overflow-hidden text-justify text-[1.375rem] text-navy font-montserrat border-[1px] border-solid border-[#0038ff]">
              <div className="flex items-center justify-center gap-4 mb-10">
                <img
                  className="w-[38px] h-[38px] object-cover "
                  src="https://i.imgur.com/oc3HZTm.png"
                  alt=""
                />
                <div className="w-[25.438rem] relative text-[1.375rem] font-medium font-montserrat text-navy text-justify inline-block">
                  Let’s have a call, give me your phone number
                </div>
              </div>

              <div className="flex gap-4 mx-auto w-fit">
                <input
                  onChange={(e) => {
                    setBruno(e.target.value);
                  }}
                  type="text"
                  placeholder="7182382823"
                  className="relative pl-12 placeholder:text-gray-400  rounded-[5px] bg-[#e2e2e2] h-[3.313rem] overflow-hidden text-justify text-[1.625rem] text-[black] font-montserrat"
                />
                <img
                  onClick={handleCall}
                  className="w-[53px] h-[53px] object-cover"
                  src="https://i.imgur.com/HKREfJf.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full ">
          <img
            className="relative left-[17em] bottom-[4rem] w-[588px] h-[607px] object-cover "
            src="https://i.imgur.com/pMMiImC.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
