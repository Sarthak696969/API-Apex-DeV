/* eslint-disable no-unused-vars */
import React from 'react'
// import { useWeb3Modal } from '@web3modal/ethers5/react'
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const WalletButton = () => {
  const {GetPropertyById,currentAccount,GetAllTransaction,allProp,ConnectWallet} = useContext(ChatContext)
  const handleConnectWallet = async () => {
    await ConnectWallet();
  };
  
  const logo = "https://i.imgur.com/YKVYapo.jpeg";

    // const {storeData,readData} = useContext(ChatContext)
    // const { open } = useWeb3Modal()
  return (
    <div className="w-full relative flex justify-end py-1 ">
        <div className="absolute top-2 left-2">
          <img className="w-[114px]" src={logo} alt="" />
        </div>
{/* <w3m-button class=" bg-blue-500 rounded-3xl"  balance='show' size='sm' label='Connect' loadingLabel='Connecting...' /> */}
{currentAccount == '' ? (
              <div
                onClick={handleConnectWallet}
                className="relative rounded-lg hover:bg-violet-400 transition-transform transform hover:scale-75 bg-violet-500 box-border w-[9.875rem] h-[2.56rem] overflow-hidden text-left text-[1rem]  text-white font-inter border-t-[1px] border-solid border-mediumslateblue border-r-[1px] border-l-[1px]"
              >
                <div className="absolute top-[0.69rem] left-[0.69rem] font-medium">
                  Connect to wallet
                </div>
              </div>
            ) : (
              <div
                // onClick={() => {
                //   setIsLogout(1);
                //   window.location.reload();
                // }}
                className="relative rounded-lg hover:bg-violet-400 bg-violet-500 transition-transform transform hover:scale-75 bg-blueviolet box-border w-[9.875rem] h-[2.56rem] overflow-hidden text-left text-[1rem] text-white font-inter border-t-[1px] border-solid border-mediumslateblue border-r-[1px] border-l-[1px]"
              >
                <div className="text-center relative top-2 font-medium">
                  Logout
                </div>
              </div>
            )}
{/* <w3m-connect-button /> */}
{/* <w3m-network-button /> */}
      {/* <button onClick={() => open()}>Open Connect Modal</button>
      <button onClick={() => open({ view: 'Networks' })}>Open Network Modal</button> */}
      
     
    </div>
  )
}

export default WalletButton
