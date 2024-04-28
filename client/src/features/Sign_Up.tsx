import { SignUpForms, VictorSide } from "@/components";

export const Sign_Up = () => {
  return (
    <div style={{background:'#F7F7F8'}} className="flex flex-row w-[100%] h-[100vh]">
      <div className="w-6/12 flex justify-center items-center">
        <SignUpForms />
      </div>
      <div className="w-6/12 bg-black flex justify-center items-center">
        <VictorSide/>
      </div>
    </div>
  );
};
