//import abi from "./abi/abi.json";
import { useWriteContract } from "wagmi";
//import { parseEther } from "viem";
import { useForm, SubmitHandler } from "react-hook-form";
import factoryabi from "./abi/factoryabi.json";
import abi from "./abi/abi.json";
import { arbitrumSepolia } from "viem/chains";
import { parseEther } from "viem";
type Inputs = {
  title: string;
  url: string;
  description: string;
  pta: `0x${string}`;
  withdrawAddress: string;
  developerAddress: string;
  minEth: string;
  deadline: Date;
  ptaAmount: string;
  rate: string;
  developerPercentage: string;
};

const Create = () => {
  const { writeContractAsync } = useWriteContract();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const deadline = new Date(data.deadline);
    const timestamp = Math.floor(deadline.getTime() / 1000);
    try {
      const tx1 = await writeContractAsync({
        abi: abi,
        address: data.pta,
        functionName: "approve",
        args: [
          "0x3d927Cf8E568856e379FDAaaa131d16aCa652e6d",
          parseEther(data.ptaAmount),
        ],
        chainId: arbitrumSepolia.id,
      });
      // Wait for approximately 6 seconds for 3 block confirmations
      await new Promise((resolve) => setTimeout(resolve, 6000));
      console.log("1st Transaction submitted:", tx1);
      const tx2 = await writeContractAsync({
        abi: factoryabi,
        address: "0x3d927Cf8E568856e379FDAaaa131d16aCa652e6d",
        functionName: "deployFundingVault",
        args: [
          data.pta,
          parseEther(data.ptaAmount),
          parseEther(data.minEth),
          timestamp,
          data.rate,
          data.withdrawAddress,
          data.developerAddress,
          data.developerPercentage,
          data.url,
          data.title,
          data.description,
        ],
        chainId: arbitrumSepolia.id,
      });
      console.log("2nd Transaction submitted:", tx2);
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };
  if (errors) {
    console.log(errors);
  }

  return (
    <div className="mx-auto max-w-7xl p-5">
      <div className="py-3 flex flex-col gap-2">
        <h1 className="text-2xl text-white">Create new Funding Vault</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-5">
          <div>
            <label className={`text-sm text-slate-400`}>Project Name</label>
            <input
              id="title"
              className="bg-transparent p-2 text-sm w-full outline-none border border-slate-600 rounded-md"
              required
              {...register("title", { required: true })}
            />
          </div>
          {/* <Input
            label={"Title"}
            register={register}
            errors={errors}
            name="title"
            validation={{
              minLength: {
                value: 10,
                message: "Please enter at least 10 characters",
              },
            }}
          /> */}
          <div>
            <label className={`text-sm text-slate-400`}>Project URL</label>
            <input
              id="url"
              className="bg-transparent p-2 text-sm w-full outline-none border border-slate-600 rounded-md"
              required
              {...register("url", { required: true })}
            />
          </div>
        </div>
        {/* <Input
          textarea
          label={"Description"}
          register={register}
          errors={errors}
          name="description"
          validation={{
            minLength: {
              value: 20,
              message: "Please enter at least 20 characters",
            },
          }}
        /> */}
        <label className={`text-sm text-slate-400`}>Description</label>
        <textarea
          id="description"
          className="bg-transparent p-5 text-sm w-full outline-none border border-slate-600 h-40 rounded-md"
          {...register("description", { required: true })}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5">
          {/* <Input
            label={"Target"}
            type={"number"}
            step={"0.1"}
            min={0.1}
            register={register}
            errors={errors}
            name="target"
            validation={{}}
          /> */}
          <div>
            <label className={`text-sm text-slate-400`}>
              Partcipation Token Address
            </label>
            <input
              id="pta"
              className="bg-transparent p-2 text-sm w-full outline-none border border-slate-600 rounded-md"
              {...register("pta", { required: true })}
            />
          </div>
          {/* <Input
            label={"Deadline"}
            type={"date"}
            register={register}
            errors={errors}
            name="deadline"
            validation={{}}
          /> */}
          <div>
            <label className={`text-sm text-slate-400`}>
              Withdrawl Address
            </label>
            <input
              id="withdrawAddress"
              className="bg-transparent text-white p-2 text-sm w-full outline-none border border-slate-600 rounded-md"
              {...register("withdrawAddress", { required: true })}
            />
          </div>
          {/* <Input
            label={"Image Link"}
            type={"url"}
            register={register}
            errors={errors}
            name="image"
            validation={{}}
          /> */}
          <div>
            <label className={`text-sm text-slate-400`}>
              Developer Fee Address
            </label>
            <input
              id="developerAddress"
              className="bg-transparent p-2 text-sm w-full outline-none border border-slate-600 rounded-md"
              {...register("developerAddress", { required: true })}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5">
          {/* <Input
            label={"Target"}
            type={"number"}
            step={"0.1"}
            min={0.1}
            register={register}
            errors={errors}
            name="target"
            validation={{}}
          /> */}
          <div>
            <label className={`text-sm text-slate-400`}>
              Minimum ETH Target
            </label>
            <input
              id="minEth"
              className="bg-transparent p-2 text-sm w-full outline-none border border-slate-600 rounded-md"
              {...register("minEth", { required: true })}
            />
          </div>
          {/* <Input
            label={"Deadline"}
            type={"date"}
            register={register}
            errors={errors}
            name="deadline"
            validation={{}}
          /> */}
          <div>
            <label className={`text-sm text-slate-400`}>Deadline</label>
            <input
              id="deadline"
              type="date"
              className="bg-transparent text-white p-2 text-sm w-full outline-none border border-slate-600 rounded-md"
              {...register("deadline", { required: true })}
            />
          </div>
          {/* <Input
            label={"Image Link"}
            type={"url"}
            register={register}
            errors={errors}
            name="image"
            validation={{}}
          /> */}
          <div>
            <label className={`text-sm text-slate-400`}>
              Participation Token Amount
            </label>
            <input
              id="ptaAmount"
              type="number"
              className="bg-transparent p-2 text-sm w-full outline-none border border-slate-600 rounded-md"
              {...register("ptaAmount", { required: true })}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-5">
          {/* <Input
            label={"Name"}
            register={register}
            errors={errors}
            name="name"
            validation={{
              minLength: {
                value: 3,
                message: "Please enter at least 3 characters",
              },
            }}
          /> */}

          <div>
            <label className={`text-sm text-slate-400`}>Exchange Rate</label>
            <input
              id="rate"
              type="number"
              className="bg-transparent p-2 text-sm w-full outline-none border border-slate-600 rounded-md"
              {...register("rate", { required: true })}
            />
          </div>
          {/* <Input
            label={"Title"}
            register={register}
            errors={errors}
            name="title"
            validation={{
              minLength: {
                value: 10,
                message: "Please enter at least 10 characters",
              },
            }}
          /> */}
          <div>
            <label className={`text-sm text-slate-400`}>
              Developer Fee percentage
            </label>
            <input
              id="developerPercentage"
              className="bg-transparent p-2 text-sm w-full outline-none border border-slate-600 rounded-md"
              {...register("developerPercentage", { required: true })}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="h-10 text-base font-bold flex overflow-hidden items-center  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-slate-950 text-white shadow hover:bg-black/90 px-2 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out  border-2 border-purple-600/70 hover:border-purple-600"
        >
          <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-20 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>

          <span className="text-white">
            {isSubmitting ? "Processing..." : `Create Vault`}
          </span>
        </button>
      </form>
    </div>
  );
};
export default Create;
