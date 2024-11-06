import { useState } from "react";
import { VaultArrayType } from "./ContractResponseTypes.ts";
import factoryabi from "./abi/factoryabi.json";
import { useReadContract } from "wagmi";
//import abi from "./abi/abi.json";
import { arbitrumSepolia } from "viem/chains";
const Home = () => {
  const [start] = useState(1);
  const [end] = useState(1);
  // const {
  //   data: vaults,
  //   isLoading,
  //   isError,
  //   error,
  // } = useReadContract<VaultArrayType>({
  //   address: "0x8b48094F9D18557a57986A41124F673673909773",
  //   abi: factoryabi,
  //   functionName: "getVaults",
  //   args: [start, end],
  //   watch: true, // Automatically re-fetch when contract state changes
  // });

  // if (isLoading) return <p>Loading...</p>;
  // if (isError) return <p>Error: {error.message}</p>;

  const result = useReadContract({
    abi: factoryabi,
    address: "0x3d927Cf8E568856e379FDAaaa131d16aCa652e6d",
    functionName: "getVaults",
    args: [start, end],
    chainId: arbitrumSepolia.id,
  });
  const vaults = result?.data as VaultArrayType;
  // if (result.isError) {
  //   return <div>error occured</div>;
  // }
  //console.log(vaults[0].deadline);
  return (
    <div id="projects" className="px-4 xl:px-28 lg:px-20 sm:px-8">
      <h1 className="text-3xl pt-16 font-bold text-white">
        All Funding Vaults
      </h1>
      <p className="text-slate-200 pt-3 pb-8">
        Each Funding Vault represents a funding project.
      </p>

      <div className=" md:grid grid-cols-3 gap-6">
        {result.isLoading &&
          Array.from({ length: 3 }, (_, index) => (
            <div key={index}>
              <div className="px-7 py-7 bg-slate-950 rounded-lg shadow-md text-white animate-pulse">
                <div className="h-6 bg-slate-800 rounded"></div>
                <div className="h-2 mt-8 bg-slate-800 rounded"></div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="h-2 bg-slate-800 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-800 rounded col-span-1"></div>
                </div>
                <div className="h-2 mt-4 bg-slate-800 rounded"></div>
                <div className="flex flex-row bg-slate-800 justify-between h-2 mt-10 my-4">
                  <h1 className="text-base"></h1>
                </div>
                <button className="min-w-full py-2 h-11 bg-slate-800 rounded-md"></button>
              </div>
            </div>
          ))}

        {vaults?.map((vault) => (
          <div key={vault.vaultAddress}>
            <div className="px-7 py-7 bg-slate-950 rounded-lg shadow-md text-white">
              <h1 className="text-2xl  font-bold ">{vault.title}</h1>
              <p className="text-sm py-4 ">{vault.description}</p>
              <div className="flex flex-row justify-between py-4">
                {/* <h1 className="text-base  text-white">Minimum limit: 56 ETH</h1> */}
                <h1 className="text-base  ">
                  Created:{" "}
                  {new Date(Number(vault.deadline) * 1000).toLocaleString()}
                </h1>
              </div>
              <button className="min-w-full py-2  bg-slate-100 text-black hover:bg-slate-300  rounded-md">
                View Details
              </button>
            </div>
          </div>
        ))}
        {/* <div className="px-7 py-7 bg-slate-950 rounded-lg shadow-md ">
          <h1 className="text-2xl  font-bold text-white">Project Name 👀</h1>
          <p className="text-sm py-4 text-white">
            Project description will be writtten here. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Dolore quae, nostrum deserunt
          </p>
          <div className="flex flex-row justify-between py-4">
            <h1 className="text-base  text-white">Minimum limit: 56 ETH</h1>
            <h1 className="text-base  text-white">Created: 8/5/2024</h1>
          </div>
          <button className="min-w-full py-2  bg-slate-100 text-black hover:bg-slate-300  rounded-md">
            View Details
          </button>
        </div>
        <div className="px-7 py-7  bg-slate-950 rounded-lg shadow-md ">
          <h1 className="text-2xl  font-bold text-white">Project Name 👀</h1>
          <p className="text-sm py-4 text-white">
            Project description will be writtten here. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Dolore quae, nostrum deserunt
          </p>
          <div className="flex flex-row justify-between py-4">
            <h1 className="text-base  text-white">Minimum limit: 56 ETH</h1>
            <h1 className="text-base  text-white">Created: 8/5/2024</h1>
          </div>
          <button className="min-w-full py-2  bg-slate-100 text-black hover:bg-slate-300  rounded-md">
            View Details
          </button>
        </div>
        <div className="px-7 py-7  bg-slate-950 rounded-lg shadow-md ">
          <h1 className="text-2xl  font-bold text-white">Project Name 👀</h1>
          <p className="text-sm py-4 text-white">
            Project description will be writtten here. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Dolore quae, nostrum deserunt
          </p>
          <div className="flex flex-row justify-between py-4">
            <h1 className="text-base  text-white">Minimum limit: 56 ETH</h1>
            <h1 className="text-base  text-white">Created: 8/5/2024</h1>
          </div>
          <button className="min-w-full py-2  bg-slate-100 text-black hover:bg-slate-300  rounded-md">
            View Details
          </button>
        </div>
        <div className="px-7 py-7  bg-slate-950 rounded-lg shadow-md ">
          <h1 className="text-2xl  font-bold text-white">Project Name 👀</h1>
          <p className="text-sm py-4 text-white">
            Project description will be writtten here. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Dolore quae, nostrum deserunt
          </p>
          <div className="flex flex-row justify-between py-4">
            <h1 className="text-base  text-white">Minimum limit: 56 ETH</h1>
            <h1 className="text-base  text-white">Created: 8/5/2024</h1>
          </div>
          <button className="min-w-full py-2  bg-slate-100 text-black hover:bg-slate-300  rounded-md">
            View Details
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
