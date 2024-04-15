import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface HeaderProps {}

const LANGUAGE_SELECTOR_ID = "language-selector";
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

const Header: FC<HeaderProps> = () => {
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

  useEffect(() => {
    const handleWindowClick = (event) => {
      const target = event.target.closest("button");
      if (target && target.id === LANGUAGE_SELECTOR_ID) {
        return;
      }
      setIsOpen(false);
    };
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <div>
      {isOpen && (
        <div
          className="z-[999] ltr:origin-top-right rtl:origin-top-left absolute ltr:right-6 rtl:left-6 mt-4 w-[230px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby={LANGUAGE_SELECTOR_ID}
        >
          <div className="p-1 grid grid-cols-2 gap-2" role="none">
            {languages.map((language, index) => {
              return (
                <button
                  key={language.key}
                  onClick={() => handleLanguageChange(language)}
                  className={`px-4 py-2 text-sm text-start items-center inline-flex gap-1 hover:bg-gray-100 ${
                    index % 2 === 0 ? "rounded-r" : "rounded-l"
                  }`}
                  role="menuitem"
                >
                  <span className="truncate">{language.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
