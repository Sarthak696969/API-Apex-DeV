import React, { useState, useContext } from "react";
import axios from "axios";
import { ChatContext } from "../context/ChatContext";
import WalletButton from "./WalletButton";


const ListProperty = () => {
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [description, setDescription] = useState("");
  const [locality, setLocality] = useState("");
  const [expectedAmount, setExpectedAmount] = useState("");
  const [bhk, setBHK] = useState("");
  const [propertyImages, setPropertyImages] = useState([]);
  const [propertyDocs, setPropertyDocs] = useState([]);
  const [cids, setCids] = useState("");
  const [spin, setSpin] = useState(false);
  const [links, setLinks] = useState();
  const {  CreateProperty, currentAccount,setArr } = useContext(ChatContext);

  // Function to handle file input change for property images
  const handlePropertyImagesChange = (event) => {
    const files = event.target.files;
    setPropertyImages(files);
  };

  // Function to handle file input change for property documents
  const handlePropertyDocsChange = (event) => {
    const files = event.target.files;
    setPropertyDocs(files);
  };

  const listProps = async (a) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/putdata', {
       'owner' : currentAccount,
      'cost': expectedAmount,
    'area': area,
    'image':a,
    'city':city,
    'bhk':bhk,
    'desc':description,
    'address':propertyAddress
      });
  
      console.log('Response from server:', response.data);
      
     
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const handleCreateProperties = async()=>{
    
    console.log("calling", cids, propertyAddress,
    expectedAmount,
    area,
    cids,
    city,
    propertyDocs,
    bhk,
    description);
    const a=await handleUpload()
    listProps(a);

    const newObj = {
      owner: currentAccount,
      cost: expectedAmount,
      area: area,
      image: a,
      city: city,
      bhk: bhk,
      desc: description,
      address: propertyAddress,
      prop_id: 5,
    };

    setArr(prevArr => [...prevArr, newObj]);
    
    await CreateProperty(
      propertyName,
      propertyAddress,
      expectedAmount,
      area,
      a,
      city,
      'none',
      bhk,
      description
    );
    return true;
  }

  const handleUpload = async () => {
    if (!propertyImages) {
      console.error("No file selected.");
      return;
    }
    console.log("spin activated");

    const formData = new FormData();
    formData.append("file", propertyImages[0]);
    console.log("file", formData);

    try {
      const response = await axios.post(
        "https://api.nft.storage/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDRCOWM5Q0UwQmE3NENiRjA4QkJlZjIwNDMzZEUwYjczNzUxNjI4RTgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY5ODUwNDQ1NzM3MywibmFtZSI6IkZ1bmRFVEgifQ.JxTH4iRtScscfmb9mvZqhSqF9MKs2b0JJS2yof7hzF4`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setCids( 
          // response.data.value.cid
        `https://${response.data.value.cid}.ipfs.nftstorage.link/${propertyImages[0].name}`
      );
      
      console.log("NFT Storage response:",response);
      return `https://${response.data.value.cid}.ipfs.nftstorage.link/${propertyImages[0].name}`;
    } catch (error) {
      console.error("Error uploading to NFT Storage:", error);
    }
  };
  // React.useEffect(() => {
  //   if (cids && cids.length > 0) {
  //     const linksArray = cids.map((cid,key) => setLinks(`https://${cid}.ipfs.nftstorage.link/${propertyImages[key].name}`));
  //     console.log(links);
  //   //   setLinks(linksArray);
  //   }
  // }, [cids]);

  // React.useEffect(() => {
  //   handleUpload();
  // }, [propertyImages]);
  return (
    <div>

      <WalletButton/>
    <div className="flex flex-col p-5 gap-4">
      <div className="w-[10.438rem] relative text-[1rem] font-medium font-inter text-black text-left inline-block">
        Enter Property details
      </div>
      <div className="relative flex items-center flex-col bg-[#f1f1f1] p-[70px] gap-5 box-border  overflow-hidden text-left text-[0.875rem] text-black font-inter border-[1px] border-solid border-[#c8c8c8]">
        <div className="flex gap-7">
          <div className="flex flex-col w-[360px] gap-2">
            <div
             
              className="w-[5.25rem] relative text-[1rem] font-medium font-inter text-black text-left inline-block"
            >
              Select City
            </div>
            <input
             value={city}
             onChange={(e) => setCity(e.target.value)}
              type="text"
              className="bg-white h-[2.938rem] overflow-hidden font-medium text-left text-[0.875rem] text-silver font-inter"
            />
          </div>
          <div className="flex flex-col w-[360px] gap-2">
            <div className="w-[5.25rem] relative text-[1rem] font-medium font-inter text-black text-left inline-block">
              Area
            </div>
            <input
              type="text"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="sqft"
              className="bg-white p-3 h-[2.938rem] overflow-hidden font-medium text-left text-[0.875rem] text-silver font-inter"
            />
          </div>
        </div>

        <div className="flex gap-7">
          <div className="flex flex-col w-[360px] gap-2">
            <div className="w-[5.25rem] relative text-[1rem] font-medium font-inter text-black text-left inline-block">
              Property Name
            </div>
            <input
              type="text"
              value={propertyName}
              onChange={(e) => setPropertyName(e.target.value)}
              className="bg-white h-[2.938rem] overflow-hidden font-medium text-left text-[0.875rem] text-silver font-inter"
            />
          </div>
          <div className="flex flex-col w-[360px] gap-2">
            <div className="w-[5.25rem] relative text-[1rem] font-medium font-inter text-black text-left inline-block">
              Property Address
            </div>
            <input
              type="text"
              value={propertyAddress}
              onChange={(e) => setPropertyAddress(e.target.value)}
              className="bg-white h-[2.938rem] overflow-hidden font-medium text-left text-[0.875rem] text-silver font-inter"
            />
          </div>
        </div>

        <div className="flex gap-7">
          <div className="flex flex-col w-[360px] gap-2">
            <div className="w-[5.25rem] relative text-[1rem] font-medium font-inter text-black text-left inline-block">
              Description / About
            </div>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Property Name"
              className="bg-white h-[2.938rem] overflow-hidden font-medium text-left text-[0.875rem] text-silver font-inter"
            />
          </div>
          <div className="flex flex-col w-[360px] gap-2">
            <div className="w-[5.25rem] relative text-[1rem] font-medium font-inter text-black text-left inline-block">
              Loacality
            </div>
            <input
              type="text"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
              className="bg-white h-[2.938rem] overflow-hidden font-medium text-left text-[0.875rem] text-silver font-inter"
            />
          </div>
        </div>

        <div className="flex gap-7">
          <div className="flex flex-col w-[360px] gap-2">
            <div className="w-[5.25rem] relative text-[1rem] font-medium font-inter text-black text-left inline-block">
              Expected Amount*
            </div>
            <input
              type="text"
              value={expectedAmount}
              onChange={(e) => setExpectedAmount(e.target.value)}
              className="bg-white h-[2.938rem] overflow-hidden font-medium text-left text-[0.875rem] text-silver font-inter"
            />
          </div>
          <div className="flex flex-col w-[360px] gap-2">
            <div className="w-[5.25rem] relative text-[1rem] font-medium font-inter text-black text-left inline-block">
              BHK
            </div>
            <input
              type="text"
              value={bhk}
              onChange={(e) => setBHK(e.target.value)}
              className="bg-white h-[2.938rem] overflow-hidden font-medium text-left text-[0.875rem] text-silver font-inter"
            />
          </div>
        </div>

        <div className="flex gap-7">
          <div className="flex flex-col w-[360px] gap-2">
            <div className="w-max relative text-[1rem] font-medium font-inter text-black text-left inline-block">
              Upload Property Images
            </div>
            {/* Input field for multiple images */}
            <input
              type="file"
              onChange={handlePropertyImagesChange}
              className="bg-white h-[2.938rem] overflow-hidden font-medium text-left text-[0.875rem] text-silver font-inter"
              multiple
              accept="image/*"
            />
            {/* Input field for files */}
            <div className="w-max relative text-[1rem] font-medium font-inter text-black text-left inline-block">
              Upload Property Related Docs/ Agreements
            </div>

            <input
              type="file"
              onChange={handlePropertyDocsChange}
              className="bg-white h-[2.938rem] overflow-hidden font-medium text-left text-[0.875rem] text-silver font-inter"
            />
          </div>
        </div>
        <div
          onClick={ () => {
            handleCreateProperties()
          }}
          className="w-[118px] mx-auto flex items-center justify-center relative rounded bg-[#3763FF] h-[2.25rem] overflow-hidden text-left text-[0.875rem] text-white font-inter"
        >
          <div className=" font-semibold">List Property</div>
        </div>
      </div>
      {/* spinner */}
      <div
        className={` absolute   items-end justify-center h-full w-full  z-50  ${
          spin ? "flex" : "hidden"
        }`}
      >
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* spinner end */}
    </div>
    </div>

  );
};

export default ListProperty;
