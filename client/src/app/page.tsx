import { DebounceTest } from "@/components";
import { BoardForDinosour } from "@/components/Dinosaur/Board";
import { Three_D_Cube } from "@/features";
import { DebounceTestFeature } from "@/features/DebounceTest";
import { Sign_Up } from "@/features/Sign_Up";

export default function Home() {
  return (
    <div className="w-screen flex justify-center items-center h-screen mt-[250px] p-4 bg-gray-700">
      {/* <button className="mt-[150px] ml-[150px] border p-[10px]">click me </button> */}
      {/* <Three_D_Cube /> */}
      {/* <Sign_Up/> */}
      <BoardForDinosour/>
    </div>
  );
}

