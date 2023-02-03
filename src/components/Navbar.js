/* eslint-disable no-restricted-globals */
import React, { useEffect } from "react";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ro from "../assets/romania.png";
import us from "../assets/us.png";

const Navigation = () => {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(localStorage.getItem("language"));
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    console.log(i18n);
  };

  return (
    <div className="w-full h-18 justify-between shadow-lg">
      <div className="flex flex-row justify-between p-6 mr-auto">
        <Link to="/GY/test">
          <h1 onClick={refreshPage} className="text-md">
            <img width={180} height={180} src={logo} alt="logo" />
          </h1>
        </Link>
        <div className="flex flex-row">
          <Link to="/GY/test/contact">
            <h3 className="text-sm hover:cursor-pointer mt-4">
              {t("Contact Us")}
            </h3>
          </Link>
          <img
            onClick={handleOpen}
            className="w-8 h-8 ml-4 mt-2 hover:cursor-pointer"
            src={language === "ro" ? ro : us}
            alt="language-flag"
          />
          {open ? (
            <div className="w-32 h-16 absolute flex flex-row justify-center md:justify-start shadow-lg rounded-lg sm:flex-wrap mt-16 p-2 bg-alb">
              <img
                onClick={() => {
                  handleOpen();
                  changeLanguageHandler("ro");
                }}
                className="w-8 h-8 ml-4 mt-2 hover:cursor-pointer"
                src={ro}
                alt="language-flag"
              />
              <img
                onClick={() => {
                  handleOpen();
                  changeLanguageHandler("en");
                }}
                className="w-8 h-8 ml-4 mt-2 hover:cursor-pointer"
                src={us}
                alt="language-flag"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
