import React, { useState } from "react";
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
      // Reset form
      setName("");
      setLastname("");
      setEmail("");
      setSubject("");
      setMessage("");
      setNameError(false);
      setLastNameError(false);
      setEmailError(false);
      setSubjectError(false);
      setMessageError(false);

      // Clears AND disables form after successful submit
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

      alert(
        `Bitte gehen Sie sicher, dass alle Felder korrekt ausgefüllt sind, bevor Sie "Nachricht senden" klicken.`
      );
    }
  };

  return (
    <section className={styles["contact-form-section"]} id="form">
      <div className={styles["contact-form-container"]} id="contact-form">
        <form className={styles["contact-form"]}>
          <h3 className={styles["form-heading"]}>Schreiben Sie uns</h3>

          <div className={styles["heading-underline"]}></div>

          <label className={styles["contact-form-label"]} htmlFor="fistname">
            Vorname
          </label>
          {/* Error handler */}
          {nameError ? (
            <span className={styles["error-message"]}>
              {" "}
              * Ungültige Eingabe
            </span>
          ) : null}
          <input
            className={styles["contact-form-input"]}
            type="text"
            // placeholder="Ihr Vorname"
            value={name}
            name="fistname"
            maxLength="50"
            onChange={(e) => setName(e.target.value)}
            // Disable on successful submit
            disabled={emailSent}
          />

          <label className={styles["contact-form-label"]} htmlFor="lastname">
            Name
          </label>
          {/* Error handler */}
          {lastNameError ? (
            <span className={styles["error-message"]}>
              {" "}
              * Ungültige Eingabe
            </span>
          ) : null}
          <input
            className={styles["contact-form-input"]}
            type="text"
            // placeholder="Ihr Nachname"
            value={lastname}
            name="lastname"
            maxLength="50"
            onChange={(e) => setLastname(e.target.value)}
            // Disable on successful submit
            disabled={emailSent}
          />

          <label className={styles["contact-form-label"]} htmlFor="email">
            E-Mail
          </label>
          {/* Error handler */}
          {emailError ? (
            <span className={styles["error-message"]}>
              {" "}
              * Ungültige E-Mail-Adresse
            </span>
          ) : null}
          <input
            className={styles["contact-form-input"]}
            type="email"
            placeholder="Ihre E-Mail-Adresse"
            value={email}
            name="email"
            maxLength="50"
            onChange={(e) => setEmail(e.target.value)}
            // Disable on successful submit
            disabled={emailSent}
          />

          <label className={styles["contact-form-label"]} htmlFor="subject">
            Betreff
          </label>
          {/* Error handler */}
          {subjectError ? (
            <span className={styles["error-message"]}>
              {" "}
              * Bitte geben Sie einen Betreff an
            </span>
          ) : null}
          <input
            className={styles["contact-form-input"]}
            type="text"
            placeholder="Ihr Betreff"
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
            <span className={styles["error-message"]}>
              {" "}
              * Bitte geben Sie Ihren Text hier ein
            </span>
          ) : null}
          <textarea
            className={`${styles["contact-form-input"]} ${styles["text-container"]}`}
            type="text"
            placeholder="Schreiben Sie ihre Nachricht hier"
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            // Disable on successful submit
            disabled={emailSent}
          ></textarea>

          {/* Conditional render of Button or thank you message based on sent state */}
          {emailSent === false ? (
            <button
              className={styles["submit-button"]}
              type="submit"
              onClick={submit}
            >
              Nachricht senden
            </button>
          ) : (
            <span className={styles["sent-message-notification"]}>
              {" "}
              Vielen Dank für Ihre Nachricht!
              <br />
              <span>Wir beantworten Ihre Anfrage schnellstmöglich.</span>
            </span>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
