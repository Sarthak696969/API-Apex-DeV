import RepeatCompo1 from "./RepeatCompo1";
import axios from "axios";
import React, { PureComponent } from "react";
import { useParams } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadialBarChart, RadialBar, 
} from "recharts";
import RepeatCompo2 from "./RepeatCompo2";

const Profile = () => {

  const { walletAddress } = useParams();
  console.log('walletaddress',walletAddress)
  const [cex, setCex] = React.useState([]);
  const [dex, setDex] = React.useState([])
  const [plotData, setPlotData] = React.useState([]);
  const [plotData1, setPlotData1] = React.useState([]);
  const [linearP1,setLinearP1] = React.useState({})
  const [linearP2,setLinearP2] = React.useState({})

 
  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  React.useEffect(() => {
    // JSON data string
    // const jsonData = `[{"formatted_timestamp":"2023-08-19 19:25:59","value_usd":0.0000031335},{"formatted_timestamp":"2023-08-22 15:38:35","value_usd":0.0000031335},{"formatted_timestamp":"2023-08-22 15:38:35","value_usd":387147777796.7378540039}]`;

    // // Parse JSON data into a JavaScript array
    // const data = JSON.parse(jsonData);

    // Initialize an array to hold data points for plotting
    const newData = cex.map((item) => {
      const { formatted_timestamp, value_usd } = item;

      // Format timestamp to a human-readable format (if needed)
      // For example, you can use a library like moment.js for this purpose

      // Create a data point object with formatted timestamp and value in USD
      return {
        name: formatted_timestamp, // You can format this as needed
        uv: value_usd,
      };
    });

    setLinearP1(newData);

    const newData2 = dex.map((item) => {
      const { formatted_timestamp, value_usd } = item;

      // Format timestamp to a human-readable format (if needed)
      // For example, you can use a library like moment.js for this purpose

      // Create a data point object with formatted timestamp and value in USD
      return {
        name: formatted_timestamp, // You can format this as needed
        uv: value_usd,
      };
    });
    setLinearP2(newData2)

    // Set the data points to state
    setPlotData(newData);
  }, [cex,dex]);
  console.log(plotData);

  React.useEffect(() => {
    const handleSendAudio = () => {
      const formData = new FormData();
      // formData.append("dex", "0x3a3771147e1728f27399aDB09F179bfe0F18458d");
      formData.append("dex", walletAddress);

      axios
        .post("http://127.0.0.1:5000/", formData, {
          // .post("http://127.0.0.1:5000/companyid", jsonData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          const temp = response.data
          setCex(JSON.parse(temp.cex))
          console.log(response.data);
          setDex(JSON.parse(temp.dex))
          console.log(cex,dex)
          axios
        .post("http://127.0.0.1:5000/make", {'formData':1}, {
          // .post("http://127.0.0.1:5000/companyid", jsonData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {console.log(response)})
        .catch((error)=>{console.log(error)})
        })
        .catch((error) => {
          console.error("Error uploading or receiving audio:", error);
        });
    };

    handleSendAudio();
  }, []);

  return (
    <div className="w-full relative  bg-[#0A0D16] text-left text-[20px] p-5 text-white font-ibm-plex-mono">
      <div className=" font-semibold">{`COINTRACE `}</div>
      <div className=" ml-[1095px] box-border w-[175px] h-[37px] overflow-hidden text-center text-[16px] text-[springgreen] border-[1px] border-solid border-[springgreen]">
        <div className="relative">Link Wallet</div>
      </div>
      {/* top content */}
      <div className="flex px-[93px]">
        <div className="w-full relative h-[123px] text-left text-sm text-white font-ibm-plex-mono">
          <div className="absolute top-[16px] left-[121px] text-[16px] font-semibold">
            0x1111111254EEB25477B68fb85Ed929f73A960582
          </div>
          <div className="absolute top-[43px] left-[121px] font-medium text-[royalblue]">
            3 DEXs wallets
          </div>
          <div className="absolute top-[65px] left-[121px] font-medium text-[lime]">
            3 CEXs wallets
          </div>
          <img
            className="absolute top-[0px] left-[0px] rounded-[101px] w-[103px] h-[103px] object-cover"
            alt=""
            src="https://cdn.discordapp.com/attachments/1198196635780522055/1211174053499510844/image.png?ex=65ed3cbc&is=65dac7bc&hm=8d8c436bc1c723767ee79e89ee93fe2f707b7244d89b88331a5450d504c6c543&"
          />
        </div>
      </div>

      {/* mid content */}
      <div className="flex px-[93px] mt-[42px] gap-[23px]">
        {/* first card */}
        <div className="relative rounded-lg bg-[#141720] box-border w-[401px] h-[199px] overflow-hidden text-left text-xs text-[white] font-ibm-plex-mono border-t-[1px] border-solid border-[#393939]">
          <div className="absolute top-[12px] left-[17px] text-[14px] font-semibold">
            PORTFOLIO HOLDINGS
          </div>
          <div className="absolute top-[50px] left-[24px] text-[darkgray]">
            SHIBU INU BALANCE
          </div>
          <div className="absolute top-[50px] left-[262px] text-[darkgray]">
            VALUE IN USD($)
          </div>
          <div className="absolute top-[73px] left-[52px]">
            0.322238524104718203
          </div>
          <div className="absolute top-[73px] left-[298px]">$78.07</div>
          <div className="absolute top-[134px] left-[298px]">$78.07</div>
          <div className="absolute top-[134px] left-[52px]">
            0.322238524104718203
          </div>
          <div className="absolute top-[111px] left-[24px] text-[darkgray]">
            BINANCE BALANCE
          </div>
          <img
            className="absolute top-[70px] left-[24px] w-[21px] h-[21px] object-cover"
            alt=""
            src="https://cdn.discordapp.com/attachments/1198196635780522055/1211172056360550500/image.png?ex=65ed3ae0&is=65dac5e0&hm=63457555786943a8b629416755b699b9cac6d6dd3fc044b5c25ce45204b2ea41&"
          />
          <img
            className="absolute top-[130px] left-[24px] rounded-[32px] w-[23px] h-[23px] object-cover"
            alt=""
            src="https://cdn.discordapp.com/attachments/1198196635780522055/1210991538994151434/image.png?ex=65ec92c2&is=65da1dc2&hm=69ad9b53477014b9c5dc6d44857cb00630669365009dcd6b169e2f187851733e&"
          />
        </div>

        {/* 2nd card */}
        <div className="w-[401px] relative  rounded-lg bg-[#141720] box-border h-[199px] overflow-hidden text-left text-5xs text-[white] font-ibm-plex-mono border-t-[1px] border-solid border-[#393939]">
          <div className="absolute top-[12px] left-[17px] w-[251px] h-[8 text-[14px]">
            <div className="absolute top-[0px] left-[0px] font-semibold">
              PORTFOLIO ANALYSIS
            </div>
            <img className="w-[118px] h-[118px] relative top-10 left-8" src="https://cdn.discordapp.com/attachments/1198196635780522055/1211176590420082698/image.png?ex=65ed3f19&is=65daca19&hm=ad160333bfa035fe3c7ac7e859eae9f73f4a961887bbde955f0b6cda506b60d0&" alt="" />
            <div className="absolute top-[18px] left-[0px] text-[2xs] text-[11px] text-[fuchsia]">
              TOTAL INVESTED AMOUNT IN CEXs AND DEXs
            </div>
          </div>
          <img
            className="absolute top-[12px] left-[360px] rounded-[59px] w-[27px] h-[27px] overflow-hidden"
            alt=""
            src="https://cdn.discordapp.com/attachments/1198196635780522055/1211174407389712414/image.png?ex=65ed3d11&is=65dac811&hm=3abdd764b79eecf10943e0301f759e0e20f4968830d2f90db393038bed26508e&"
          />
          <div className="absolute top-[50px] left-[294px] text-[19px] text-lime-[100]">
            $778.07
          </div>
          <div className="absolute top-[88px] left-[232px] w-[158px] h-[19px]">
            <div className="absolute top-[5px] text-[8px] left-[47px]">{`INVESTED AMOUNT IN CEXs `}</div>
            <div className="absolute top-[0px] left-[24px] bg-[royalblue] w-[19px] h-[19px]" />
            <div className="absolute top-[2px] text-[11px] left-[0px] text-[2xs]">
              85%
            </div>
          </div>
          <div className="absolute top-[120px] text-[8px]  left-[232px] w-[158px] h-[19px]">
            <div className="absolute top-[4px] text-[8px] left-[47px]">{`INVESTED AMOUNT IN DEXs `}</div>
            <div className="absolute top-[0px] text-[8px] left-[24px] bg-lime-200 w-[19px] h-[19px]" />
            <div className="absolute top-[2px] text-[11px] left-[0px] text-[2xs]">
              15%
            </div>
          </div>
        </div>

        {/* 3rd card */}

        <div className="relative  rounded-lg bg-[#141720]  box-border w-[401px] h-[199px] overflow-hidden border-t-[1px] border-solid border-[#393939]">
          <div className="absolute top-[12px] left-[17px] text-[14px] font-semibold">
            PORTFOLIO INSIGHTS
          </div>
          <div className="absolute top-[30px] left-[17px] text-[11px] text-[#FF00F5] text-fuchsia">
            INFORMATION RELATED TO TRANSACTIONS
          </div>
          <div className="absolute top-[64px] left-[17px] text-[15px] font-medium">
            Number of times anomaly detected
          </div>
          <div className="absolute top-[94px] left-[17px] text-[15px] font-medium">
            Risk Analyzing
          </div>
          <div className="absolute top-[124px] left-[17px]  text-[15px] font-medium">
            <span>Its a </span>
            <span className="text-red-600 text-[15px]">RED FLAG</span>
            <span>, account is on high risk </span>
          </div>
          <div className="absolute top-[64px] left-[314px] text-[15px] font-medium text-red-600">
            3
          </div>
          <div className="absolute top-[7px] left-[272px] rounded-full bg-[#282A33] box-border w-[119px] h-[27px] overflow-hidden text-[11px] border-t-[1px] border-solid border-[#454545] absolute top-[157px] left-[256px] rounded-full bg-gray-[100] box-border w-[135px] h-[27px] overflow-hidden text-[10px] border-t-[1px] border-solid border-[darkslategray]-100 flex items-center flex items-center justify-center">
            <div>Analyze Data</div>
          </div>
         <a href="https://cdn.discordapp.com/attachments/1191313403768229928/1211170717543174175/wallet_report.docx?ex=65ed39a1&is=65dac4a1&hm=6936bbdf3e346c4ba89f78a1c8903cda323ef91659c16cf0d8ca37027df5e04d&"><div  className="absolute top-[157px] left-[256px] rounded-full bg-[#282A33] box-border w-[135px] h-[27px] overflow-hidden text-[10px] border-t-[1px] border-solid border-[#454545] flex items-center">
            <div className="pl-[2] text-[11px] right-[2px] font-medium">
              DOWNLOAD REPORT
            </div>
            <img
              className="ml-1 max-h-[6] object-contain"
              alt=""
              src="/arrow-2.svg"
            />
          </div></a> 
        </div>
      </div>

      {/* main content
       */}
      <div className=" flex justify-center items-center my-[4rem] relative right-[0rem] gap-[51px]">
        {/* left part */}
        <div className="w-[540px] h-[600px] flex flex-col gap-[15px]">
          <div className="flex justify-center w-full items-center gap-10">
            <div className="w-[15.25rem] relative  text-[0.875rem] border-b-2 border-[#0057FF] font-ibm-plex-mono text-[#d2d2d2] text-left inline-block">{`All TRANSACTIONS THROUGH CEXs `}</div>

            <div className="w-[75px] ml-10 flex justify-center items-center relative rounded-[49px] bg-[#ffbefc] box-border h-[1.438rem] overflow-hidden text-left text-[0.625rem] text-[#90008a] font-ibm-plex-mono border-[1px] border-solid border-[#ff00f5]">
              <div className="w-fit text-[#90008a]  font-medium">All</div>
            </div>

            <div className="w-[97px] flex justify-center items-center relative rounded-[49px] bg-[#a1e9ff] box-border h-[1.438rem] overflow-hidden text-left text-[0.625rem] text-[#007194] font-ibm-plex-mono border-[1px] border-solid border-[#00c2ff]">
              <div className="text-[#007194] font-medium">Sort by time</div>
            </div>
          </div>
          {/* table */}
          <div className="w-full flex flex-col justify-start items-center p-5 relative rounded-lg bg-[#141720] box-border min-h-[14.188rem] overflow-hidden text-left text-[0.75rem] text-white font-ibm-plex-mono border-t-[1px] border-solid border-[#393939]">
            <div className="w-[6.313rem] relative text-[0.875rem] font-ibm-plex-mono text-white text-left inline-block">
              TRANSACTIONS
            </div>

            <div className="flex justify-between  ">
              <div className="w-[1.5rem] right-9 pl-[29px] relative text-[0.625rem] font-ibm-plex-mono text-white text-left inline-block">
                TIME
              </div>
              <div className="w-[1.5rem] left-9  pl-[31px] relative text-[0.625rem] font-ibm-plex-mono text-white text-left inline-block">
                FROM
              </div>
              <div className="w-[0.75rem] left-10 pl-[132px] relative text-[0.625rem] font-ibm-plex-mono text-white text-left inline-block">
                TO
              </div>
              <div className="w-[1.875rem] left-4 pl-[118px] relative text-[0.625rem] font-ibm-plex-mono text-white text-left inline-block">
                VALUE
              </div>
              <div className="w-[1.875rem] left-8 pl-[18px] relative ml-3 text-[0.625rem] font-ibm-plex-mono text-white text-left inline-block">
                TOKEN
              </div>
              <div className="w-[1.125rem] left-10  pl-[27px] relative text-[0.625rem] font-ibm-plex-mono text-white text-left inline-block">
                USD
              </div>
            </div>
            <div className="w-full mt-9 ">

            {Object.values(dex).map((transaction, index) => (
                <RepeatCompo1
                  key={index}
                  timestamp={transaction.date}
                  from = {transaction.from}
                  to={transaction.to}
                  hash= {transaction.hash}
                  value={transaction.value_usd}
                  transactions= {transaction}
                />
              ))}
            </div>
          </div>
        </div>

        {/* new right part */}
        <div className="w-[689px] relative bottom-[3rem] h-[435px] bg-[#141720]">
          <ResponsiveContainer className="text-[0.9rem]"  width="100%" height={400}>
            <LineChart
              width={500}
              height={200}
              data={linearP1}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                connectNulls
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* new horizontal line */}
      <div className="flex justify-content  item-center gap-9">
        {/* right part */}

        <div className="w-[540px] ml-[3.4rem]  h-[600px] flex flex-col gap-[15px]">
          <div className="flex justify- w-full items-center gap-10">
            <div className="w-[15.25rem] relative  text-[0.875rem] border-b-2 border-[#6FFF7E] font-ibm-plex-mono text-[#d2d2d2] text-left inline-block">{`All TRANSACTIONS THROUGH CEXs `}</div>

            <div className="w-[75px] ml-10 flex justify-center items-center relative rounded-[49px] bg-[#ffbefc] box-border h-[1.438rem] overflow-hidden text-left text-[0.625rem] text-[#90008a] font-ibm-plex-mono border-[1px] border-solid border-[#ff00f5]">
              <div className="w-fit text-[#90008a]  font-medium">All</div>
            </div>

            <div className="w-[97px] flex justify-center items-center relative rounded-[49px] bg-[#a1e9ff] box-border h-[1.438rem] overflow-hidden text-left text-[0.625rem] text-[#007194] font-ibm-plex-mono border-[1px] border-solid border-[#00c2ff]">
              <div className="text-[#007194] font-medium">Sort by time</div>
            </div>
          </div>
          {/* table */}
          <div className="w-full flex flex-col justify-start items-center p-5 relative rounded-lg bg-[#141720] box-border min-h-[14.188rem] overflow-hidden text-left text-[0.75rem] text-white font-ibm-plex-mono border-t-[1px] border-solid border-[#393939]">
            <div className="w-[6.313rem] relative text-[0.875rem] font-ibm-plex-mono text-white text-left inline-block">
              TRANSACTIONS
            </div>

            <div className="flex justify-between  ">
              <div className="w-[1.5rem] right-9 pl-[29px] relative text-[0.625rem] font-ibm-plex-mono text-white text-left inline-block">
                TIME
              </div>
              <div className="w-[1.5rem] left-9  pl-[31px] relative text-[0.625rem] font-ibm-plex-mono text-white text-left inline-block">
                FROM
              </div>
              <div className="w-[0.75rem] left-10 pl-[132px] relative text-[0.625rem] font-ibm-plex-mono text-white text-left inline-block">
                TO
              </div>
              <div className="w-[1.875rem] left-4 pl-[118px] relative text-[0.625rem] font-ibm-plex-mono text-white text-left inline-block">
                VALUE
              </div>
              <div className="w-[1.875rem] left-8 pl-[18px] relative ml-3 text-[0.625rem] font-ibm-plex-mono text-white text-left inline-block">
                TOKEN
              </div>
              <div className="w-[1.125rem] left-10  pl-[27px] relative text-[0.625rem] font-ibm-plex-mono text-white text-left inline-block">
                USD
              </div>
            </div>
            <div className="w-full">
            {Object.values(cex).map((transaction, index) => (
                <RepeatCompo2
                  key={index}
                  timestamp={transaction.date}
                  from = {transaction.from}
                  to={transaction.to}
                  hash= {transaction.hash}
                  value={transaction.value_usd}
                  transactions= {transaction}
                />
              ))}
            </div>
          </div>
        </div>
        {/* new right part */}
        <div className="w-[689px] mt-[2.3rem] ml-[1rem] h-[435px] bg-[#141720]">
        <ResponsiveContainer className="text-[0.9rem]" width="100%" height={400}>
            <LineChart
              width={500}
              height={200}
              data={linearP1}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                connectNulls
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="w-400px"></div>
        <div className="w-400px"></div>
      </div>
    </div>
  );
};

export default Profile;