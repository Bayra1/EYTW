"use client";
import { useEffect, useState } from "react";

export const HelperText = ({ error }: any) => {
  // const [errorMessage, setErrorMessage] = useState(error);

  // useEffect(() => {
  //   const testTime = setTimeout(() => {
  //     setErrorMessage(null);
  //   }, 3000);
  //   return () => clearTimeout(testTime);
  // }, [error]);

  return (
    <div datatest-id="error-message" className="text-red-400">
      {error}
    </div>
  );
};
