import React from "react";
import LoginForm from "../../components/form/LoginForm";
import MetaDate from "../../lib/metaDate";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 py-28">
      <div className="bg-dark_blue rounded-2xl shadow-2xl flex flex-row max-w-[800px] ">
        <MetaDate ttl="Login - page" disc="The login page" />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
