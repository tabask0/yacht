import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";
import ro from "../assets/romania.png";
import us from "../assets/us.png";
import Navbar from "./Navbar";

const Contact = () => {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(localStorage.getItem("language"));
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const accord = () => {
    setChecked(true);
  };

  const checkHandler = () => {
    setChecked(!checked);
    accord();
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
        "service_oghluig",
        "template_4zbg76g",
        form.current,
        "vOpYBDMmRdISGSdA7"
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
      <Navbar />
      <h1 className="text-2xl text-center mt-10">Contact us</h1>

      <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <label>{t("Name")}</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_mail" />
          <label>{t("Message")}</label>
          <textarea name="message" />
          <input type="submit" value={t("Send")} />
        </form>
      </StyledContactForm>
      <div className="flex flex-col mt-4 ml-4">
        <h1 className="font-normal text-sm">{t("GDPR")}</h1>
        <div className="flex flex-row mt-4">
          <input
            id="default-checkbox"
            type="checkbox"
            checked={checked}
            onChange={checkHandler}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {t("Consent")}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Contact;

const StyledContactForm = styled.div`
  display: flex;
  justify-content: center;
  width: 350px;
  margin: auto;
  margin-top: 60px;
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
