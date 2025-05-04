import { NavLink } from "react-router-dom";
import "./App.css";

function About() {
  console.log("About component rendered");

  return (
    <main className="main">
      <section className="about-section">
        <div className="about-content">
          <h1 className="about-title">About Me</h1>
          <p className="about-text">
            I'm Jay Patel, a passionate UI/UX and Graphic Designer with over 2
            years of experience in creating intuitive, visually stunning
            designs. Based in Mumbai, I specialize in crafting seamless user
            experiences and vibrant visuals that resonate with audiences. My
            work blends creativity with functionality, and I'm always eager to
            collaborate on exciting projects.
          </p>
        </div>

        <div className="timelines-container">
          <div className="education-timeline">
            <h2>Education</h2>
            <div className="timeline-entry">
              <div className="timeline-content">
                <span className="timeline-marker"></span>
                <span className="timeline-date">2020 - 2023</span>
                <h3>Bachelor of Design</h3>
                <p>MIT Institute of Design, Pune</p>
              </div>
            </div>
            <div className="timeline-entry">
              <div className="timeline-content">
                <span className="timeline-marker"></span>
                <span className="timeline-date">2019 - 2020</span>
                <h3>Diploma in Graphic Design</h3>
                <p>Arena Animation, Mumbai</p>
              </div>
            </div>
          </div>

          <div className="work-timeline">
            <h2>Work Experience</h2>
            <div className="timeline-entry">
              <div className="timeline-content">
                <span className="timeline-marker"></span>
                <span className="timeline-date">2023 - Present</span>
                <h3>UI/UX Designer</h3>
                <p>Freelance, Mumbai</p>
              </div>
            </div>
            <div className="timeline-entry">
              <div className="timeline-content">
                <span className="timeline-marker"></span>
                <span className="timeline-date">2021 - 2022</span>
                <h3>Junior Graphic Designer</h3>
                <p>Creative Studio, Mumbai</p>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-cards">
          <div className="skill-card">
            <div className="skill-front">
              <span className="skill-icon">🎨</span>
              <h3>UI/UX Design</h3>
            </div>
            <div className="skill-back">
              <p>
                Designing intuitive interfaces with Figma and Adobe XD, focusing
                on user-centric solutions.
              </p>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-front">
              <span className="skill-icon">🖌️</span>
              <h3>Graphic Design</h3>
            </div>
            <div className="skill-back">
              <p>
                Crafting vibrant visuals using Adobe Photoshop and Illustrator
                for brands and campaigns.
              </p>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-front">
              <span className="skill-icon">🎥</span>
              <h3>Video Editing</h3>
            </div>
            <div className="skill-back">
              <p>
                Producing dynamic videos with Adobe Premiere Pro and After
                Effects for engaging content.
              </p>
            </div>
          </div>
        </div>

        <div className="work-cta">
          <h2>Want to see my creations?</h2>
          <NavLink to="/works" className="cta-button">
            See My Work
          </NavLink>
        </div>
      </section>
    </main>
  );
}

export default About;
