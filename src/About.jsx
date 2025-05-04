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
            I'm Jay Patel, a 18-year-old Graphic Designer with a strong passion
            for UI/UX design and video editing. With 2 years of experience
            designing social media posts, posters, and banners, I started my
            design journey at age 13. I specialize in creating user-friendly
            interfaces and seamless experiences as a UI/UX designer, and I bring
            creativity and precision to my video editing projects.
          </p>
        </div>

        <div className="timelines-container">
          <div className="education-timeline">
            <h2>Education</h2>
            <div className="timeline-entry">
              <div className="timeline-content">
                <span className="timeline-marker"></span>
                <span className="timeline-date">2022</span>
                <h3>SSC with Distinction</h3>
                <p>Cardinal Gracious High School</p>
              </div>
            </div>
            <div className="timeline-entry">
              <div className="timeline-content">
                <span className="timeline-marker"></span>
                <span className="timeline-date">2022 - Present</span>
                <h3>Diploma in Computer Engineering</h3>
                <p>Shri Bhagubhai Maratali Polytechnic</p>
              </div>
            </div>
          </div>

          <div className="work-timeline">
            <h2>Work Experience</h2>
            <div className="timeline-entry">
              <div className="timeline-content">
                <span className="timeline-marker"></span>
                <span className="timeline-date">2024</span>
                <h3>Graphic Designer (Intern)</h3>
                <p>Happetive</p>
              </div>
            </div>
            <div className="timeline-entry">
              <div className="timeline-content">
                <span className="timeline-marker"></span>
                <span className="timeline-date">2024</span>
                <h3>Design Team</h3>
                <p>Spectrum, College Events</p>
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
                Designing user-friendly interfaces with Figma and Adobe XD,
                focusing on seamless experiences.
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
                Creating social media posts, posters, and banners using Adobe
                Photoshop and Illustrator.
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
                Producing creative videos with Adobe Premiere Pro and After
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
