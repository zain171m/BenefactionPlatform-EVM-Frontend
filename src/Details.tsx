import vaultabi from "./abi/vaultabi.json";
import { useReadContract } from "wagmi";
import { arbitrumSepolia } from "viem/chains";
import { useParams } from "react-router-dom";
import { VaultDetailsType } from "./ContractResponseTypes.ts";
import { formatEther } from "viem";
const Details = () => {
  // Placeholder example values for the funding vault
  const { address } = useParams<{ address: `0x${string}` }>();

  const response = useReadContract({
    abi: vaultabi,
    address: address,
    functionName: "getVaults",
    chainId: arbitrumSepolia.id,
  });
  let vaultDetails;
  if (response.isFetched) {
    vaultDetails = response?.data as VaultDetailsType;
  }
  //const vaultDetails = response?.data as VaultDetailsType;

  const handleClick = () => {};

  return (
    <div>
      <div className="space-y-6 bg-slate-900 px-10 py-10 rounded-md border mx-16 my-5 border-slate-950 text-white">
        <h1 className="text-2xl font-bold text-white">Vault Details</h1>
        <div className="space-y-6 ">
          {/* Stat Cards Section */}
          {!vaultDetails && (
            <div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 py-5">
                <div className="rounded-lg p-6 shadow-md border bg-slate-900  border-slate-950 ">
                  <div className="flex items-center space-x-3">
                    <div className="text-blue-500 text-2xl">
                      {/* Icon placeholder */}
                      {/* <svg className="w-6 h-6" fill="currentColor"><!-- icon --></svg> */}
                      🏴󠁩󠁤󠁳󠁬󠁿
                    </div>
                    <div>
                      <div className="h-6 bg-slate-800 rounded my-2 mx-2 w-28 animate-pulse"></div>
                      <div className="h-4 bg-slate-800 rounded my-2 mx-2 w-36 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                <div className=" bg-slate-900 rounded-lg p-6 shadow-md border border-slate-950">
                  <div className="flex items-center space-x-3">
                    <div className="text-green-500 text-2xl">
                      {/* <svg className="w-6 h-6" fill="currentColor"><!-- icon --></svg> */}
                      🥮
                    </div>
                    <div>
                      <div className="h-6 bg-slate-800 rounded my-2 mx-2 w-28 animate-pulse"></div>
                      <div className="h-4 bg-slate-800 rounded my-2 mx-2 w-36 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg p-6 shadow-md border bg-slate-900 border-slate-950">
                  <div className="flex items-center space-x-3">
                    <div className="text-purple-500 text-2xl">
                      {/* <svg className="w-6 h-6" fill="currentColor"><!-- icon --></svg> */}
                      💰
                    </div>
                    <div>
                      <div className="h-6 bg-slate-800 rounded my-2 mx-2 w-28"></div>
                      <div className="h-4 bg-slate-800 rounded my-2 mx-2 w-36"></div>
                    </div>
                  </div>
                </div>
                <div className=" rounded-lg p-6 shadow-md border bg-slate-900 border-slate-950">
                  <div className="flex items-center space-x-3">
                    <div className="text-red-500 text-2xl">
                      {/* <svg className="w-6 h-6" fill="currentColor"><!-- icon --></svg> */}
                      📅
                    </div>
                    <div>
                      <div className="h-6 bg-slate-800 rounded my-2 mx-2 w-28 animate-pulse"></div>
                      <div className="h-4 bg-slate-800 rounded my-2 mx-2 w-36 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Cards Section */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className=" rounded-lg shadow-md border p-6 bg-slate-900 border-slate-950">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 p-3 rounded-full text-2xl">
                      {/* <svg className="w-6 h-6 text-gray-600"><!-- icon --></svg>
                ✌ */}
                      👨🏻‍💼
                    </div>
                    <div className="h-6 bg-slate-800 rounded my-2 mx-2 w-28 animate-pulse"></div>
                  </div>
                  <div className="h-4 bg-slate-800 rounded my-2 mx-2 w-36 animate-pulse"></div>
                  <div className="bg-slate-950 text-xs font-mono p-2 rounded break-all animate-pulse"></div>
                </div>

                <div className=" rounded-lg shadow-md border p-6 bg-slate-900 border-slate-950">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 p-3 rounded-full text-2xl">
                      {/* <svg className="w-6 h-6 text-gray-600"><!-- icon --></svg>
                ✌ */}
                      📝
                    </div>
                    <div className="h-6 bg-slate-800 rounded my-2 mx-2 w-28 animate-pulse"></div>
                  </div>
                  <div className="h-4 bg-slate-800 rounded my-2 mx-2 w-36 animate-pulse"></div>
                </div>
              </div>
            </div>
          )}
          {vaultDetails && (
            <div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 py-5">
                <div className="rounded-lg p-6 shadow-md border bg-slate-900  border-slate-950 ">
                  <div className="flex items-center space-x-3">
                    <div className="text-blue-500 text-2xl">
                      {/* Icon placeholder */}
                      {/* <svg className="w-6 h-6" fill="currentColor"><!-- icon --></svg> */}
                      🏴󠁩󠁤󠁳󠁬󠁿
                    </div>
                    <div>
                      <h3 className="text-slate-400">Project Title</h3>
                      <p className=" text-lg font-semibold">
                        {vaultDetails?.projectTitle}
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" bg-slate-900 rounded-lg p-6 shadow-md border border-slate-950">
                  <div className="flex items-center space-x-3">
                    <div className="text-green-500 text-2xl">
                      {/* <svg className="w-6 h-6" fill="currentColor"><!-- icon --></svg> */}
                      🥮
                    </div>
                    <div>
                      <h3 className="text-slate-400">Available Funds</h3>
                      <p className="text-lg font-semibold">
                        {formatEther(
                          BigInt(vaultDetails.participationTokenAmount),
                        )}{" "}
                        Tokens
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg p-6 shadow-md border bg-slate-900 border-slate-950">
                  <div className="flex items-center space-x-3">
                    <div className="text-purple-500 text-2xl">
                      {/* <svg className="w-6 h-6" fill="currentColor"><!-- icon --></svg> */}
                      💰
                    </div>
                    <div>
                      <h3 className="text-slate-400">Funds Collected</h3>
                      <p className="text-lg font-semibold">
                        {formatEther(BigInt(vaultDetails.minFundingAmount))} Eth
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" rounded-lg p-6 shadow-md border bg-slate-900 border-slate-950">
                  <div className="flex items-center space-x-3">
                    <div className="text-red-500 text-2xl">
                      {/* <svg className="w-6 h-6" fill="currentColor"><!-- icon --></svg> */}
                      📅
                    </div>
                    <div>
                      <h3 className="text-slate-400">Tally Date</h3>
                      <p className="text-lg font-semibold">
                        {new Date(
                          Number(vaultDetails.timeStamp) * 1000,
                        ).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Cards Section */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className=" rounded-lg shadow-md border p-6 bg-slate-900 border-slate-950">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 p-3 rounded-full text-2xl">
                      {/* <svg className="w-6 h-6 text-gray-600"><!-- icon --></svg>
                  ✌ */}
                      👨🏻‍💼
                    </div>
                    <h3 className="text-lg font-semibold">Creator</h3>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Wallet Address:</p>
                  <div className="bg-slate-950 text-xs font-mono p-2 rounded break-all">
                    {vaultDetails.withdrawlAddress}
                  </div>
                </div>

                <div className=" rounded-lg shadow-md border p-6 bg-slate-900 border-slate-950">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 p-3 rounded-full text-2xl">
                      {/* <svg className="w-6 h-6 text-gray-600"><!-- icon --></svg>
                  ✌ */}
                      📝
                    </div>
                    <h3 className="text-lg font-semibold">Description</h3>
                  </div>
                  <p className="text-sm text-slate-400">
                    {vaultDetails.projectDescription}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className=" mb-5 space-y-6 bg-slate-900 px-10 py-10 rounded-md border mx-16 my-5 border-slate-950 text-white">
        <h1 className="text-2xl font-bold text-white">Vault Actions</h1>
        <div className="flex flex-row flex-wrap gap-2">
          <div className="w-80 hidden md:block">
            <label className="mb-2 text-sm font-medium sr-only bg-slate-950 text-white">
              Fund
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-slate-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block w-full p-2 ps-10  border-2 rounded bg-slate-900 border-purple-600/70 placeholder-slate-400 text-white hover:border-purple-600 hover:shadow-sm hover:shadow-white"
                placeholder="Fund the project"
                required
              />
            </div>
          </div>
          <button className="w-80 border-purple-600/70 border-2 rounded text-slate-400 hover:text-white  hover:border-purple-600 hover:shadow-sm hover:shadow-white">
            Refund
          </button>
          <button className="w-80 border-purple-600/70 border-2 rounded text-slate-400 hover:text-white  hover:border-purple-600 hover:shadow-sm hover:shadow-white">
            Withdraw Funds
          </button>
          <div className="w-80 hidden md:block">
            <label className="mb-2 text-sm font-medium sr-only bg-slate-950 text-white">
              Withdraw CAT
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-slate-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block w-full p-2 ps-10  border-2 rounded bg-slate-900 border-purple-600/70 placeholder-slate-400 text-white hover:border-purple-600 hover:shadow-sm hover:shadow-white"
                placeholder="Withdraw CAT"
                required
              />
            </div>
          </div>
          <div className="w-80 hidden md:block">
            <label className="mb-2 text-sm font-medium sr-only bg-slate-950 text-white">
              Add CAT
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-slate-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block w-full p-2 ps-10  border-2 rounded bg-slate-900 border-purple-600/70 placeholder-slate-400 text-white hover:border-purple-600 hover:shadow-sm hover:shadow-white"
                placeholder="Add CAT"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
