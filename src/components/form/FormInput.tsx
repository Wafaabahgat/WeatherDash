import React from "react";
import { cn } from "./../../lib/utils";

const FormInput = ({ name, type, placeholder, className, error, ...props }) => {
  return (
    <div>
      <div
        className={
          error
            ? "ring-red-500 border-red-500 ring-1 flex items-center p-3 mb-3 rounded-md "
            : "bg-color_white flex items-center w-[500px]"
        }
      >
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className={cn(
            error
              ? "bg-white border-red-300 border outline-none"
              : "bg-color_white outline-none p-2"
          )}
          {...props}
        />
      </div>
    </div>
  );
};

export default FormInput;
