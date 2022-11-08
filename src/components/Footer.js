import "../styles.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IconContext } from "react-icons";
import emailjs from "@emailjs/browser";
import React, { useRef, form } from "react";
import { toast, Toaster } from "react-hot-toast";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    toast.success("Your message was delivered!");

    emailjs
      .sendForm(
        "service_56kt398",
        "template_1bzlg78",
        form.current,
        "XwXQt66PA2MD0KnKF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <IconContext.Provider value={{ className: "media-icons  " }}>
      <div>
        <div>
          <Toaster />
        </div>

        <div className="form-div">
          <div className="form">
            <div className="title">Let's Work Together!</div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="input-container ic1">
                <input
                  required
                  onSubmit="return validateForm()"
                  className="input"
                  placeholder="Name"
                  type="text"
                  name="from_name"
                />
              </div>
              <div className="input-container ic2">
                <input
                  required
                  className="input"
                  placeholder="Email Address"
                  type="email"
                  name="reply_to"
                />
              </div>
              <div className="input-container ic2">
                <input
                  required
                  className="input"
                  placeholder="Subject"
                  type="text"
                  name="subject"
                />
              </div>
              <div className="message-container">
                <textarea
                  className="input-message"
                  required
                  placeholder="Message"
                  name="message"
                />
              </div>
              <div className="row pt-5 mx-auto">
                <input className="submit" type="submit" value="Send Message" />
              </div>
            </form>
          </div>
        </div>

        <footer>
          <div className="links-cnt">
            <h2>Links</h2>
            <ul className="footer-ul">
              <li className="footer-li">
                <a className="footer-a" href="#home">
                  Home
                </a>
              </li>
              <li className="footer-li">
                <a className="footer-a" href="#about">
                  About
                </a>
              </li>
              <li className="footer-li">
                <a className="footer-a" href="#projects">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-icons">
            <h2>Contacts</h2>
            <div>
              <a
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/in/andrewlunasd/"
              >
                <FaLinkedin />
              </a>
              <a
                target="_blank"
                rel="noopener"
                href="https://github.com/lundrew"
              >
                <FaGithub />
              </a>
              <a href="mailto:andrewmlun@gmail.com? subject=message from portfolio">
                <HiOutlineMail />
              </a>
            </div>
            <p></p>
          </div>
        </footer>
      </div>
    </IconContext.Provider>
  );
};

export default Footer;
