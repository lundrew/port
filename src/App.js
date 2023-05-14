import "./styles.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Helmet from "react-helmet";
import GithubAPI from "./components/GithubAPI";
import BGImage from "./components/Images/bg.jpeg";

function App() {
  return (
    <div
      // className="App"
      style={{
        position: "absolute",
        backgroundImage: `url(${BGImage})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "1440px",
        height: "733px",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Nav />
      <About />

      <Hero />
      {/* <Projects />
      <Footer />
      <GithubAPI /> */}
    </div>
  );
}

export default App;
