"use client";
import { ChangeEvent, useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import "./style.css";

export const DebounceTest = ({ users }: { users: any }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchedValue, setSearchedValue] = useState("");

  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const createUrl = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const manageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchedValue(event.target.value);
    setTimeout(() => {
      router.push(pathName + "?" + createUrl("searchFor", event.target.value));
    }, 2000);
  };

  const handleFocusSate = () => setIsFocused((preV) => !preV);

  const searchedValueParams = searchParams.get("searchFor");

  const filteredUser = users.filter((el:any) => {
    return el.firs_name
      .toLowerCase()
      .includes(searchedValueParams?.toLocaleLowerCase());
  });

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
        value={searchedValue}
        onChange={manageChange}
        className={isFocused ? "focused" : ""}
        onFocus={handleFocusSate}
        onBlur={handleFocusSate}
        type="text"
        placeholder="type name"
      />
      <div className="flex gap-[20px] flex-wrap">
        {filteredUser.map((el: any) => {
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
