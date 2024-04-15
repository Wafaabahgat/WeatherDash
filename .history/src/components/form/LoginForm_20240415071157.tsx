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

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
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

  // // Login with Google///
  // const firebaseAuth = getAuth(app);

  // const provider = new GoogleAuthProvider();

  // const signinWithGoogle = () => {
  //   signInWithPopup(firebaseAuth, provider)
  //     .then((result) => {
  //       // const user = result.user;
  //       toast.success("Login Successfully");
  //     })
  //     .catch((error) => {
  //       console.error("Firebase Authentication Error:", error);
  //       toast.error(error.message);
  //     });
  // };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <FormModelAuth ttl=" Hello, Friends!" disc="Log in to continue">
          <form
            className="flex flex-col items-center gap-3"
            onSubmit={handleSignin}
          >
            <FormInput
              name="email"
              type="text"
              autoComplete="username"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              text="log in"
              className=" font-bold w-[500px] hover:text-color_danger"
            />
            <Button
              text="Continue with email"
              className=" text-black bg-blue-900 font-bold w-[500px] hover:text-white"
            />
          </form>
          <div className="text-white flex item-center justify-center gap-x-24 m-3">
            <Link to="/forgetPassword" className="hover:text-color_danger">
              Forget password?
            </Link>
            <Link to="/register" className="hover:text-color_danger">
              Create an account
            </Link>
          </div>
        </FormModelAuth>
      )}
    </>
  );
};

export default LoginForm;
