import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Navbar from "./Navbar";

const Confirm = ({ values, prevStep, nextStep, handleFormData }) => {
  const form = useRef();
  const [fname, setFName] = useState();
  const [lname, setLName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    handleFormData("firstName", fname);
    handleFormData("lastName", lname);
    handleFormData("age", age);
    handleFormData("email", email);
    console.log(values);

    emailjs
      .sendForm(
        "service_vz1mhb8",
        "template_8aom1se",
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
    nextStep();
  };

  return (
    <div>
      <Navbar />
      <div className="flex-1 justify-center mt-24 text-center">
        <div className="row justify-content-center">
          <span className="p-4 border-b-8 border-gri">Week</span>
          <span
            onClick={() => prevStep()}
            className="p-4 border-b-8 border-gri cursor-pointer"
          >
            Crew
          </span>
          <span className="p-4 border-b-8 border-albastru">Confirm</span>
        </div>
      </div>
      <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <label>First Name</label>
          <input
            onChange={(e) => setFName(e.target.value)}
            type="text"
            name="first_name"
          />
          <label>Last Name</label>
          <input
            onChange={(e) => setLName(e.target.value)}
            type="text"
            name="last_name"
          />
          <label>Age</label>
          <input
            onChange={(e) => setAge(e.target.value)}
            type="number"
            name="age"
          />
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="user_email"
          />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </StyledContactForm>
    </div>
  );
};

export default Confirm;

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
