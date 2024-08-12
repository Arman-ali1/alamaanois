import React, { useState, useRef } from "react";

// Styles
import "./contact.css";

// Email Js
import emailjs from "emailjs-com";

// image
import shakeImage from "../../assets/shake.svg";

// Components
import { Heading } from "../Heading/Heading.jsx";
import Button from "../Button/Button.jsx";

const Quickhelp = () => {
  const INITIAL_VALUES = { email: "", message: "" };
  const [notification, setNotification] = useState(false);
  const [values, setValues] = useState(INITIAL_VALUES);
  const [loading, setLoading] = useState(false);

  // Email-js
  const form = useRef();

  const sendEmail = async () => {
    try {
      const result = await emailjs.sendForm(
        `service_071bl7g`,
        `template_fng8fpb`,
        form.current,
        `5QtU3X-iuQVNDfA6V`
      );
      console.log("result ", result.text);
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  // Email-js

  const clearForm = () => {
    setValues(INITIAL_VALUES);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("form submitted !", values);
    // TODO : Send data to your email
    setLoading(true);
    await sendEmail();
    setLoading(false);
    clearForm();
    setNotification(true);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className="contact bg-blue-950 " name="contact" id="contact">
      <Heading text="Contact" style={{ marginBottom: "3rem" }} />
      <div className="content">
        <div className="left">
          <img  src={shakeImage} alt="shake hands" />
        </div>
        <div className="right">
          <form onSubmit={handleSubmit} ref={form}>
            <input
              type="email"
              name="email"
              className="border-[2px] border-white bg-gray-950 text-white"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              required
              className="border-[2px] border-white bg-gray-950 text-white"
              value={values.message}
              onChange={handleChange}
              placeholder="Message"
            ></textarea>
            <Button className='bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
              text={loading ? "Sending..." : "Send"}
              loading={loading}
              type="submit"
            />
            {notification && (
              <span style={{ color: "green", marginTop: "1rem" }}>
                Thanks, I will reply ASAP :)
              </span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Quickhelp;
