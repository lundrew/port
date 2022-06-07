import project1 from './Images/Projects/calc.png';
import project2 from './Images/Projects/rgb.png';

const Projects = () => {
  return (
    <section id="projects" className="project-section">
      <h1 className="project-section-h1">Projects</h1>
      <div className="projects-cnt">
        <div className="project-wrapper">
          <div className="project-description">
            <h1>Calculator</h1>
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
    </section>
  );
};

export default Projects;
