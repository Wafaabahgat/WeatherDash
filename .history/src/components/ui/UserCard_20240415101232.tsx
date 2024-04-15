import { Link, useHistory } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  SET_ACTIVE_USER,
  REMOVE_ACTIVE_USER,
} from "../../redux/slice/authSlice";
import ShowOnLogin, { ShowOnLogout } from "./HideLink";
import { auth } from "./../../firebase/firebase";

const UserCard = () => {
  const [user, setUser] = useState(null); // Track user state
  const dispatch = useDispatch();
  const history = useHistory(); // For navigation

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set user state
        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName || user.email.slice(0, -10), // Set username based on displayName or email
            userID: user.uid,
          })
        );
      } else {
        setUser(null); // Clear user state
        dispatch(
          REMOVE_ACTIVE_USER({
            email: "",
            userName: "",
            userID: "",
            isLoggedIn: false,
          })
        );
      }
    });

    return () => unsubscribe(); // Cleanup function
  }, [dispatch]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      history.push("/login"); 
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <form className="bg-color_white shadow-md rounded-md max-w-[400px] min-w-[210px] border-slate-400 border absolute top-16 right-1 z-50">
      <div className="text-xl">
        <ul className="text-dark_blue">
          {/* Display user information if logged in */}
          <ShowOnLogin>
            <li className="p-4">
              <a className="flex gap-1 items-center">
                <FaUserCircle />
                Hi, {user?.displayName || user?.email.slice(0, -10)}
              </a>
            </li>
            <span className="bg-slate-300 block h-[1px] "></span>
          </ShowOnLogin>

          {/* Display login and register links if logged out */}
          <ShowOnLogout>
            <li className="hover:text-color_danger p-4 text-center">
              <Link to="/login">Login</Link>
            </li>
            <span className="bg-slate-300 block h-[1px]"></span>
            <li className="hover:text-color_danger p-4 text-center">
              <Link to="/register">Register</Link>
            </li>
            <span className="bg-slate-300 block h-[1px] "></span>
          </ShowOnLogout>

          {/* Display logout link if logged in */}
          <ShowOnLogin>
            <span className="bg-slate-300 block h-[1px]"></span>
            <li
              className="hover:text-color_danger p-4 flex items-center justify-center gap-1"
              onClick={handleLogout} // Call handleLogout function on click
            >
              <IoIosLogOut />
              <span>Log out</span>
            </li>
          </ShowOnLogin>
        </ul>
      </div>
    </form>
  );
};

export default UserCard;
