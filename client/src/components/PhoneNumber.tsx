import { HelperText } from "./HelperText";

export const PhoneNumber = ({
  emailOrPhoneNumber,
  onChange,
  onBlur,
  error,
}: any) => {
  return (
    <div className="flex flex-col w-[100%] gap-[8px]">
      <h5
        data-testid="check-email-number"
        color="#121316"
        className="text-base non-italic font-semibold leading-5 flex flex-start w-[100%]"
      >
        Your email or phoneNumber
      </h5>
      <input
        name="emailOrPhoneNumber"
        value={emailOrPhoneNumber}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="Enter email or phone number"
        type="text"
      />
      <HelperText error={error} />
    </div>
  );
};
