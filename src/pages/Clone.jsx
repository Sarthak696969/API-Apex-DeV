import React from "react";

const Clone = () => {
  return (
    <div>
      <div className="w-full relative bg-white h-[1074px] overflow-hidden text-left text-[17px] text-blue font-inter">
        <img
          className="absolute top-[1px] left-[-4px] w-[1444px] h-[620px] object-cover"
          alt=""
          src="https://cdn.discordapp.com/attachments/1096324843877703713/1213503509341671517/image.png?ex=65f5b636&is=65e34136&hm=ddd11c79e19906466704aa1388d4184f2bd9f11967aa231977372ba52bacc6a7&"
        />
        <img
          className="absolute top-[620px] left-[0px] w-[full] h-[454px] object-cover"
          alt=""
          src="https://cdn.discordapp.com/attachments/1096324843877703713/1213503619559591946/image.png?ex=65f5b650&is=65e34150&hm=1329eff301cf2c0c5b3151d2beb695420dba92b1686644a63f3406d52cbaa89a&"
        />
        <i className="absolute top-[374px] left-[332px] inline-block w-[498px] h-[17px] text-[#000AFF]">
          This Property is available to buy through Destate using crypto
        </i>
      </div>
    </div>
  );
};

export default Clone;
