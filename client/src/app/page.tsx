import { DebounceTest } from "@/components";
import { Three_D_Cube } from "@/features";
import { DebounceTestFeature } from "@/features/DebounceTest";
import { Sign_Up } from "@/features/Sign_Up";

export default function Home() {
  return (
    <div className="w-[100%] flex justify-center items-center h-full mt-[250px]">
      <Three_D_Cube />
    </div>
  );
}


