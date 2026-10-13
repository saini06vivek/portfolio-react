import Navbar from "../Navbar/Navbar";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Projects from "../../pages/Projects/Projects";
import Contact from "../../pages/Contact/Contact";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />

      <main className="main-content">
        <section id="home" className="page-section">
          <div className="page-container">
            <Home />
          </div>
        </section>

        <section id="about" className="page-section">
          <div className="page-container">
            <About />
          </div>
        </section>

        <section id="projects" className="page-section">
          <div className="page-container">
            <Projects />
          </div>
        </section>

        <section id="contact" className="page-section">
          <div className="page-container">
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Layout;
