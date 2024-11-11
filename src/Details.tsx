import vaultabi from "./abi/vaultabi.json";
import { useReadContract } from "wagmi";
import { arbitrumSepolia } from "viem/chains";
import { useParams } from "react-router-dom";
import { VaultDetailsType } from "./ContractResponseTypes.ts";
import { formatEther } from "viem";
const Details = () => {
  // Placeholder example values for the funding vault
  const { address } = useParams<{ address: `0x${string}` }>();
  console.log(address);

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

  return (
    <div className="space-y-6 bg-slate-900 px-10 py-10 rounded-md border mx-16 my-5 border-slate-950 text-white">
      <h1 className="text-2xl font-bold text-white">Vault Details</h1>
      <div className="space-y-6 ">
        {/* Stat Cards Section */}
        {vaultDetails && (
          <div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg p-6 shadow-md border bg-slate-900  border-slate-950">
                <div className="flex items-center space-x-3">
                  <div className="text-blue-500 text-2xl">
                    {/* Icon placeholder */}
                    {/* <svg className="w-6 h-6" fill="currentColor"><!-- icon --></svg> */}
                    🏴󠁩󠁤󠁳󠁬󠁿
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Project Title</h3>
                    <p className="text-slate-400">
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
                    <h3 className="text-lg font-semibold">Available Funds</h3>
                    <p className="text-slate-400">
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
                    <h3 className="text-lg font-semibold">Funds Collected</h3>
                    <p className="text-slate-400">
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
                    <h3 className="text-lg font-semibold">Tally Date</h3>
                    <p className="text-slate-400">
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
  );
};

export default Details;
