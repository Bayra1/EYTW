import * as yup from "yup";

const robustValidation = yup.object({
  emailOrPhoneNumber: yup
    .string()
    .test(
      "is-email-or-phoneNumber",
      "Утас эсвэл имэйл хаяг байх ёстой",
      function (value) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
        const isValidEmail = emailRegex.test(value as string);

        const phoneNumberRegex = /^\d{8}$/;
        const isValidPhoneNumber = phoneNumberRegex.test(value as string);

        return isValidEmail || isValidPhoneNumber;
      }
    )
    .required("has to be email or phoneNumber"),

  password: yup
    .string()
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one lowercase, one digit and one special character"
    )
    .required("must be password"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password doesn't match")
    .required("repeat your password"),
});

export default robustValidation;
