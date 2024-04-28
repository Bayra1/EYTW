import robustValidation from "./ValidationSchema";
import { RightArrow } from "./icons";
import { Password, PhoneNumber, Repassword } from "./index";
import { useFormik } from "formik";
import * as yup from "yup";

export const SignUpForms = () => {
  // const validationSchema = yup.object({
  //   emailOrPhoneNumber: yup.string().required("Email or phone number is required"),
  //   password: yup.string().required("Password is required"),
  //   confirmPassword: yup.string()
  //     .oneOf([yup.ref('password')], 'Passwords must match')
  //     .required('Confirm password is required'),
  // // });

  // const formik = useFormik({
  //   initialValues: {
  //     emailOrPhoneNumber: "",
  //     password: "",
  //     confirmPassword: "",
  //   },
  //   validationSchema:robustValidation,
  //   onSubmit: (values) => {
  //     console.log(values, "yourValues");
  //   },
  // });

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
      <PhoneNumber />
      <Password />
      <Repassword />
      <button
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
