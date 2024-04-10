import React,{useContext} from "react";
import WalletButton from "../components/WalletButton";
import OwnedByYou from "../components/OwnedByYou";
import ListedOnMarket from "../components/ListedOnMarket";
import Sold from "../components/Sold";
import OwnershipHistory from "../components/OwnershipHistory";
import { ChatContext } from "../context/ChatContext";


const ProfileView = () => {
    const {GetPropertyById,GetUser,currentAccount,userDetail} = useContext(ChatContext)
  const logo = "https://i.imgur.com/YKVYapo.jpg";
  const [activeButton, setActiveButton] = React.useState(1);
  const [temp1, setTemp1] = React.useState('');
  console.log("user data in profile view",temp1)
 

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  // React.useEffect(() => {
  //   const temp = async()=>{
  //     const t = await GetUser();
  //     setTemp1(t);
  //     console.log("user data in profile view",temp1)
  //   }
    
    
  // }, [currentAccount,temp1])
  console.log("user data in profile view",userDetail)

  

  return (
    <div className="max-w-[1440px] flex flex-col item-center">
      <div className="w-full relative flex justify-end py-1 ">
        <div className="absolute top-2 left-2">
          <img className="w-[114px]" src={logo} alt="" />
        </div>
        <WalletButton />
      </div>

      {/* profile section */}
      <div  className="flex p-4 flex-col gap-3">
        <div onClick={async()=>{
          await  GetPropertyById(1);
          await GetUser();
        }} className="w-[3.125rem] relative text-[1rem] font-semibold font-inter text-black text-left inline-block">
          Profile
        </div>

        <div className="flex gap-7">
          <div>
            <img
              className="w-[256px] h-auto object-cover"
              src="https://imgur.com/aj0VVvo.png"
              alt=""
            />
          </div>

          <div className="flex gap-6 flex-col">
            <div className="w-full relative h-[2.25rem] text-left text-[0.875rem] text-black font-inter">
              <div className="absolute top-[0rem] left-[4.75rem] rounded bg-whitesmoke w-[9.938rem] h-[2.25rem] overflow-hidden">
                <div className="absolute top-[0.625rem] left-[0.875rem] inline-block w-[6.375rem]">
                  Syed Sharukhali
                </div>
              </div>
              <div className="absolute top-[0.625rem] left-[0rem] font-medium">
                Name
              </div>
            </div>

            <div className="w-full relative h-[2.25rem] text-left text-[0.875rem] text-black font-inter">
              <div className="absolute top-[0rem] left-[4.75rem] rounded bg-whitesmoke w-[9.938rem] h-[2.25rem] overflow-hidden">
                <div className="absolute top-[0.625rem] left-[0.875rem] inline-block w-[6.375rem]">
                  9892363057
                </div>
              </div>
              <div className="absolute top-[0.625rem] left-[0rem] font-medium">{`Phone No. `}</div>
            </div>

            <div className="w-full relative h-[2.25rem] text-left text-[0.875rem] text-black font-inter">
              <div className="absolute top-[0rem] left-[4.75rem] rounded bg-whitesmoke w-[9.938rem] h-[2.25rem] overflow-hidden">
                <div className="absolute top-[0.625rem] left-[0.875rem] inline-block w-[6.75rem]">
                  shahsai11111@gmail.com
                </div>
              </div>
              <div className="absolute top-[0.625rem] left-[0rem] font-medium">{`Email `}</div>
            </div>
          </div>
        </div>

        {/* bottom section  */}
        <div className="flex flex-col gap-3 mt-10">
          <div className="w-[11.5rem] relative text-[0.875rem] font-semibold font-inter text-black text-left inline-block">
            Property Ownership Status
          </div>

          {/* the 4 bottom sections  */}
          <div className="w-full flex flex-col relative bg-[#ededed] py-6 overflow-hidden text-left text-[0.875rem] text-black font-inter">
            <div className="flex gap-3 p-5">
              <div
                className={`w-max p-3 text-center relative text-[0.875rem] font-medium font-inter text-black  inline-block ${
                  activeButton === 1 ? "border-blue-500 border-b-2" : ""
                }`}
                onClick={() => handleButtonClick(1)}
              >
                Owned By You
              </div>
              <button
                className={`w-max p-3 text-center relative text-[0.875rem] font-medium font-inter text-black  inline-block ${
                  activeButton === 2 ? "border-blue-500 border-b-2" : ""
                }`}
                onClick={() => handleButtonClick(2)}
              >
                Listed On Marketplace
              </button>
              <button
                className={`w-[6.125rem] p-3 text-center relative text-[0.875rem] font-medium font-inter text-black  inline-block ${
                  activeButton === 3 ? "border-blue-500 border-b-2" : ""
                }`}
                onClick={() => handleButtonClick(3)}
              >
                Sold
              </button>
              <button
                className={`w-max p-3 text-center relative text-[0.875rem] font-medium font-inter text-black  inline-block ${
                  activeButton === 4 ? "border-blue-500 border-b-2" : ""
                }`}
                onClick={() => handleButtonClick(4)}
              >
                Ownership History Ledger
              </button>
            </div>
            <div className="flex flex-col gap-2 p-3">
              {activeButton == 1 ? <OwnedByYou /> : null}
              {activeButton == 2 ? <ListedOnMarket /> : null}
              {activeButton == 3 ? <Sold /> : null}
              {activeButton == 4 ? <OwnershipHistory /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
