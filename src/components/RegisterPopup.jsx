import  { useState,useContext } from "react";
import axios from "axios";
import { ChatContext } from "../context/ChatContext";


const RegisterPopup = (props) => {
  const img1 = "https://i.imgur.com/FzROOWo.png";
  const crossImg = "https://i.imgur.com/RiV6kzS.png";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const {currentAccount,CreateUser} = useContext(ChatContext)

  const isDisabled = !name || !email || !phoneNumber;

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/reg_user', {
        wallet_address : currentAccount
      });
      await CreateUser(name, email, phoneNumber);
      console.log('you just clicked submit');
  
      console.log('Response from server:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };
  return (
    <div className="max-w-[36.875rem] bg-white border-[1px] border-solid box-border border-[#e9e9e9] items-center  h-[27.3125rem] flex flex-nowrap ">
      <div className="max-w-[14.0625rem] h-full px-10 flex items-center justify-center bg-[#F6F6F6]">
        <img
          className="w-[148px] h-auto object-cover"
          src={img1}
          alt="register"
        />
      </div>
      <div className="max-w-full relative gap-[31px] p-5 flex flex-col justify-center items-center">
        <div onClick={()=>{
          props.func(false)
        }} className="absolute cursor-pointer hover:scale-105 transition-all duration-150 right-1 top-2">
          <img className="w-5 object-cover h-auto" src={crossImg} alt="cross" />
        </div>
        <div className="w-[11.563rem] relative text-[1rem] font-medium font-inter text-black text-left inline-block">
          Enter Details to Register
        </div>

        <div className="flex flex-col w-full gap-[6px]">
          <input
            value={name}
            onChange={handleNameChange}
            className=" p-3 rounded-sm box-border h-[2rem] text-left text-[0.75rem] text-[#999] font-inter border-[1px] border-solid border-[#d4d4d4]"
            type="text"
            placeholder="Name"
          />
          <input
            className="rounded-sm p-3 box-border h-[2rem] text-left text-[0.75rem] text-[#999] font-inter border-[1px] border-solid border-[#d4d4d4]"
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          <input
            className="rounded-sm p-3 box-border h-[2rem] text-left text-[0.75rem] text-[#999] font-inter border-[1px] border-solid border-[#d4d4d4]"
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>

        <div
        disabled={isDisabled}
          onClick={handleSubmit}
          className="w-full flex justify-center items-center relative rounded bg-[#0094ff] h-[2rem] overflow-hidden text-left text-[0.75rem] text-white font-inter"
        >
          <div className="">Continue</div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPopup;
