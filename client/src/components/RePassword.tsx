export const Repassword = ({ confirmPasswordRef }: any) => {
  return (
    <div className="flex flex-col w-[100%] gap-[8px]">
      <h5
        data-testid="confirmPassword"
        color="#121316"
        className="text-base non-italic font-semibold leading-5 flex flex-start w-[100%]"
      >
        repeat password
      </h5>
      <input
        ref={confirmPasswordRef}
        style={{ borderColor: "#D6D8DB", backgroundColor: "#F7F7F8" }}
        className="flex items-center p-[8px] self-stretch rounded-lg border-solid border"
        placeholder="repeat password"
        type="password"
      />
    </div>
  );
};
