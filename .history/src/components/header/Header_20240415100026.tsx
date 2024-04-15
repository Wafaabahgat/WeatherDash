import { Link } from "react-router-dom";
import Menu from "../ui/Menu";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const languages = [
  {
    key: "ar",
    name: "العربية",
  },
  {
    key: "en",
    name: "English",
  },
];

const Header = () => {
  const { i18n } = useTranslation();
  const currentLanguage =
    i18n.language && (i18n.language == "en" || i18n.language == "ar")
      ? i18n.language
      : "en";
  const [lang, setlang] = useState(currentLanguage);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleLanguageChange = async (language) => {
    await i18n.changeLanguage(language.key);
    setlang(language.key);
    setIsOpen(false);
  };

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
                className={`px-4 py-2 text-sm text-start items-center inline-flex gap-1 bg-gray-100 ${
                  index % 2 === 0 ? "rounded-r" : "rounded-l"
                }`}
                role="menuitem"
              >
                {/* <FlagIcon countryCode={language.key}/> */}

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
