// import about from './Images/Aboutimg.jpg';
import { IconContext } from 'react-icons';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiRubyonrails } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';
import { SiPostman } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import Figma from './/Images/figma.png';
import Carousel from 'react-bootstrap/Carousel';


import PathUnkn from './Images/Projects/pathunkn.png';
import WireFrame from './Images/Projects/wireframe.png';

const About = () => {
  return (
    <>
      <section className="about--cnt" id="about">
        <div className="about-img-cnt">
          {/* <img className="about-photo" src={about} alt="about section photo" /> */}
        </div>
        <div className="about--text-cnt">
          <h1>About Me</h1>
          <p className="about-p">
            Hello, I'm Andrew a Full Stack Web Developer devoted to crafting beautiful web experiences focused on simplicity and purpose. Some of my key skills are communication, problem solving and being a fast paced learner. Please feel free to contact me below.
          </p>
          <a
            href="mailto:andrewmlun@gmail.com? subject=message from portfolio"
            className="contact-btn-a">
            <button className="contact-btn-about">
              Contact
            </button>
          </a>
        </div>
      </section>
      <section className="skills-section">
        <div className="skills-cnt">
        <h1>Skills</h1>
          <div className="skill-items-cnt">
            <IconContext.Provider value={{ className: 'skill-items' }}>
            <IoLogoJavascript className="skill-icons" style={{color: '#000',backgroundColor: '#EDD62E ',fontSize: '5rem',}}/>
              <FaReact className="skill-icons" style={{ color: '#066BF7 ' }} />
              <AiFillHtml5 className="skill-icons" style={{ color: '#f55a42' }} />
              <IoLogoCss3 className="skill-icons" style={{ color: '#066BF7' }} />
              <DiRuby className="skill-icons" style={{ color: 'red' }} />
              <SiRubyonrails className="skill-icons" style={{ color: 'red' }}/>
              <SiPostman className="skill-icons" style={{ color: 'red' }}/>
              <SiPostgresql className="skill-icons" style={{ color: 'teal' }}/>
              <FaGitAlt className="skill-icons" style={{ color: '#f55a42' }} />
              <FaGithub className="skill-icons" style={{ color: '#000' }} />
              <img src={Figma} width="90px" className="skill-icons" />
            </IconContext.Provider>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
