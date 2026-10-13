import './About.css';
import ProfileImage from '../../assets/vivek.jpeg';

import {
  UserRound,
  GraduationCap,
  Building2,
  Award,
  MapPin,
  Download
} from 'lucide-react';

const About = () => {
  return (
    <div className="about">
      <div className="about-layout">

        {/* Left Side */}
        <div className="about-content">
          <div className="about-intro">
            <h1>About Me</h1>
            <p>Get to know me better</p>

            <p>
              Hi, I'm Vivek Saini, a passionate Frontend Developer
              with a strong interest in building clean, responsive,
              and user-friendly web applications. I enjoy turning
              ideas into real projects and constantly learning
              new technologies to improve my skills.
            </p>
          </div>

          {/* Personal Details */}
          <div className="about-details">
            <div className="detail-item">
              <UserRound size={18} />
              <strong>Name</strong>
              <span>:</span>
              <p>Vivek Saini</p>
            </div>

            <div className="detail-item">
              <GraduationCap size={18} />
              <strong>Education</strong>
              <span>:</span>
              <p>B.Tech in AI &amp; ML</p>
            </div>

            <div className="detail-item">
              <Building2 size={18} />
              <strong>College</strong>
              <span>:</span>
              <p>
                Shri Ram College of Engineering and Management,
                Banmore (MP)
              </p>
            </div>

            <div className="detail-item">
              <Award size={18} />
              <strong>CGPA</strong>
              <span>:</span>
              <p>7.28</p>
            </div>

            <div className="detail-item">
              <MapPin size={18} />
              <strong>Location</strong>
              <span>:</span>
              <p>Pune, India</p>
            </div>
          </div>

          {/* Resume Button */}
          <a
            href="/Vivek_Saini_Frontend_Developer_Resume.pdf"
            className="resume-button"
            download
          >
            Download Resume
            <Download size={16} />
          </a>
        </div>

        {/* Right Side */}
        <div className="about-side">
          <div className="about-image">
            <img
              src={ProfileImage}
              alt="Vivek working on a laptop"
            />
          </div>

          {/* Skills Card */}
          <div className="about-skills">
            <h2>My Skills</h2>

            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React.js</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>REST API</span>
              <span>Postman</span>
              <span>AI Prompting</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
