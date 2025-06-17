import React from "react";

const Input = ({ type, value, setData }: any) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold ">{type}</label>
      <input
        value={value}
        onChange={(e: any) => {
          setData(e.target.value);
        }}
        type="text"
        className="p-2 border border-mainorange outline-none"
      />
    </div>
  );
};

export default Input;
