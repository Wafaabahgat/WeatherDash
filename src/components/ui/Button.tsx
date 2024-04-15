import React from "react";
import { cn } from "../../lib/utils";

const Button = ({
  className,
  onClick,
  variant,
  type,
  size,
  text,
  children,
  link,
  ...props
}) => {
  return (
    <>
      <button
        className={cn(
          "border-2 flex items-center justify-center py-2 mt-4",
          className
        )}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
