export const SubWord = ({ props }: { props: string }) => {
  return (
    <h5
      data-testid="sub-word-id"
      color="#121316"
      className="text-base non-italic font-semibold leading-5 flex flex-start w-[100%]"
    >
      {props}
    </h5>
  );
};
