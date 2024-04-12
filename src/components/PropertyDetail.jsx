import React from "react";
import WalletButton from "./WalletButton";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { ChatContext } from "../context/ChatContext";


import {
  CCarousel,
  CCarouselItem,
  CImage,
  CCarouselCaption,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import Card from "./Card";

const PropertyDetail = () => {
  const logo = "https://i.imgur.com/C9At9Sx.png";
  const pic1 = "https://i.imgur.com/Q2yxuqO.png";
  const pic2 = "https://i.imgur.com/Dvs1XvX";
  const navigate = useNavigate();
  const {
    GetPropertyById,
    currentAccount,
    GetAllTransaction,
    allProp,
    ConnectWallet,
    arr,
    BuyProperty
  } = React.useContext(ChatContext);

  return (
    <div className="max-w-[1440px] flex flex-col item-center">
      <div className="w-full relative flex justify-end py-1 ">
        <div className="absolute top-2 left-2">
          <img className="w-[114px]" src={logo} alt="" />
        </div>
        <WalletButton />
      </div>
      <Navbar />

      <div className="flex flex-col items-center">
        {/* corousel */}
        <div>
          <CCarousel controls indicators>
            <CCarouselItem>
              <CImage className="d-block h-[448px]" src={pic1} alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block h-[448px]" src={pic1} alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block h-[448px]" src={pic1} alt="slide 3" />
            </CCarouselItem>
          </CCarousel>
        </div>

        <div className="w-full p-3 flex ">
          <div className="w-[690px] min-h-[260px] flex flex-col p-2 bg-[#efefef]">
            <div className="flex justify-between">
              <div className="w-[22.563rem] relative text-[1.438rem] font-medium font-inter text-black text-left inline-block">
                Xaverian palace, 2bhk, Kandivali
              </div>
              <div className="w-[5.625rem] relative text-[1.75rem] font-medium font-inter text-black text-left inline-block">
                $8000
                <div className="absolute top-4 left-0">
                  <div className="w-[3.25rem] relative text-[0.75rem] font-medium font-inter text-[#8a8a8a] text-left inline-block">
                    One time
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[32.938rem] relative text-[1.125rem] font-inter text-[#8a8a8a] text-left inline-block">{`Samtanagar , Sector 17 Vashi, Navi Mumbai, Maharashtra `}</div>
            <a href="https://my.matterport.com/show/?m=rrydMHCBQGb" target="_blank">
              {" "}
              <div className="w-[156px] my-3 flex items-center justify-center hover:scale-95 relative rounded bg-white h-[1.875rem] overflow-hidden text-left text-[0.875rem] text-black font-inter">
                <div className="w-[6.938rem] relative text-[0.875rem] font-inter text-black text-left inline-block">
                  Take AR/VR Tour
                </div>
                <img
                  className="h-auto w-[16px]  object-contain  overflow-hidden "
                  alt=""
                  src="https://i.imgur.com/RoCdTui.png"
                />
              </div>
            </a>
            <div className="flex">
              <div onClick={()=>{
                BuyProperty(1,1,1,1)
              }} className="w-[152px] flex items-center justify-center relative rounded bg-[#0038ff] h-[2.313rem] overflow-hidden text-left text-[0.875rem] text-white font-inter">
              <div className=" font-semibold">Buy Now</div>
            </div>

            <div className=" relative bottom-10 left-[15rem] my-3 ml-10">
              <img className="w-[10rem]" src="https://i.imgur.com/Ij4pRGJ.png" alt="" />
            </div>
            </div>
            
          </div>

          <div className="w-[690px]  min-h-[260px] flex  p-2">
            <div className="w-[335px] flex flex-col gap-2">
              <div className="flex">
                <img
                  width={"53px"}
                  className="h-auto object-contain"
                  src="https://i.imgur.com/MUWLtLx.png"
                  alt=""
                />
                \
                <div>
                  <div className="w-[16.313rem] relative text-[0.875rem] text-black text-left inline-block font-inter">
                    <p className="m-0">
                      <span className="font-semibold font-inter">
                        Built Up area
                      </span>
                      <span>: </span>
                    </p>
                    <p className="m-0">1330</p>
                    <p className="m-0">(123.56 sq.m.)</p>
                    <p className="m-0">
                      Carpet area: 1130 sq.ft. (104.98 sq.m.){" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full relative box-border h-[0.063rem] border-t-[1px] border-solid border-whitesmoke" />

              <div className="flex gap-1">
                <img
                  className="w-10 h-10 object-contain"
                  src="https://i.imgur.com/J0Ay6w1.png"
                  alt=""
                />
                <div className="flex flex-col">
                  <div className="w-[4.813rem] relative text-[0.875rem] font-semibold font-inter text-black text-left inline-block">
                    1 Bathroom
                  </div>
                  <div className="w-[7.25rem] relative text-[0.875rem] font-inter text-darkgray text-left inline-block">
                    No. of Bathroom
                  </div>
                </div>
              </div>
              <div className="w-full relative box-border h-[0.063rem] border-t-[1px] border-solid border-whitesmoke" />

              <div className="flex gap-1">
                <img
                  className="w-10 h-10 object-contain "
                  src="https://i.imgur.com/M0Z5c1Z.png"
                  alt=""
                />
                <div className="flex flex-col">
                  <div className="w-[4.813rem] relative text-[0.875rem] font-semibold font-inter text-black text-left inline-block">
                    1 Bedroom
                  </div>
                  <div className="w-[7.25rem] relative text-[0.875rem] font-inter text-darkgray text-left inline-block">
                    No. of Bedroom
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[369px] flex flex-col">
              <div className="w-full relative bg-[#dcdcdc] flex items-center justify-center h-[2.25rem] overflow-hidden text-left text-[0.875rem] text-black font-inter">
                <div className="font-medium">Contact Information</div>
              </div>

              <div className="h-[106px] mt-4 flex ">
                <img
                  className="w-[93px]"
                  src="https://i.imgur.com/yvE229a.png"
                  alt=""
                />
                <div className="flex p-2 flex-col gap-4 w-full">
                  <div className="w-full relative h-[1.063rem] text-left text-[0.875rem] text-black font-inter">
                    <div className="absolute top-[0rem] left-[0rem] font-semibold">
                      Ravi Sharma
                    </div>
                    <i className="absolute top-[0.125rem] left-[5.5rem] text-[0.75rem]">
                      (Owner)
                    </i>
                  </div>
                  <div className="w-[12.313rem] relative text-[0.875rem] text-black text-left inline-block font-inter">
                    <span className="font-semibold">{`Phone Number : `}</span>
                    <span className="font-medium">7021455632</span>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-full relative flex items-center justify-center rounded bg-[#00b25c] h-[1.875rem] overflow-hidden text-left text-[0.75rem] text-white font-inter">
                      <div className="">Chat with Owner</div>
                    </div>
                    <a
                      className="w-full"
                      href="https://calendly.com/shreyashsingh865/30min"
                      target=" _blank "
                    >
                      <div className="w-full flex items-center justify-center relative rounded bg-[#00b25c] h-[1.875rem] overflow-hidden text-left text-[0.75rem] text-white font-inter">
                        <div className="">Book a meeting</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* description part */}
        <div className="flex flex-col p-2 gap-4">
          <div className="w-[8.813rem] relative text-[0.875rem] font-semibold font-inter text-black text-left inline-block">
            Property Description
          </div>
          <div className="w-[86.563rem] relative text-[0.875rem] font-medium font-inter text-black text-left inline-block">
            A small deck in the back adds a touch of outdoor charm, offering a
            private retreat for relaxation or entertaining. Situated in a
            sought-after location, this 2-flat building close to amenities,
            schools, and transportation, it offers the perfect blend of comfort
            and accessibility. Whether you're an investor or a homeowner, this
            2-flat building is a must-see A small deck in the back adds a touch
            of outdoor charm, offering a private retreat for relaxation or
            entertaining. Situated in a sought-after location, this 2-flat
            building close to amenities, schools, and transportation, it offers
            the perfect blend of comfort and accessibility. Whether you're an
            investor or a homeowner, this 2-flat building is a must-see
          </div>
          <div className="w-[7.75rem] relative text-[0.875rem] font-semibold font-inter text-black text-left inline-block">
            Ownership Details
          </div>
          <div className="w-full p-3 relative bg-[#EDEDED] h-[10.25rem] overflow-hidden">
            {/* ownership detail */}
          </div>

          {/* other properties */}
          <div className="w-[13.813rem] relative text-[1rem] font-semibold font-inter text-black text-left inline-block">
            Similar Properties in Locality
          </div>
          <div className="max-w-[990px] gap-4 flex flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
