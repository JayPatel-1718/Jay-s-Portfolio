import { Link } from "react-router-dom";
import "./App.css";

function Works() {
  const uiuxProjects = [
    {
      title: "Moving Out UI Design",
      link: "https://example.com/moving-out",
      desc: "Designed an intuitive UI for a relocation app, focusing on user-friendly navigation.",
    },
    {
      title: "SheVentures UI Design",
      link: "https://example.com/sheventures",
      desc: "Created a vibrant UI for a women-led startup platform, emphasizing accessibility.",
    },
    {
      title: "BuiDConnect UI Design",
      link: "https://example.com/buidconnect",
      desc: "Developed a sleek UI for a professional networking app, enhancing user engagement.",
    },
    {
      title: "StageScout UI Design",
      link: "https://example.com/stagescout",
      desc: "Crafted a modern UI for an event discovery app, prioritizing visual appeal.",
    },
  ];

  return (
    <main className="main">
      <section className="works-section">
        <div className="works-content">
          <h1 className="about-title">My Works</h1>
          <div className="works-category">
            <h2 className="category-header uiux">UI/UX Design</h2>
            <ul className="projects-list">
              {uiuxProjects.map((project, index) => (
                <li key={index} className="project-card">
                  <div>
                    <span className="project-title">{project.title}</span>
                    <p className="project-desc">{project.desc}</p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-arrow"
                  >
                    →
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="works-category">
            <h2 className="category-header graphic">Graphic Design</h2>
            <ul className="projects-list">
              <li className="project-card">
                <div>
                  <span className="project-title">Social Media Campaign</span>
                  <p className="project-desc">
                    Created vibrant visuals for a brand's Instagram and Twitter
                    campaign.
                  </p>
                </div>
                <a href="#" className="project-arrow">
                  →
                </a>
              </li>
              <li className="project-card">
                <div>
                  <span className="project-title">Event Poster Design</span>
                  <p className="project-desc">
                    Designed eye-catching posters for a college cultural
                    festival.
                  </p>
                </div>
                <a href="#" className="project-arrow">
                  →
                </a>
              </li>
              <li className="project-card">
                <div>
                  <span className="project-title">Flyer Design</span>
                  <p className="project-desc">
                    Crafted promotional flyers for a local business event.
                  </p>
                </div>
                <a href="#" className="project-arrow">
                  →
                </a>
              </li>
            </ul>
          </div>
          <div className="works-category">
            <h2 className="category-header video">Video Editing</h2>
            <ul className="projects-list">
              <li className="project-card">
                <div>
                  <span className="project-title">Promo Video</span>
                  <p className="project-desc">
                    Edited a dynamic promotional video for a startup's product
                    launch.
                  </p>
                </div>
                <a href="#" className="project-arrow">
                  →
                </a>
              </li>
              <li className="project-card">
                <div>
                  <span className="project-title">Event Recap Video</span>
                  <p className="project-desc">
                    Produced a highlight reel for a college tech fest.
                  </p>
                </div>
                <a href="#" className="project-arrow">
                  →
                </a>
              </li>
            </ul>
          </div>
          <div className="works-category">
            <h2 className="category-header brands">Brands Created</h2>
            <ul className="projects-list">
              <li className="project-card">
                <div>
                  <span className="project-title">Personal Brand Identity</span>
                  <p className="project-desc">
                    Developed a cohesive brand identity for my portfolio,
                    including logo and color scheme.
                  </p>
                </div>
                <a href="#" className="project-arrow">
                  →
                </a>
              </li>
              <li className="project-card">
                <div>
                  <span className="project-title">Client Logo Design</span>
                  <p className="project-desc">
                    Designed a logo for a local startup, reflecting their brand
                    values.
                  </p>
                </div>
                <a href="#" className="project-arrow">
                  →
                </a>
              </li>
            </ul>
          </div>
          <Link to="/" className="back-button">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Works;
