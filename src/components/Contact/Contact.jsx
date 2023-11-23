import React from "react";

import "../Contact/Contact.css";

function Contact() {
  return (
    <>
      <div className="contact"></div>
      <section className="contact_container-general">
        <p className="contact_title">Contact</p>
        <p className="contact_description">
          If you have an application you are interested in developing, a
          feature that you need built or a project that needs coding. I would
          love to help with it!
        </p>
      </section>

      <section className="form_container">
        <form
          action="https://formspree.io/f/xeqbwgkv"
          method="POST"
          encType="multipart/form-data"
          id="form"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            autoComplete="off"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            autoComplete="off"
            required
          />
          <textarea
            name="message"
            cols="60"
            rows="5"
            placeholder="Enter Your Message"
            autoComplete="off"
            required
          ></textarea>
          <input type="submit" value="Send" className="contact_btn" />
        </form>
      </section>
    </>
  );
}

export default Contact;
