import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faNoteSticky,
  faBed,
  faCoins,
  faPeopleGroup,
  faSailboat,
  faCreditCard,
  faPlane,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import da from "../assets/da.jpeg";
import { useTranslation } from "react-i18next";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ConfirmedScreen = ({ values, prevStep, nextStep, handleFormData }) => {
  const { t } = useTranslation();

  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);
  const [q3, setQ3] = useState(false);
  const [q4, setQ4] = useState(false);
  const [q5, setQ5] = useState(false);
  const [q6, setQ6] = useState(false);
  const [q7, setQ7] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [checked, setChecked] = useState(false);

  const accord = () => {
    setChecked(true);
  };

  const checkHandler = () => {
    setChecked(!checked);
    accord();
  };

  useEffect(() => {
    checked === true && handleFormData("gdpr", checked);
  }, [checked]);

  const formatPrice = (price) => {
    const str = JSON.stringify(price);
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formatDate = (date) => {
    const newDate = date && date.split(" ");
    return `${newDate[0]} - ${newDate[1]}`;
  };

  const [toSend, setToSend] = useState({
    first_name: "",
    last_name: "",
    week_start: values.week.start,
    week_end: values.week.end,
    total: "€" + values.cabin.total,
    sail_type: values.category,
    boat: values.boat,
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_vz1mhb8", "template_8aom1se", toSend, "YuDSusaOKA9KG3ye3")
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(() => nextStep());
  };

  return (
    <div
      className="flex flex-col justify-center md:justify-start"
      style={{ minHeight: "160vh" }}
    >
      <Navbar />
      <div className="flex flex-col justify-center mt-24 text-center">
        <div className="flex flex-row justify-center">
          <span className="p-4 border-b-8 border-gri cursor-pointer">
            {t("Category")}
          </span>
          <span className="p-4 border-b-8 border-gri">{t("Week")}</span>
          <span
            onClick={() => prevStep()}
            className="p-4 border-b-8 border-gri cursor-pointer"
          >
            {t("Boat")}
          </span>
          <span className="p-4 border-b-8 border-albastru">{t("Confirm")}</span>
        </div>
        <button
          onClick={() => prevStep()}
          className="w-16 mx-auto mt-10 text-alb rounded bg-albastru"
        >
          {t("Back")}
        </button>
      </div>
      <div className="w-full flex flex-col justify-center mx-auto items-center mt-20 mb-20">
        <h1 className="text-3xl font-bold">{t("Booking summary")}</h1>
        <div className="w-full flex  justify-center flex-wrap">
          <div
            style={{ backgroundColor: "white" }}
            className="w-full lg:w-2/3 h-full flex flex-row md:justify-start shadow-lg mx-4 p-4 rounded-lg mt-24"
          >
            <div className="w-full  flex flex-col bg-white">
              <img className="w-full" src={da} alt="da" />
              <div className="flex flex-row justify-between mb-2 font-semibold">
                <h1 className="mt-6 text-2xl">{values.boat}</h1>
              </div>
              <div className="flex flex-col mb-2">
                <h1 className="mt-2" style={{ color: "#838995" }}>
                  {t("From")}:€
                  {values.cabin !== null ? formatPrice(values.week.person) : ""}
                  /{t("person")}
                </h1>
                <h1 className="mt-2" style={{ color: "#B2B7C2" }}>
                  {t("Up to")}{" "}
                  {values.fullYacht === false
                    ? values.cabin.boysCabin * 2 +
                      values.cabin.mixedCabin * 2 +
                      values.cabin.girlsCabin * 2
                    : "10"}{" "}
                  {t("guests")}
                </h1>
                <h1 className="mt-2 text-md" style={{ color: "#838995" }}>
                  {t("ClassMono")}
                </h1>
              </div>
              <div className="mt-10 hover:shadow-md">
                <div
                  onClick={() => (q1 === false ? setQ1(true) : setQ1(false))}
                  className="flex justify-between summaryBox rounded-md hover:shadow-md cursor-pointer font-semibold"
                >
                  <h1>{t("What's included?")}</h1>
                  <FontAwesomeIcon className="text-xl" icon={faNoteSticky} />
                </div>
                {q1 === true && (
                  <div className="w-full h-22  sm:min-h-fit flex flex-col flex-wrap justify-between summaryBox hover:shadow-lg font-semibold">
                    <div className="flex flex-col">
                      <div className="flex mt-2">
                        <FontAwesomeIcon
                          style={{ color: "#45DB5D" }}
                          icon={faCheck}
                        />
                        <h1
                          style={{ color: "#838995" }}
                          className="text-sm font-normal ml-2"
                        >
                          {values.boat} Yacht
                        </h1>
                      </div>
                      <div className="flex mt-2">
                        <FontAwesomeIcon
                          style={{ color: "#45DB5D" }}
                          icon={faCheck}
                        />
                        <h1
                          style={{ color: "#838995" }}
                          className="text-sm font-normal ml-2"
                        >
                          {t("7 days and 6 nights")}
                        </h1>
                      </div>
                      <div className="flex mt-2">
                        <FontAwesomeIcon
                          style={{ color: "#45DB5D" }}
                          icon={faCheck}
                        />
                        <h1
                          style={{ color: "#838995" }}
                          className="text-sm font-normal ml-2"
                        >
                          International Djs
                        </h1>
                      </div>
                      <div className="flex mt-2">
                        <FontAwesomeIcon
                          style={{ color: "#45DB5D" }}
                          icon={faCheck}
                        />
                        <h1
                          style={{ color: "#838995" }}
                          className="text-sm font-normal ml-2"
                        >
                          {t("Towels & bed linen")}
                        </h1>
                      </div>
                      <div className="flex mt-2 mb-2">
                        <FontAwesomeIcon
                          style={{ color: "#45DB5D" }}
                          icon={faCheck}
                        />
                        <h1
                          style={{ color: "#838995" }}
                          className=" text-sm font-normal ml-2"
                        >
                          {t("WIFI (sometimes – it is the ocean after all!)")}
                        </h1>
                      </div>
                      <div className="flex mt-2 mb-2">
                        <FontAwesomeIcon
                          style={{ color: "#45DB5D" }}
                          icon={faCheck}
                        />
                        <h1
                          style={{ color: "#838995" }}
                          className=" text-sm font-normal ml-2"
                        >
                          Professional Skipper
                        </h1>
                      </div>
                      <div className="flex mt-2 mb-2">
                        <FontAwesomeIcon
                          style={{ color: "#45DB5D" }}
                          icon={faCheck}
                        />
                        <h1
                          style={{ color: "#838995" }}
                          className=" text-sm font-normal ml-2"
                        >
                          {t(
                            "All Access Pass to exclusive The Yacht Week events"
                          )}
                        </h1>
                      </div>
                      <div className="flex mt-2 mb-2">
                        <FontAwesomeIcon
                          style={{ color: "#45DB5D" }}
                          icon={faCheck}
                        />
                        <h1
                          style={{ color: "#838995" }}
                          className=" text-sm font-normal ml-2"
                        >
                          {t("Stereo speakers")}
                        </h1>
                      </div>
                      <div className="flex mt-2 mb-2">
                        <FontAwesomeIcon
                          style={{ color: "#45DB5D" }}
                          icon={faCheck}
                        />
                        <h1
                          style={{ color: "#838995" }}
                          className=" text-sm font-normal ml-2"
                        >
                          Vis water taxis
                        </h1>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-3">
                <div
                  onClick={() => (q2 === false ? setQ2(true) : setQ2(false))}
                  className="flex flex-row justify-between summaryBox rounded-md hover:shadow-md cursor-pointer font-semibold"
                >
                  <h1>{t("Where do you sleep?")}</h1>
                  <FontAwesomeIcon className="text-xl" icon={faBed} />
                </div>
                {q2 === true && (
                  <div className="w-full h-22  sm:min-h-fit flex flex-col flex-wrap justify-between summaryBox hover:shadow-lg font-semibold">
                    <div className="flex flex-col">
                      <div className="flex mt-2">
                        <h1
                          style={{ color: "#838995" }}
                          className="text-sm font-normal ml-2"
                        >
                          {t("You will have to choose one of the free cabins.")}
                        </h1>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-3">
                <div
                  onClick={() => (q3 === false ? setQ3(true) : setQ3(false))}
                  className="flex flex-row justify-between summaryBox rounded-md hover:shadow-md cursor-pointer font-semibold"
                >
                  <h1>{t("Are there any extra costs?")}</h1>
                  <FontAwesomeIcon className="text-xl" icon={faCoins} />
                </div>
                {q3 === true && (
                  <div className="w-full h-22  sm:min-h-fit flex flex-col flex-wrap justify-between summaryBox hover:shadow-lg font-semibold">
                    <div className="flex flex-col">
                      <div className="flex mt-2">
                        <h1
                          style={{ color: "#838995" }}
                          className="text-sm font-normal ml-2 mb-4"
                        >
                          {t("These costs are not included in your booking.")}
                        </h1>
                      </div>
                      <div className="flex mt-2">
                        <FontAwesomeIcon
                          style={{ color: "#DD2726" }}
                          icon={faX}
                        />
                        <h1
                          style={{ color: "#838995" }}
                          className="text-sm font-normal ml-2"
                        >
                          {t("Port fees")}
                        </h1>
                      </div>
                      <div className="flex mt-2">
                        <FontAwesomeIcon
                          style={{ color: "#DD2726" }}
                          icon={faX}
                        />
                        <h1
                          style={{ color: "#838995" }}
                          className="text-sm font-normal ml-2"
                        >
                          {t("Refundable yacht deposit")}
                        </h1>
                      </div>
                      <div className="flex mt-2">
                        <FontAwesomeIcon
                          style={{ color: "#DD2726" }}
                          icon={faX}
                        />
                        <h1
                          style={{ color: "#838995" }}
                          className="text-sm font-normal ml-2"
                        >
                          {t("Alcohol and meals out")}
                        </h1>
                      </div>
                      <div className="flex mt-2">
                        <FontAwesomeIcon
                          style={{ color: "#DD2726" }}
                          icon={faX}
                        />
                        <h1
                          style={{ color: "#838995" }}
                          className="text-sm font-normal ml-2"
                        >
                          Water taxis
                        </h1>
                      </div>
                      <div className="flex mt-2">
                        <FontAwesomeIcon
                          style={{ color: "#DD2726" }}
                          icon={faX}
                        />
                        <h1
                          style={{ color: "#838995" }}
                          className=" text-sm font-normal ml-2"
                        >
                          {t("Yacht fuel, shore power")}
                        </h1>
                      </div>
                      <div className="flex mt-2">
                        <FontAwesomeIcon
                          style={{ color: "#DD2726" }}
                          icon={faX}
                        />
                        <h1
                          style={{ color: "#838995" }}
                          className=" text-sm font-normal ml-2"
                        >
                          {t("Transfers to and from the airport")}
                        </h1>
                      </div>
                      <div className="flex mt-2 mb-2">
                        <FontAwesomeIcon
                          style={{ color: "#DD2726" }}
                          icon={faX}
                        />
                        <h1
                          style={{ color: "#838995" }}
                          className=" text-sm font-normal ml-2"
                        >
                          {t("Additional dinners for skipper & host")}
                        </h1>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-3">
                <div
                  onClick={() => (q4 === false ? setQ4(true) : setQ4(false))}
                  className="flex flex-row justify-between summaryBox rounded-md hover:shadow-md cursor-pointer font-semibold"
                >
                  <h1>{t("Who will my crew be?")}</h1>
                  <FontAwesomeIcon className="text-xl" icon={faPeopleGroup} />
                </div>
                {q4 === true && (
                  <div className="w-full h-22  sm:min-h-fit flex flex-col flex-wrap justify-between summaryBox hover:shadow-lg font-semibold">
                    <div className="flex flex-col">
                      <div className="flex mt-2">
                        <h1
                          style={{ color: "#838995" }}
                          className="text-sm font-normal ml-2"
                        >
                          {t("Crew1")}
                        </h1>
                      </div>
                      <div className="flex mt-2">
                        <h1
                          style={{ color: "#838995" }}
                          className="text-sm font-normal ml-2"
                        >
                          {t("Crew2")}
                        </h1>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-3">
                <div
                  onClick={() => (q5 === false ? setQ5(true) : setQ5(false))}
                  className="flex flex-row justify-between summaryBox rounded-md hover:shadow-md cursor-pointer font-semibold"
                >
                  <h1>{t("What yacht will I be sailing on?")}</h1>
                  <FontAwesomeIcon className="text-xl" icon={faSailboat} />
                </div>
                {q5 === true && (
                  <div className="h-22  sm:min-h-fit flex flex-col flex-wrap justify-between summaryBox hover:shadow-lg font-semibold">
                    <div className="flex flex-col">
                      <div className="flex mt-2">
                        <h1
                          style={{ color: "#838995" }}
                          className="text-sm font-normal ml-2"
                        >
                          The {values.boat} yacht.
                        </h1>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-3">
                <div
                  onClick={() => (q6 === false ? setQ6(true) : setQ6(false))}
                  className="flex flex-row justify-between summaryBox rounded-md hover:shadow-md cursor-pointer font-semibold"
                >
                  <h1>{t("Refundable yacht deposit")}</h1>
                  <FontAwesomeIcon className="text-xl" icon={faCreditCard} />
                </div>
                {q6 === true && (
                  <div className="h-22  sm:min-h-fit flex flex-col flex-wrap justify-between summaryBox hover:shadow-lg font-semibold">
                    <div className="flex flex-col">
                      <div className="flex mt-2">
                        <h1
                          style={{ color: "#838995" }}
                          className="font-normal text-md ml-2"
                        >
                          {t("Crew3")}
                        </h1>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-3">
                <div
                  onClick={() => (q7 === false ? setQ7(true) : setQ7(false))}
                  className="flex flex-row justify-between summaryBox rounded-md hover:shadow-md cursor-pointer font-semibold"
                >
                  <h1>{t("What airport do I fly into?")}</h1>
                  <FontAwesomeIcon className="text-xl" icon={faPlane} />
                </div>
                {q7 === true && (
                  <div className="h-22  sm:min-h-fit flex flex-col flex-wrap justify-between summaryBox hover:shadow-lg font-semibold">
                    <div className="flex flex-col">
                      <div className="flex mt-2">
                        <h1
                          style={{ color: "#838995" }}
                          className="font-normal text-md ml-2"
                        >
                          {t("Crew4")}
                        </h1>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "white" }}
            className="w-full lg:w-96 h-full flex flex-row justify-center md:justify-start shadow-lg mx-4 p-4 rounded-lg mt-24 mb-12"
          >
            <div className="w-full flex flex-col bg-white mt-44">
              <div className="flex flex-col justify-between mb-2 font-semibold">
                <h1>Croatia - {t("Original Route")}</h1>
                <h1 style={{ color: "#B8BDC7" }} className="text-sm mt-2">
                  {values.week
                    ? formatDate(values.week.start + " " + values.week.end)
                    : ""}
                </h1>
                <hr style={{ color: "#E0E4EA" }} className="mt-4 w-full" />
              </div>
              <div className="flex flex-col justify-between mb-2">
                <h1 className="font-semibold text-xl mt-4">
                  €
                  {values.fullYacht === false
                    ? formatPrice(
                        (values.cabin.boysCabin +
                          values.cabin.girlsCabin +
                          values.cabin.mixedCabin * 2) *
                          values.week.person
                      )
                    : formatPrice(values.week.full)}
                </h1>
                <h1
                  style={{ color: "#B8BDC7" }}
                  className="font-semibold text-sm mt-2"
                >
                  {t("Based on")}{" "}
                  {values.fullYacht === true
                    ? "10"
                    : values.cabin.boysCabin * 2 +
                      values.cabin.mixedCabin * 2 +
                      values.cabin.girlsCabin * 2}{" "}
                  {t("guests")}
                </h1>
                <hr style={{ color: "#E0E4EA" }} className="mt-4 w-full" />
              </div>
              <div className="flex flex-col justify-between mb-2">
                <h1 className="font-semibold text-xl mt-4">
                  {t("Cost breakdown")}
                </h1>
                <div className="flex flex-row justify-between font-semibold text-sm mt-2">
                  <h1 className="font-semibold text-sm">{t("Cabin rental")}</h1>
                  <h1 className="font-semibold text-sm">
                    {values.fullYacht === false
                      ? formatPrice(
                          (values.cabin.boysCabin +
                            values.cabin.girlsCabin +
                            values.cabin.mixedCabin * 2) *
                            values.week.person
                        )
                      : formatPrice(values.week.full)}
                  </h1>
                </div>
                <div className="flex flex-row justify-between mt-2">
                  <h1 className="font-semibold text-sm">Skipper</h1>
                  <FontAwesomeIcon
                    className=""
                    style={{ color: "#45DB5D" }}
                    icon={faCheck}
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between mb-2">
                <h1 className="font-semibold text-xl mt-4">Total</h1>
                <h1 className="font-semibold text-xl mt-4">
                  €
                  {values.fullYacht === false
                    ? formatPrice(
                        (values.cabin.boysCabin +
                          values.cabin.girlsCabin +
                          values.cabin.mixedCabin * 2) *
                          values.week.person
                      )
                    : formatPrice(values.week.full)}
                </h1>
              </div>
              {values.fullYacht === true && (
                <div className="flex flex-row mt-2">
                  <h1 className="font-semibold text-md">
                    {t("Crew members")}:
                  </h1>
                  <h1 className="font-semibold text-md ml-2">11</h1>
                </div>
              )}
              <div className="flex flex-col justify-between mb-2">
                <h1 className="font-semibold text-lg mt-4">
                  {values.fullYacht === false
                    ? values.cabin.boysCabin +
                      values.cabin.mixedCabin +
                      values.cabin.girlsCabin +
                      " " +
                      t("cabins selected")
                    : t("Full Yacht selected")}
                </h1>
                <div
                  style={{ color: "#B7BCC6" }}
                  className="flex flex-row justify-between font-semibold text-sm mt-2"
                >
                  <h1 className="font-semibold text-sm">{t("Girls")}</h1>
                  <h1 className="font-semibold text-sm">
                    {values.cabin !== null && values.cabin.girlsCabin}
                  </h1>
                </div>
                <div
                  style={{ color: "#B7BCC6" }}
                  className="flex flex-row justify-between font-semibold text-sm mt-2"
                >
                  <h1 className="font-semibold text-sm">{t("Boys")}</h1>
                  <h1 className="font-semibold text-sm">
                    {values.cabin !== null && values.cabin.boysCabin}
                  </h1>
                </div>
                <div
                  style={{ color: "#B7BCC6" }}
                  className="flex flex-row justify-between font-semibold text-sm mt-2"
                >
                  <h1 className="font-semibold text-sm">{t("Mixed")}</h1>
                  <h1 className="font-semibold text-sm">
                    {values.cabin !== null && values.cabin.mixedCabin}
                  </h1>
                </div>
                <hr style={{ color: "#E0E4EA" }} className="mt-4 w-full" />
              </div>
              <div className="flex flex-col justify-between mb-2">
                <h1 className="font-semibold text-lg mt-4">
                  {t("Flexibility")}
                </h1>
                <div className="flex flex-row justify-between font-semibold text-sm mt-2">
                  <h1 className="font-semibold text-sm">
                    {t("Free 24 hour cancellation")}
                  </h1>
                  <FontAwesomeIcon
                    className=""
                    style={{ color: "#45DB5D" }}
                    icon={faCheck}
                  />
                </div>
                <div className="flex flex-row justify-between font-semibold text-sm mt-2">
                  <h1 className="font-semibold text-sm">
                    {t("Split with friends")}
                  </h1>
                  <FontAwesomeIcon
                    style={{ color: "#45DB5D" }}
                    icon={faCheck}
                  />
                </div>
                <hr style={{ color: "#E0E4EA" }} className="mt-4 w-full" />
              </div>
              <div className="flex flex-col mb-4 mt-2">
                <h1 className="font-normal text-sm">{t("GDPR")}</h1>
                <div className="flex mt-4">
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
              <button
                onClick={handleOpen}
                style={{ fontFamily: "sofia", backgroundColor: "#45DB5D" }}
                className="w-full h-10 mt-10 p-1/2 rounded-lg buttons"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <StyledContactForm>
            <form onSubmit={sendEmail}>
              <label>{t("First Name")}</label>
              <input
                onChange={handleChange}
                type="text"
                name="first_name"
                value={toSend.first_name}
              />
              <label>{t("Last Name")}</label>
              <input
                type="text"
                onChange={handleChange}
                value={toSend.last_name}
                name="last_name"
              />
              <label>Email</label>
              <input onChange={handleChange} type="email" name="user_email" />
              <input
                type="text"
                style={{ display: "none" }}
                name="week_start"
                value={toSend.week_start}
              />
              <input
                type="text"
                style={{ display: "none" }}
                name="week_end"
                value={toSend.week_end}
              />
              <input
                type="text"
                style={{ display: "none" }}
                name="total"
                value={toSend.total}
              />
              <input
                type="text"
                style={{ display: "none" }}
                name="sail_type"
                value={toSend.sail_type}
              />
              <input
                type="text"
                style={{ display: "none" }}
                name="boat"
                value={toSend.boat}
              />
              <input type="submit" value="Send" />
            </form>
          </StyledContactForm>
        </Box>
      </Modal>
    </div>
  );
};

const StyledContactForm = styled.div`
  display: flex;
  justify-content: center;
  width: 350px;
  margin: auto;
  margin-top: 150px;
  margin-bottom: 80px;
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

export default ConfirmedScreen;
