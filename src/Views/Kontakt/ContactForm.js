import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

import styles from "./contact-form.module.scss";

import { init } from "emailjs-com";
init("userId");

// import "dotenv/config";
// require("dotenv").config();

let SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
let TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
let USER_ID = process.env.REACT_APP_USER_ID;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  let [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  // Error state
  let [nameError, setNameError] = useState(false);
  let [lastNameError, setLastNameError] = useState(false);
  let [emailError, setEmailError] = useState(false);
  let [subjectError, setSubjectError] = useState(false);
  let [messageError, setMessageError] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    // Set email to lowercase
    email = email.toLowerCase();

    if (
      name.length >= 2 &&
      lastname.length >= 2 &&
      message.length >= 4 &&
      subject.length >= 2 &&
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    ) {
      let serviceId = SERVICE_ID;
      let templateId = TEMPLATE_ID;
      let userId = USER_ID;
      const templateParams = {
        name,
        lastname,
        email,
        subject,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));
      setName("");
      setLastname("");
      setEmail("");
      setSubject("");
      setMessage("");
      setEmailError(false);
      // Clears form after successful submit
      setEmailSent(true);
      // ! Error handling
    } else {
      // First name
      name.length < 2 ? setNameError(true) : setNameError(false);

      // Last name
      lastname.length < 2 ? setLastNameError(true) : setLastNameError(false);

      // email regex test
      if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        setEmailError(false);
      } else {
        setEmailError(true);
      }

      // Subject
      subject.length < 2 ? setSubjectError(true) : setSubjectError(false);

      // Message
      message.length < 4 ? setMessageError(true) : setMessageError(false);

      // ? And alert! - which will be a toast
      alert(
        "Please make sure to fill in all fields correctly before submitting."
      );
    }
  };

  return (
    <section className={styles["contact-form-section"]} id="form">
      <div className={styles["contact-form-container"]} id="contact-form">
        <form className={styles["contact-form"]}>
          <h3 className={styles["form-heading"]}>
            Schreib <b>uns</b>
          </h3>

          <div className={styles["heading-underline"]}></div>

          <label className={styles["contact-form-label"]} htmlFor="fistname">
            Vorname
          </label>
          {/* Error handler */}
          {nameError ? <span> * Please fill in your first name</span> : null}
          <input
            className={styles["contact-form-input"]}
            type="text"
            placeholder="Ihr Vorname"
            value={name}
            name="fistname"
            maxLength="50"
            onChange={(e) => setName(e.target.value)}
            // Disable on successful submit
            disabled={emailSent}
          />

          <label className={styles["contact-form-label"]} htmlFor="lastname">
            Nachname
          </label>
          {/* Error handler */}
          {lastNameError ? <span> * Please fill in your last name</span> : null}
          <input
            className={styles["contact-form-input"]}
            type="text"
            placeholder="Ihr Nachname"
            value={lastname}
            name="lastname"
            maxLength="50"
            onChange={(e) => setLastname(e.target.value)}
            // Disable on successful submit
            disabled={emailSent}
          />

          <label className={styles["contact-form-label"]} htmlFor="email">
            E-mail
          </label>
          {/* Error handler */}
          {emailError ? (
            <span> * Please fill in a valid email address</span>
          ) : null}
          <input
            className={styles["contact-form-input"]}
            type="email"
            placeholder="deine E-mail"
            value={email}
            name="email"
            maxLength="50"
            onChange={(e) => setEmail(e.target.value)}
            // Disable on successful submit
            disabled={emailSent}
          />

          <label className={styles["contact-form-label"]} htmlFor="subject">
            Subject
          </label>
          {/* Error handler */}
          {subjectError ? (
            <span> * Please fill in the subject field</span>
          ) : null}
          <input
            className={styles["contact-form-input"]}
            type="text"
            placeholder="Thema"
            value={subject}
            name="subject"
            maxLength="50"
            onChange={(e) => setSubject(e.target.value)}
            // Disable on successful submit
            disabled={emailSent}
          />

          <label className={styles["contact-form-label"]} htmlFor="message">
            Nachricht
          </label>
          {/* Error handler */}
          {messageError ? (
            <span> * Please fill in the message field</span>
          ) : null}
          <textarea
            className={`${styles["contact-form-input"]} ${styles["text-container"]}`}
            type="text"
            placeholder="Schreiben Sie ihre Nachricht hier"
            value={message}
            name="message"
            // maxLength="800"
            onChange={(e) => setMessage(e.target.value)}
            // Disable on successful submit
            disabled={emailSent}
          ></textarea>

          <button
            className={styles["submit-button"]}
            type="submit"
            onClick={submit}
          >
            Nachricht senden
          </button>

          {/*  Message on successful send! */}
          {emailSent === true ? (
            <span>
              {" "}
              Thank you for your message, we will be in touch in no time!
            </span>
          ) : null}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
