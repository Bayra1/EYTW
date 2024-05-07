'use client'
import { DebounceTest } from "@/components";
import { useEffect, useState } from "react";

export const DebounceTestFeature = () => {
  const [users, setUsers] = useState([]);

  const test = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users/");
      const convertToJson = await response.json();
      setUsers(convertToJson.data);
    } catch (error) {
      console.error(error, "cannot fetch data");
    }
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <div>
      <DebounceTest users={users} />
    </div>
  );
};
