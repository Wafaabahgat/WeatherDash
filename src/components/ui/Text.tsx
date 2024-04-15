import React, { ReactNode } from "react";
import { FC } from "react";
import { cn } from "../../lib/utils";

interface TextProps {
  text: string;
  children: ReactNode;
  degree: string;
  className?: string;
}

const Text: FC<TextProps> = ({ text, children, degree, className }) => {
  return (
    <>
      <p
        className={cn(
          "border my-auto py-10 border-gray-200 p-4 shadow-md rounded-md",
          className
        )}
      >
        <span className="font-semibold text-lg">{text}</span> : {children}
        {degree}
      </p>
    </>
  );
};

export default Text;
