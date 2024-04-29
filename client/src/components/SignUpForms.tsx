"use client";
import { useFormik } from "formik";
import { HelperText } from "./HelperText";
import { RightArrow } from "./icons";
import robustValidation from "./ValidationSchema";

type formValues = {
  emailOrPhoneNumber: string;
  password: string;
  confirmPassword: string;
};

export const SignUpForms = () => {
  const formik = useFormik<formValues>({
    initialValues: {
      emailOrPhoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: robustValidation,
    onSubmit: (values) => {
      console.log(values, "this is valid submission");
    },
  });

  const { errors, touched } = formik;

  const checkingValidInputs = () => {
    if (errors.emailOrPhoneNumber && touched.emailOrPhoneNumber) {
      return <HelperText error={formik.errors.emailOrPhoneNumber} />;
    } else {
      return null;
    }
  };

  const checkingPassword = () => {
    if (errors.password && touched.password) {
      return <HelperText error={formik.errors.password} />;
    } else {
      return null;
    }
  };

  const checkingConfirmPassword = () => {
    if (errors.confirmPassword && touched.confirmPassword) {
      return <HelperText error={formik.errors.confirmPassword} />;
    } else {
      return null;
    }
  };

  return (
    <div
      className="flex w-[440px] p-[40px] flex-col items-center gap-[24px] rounded-2xl border-solid"
      style={{
        borderColor: "#ECEDF0",
        borderWidth: "1px",
        background: "#fff",
      }}
    >
      <h3
        data-testid="big-title"
        style={{ color: "#121316" }}
        className="text-2xl non-italic font-bold leading-10"
      >
        To register
      </h3>

      <div className="flex flex-col w-[100%] gap-[8px]">
        <h5
          data-testid="check-email-number"
          color="#121316"
          className="text-base non-italic font-semibold leading-5 flex flex-start w-[100%]"
        >
          Your email or phoneNumber
        </h5>
        {checkingValidInputs()}
        <input
          style={{ borderColor: "#D6D8DB", backgroundColor: "#F7F7F8" }}
          className="flex items-center p-[8px] self-stretch rounded-lg border-solid border"
          name="emailOrPhoneNumber"
          value={formik.values.emailOrPhoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter email or phone number"
          type="text"
        />
      </div>

      <div className="flex flex-col w-[100%] gap-[8px]">
        <h5
          data-testid="password"
          color="#121316"
          className="text-base non-italic font-semibold leading-5 flex flex-start w-[100%]"
        >
          password
        </h5>
        <input
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{ borderColor: "#D6D8DB", backgroundColor: "#F7F7F8" }}
          className="flex items-center p-[8px] self-stretch rounded-lg border-solid border"
          placeholder="type your password"
          type="password"
        />
        {checkingPassword()}
      </div>

      <div className="flex flex-col w-[100%] gap-[8px]">
        <h5
          data-testid="confirmPassword"
          color="#121316"
          className="text-base non-italic font-semibold leading-5 flex flex-start w-[100%]"
        >
          repeat password
        </h5>
        <input
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          style={{ borderColor: "#D6D8DB", backgroundColor: "#F7F7F8" }}
          className="flex items-center p-[8px] self-stretch rounded-lg border-solid border"
          placeholder="repeat password"
          type="password"
        />
        {checkingConfirmPassword()}
      </div>

      <button
        onClick={() => {
          formik.handleSubmit();
        }}
        type="submit"
        style={{ backgroundColor: "#1C20243D", alignItems: "center" }}
        className="flex justify-between rounded-lg w-[100%] h-[56px] "
      >
        <p></p>
        <p
          style={{
            color: "rgba(28, 32, 36, 0.24)",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "24px",
          }}
        >
          next
        </p>
        <RightArrow />
      </button>
    </div>
  );
};
