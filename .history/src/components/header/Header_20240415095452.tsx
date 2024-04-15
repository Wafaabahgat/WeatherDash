import { Link } from "react-router-dom";
import Menu from "../ui/Menu";

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
const Header = () => {
  return (
    <div className="w-full bg-dark_blue fixed left-0 top-0 z-10 shadow-xl">
      <div className="m-auto flex justify-between items-center p-4 max-h-[100px]">
        <Link to="/">
          <div className="text-color_white font-bold text-xl ml-6">
            weather<span className="text-color_danger">Dash</span>
          </div>
        </Link>

        <Menu />
        <div className="p-1 grid grid-cols-2 gap-2" role="none">
                  {languages.map((language, index) => {
                      return (
                          <button
                              key={language.key}
                              onClick={() => handleLanguageChange(language)}
                              className={`px-4 py-2 text-sm text-start items-center inline-flex gap-1 hover:bg-gray-100 ${index % 2 === 0 ? 'rounded-r' : 'rounded-l'}`}
                              role="menuitem"
                          >
                              {/* <FlagIcon countryCode={language.key}/> */}
                              <img src={language.key == 'ar' ? s : u} className="w-5 h-4" alt="" />
                              <span className="truncate">{language.name}</span>
                          </button>
                      );
                  })}
              </div>
      </div>
    </div>
  );
};

export default Header;
