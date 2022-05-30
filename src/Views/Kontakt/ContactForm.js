import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
// import { init } from "emailjs-com";
// init("user_id");

import styles from "./contact-form.module.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  let [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    // Set email to lowercase
    email = email.toLowerCase();

    if (
      name.length >= 1 &&
      lastname.length >= 1 &&
      message.length >= 4 &&
      subject.length >= 2 &&
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    ) {
      const serviceId = "HeideteamSmtp";
      const templateId = "template_uxle599";
      const userId = "IWEqaF6H3Jvyjj0MT";
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
      // Clears form after successful submit
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className={styles["contact-form-container"]} id="contact-form">
      <form className={styles["contact-form"]}>
        <input
          className={styles["contact-form-input"]}
          type="text"
          placeholder="Vorname"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className={styles["contact-form-input"]}
          type="text"
          placeholder="Nachname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />

        <input
          className={styles["contact-form-input"]}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className={styles["contact-form-input"]}
          type="text"
          placeholder="Thema"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <textarea
          className={styles["contact-form-input"]}
          type="text"
          placeholder="Schreiben Sie ihre Nachricht hier"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit" onClick={submit}>
          Nachricht senden
        </button>
        {/* <span className={emailSent ? "visible" : null}>
        Thank you for your message, we will be in touch in no time!
      </span> */}
      </form>
    </div>
  );
};

export default ContactForm;
