import { VectorIcon, WordPineCone, Academy } from "./icons/index";

export const VictorSide = () => {
  return (
    <div
      style={{ padding: "16px 23.632px 15.516px 23px" }}
      className="flex w-[440px] h-[128px] flex-col justify-center items-center"
    >
      <div className="flex flex-row gap-[10px]">
        <VectorIcon />
        <WordPineCone />
      </div>
      <div className="flex w-[100%] justify-end">
        <Academy />
      </div>
    </div>
  );
};
