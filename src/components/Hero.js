import "../styles.css";
import Identity from "./Images/identity.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IconContext } from "react-icons";

const Hero = () => {
  return (
    <IconContext.Provider value={{ className: "media-icons" }}>
      <section id="home" className="hero--cnt">
        {/* <div className="hero-img-cnt">
          <img className="hero-img" src={Identity} alt="programmer" />
        </div> */}
        <div className="hero-text-cnt">
          {/* <h1 className="name">Hey, I'm Andrew Luna</h1>
          <h1 className="job-title">
            I build websites as a full stack web developer
          </h1> */}
          <div>
            <a
              className="linkedin"
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/andrewlunasd/"
            >
              <FaLinkedin />
            </a>
            <a
              className="github"
              target="_blank"
              rel="noopener"
              href="https://github.com/lundrew"
            >
              <FaGithub />
            </a>
            <a
              className="email"
              href="mailto:andrueee@gmail.com? subject=message from portfolio"
            >
              <HiOutlineMail />
            </a>
          </div>
        </div>
      </section>
    </IconContext.Provider>
  );
};

export default Hero;
