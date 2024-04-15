import { Link, useNavigate } from "react-router-dom";
import FormModelAuth from "../models/form-model-auth";
import Loader from "../ui/Loader";
import FormInput from "./FormInput";
import { useState } from "react";
import Button from "../ui/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";

// import {
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   GoogleAuthProvider,
//   getAuth,
// } from "firebase/auth";
// import toast from "react-hot-toast";
import { auth } from "./../../firebase/firebase";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSignin = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Login Successful...");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.massage);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <FormModelAuth ttl={t("ttl_hello")} disc={t("ttl_Log_in_to_continue")}>
          <form
            className="flex flex-col items-center gap-3"
            onSubmit={handleSignin}
          >
            <FormInput
              name={t("ttl_email")}
              type="text"
              autoComplete="username"
              placeholder={t("ttl_enter_email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              name={t("ttl_password")}
              type="password"
              autoComplete="current-password"
              placeholder={t("ttl_enter_Password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              text={t("ttl_log_in")}
              className=" font-bold w-[500px] hover:text-color_danger"
            />
          </form>
          <div className="text-white flex item-center justify-center gap-x-24 m-3">
            <Link to="/forgetPassword" className="hover:text-color_danger">
              {t("ttl_Forget")}
            </Link>
            <Link to="/register" className="hover:text-color_danger">
              {t("ttl_Create")}
            </Link>
          </div>
        </FormModelAuth>
      )}
    </>
  );
};

export default LoginForm;
