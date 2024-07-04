import { DebounceTest } from "@/components";
import { Three_D_Cube } from "@/features";
import { DebounceTestFeature } from "@/features/DebounceTest";
import { Sign_Up } from "@/features/Sign_Up";

export default function Home() {
  return (
    <div className="w-[100%] flex justify-center items-center h-full mt-[250px]">
      {/* <button className="mt-[150px] ml-[150px] border p-[10px]">click me </button> */}
      {/* <Three_D_Cube /> */}
      <Sign_Up/>
    </div>
  );
}

