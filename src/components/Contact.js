import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";
import ro from "../assets/romania.png";
import us from "../assets/us.png";

const Contact = () => {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(localStorage.getItem("language"));
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    console.log(i18n);
  };

  const form = useRef();
  const refreshPage = () => {
    window.location.reload();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vz1mhb8",
        "template_rizz1yw",
        form.current,
        "YuDSusaOKA9KG3ye3"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="w-full h-18 justify-between shadow-lg">
        <div className="flex flex-row justify-between p-6 mr-auto">
          <Link to="/GY/test">
            <h1 className="text-md">
              <img width={180} height={180} src={logo} alt="logo" />
            </h1>
          </Link>
          <div className="flex flex-row">
            <Link to="/GY/test/contact">
              <h3
                onClick={() => refreshPage()}
                className="text-sm hover:cursor-pointer mt-4"
              >
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
      <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <label>{t("Name")}</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>{t("Message")}</label>
          <textarea name="message" />
          <input type="submit" value={t("Send")} />
        </form>
      </StyledContactForm>
    </div>
  );
};

export default Contact;

const StyledContactForm = styled.div`
  display: flex;
  justify-content: center;
  width: 350px;
  margin: auto;
  margin-top: 150px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;
