// details.tsx
import * as React from "react";

const Details: React.FC = () => {
  // Placeholder example values for the funding vault

  return (
    <div className="space-y-6 bg-slate-900 px-10 py-10 rounded-md border mx-16 my-5 border-slate-950 text-white">
      <h1 className="text-2xl font-bold text-white">Vault Details</h1>
      <div className="space-y-6 ">
        {/* Stat Cards Section */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg p-6 shadow-md border bg-slate-900  border-slate-950">
            <div className="flex items-center space-x-3">
              <div className="text-blue-500 ">
                {/* Icon placeholder */}
                {/* <svg className="w-6 h-6" fill="currentColor"><!-- icon --></svg> */}
                ✌
              </div>
              <div>
                <h3 className="text-lg font-semibold">Vault ID</h3>
                <p className="text-gray-600">#12345</p>
              </div>
            </div>
          </div>
          <div className=" bg-slate-900 rounded-lg p-6 shadow-md border border-slate-950">
            <div className="flex items-center space-x-3">
              <div className="text-green-500">
                {/* <svg className="w-6 h-6" fill="currentColor"><!-- icon --></svg> */}
                ✌
              </div>
              <div>
                <h3 className="text-lg font-semibold">Available Funds</h3>
                <p className="text-gray-600">1000 Tokens</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg p-6 shadow-md border bg-slate-900 border-slate-950">
            <div className="flex items-center space-x-3">
              <div className="text-purple-500">
                {/* <svg className="w-6 h-6" fill="currentColor"><!-- icon --></svg> */}
                ✌
              </div>
              <div>
                <h3 className="text-lg font-semibold">Proposals</h3>
                <p className="text-slate-600">5 Submitted</p>
              </div>
            </div>
          </div>
          <div className=" rounded-lg p-6 shadow-md border bg-slate-900 border-slate-950">
            <div className="flex items-center space-x-3">
              <div className="text-red-500">
                {/* <svg className="w-6 h-6" fill="currentColor"><!-- icon --></svg> */}
                ✌
              </div>
              <div>
                <h3 className="text-lg font-semibold">Tally Date</h3>
                <p className="text-gray-600">12/12/2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Cards Section */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className=" rounded-lg shadow-md border p-6 bg-slate-900 border-slate-950">
            <div className="flex items-center mb-4">
              <div className="mr-4 bg-gray-100 p-3 rounded-full">
                {/* <svg className="w-6 h-6 text-gray-600"><!-- icon --></svg>
                    ✌ */}
              </div>
              <h3 className="text-lg font-semibold">Creator</h3>
            </div>
            <p className="text-sm text-gray-500 mb-2">Wallet Address:</p>
            <div className="bg-slate-950 text-xs font-mono p-2 rounded break-all">
              0xABCDEF1234567890ABCDEF1234567890ABCDEF12
            </div>
          </div>

          <div className=" rounded-lg shadow-md border p-6 bg-slate-900 border-slate-950">
            <div className="flex items-center mb-4">
              <div className="mr-4 bg-gray-100 p-3 rounded-full">
                {/* <svg className="w-6 h-6 text-gray-600"><!-- icon --></svg>
                    ✌ */}
              </div>
              <h3 className="text-lg font-semibold">Description</h3>
            </div>
            <p className="text-sm text-gray-600">
              This is a brief description of the funding vault. It provides
              essential information for users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
