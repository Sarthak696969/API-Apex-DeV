import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";
// import {
//   useWeb3ModalProvider,
//   useWeb3ModalAccount,
// } from "@web3modal/ethers5/react";

export const ChatContext = React.createContext();

const { ethereum } = window;
const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const socoinContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  console.log("ethereum", ethereum);
  console.log(contractABI, contractAddress);
  console.log("signer", signer);
  console.log("provider", provider);
  console.log("Contract", socoinContract);
  return socoinContract;
};
export const ChatProvider = ({ children }) => {
  // const { address, chainId, isConnected } = useWeb3ModalAccount();
  // const { walletProvider } = useWeb3ModalProvider();
  
  // const getEthereumContract = async () => {
  //   console.log(contractABI, contractAddress);
  //   // const { ethereum } = window;

  //   // if (!ethereum || !ethereum.isConnected()) {
  //   //   console.error("Metamask not connected or not available.");
  //   //   return null;
  //   // }

  //   // console.log("ethereum", ethereum);
  //   // if (!isConnected) throw Error("User disconnected");
  //   const ethersProvider = new ethers.providers.Web3Provider(ethereum);
  //   // const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
  //   const signer =  ethersProvider.getSigner();

  //   console.log("provider", ethersProvider);
  //   console.log("signer", signer);

  //   try {
  //     const USDTContract = new ethers.Contract(contractAddress, contractABI, signer);

  //     console.log("Contract", USDTContract);
  //     return USDTContract;
  //   } catch (error) {
  //     console.error("Error creating contract instance:", error);
  //     return null;
  //   }
  // };

  const [currentAccount, setCurrentAccount] = useState("");
  const [messages, setMessages] = useState("0");
  const [isLoggedIn, setIsLoggedIn] = useState("0");
  const [userDetail, setUserDetail] = useState("");
  const [allProp, setAllProp] = useState({});
  const [arr, setArr] = React.useState([
    {
      owner: "0x2d0ccca38fd0ffc505014798b5c8a47a7a2152f4",
      cost: "690000",
      area: "123",
      image:
        "https://bafybeiakw7fh5jkrwvnnrpcpihhl3n7hnop5qdr33a3epooc6ju5v7wrli.ipfs.nftstorage.link/image (64).png",
      city: "Mumbai",
      bhk: "1",
      desc: "Spacious 1 BHK apartment",
      address: "151/1, new tawre compound, Bhandari, Bhiwandi",
      prop_id: 0,
    },
    {
      owner: "0x2d0ccca38fd0ffc505014798b5c8a47a7a2152f4",
      cost: "490000",
      area: "123",
      image:
        "https://bafybeiagogmmi7ym6hxosrdqcl42bt4ll3sycc2u6c3pqlee4yxz4x34iq.ipfs.nftstorage.link/big-apartment-generative-ai_935506-1.jpg",
      city: "Mumbai",
      bhk: "2",
      desc: "Spacious 2 BHK apartment",
      address: "C-Wing, Near Golden Palace, Kurla",
      prop_id: 1,
    },
    {
      owner: "0x2d0ccca38fd0ffc505014798b5c8a47a7a2152f4",
      cost: "445000",
      area: "123",
      image:
        "https://bafybeiamu5tues7mu2352rfmdg3rscwmamun6nerr444fv3hm3zhlfrbdq.ipfs.nftstorage.link/modern-scandianvian-living-room-interior-with-design-sofa-elegant-blanket-coffee-table-bookstand-plants-brown-wooden-parquet_431307-242.jpg",
      city: "Mumbai",
      bhk: "2",
      desc: "Spacious 2 BHK apartment",
      address: "C-Wing, Near Golden Palace, Kurla",
      prop_id: 2,
    },
    {
      owner: "0x2d0ccca38fd0ffc505014798b5c8a47a7a2152f4",
      cost: "545000",
      area: "123",
      image:
        "https://bafybeicygfpb26bzfam7yayumewrx4g3k2cpvavafdjcnpgnjkww5rlep4.ipfs.nftstorage.link/stylish-scandinavian-living-room-with-design-furniture-plants-bamboo-bookstand-wooden-desk-art-paintings-brown-parquet-modern-home-decor_431307-241.jpg",
      city: "Mumbai",
      bhk: "2",
      desc: "Spacious 2 BHK apartment",
      address: "Gaimukh , Ghodbunder",
      prop_id: 3,
    },
    {
      
      owner: "0x2d0ccca38fd0ffc505014798b5c8a47a7a2152f4",
      cost: "345000",
      area: "123",
      image:
        "https://bafybeiekbvpywatixgdugatcodxd535sprls2vhmajbjxzhyg2gdg2bw7u.ipfs.nftstorage.link/stock-photo-stylish-apartment-interior-with-modern-kitchen-idea-for-home-design-1177030975.jpg",
      city: "Mumbai",
      bhk: "1",
      desc: "Spacious 1 BHK apartment",
      address: "Imperial , Ghodbunder",
      prop_id: 4,
    },
  ]);
  // const { ethereum } = window;
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        setCurrentAccount("");
        console.log("No account found");
      }
      console.log("Connected account: ", currentAccount);
    } catch (error) {
      console.log(error);
    }
  };

  const ConnectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0])
      

      // const contracts = getEthereumContract();
      // console.log("Current account under connect wallet",currentAccount);
      // const userData = await contracts.user_data(currentAccount);
      // console.log("userData",userData);
    } catch (error) {
      console.log(error);
    }
  };

  const BuyProperty = async (id, _newDoc, _time, _date) => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const contracts = await getEthereumContract();

      // const costInWei = ethers.utils.toWei(_newDoc.cost, "ether");
      console.log("inside store,", contracts);
      const tx = await contracts.buyProperty(1, '_newDoc', '_time', '_date', {
        value: 1000000,
      });
      await tx.wait();

      console.log("tx", tx);
    } catch (error) {
      console.log(error);
    }
  };

  const GetPropertyById = async (id) => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const contracts = await getEthereumContract();

      console.log("inside store,", contracts);
      const tx = await contracts.getPropertyById(id);

      console.log("tx", tx[0]);
      return tx;
    } catch (error) {
      console.log(error);
    }
  };

  const CreateUser = async (_name, _phoneNo, _email) => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const contracts = await getEthereumContract();
      console.log("inside store,", contracts);
      const tx = await contracts.createUser(_name, _phoneNo, _email);
      await tx.wait();

      console.log("tx", tx);
    } catch (error) {
      console.log(error);
    }
  };

  const GetAllTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const contracts =  getEthereumContract();
      console.log("inside store,", contracts);
      
      const tx =  contracts.getAllProperties();
      console.log("tx", tx);
      setAllProp(tx);
      return tx;
    } catch (error) {
      console.log(error);
    }
  };

  const GetUser = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const contracts =  getEthereumContract();
      // console.log("inside getuser,", contracts);
      const tx = await contracts.getUser(currentAccount);

      console.log("tx user detail", tx);
      // setAllProp(tx);
      setUserDetail(tx)
      return tx;
    } catch (error) {
      console.log(error);
    }
  };

  const CreateProperty = async (
    _heading,
    _address,
    _cost,
    _area,
    _images,
    _city,
    _document,
    _bhk,
    _desc
  ) => {
    try {
      const contracts =  getEthereumContract();
      console.log("_heading:", _heading);
        console.log("_address:", _address);
        console.log("_cost:", _cost);
        console.log("_area:", _area);
        console.log("_images:", _images);
        console.log("_city:", _city);
        console.log("_document:", _document);
        console.log("_bhk:", _bhk);
        console.log("_desc:", _desc);
      // console.log("inside store,", contracts, ethers.BigNumber.from(_images).toString());
      // let temp =  ethers.BigNumber.from(_images).toString()
      const tx = await contracts.createProperty(
        _heading,
        _address,
        _cost,
        _area,
        'temp',
        _city,
        _document,
        _bhk,
        _desc
      );
      await tx.wait();
      console.log("tx", tx);
      return tx;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        // if (!isConnected) throw Error("User disconnected");

        // Call your function to fetch property data using the address

        // Update the propertyData state with the fetched data
      await GetAllTransaction()
      await GetUser()
      console.log('allprope',allProp)
      } catch (error) {
        console.log(error);
      }
    };

    // Call the fetchPropertyData function when the address changes
    if (currentAccount) {
      fetchPropertyData();
    }
  }, []);

  return (
    <ChatContext.Provider
      value={{
        GetPropertyById,
        currentAccount,
        CreateUser,
        CreateProperty,
        GetAllTransaction,
        allProp,
        GetUser,
        checkIfWalletIsConnected,
        ConnectWallet,
        userDetail,
        arr,
        setArr,
        BuyProperty
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
