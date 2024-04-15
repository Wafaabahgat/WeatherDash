import { useState } from "react";
import Button from "../Ui/Button";
import FormInput from "./FormInput";
import FormModelAuth from "@models/form-model-auth";
import { sendPasswordResetEmail } from "@firebase/auth";
import toast from "react-hot-toast";
import Loader from "../Loader";
import { auth } from "../../Firebases/config";
import { Link } from "react-router-dom";

const ForgetPassForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();
    setIsLoading(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false);
        toast.success("Check your email for a reset link");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <FormModelAuth ttl=" Hello,Friend !" disc="Please enter your email">
          <form
            className="flex flex-col items-center gap-1"
            onSubmit={handleReset}
          >
            <FormInput
              type="text"
              autoComplete="username"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type="submit"
              text="submit"
              className="text-white font-bold w-[500px] hover:text-color_danger"
            />
          </form>
          <div className="text-white flex item-center justify-center gap-x-24 m-3">
            <Link to="/login" className="hover:text-color_danger">
              Login
            </Link>
            <Link to="/register" className="hover:text-color_danger">
              Register
            </Link>
          </div>
        </FormModelAuth>
      )}
    </>
  );
};

export default ForgetPassForm;
