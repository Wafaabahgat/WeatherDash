import { ReactNode } from "react";
import { FC } from "react";
import { cn } from "../../lib/utils";
import { useTranslation } from "react-i18next";

interface TextProps {
  ttl_text: string;
  children: ReactNode;
  degree: string;
  className?: string;
}

const Text: FC<TextProps> = ({ ttl_text, children, degree, className }) => {
  const { t } = useTranslation();

  return (
    <>
      <p
        className={cn(
          "border my-auto py-10 border-gray-200 p-4 shadow-md rounded-md",
          className
        )}
      >
        <span className="font-semibold text-lg"> {t(<ttl_text>)}</span> :
        {children}
        {degree}
      </p>
    </>
  );
};

export default Text;
