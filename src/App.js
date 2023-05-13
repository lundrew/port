import "./styles.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Helmet from "react-helmet";
import GithubAPI from "./components/GithubAPI";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Footer />
      <GithubAPI />
    </div>
  );
}

export default App;
