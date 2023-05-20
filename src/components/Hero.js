import "../styles.css";
import Identity from "./Images/identity.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IconContext } from "react-icons";

import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

const Hero = () => {
  return (
    <IconContext.Provider value={{ className: "media-icons" }}>
      <section id="home" className="hero--cnt">
        <div className="hero-text-cnt">
          <div className="intro-div">
            <h1 className="intro-header">Full Stack Web Developer 👋🏽</h1>
            <h1 className="intro">
              Hi, I'm Andrew Luna. A Full Stack Web Developer based in San
              Diego, California.
            </h1>
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/andrewlunasd/"
            >
              <FaLinkedin />
            </a>
            <a target="_blank" rel="noopener" href="https://github.com/lundrew">
              <FaGithub />
            </a>
            <a href="mailto:andrewmlun@gmail.com? subject=message from portfolio">
              <HiOutlineMail />
            </a>
            <section className="skills-section">
              <div className="skills-cnt">
                <h3 className="skills-text">Tech Stack</h3>
                <div className="skill-items-cnt">
                  <IconContext.Provider value={{ className: "skill-items" }}>
                    <AiFillHtml5
                      className="skill-icons"
                      style={{ color: "#f55a42" }}
                    />
                    <IoLogoCss3
                      className="skill-icons"
                      style={{ color: "#066BF7" }}
                    />
                    <IoLogoJavascript
                      className="skill-icons"
                      style={{
                        color: "#000",
                        backgroundColor: "#EDD62E ",
                      }}
                    />
                    <FaReact
                      className="skill-icons"
                      style={{ color: "#066BF7 " }}
                    />
                    <SiRubyonrails
                      className="skill-icons"
                      style={{ color: "red" }}
                    />
                    <SiPostgresql
                      className="skill-icons"
                      style={{ color: "teal" }}
                    />
                  </IconContext.Provider>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="hero-img-cnt">
          <img className="hero-img" src={Identity} alt="programmer" />
        </div>
      </section>
    </IconContext.Provider>
  );
};

export default Hero;
