import project1 from './Images/Projects/calc.png';
import project2 from './Images/Projects/rgb.png';

import { IconContext } from 'react-icons';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiRubyonrails } from 'react-icons/si'
import { DiRuby } from 'react-icons/di'
import { SiPostman } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'

const Projects = () => {
  return (
    <section id="projects" className="project-section">
      <h1 className="project-section-h1">Projects</h1>


      <div className="scroll">
      <div className="projects-cnt">
        <div className="project-wrapper">
          <div className="project-description">
            <h1>Calculator</h1>
            <FaReact className="project-icons" style={{ color: '#066BF7 ',fontSize: '2rem', }} />
            <IoLogoJavascript className="project-icons" style={{color: '#000',backgroundColor: '#EDD62E ',fontSize: '2rem',}}/>
            <AiFillHtml5 className="project-icons" style={{ color: '#f55a42',fontSize: '2rem', }} />
            <IoLogoCss3 className="project-icons" style={{ color: '#066BF7',fontSize: '2rem', }} />
            <p></p>
            <div className="btn-wrapper">
              <a
                target="_blank"
                rel="noopener"
                className="project-btn-a"
                href="https://lundrew.github.io/calc/">
                <button className="project-btn">Live</button>
              </a>
              <a
                target="_blank"
                rel="noopener"
                className="project-btn-a"
                href="https://github.com/lundrew/calc">
                <button className="project-btn">Github</button>
              </a>
            </div>
          </div>
          <div className="project-img-cnt">
            <img className="project-img" src={project1} alt="project 1 image" />
          </div>
        </div>
        <div className="project-wrapper row-reverse">
          <div className="project-description">
            <h1>RGB Generator</h1>
            <FaReact className="project-icons" style={{ color: '#066BF7 ',fontSize: '2rem', }} />
            <IoLogoJavascript className="project-icons" style={{color: '#000',backgroundColor: '#EDD62E ',fontSize: '2rem',}}/>
            <AiFillHtml5 className="project-icons" style={{ color: '#f55a42',fontSize: '2rem', }} />
            <IoLogoCss3 className="project-icons" style={{ color: '#066BF7',fontSize: '2rem', }} />
            <p></p>
            <div className="btn-wrapper">
              <a
                target="_blank"
                rel="noopener"
                className="project-btn-a"
                href="https://lundrew.github.io/rgb/">
                <button className="project-btn">Live</button>
              </a>
              <a
                target="_blank"
                rel="noopener"
                className="project-btn-a"
                href="https://github.com/lundrew/rgb">
                <button className="project-btn">Github</button>
              </a>
            </div>
          </div>
          <div className="project-img-cnt">
            <img
              className="project-img "
              src={project2}
              alt="project 2 image"
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
