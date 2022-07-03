import "./page.css"
import React, { useState } from "react";
const FORM_ENDPOINT = ""; // TODO - fill on the later step




export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="page">
      <div className="textContainer">
        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          <div className="formGrid">
            <div style={{'--area': 'one'}} className="form">
              <input type="text" placeholder="Your name" name="name" required />
              <footer><div></div></footer>
            </div>
            <div style={{'--area': 'two'}} className="form">
              <input type="email" placeholder="Email" name="email" required />
              <footer><div></div></footer>
            </div>
            <div style={{'--area': 'three'}} className="form">
              <input type="Subject" placeholder="Subject" name="subject" required />
              <footer><div></div></footer>
            </div>
            <div style={{'--area': 'four'}} className="form">
              <textarea placeholder="Your message" name="message" required />
              <footer><div></div></footer>
            </div>
            <div style={{'--area': 'five'}} className="form">
              <button type="submit"> Send a message </button>
            </div>
          </div>
        </form>
      </div>
      <div className="banner"></div>
    </div>
  );
};
