import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
// import { init } from "emailjs-com";
// init("user_id");

const ContactForm = () => {
  //   function sendEmail(e) {
  //     e.preventDefault();
  //     emailjs
  //       .sendForm("smtptest", "template_uxle599", e.target, "IWEqaF6H3Jvyjj0MT")
  //       .then(
  //         (result) => {
  //           console.log(result.text);
  //         },
  //         (error) => {
  //           console.log(error.text);
  //         }
  //       );
  //   }
  //   return (
  //     <form className="contact-form" onSubmit={sendEmail}>
  //       <input type="hidden" name="contact_number" />
  //       <label>Name</label>
  //       <input type="text" name="user_name" />
  //       <label>Email</label>
  //       <input type="email" name="user_email" />
  //       <label>Message</label>
  //       <textarea name="message" />
  //       <input type="submit" value="Send" />
  //     </form>
  //   );
  // !! To incorporate later....
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const submit = () => {
    if (name && email && message) {
      // TODO - send mail
      const serviceId = "smtptest";
      const templateId = "template_uxle599";
      const userId = "IWEqaF6H3Jvyjj0MT";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));
      // !! End area
      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };
  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };
  return (
    <div id="contact-form">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={submit}>Send Message</button>
      <span className={emailSent ? "visible" : null}>
        Thank you for your message, we will be in touch in no time!
      </span>
    </div>
  );
};

export default ContactForm;
