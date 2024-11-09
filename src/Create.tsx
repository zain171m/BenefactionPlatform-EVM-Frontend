//import abi from "./abi/abi.json";
import { useWriteContract } from "wagmi";
//import { parseEther } from "viem";
import { useForm, SubmitHandler } from "react-hook-form";
import factoryabi from "./abi/factoryabi.json";
import { arbitrumSepolia } from "viem/chains";

type Inputs = {
  title: string;
  url: string;
  description: string;
  pta: string;
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
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    //const timestamp = Math.floor(data.deadline.getTime() / 1000);
    try {
      const tx = await writeContractAsync({
        abi: factoryabi,
        address: "0x3d927Cf8E568856e379FDAaaa131d16aCa652e6",
        functionName: "deployFundingVault",
        args: [
          data.pta,
          data.ptaAmount,
          data.minEth,
          data.deadline,
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
      console.log("Transaction submitted:", tx);
    } catch (error) {
      console.error("Transaction failed:", error);
    }
    //  try {
    //   const tx = await writeAsync();
    //   console.log('Transaction submitted:', tx.hash);
    //   const receipt = await tx.wait();
    //   console.log('Transaction confirmed:', receipt);
    // } catch (error) {
    //   console.error('Transaction failed:', error);
    // }
  };
  //console.log(watch("title")); // watch input value by passing the name of it
  return (
    // <form
    //   className="text-black flex-row gap-3"
    //   onSubmit={handleSubmit(onSubmit)}
    // >
    //   {/* register your input into the hook by invoking the "register" function */}
    //   <input defaultValue="test" {...register("example")} />

    //   {/* include validation with required or other standard HTML validation rules */}
    //   <input {...register("exampleRequired", { required: true })} />
    //   {/* errors will return when field validation fails  */}
    //   {errors.exampleRequired && (
    //     <span className="text-white">This field is required</span>
    //   )}

    //   <input type="submit" />
    // </form>
    <div className="mx-auto max-w-7xl p-5">
      <div className="py-3 flex flex-col gap-2">
        <h1 className="text-2xl text-white">Create new Funding Vault</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        //   onSubmit={async (e) => {
        //   e.preventDefault();
        //   const formObj = new FormData(e.currentTarget);
        //   console.log(formObj.get("name")?.toString());
        //   console.log(formObj.get("title")?.toString());
        //   console.log(formObj.get("description")?.toString());
        //   console.log(
        //     new Date(formObj.get("deadline")?.toString() ?? "0").getTime()
        //   );
        //   console.log(parseEther(formObj.get("target")?.toString() ?? "0"));
        //   console.log(formObj.get("image")?.toString());
        //   await writeContractAsync({
        //     abi,
        //     address: "0xC6E864c9816FfD3fcc1C501ECCFB3c83EbD62be1",
        //     functionName: "requestCampaign",
        //     args: [
        //       formObj.get("name")?.toString(),
        //       formObj.get("title")?.toString(),
        //       formObj.get("description")?.toString(),
        //       new Date(formObj.get("deadline")?.toString() ?? "0").getTime(),
        //       parseEther(formObj.get("target")?.toString() ?? "0"),
        //       formObj.get("image")?.toString(),
        //     ],
        //   });
        // }}
        //  form.name, //owner name
        // form.title, // title
        // form.description, // description
        // new Date(form.deadline).getTime(), // deadline,
        // form.target,
        // form.image,
        className="text-white"
      >
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
              type="number"
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
          className="text-white bg-slate-800 font-bold text-base h-10 hover:bg-purple-800 px-3 rounded-lg shadow-md"
        >
          Create Campaing
        </button>
      </form>
    </div>
  );
};
export default Create;
