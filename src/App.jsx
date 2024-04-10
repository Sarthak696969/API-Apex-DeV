// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";
import Clone from "./pages/Clone";
import Clone1 from "./pages/Clone1";
import { ChatProvider } from "./context/ChatContext";

import Mainpage from "./pages/Mainpage";
import RegisterPopup from "./components/RegisterPopup";
import Dashboard from "./pages/Dashboard";
import PropertyDetail from "./components/PropertyDetail";
import ProfileView from "./pages/ProfileView";
import OwnershipHistory from "./components/OwnershipHistory";
import ListProperty from "./components/ListProperty";
import Ledger from "./components/Ledger";
import AerialView from "./components/Map";

function App() {
  // const projectId = "5e50e8c2bbc4377b7d110c299d64a2d3";
  // const projectId = "5e50e8c2bbc4377b7d110c299d64a2d3";

  // 2. Set chains
  // const mainnet = {
  //   chainId: 80001,
  //   name: "Mumbai",
  //   currency: "MATIC",
  //   explorerUrl: "https://mumbai.polygonscan.com/",
  //   rpcUrl: "https://rpc-mumbai.maticvigil.com/",
  // };

  // const sepolia = {
  //   chainId: 11155111,
  //   name: "Sepolia test network",
  //   currency: "SepoliaETH",
  //   explorerUrl: "https://sepolia.etherscan.io",
  //   rpcUrl: "https://sepolia.infura.io/v3/",
  // };

  // 3. Create modal
  // const metadata = {
  //   name: "My Website",
  //   description: "My Website description",
  //   url: "http://192.168.84.189:5173/", // origin must match your domain & subdomain
  //   icons: ["https://avatars.mywebsite.com/"],
  // };

  // createWeb3Modal({
  //   ethersConfig: defaultConfig({ metadata }),
  //   chains: [mainnet],
  //   projectId,
  //   enableAnalytics: false, // Optional - defaults to your Cloud configuration
  // });

  return (
    <>
      <ChatProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/reg" element={<RegisterPopup />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/clone" element={<Clone />} />
            <Route path="/clone1" element={<Clone1 />} />
            <Route path="/property" element={<PropertyDetail />} />
            <Route path="/profile" element={<ProfileView />} />
            <Route path="/owner" element={<OwnershipHistory />} />
            <Route path="/list" element={<ListProperty />} />
            <Route path="/trans" element={<Ledger />} />
            <Route path="/map" element={<AerialView />} />

            {/* <Route path="/profile/:walletAddress" element={<Profile/>} /> */}
          </Routes>
        </BrowserRouter>
      </ChatProvider>
    </>
  );
}

export default App;
