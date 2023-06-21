import "./page.css"
import React, { useState, useEffect } from "react";
import { LinkedInBadge } from "./LinkedInBadge";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/54075530-01f7-11ed-bc36-e1ea9ccadd33";




export const Contact = () => {
  useEffect(() => {
   
  }, []);

  (document.getElementById("side-menu") || {}).checked = false;

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <span className="title">Thank you!</span>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="page disableScrollbar">
      <div className="textContainer">
        <span className="title">Contact Me</span>
        <p>I believe in lifelong learning and continuous improvement. I'm really interested in full time jobs, hoping to connect with more lifelong learners and build the greatest team. </p>
        <p>Whether you have a question, just want to say hi or ask for my resume, I’ll try my best to get back to you!</p>

        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          <div className="formGrid">
            <div style={{ '--area': 'one' }} className="form">
              <input type="text" placeholder="Your name" name="name" required />
              <footer><div></div></footer>
            </div>
            <div style={{ '--area': 'two' }} className="form">
              <input type="email" placeholder="Email" name="email" required />
              <footer><div></div></footer>
            </div>
            <div style={{ '--area': 'three' }} className="form">
              <input type="Subject" placeholder="Subject" name="subject" required />
              <footer><div></div></footer>
            </div>
            <div style={{ '--area': 'four' }} className="form">
              <textarea placeholder="Your message" name="message" required />
              <footer><div></div></footer>
            </div>
            <div style={{ '--area': 'five' }} className="form">
              <button type="submit" className="flatButton" data-text="Send a message">Send a message
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="banner relativeBanner">
        <LinkedInBadge />
        <div className="codeBack"></div>


      </div>
    </div>
  );
};
