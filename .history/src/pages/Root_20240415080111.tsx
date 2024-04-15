import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const Root = () => {
 

  return (
    <div className="w-full h-full flex flex-col">
      {/* {isDash == "dashboard" ? null : <Navbar />} */}
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
