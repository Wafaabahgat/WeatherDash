import React from "react";
import MetaDate from "../../lib/metaDate";
import RegisterForm from "./../../components/form/RegisterForm";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 py-32">
      <div className="bg-dark_blue rounded-2xl shadow-2xl flex flex-row max-w-[800px] ">
        <MetaDate ttl="Register - page" disc="The Register page" />
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
