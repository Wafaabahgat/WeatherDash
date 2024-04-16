import { FC, ReactNode } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

interface AuthUserProps {
  children: ReactNode;
}

const AuthUser: FC<AuthUserProps> = ({ children }) => {
  const user = cookies.get("user");
  console.log(user);

  if (user && user.email) {
    return (window.location.href = "/");
  }
  return children;
};

export default AuthUser;
