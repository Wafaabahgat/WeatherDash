import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
// import Header from "../components/layout/Header";

const Root = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Determine the direction based on the language code
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
  }, [i18n.language]);

  return (
    <div className="w-full h-full flex flex-col">
      {/* {isDash == "dashboard" ? null : <Navbar />} */}
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
