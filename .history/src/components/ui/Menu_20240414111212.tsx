import { HiMenuAlt3 } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import React from "react";
import UserCard from "./UserCard";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const showMenu = () => {
    setOpen(!open);
  };
  const hideMenu = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      hideMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  //   const handleLogout = () => {
  //     window.location.href = "/login";
  //   };

  return (
    <div ref={menuRef}>
      <HiMenuAlt3
        className="text-color_white"
        size={28}
        onClick={open ? hideMenu : showMenu}
      />
      {open ? <UserCard /> : null}
    </div>
  );
};

export default Menu;
