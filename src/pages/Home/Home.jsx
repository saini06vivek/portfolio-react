import './Home.css';
import {
  Atom,
  CodeXml,
  GitBranch,
  Cloud,
  ArrowRight
} from 'lucide-react';
import ProfileImage from '../../assets/Vivek.jpg';

const Home = () => {
  const handleNavigation = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="home">
      <div className="home-hero">
        <div className="home-intro">
          <h2>Hello,</h2>

          <h1>
            I'm <span className="name-gradient">Vivek Saini</span>
          </h1>

          <h3>Frontend Developer | React.js Enthusiast</h3>

          <p>
            I build responsive and user-friendly web applications
            with modern technologies. Turning ideas into interactive
            and clean digital experiences.
          </p>

          <div className="home-buttons">
            <button
              className="primary-button"
              type="button"
              onClick={() => handleNavigation('projects')}
            >
              View My Work <ArrowRight size={18} />
            </button>

            <button
              className="secondary-button"
              type="button"
              onClick={() => handleNavigation('contact')}
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="home-profile">
          <div className="profile-decoration"></div>

          <img src={ProfileImage} alt="Vivek Saini" />

          <a
            href="https://github.com/saini06vivek/portfolio-react"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-code"
            aria-label="View portfolio source code on GitHub"
            title="View source code on GitHub"
          >
            <GitBranch size={28} />
          </a>
        </div>
      </div>

      <div className="skills-grid">
        <div className="cards">
          <Atom size={30} className="skill-icon" />
          <h3>React.js</h3>
        </div>

        <div className="cards">
          <CodeXml size={30} className="skill-icon" />
          <h3>JavaScript</h3>
        </div>

        <div className="cards">
          <GitBranch size={30} className="skill-icon" />
          <h3>Git & GitHub</h3>
        </div>

        <div className="cards">
          <Cloud size={30} className="skill-icon" />
          <h3>REST APIs</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
