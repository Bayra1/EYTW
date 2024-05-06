"use client";
import { useEffect, useState } from "react";
import "./style.css";

type user = {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
};

export const DebounceTest = () => {
  const [users, setUsers] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const test = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users/");
      const convertToJson = await response.json();
      setUsers(convertToJson.data);
    } catch (error) {
      console.error(error, "cannot fetch data");
    }
  };

  const handleFocusSate = () => setIsFocused((preV) => !preV);

  useEffect(() => {
    test();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <input
        style={{
          backgroundColor: "grey",
          width: "fit-content",
          padding: "10px",
          borderRadius: "5px",
          marginTop: "20px",
        }}
        className={isFocused ? "focused" : ""}
        onFocus={handleFocusSate}
        onBlur={handleFocusSate}
        type="text"
        placeholder="type name"
      />
      <div className="flex gap-[20px] flex-wrap">
        {users.length !== 0 &&
          users.map((el: user) => {
            return (
              <div key={el?.id}>
                <strong>{el.first_name}</strong>
                <p>{el.email}</p>
                <img key={el.avatar} src={el.avatar} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
