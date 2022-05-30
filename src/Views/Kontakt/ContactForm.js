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
  let [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    // Set email to lowercase
    email = email.toLowerCase();

    if (
      name.length >= 1 &&
      message.length >= 5 &&
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    ) {
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
      setName("");
      setEmail("");
      setMessage("");
      // Clears form after successful submit
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
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
      {/* <span className={emailSent ? "visible" : null}>
        Thank you for your message, we will be in touch in no time!
      </span> */}
    </div>
  );
};

export default ContactForm;
