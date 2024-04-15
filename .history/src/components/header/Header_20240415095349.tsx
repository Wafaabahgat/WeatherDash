import { Link } from "react-router-dom";
import Menu from "../ui/Menu";
const Header = () => {
  const languages = [
    {
      key: "en",
      name: "English",
    },
    {
      key: "ar",
      name: "العربية",
    },
  ];
  return (
    <div className="w-full bg-dark_blue fixed left-0 top-0 z-10 shadow-xl">
      <div className="m-auto flex justify-between items-center p-4 max-h-[100px]">
        <Link to="/">
          <div className="text-color_white font-bold text-xl ml-6">
            weather<span className="text-color_danger">Dash</span>
          </div>
        </Link>

        <Menu />
      </div>
    </div>
  );
};

export default Header;
