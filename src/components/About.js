import { IconContext } from "react-icons";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import Figma from ".//Images/figma.png";

const About = () => {
  return (
    <>
      {/* <section className="about--cnt" id="about">
        <div className="about-img-cnt"></div>
        <div className="about--text-cnt">
          <h1>About Me</h1>
          <p className="about-p">
            Hello, I'm Andrew a Full Stack Web Developer devoted to crafting
            beautiful web experiences focused on simplicity and purpose. Some of
            my key skills are communication, problem solving and being a fast
            paced learner. Please feel free to contact me below.
          </p>
          <a
            href="mailto:andrewmlun@gmail.com? subject=message from portfolio"
            className="contact-btn-a"
          >
            <button className="contact-btn-about">Contact</button>
          </a>
        </div>
      </section> */}
      <section className="skills-section">
        <div className="skills-cnt">
          {/* <h1>Skills</h1> */}
          <div className="skill-items-cnt">
            <IconContext.Provider value={{ className: "skill-items" }}>
              <IoLogoJavascript
                className="skill-icons-javascript"
                style={{
                  color: "#000",
                  backgroundColor: "#EDD62E ",
                  fontSize: "2rem",
                }}
              />
              <FaReact
                className="skill-icons"
                style={{ fontSize: "2rem", color: "#066BF7 " }}
              />
              <AiFillHtml5
                className="skill-icons-html"
                style={{ fontSize: "2rem", color: "#f55a42" }}
              />
              <IoLogoCss3
                className="skill-icons-css"
                style={{ fontSize: "2rem", color: "#066BF7" }}
              />
              <DiRuby
                className="skill-icons-ruby"
                style={{ fontSize: "2rem", color: "red" }}
              />
              <SiRubyonrails
                className="skill-icons-rails"
                style={{ fontSize: "2rem", color: "red" }}
              />
              <SiPostman
                className="skill-icons-postman"
                style={{ fontSize: "2rem", color: "red" }}
              />
              <SiPostgresql
                className="skill-icons-postgres"
                style={{ fontSize: "2rem", color: "teal" }}
              />
              <FaGitAlt
                className="skill-icons-git"
                style={{ fontSize: "2rem", color: "#f55a42" }}
              />
              <FaGithub
                className="skill-icons-github"
                style={{ fontSize: "2rem", color: "#000" }}
              />
              <img src={Figma} width="30px" className="skill-icons-figma" />
            </IconContext.Provider>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
