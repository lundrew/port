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
      <div>
        <section className="skills-section">
          <div className="skills-cnt">
            {/* <h1>Skills</h1> */}
            <div className="skill-items-cnt">
              <IconContext.Provider value={{ className: "skill-items" }}>
                <IoLogoJavascript
                  className="skill-icons"
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
                  className="skill-icons"
                  style={{ fontSize: "2rem", color: "#f55a42" }}
                />
                <IoLogoCss3
                  className="skill-icons"
                  style={{ fontSize: "2rem", color: "#066BF7" }}
                />
                <DiRuby
                  className="skill-icons"
                  style={{ fontSize: "2rem", color: "red" }}
                />
                <SiRubyonrails
                  className="skill-icons"
                  style={{ fontSize: "2rem", color: "red" }}
                />
                <SiPostman
                  className="skill-icons"
                  style={{ fontSize: "2rem", color: "red" }}
                />
                <SiPostgresql
                  className="skill-icons"
                  style={{ fontSize: "2rem", color: "teal" }}
                />
                <FaGitAlt
                  className="skill-icons"
                  style={{ fontSize: "2rem", color: "#f55a42" }}
                />
                <FaGithub
                  className="skill-icons"
                  style={{ fontSize: "2rem", color: "#000" }}
                />
                <img src={Figma} width="30px" className="skill-icons" />
              </IconContext.Provider>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
