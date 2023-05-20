const About = () => {
  return (
    <>
      <section className="about--cnt" id="about">
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
      </section>
    </>
  );
};

export default About;
