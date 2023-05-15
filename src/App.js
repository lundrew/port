import "./styles.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Helmet from "react-helmet";
import GithubAPI from "./components/GithubAPI";
import BGImage from "./components/Images/bg.jpeg";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

function App() {
  const [show, setShow] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const handleToggle = () => setShow(!show);
  const handleToggleSkills = () => setShowSkills(!showSkills);

  const animationProps = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : "translateY(-100px)",
    opacity: !show ? 0 : 1,
    transform: !show ? "translateY(-100px)" : "translateY(0)",
  });

  return (
    <div
      style={{
        position: "absolute",
        backgroundImage: `url(${BGImage})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "1440px",
        height: "733px",
        boxShadow: "inset 0px 0px 4px 80px #fff",
      }}
    >
      {!show ? (
        <button
          type="button"
          className="btn-projects"
          onClick={handleToggle}
          style={{ fontFamily: "lato", fontWeight: "400" }}
        >
          PROJECTS
          <SlArrowDown
            style={{
              color: "#000 ",
              fontSize: ".7rem",
              marginTop: "2px",
              marginLeft: "-4px",
            }}
          />
        </button>
      ) : (
        <button
          type="button"
          className="btn-projects-close"
          onClick={handleToggle}
          style={{ fontFamily: "lato", fontWeight: "400" }}
        >
          <SlArrowUp
            className="project-icons"
            style={{
              color: "#000 ",
              fontSize: ".7rem",
              marginTop: "2px",
              marginLeft: "30px",
              position: "absolute",
              top: "-18px",
            }}
          />
          CLOSE
        </button>
      )}
      {!showSkills ? (
        <button
          style={{
            position: "absolute",
            left: "30px",
            bottom: "10px",
            backgroundColor: "transparent",
            border: "none",
            fontFamily: "lato",
            fontWeight: "400",
            zIndex: 2,
            opacity: "30%",
            cursor: "pointer",
          }}
          onClick={handleToggleSkills}
        >
          SKILLS
          <SlArrowRight
            className="project-icons"
            style={{
              color: "#000 ",
              fontSize: ".7rem",
              marginLeft: "5px",
              position: "absolute",
              bottom: "18px",
            }}
          />
        </button>
      ) : (
        <button
          style={{
            position: "absolute",
            left: "30px",
            bottom: "10px",
            backgroundColor: "transparent",
            border: "none",
            fontFamily: "lato",
            fontWeight: "400",
            zIndex: 2,
            opacity: "40%",
            cursor: "pointer",
          }}
          onClick={handleToggleSkills}
        >
          <SlArrowLeft
            className="project-icons"
            style={{
              color: "#000 ",
              fontSize: ".7rem",
              marginLeft: "-14px",
              position: "absolute",
              bottom: "18px",
            }}
          />
          CLOSE
        </button>
      )}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Nav />
      {showSkills && <About />}
      <Hero />
      <animated.div class="project-section" style={animationProps}>
        {show && <Projects />}
      </animated.div>{" "}
      {/* <Footer />
      <GithubAPI /> */}
    </div>
  );
}

export default App;
