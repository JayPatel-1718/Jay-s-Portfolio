import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import About from "./About";
import Works from "./Works";

function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { title: "Moving Out UI Design", link: "https://example.com/moving-out" },
    { title: "SheVentures UI Design", link: "https://example.com/sheventures" },
    { title: "BuiDConnect UI Design", link: "https://example.com/buidconnect" },
    { title: "StageScout UI Design", link: "https://example.com/stagescout" },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    console.log(`Selected: ${project.title}`);
    window.open(project.link, "_blank");
  };

  return (
    <main className="main">
      <section className="hero">
        <div className="hero-text">
          <h1>
            Hello, I'm <br /> <span className="highlight">Jay Patel</span>
          </h1>
          <p className="hero-subtext">
            UI/UX Designer crafting intuitive and beautiful experiences
          </p>
        </div>
        <div className="hero-sidebar">
          <div className="sidebar-section">
            <h2>Projects</h2>
            <ul className="projects-list">
              {projects.map((project, index) => (
                <li key={index}>
                  <div
                    className="project-card"
                    onClick={() => handleProjectClick(project)}
                  >
                    <span className="project-title">{project.title}</span>
                    <span className="project-arrow">→</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebar-section">
            <h2>Connect</h2>
            <div className="socials">
              <a
                href="mailto:example@example.com"
                className="social-icon"
                aria-label="Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com/yourusername"
                className="social-icon"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2m10.5 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 17a5 5 0 100-10 5 5 0 000 10z"
                  />
                </svg>
              </a>
              <a
                href="https://pinterest.com/yourusername"
                className="social-icon"
                aria-label="Pinterest"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 14c0 1.5.7 2.9 1.9 3.8-.2-1.6-.1-3.6.7-5.1.7-1.3 1.8-2.2 3.1-2.6 1.7-.5 3.4.1 4.3 1.5.9 1.4.6 3.3-.7 4.4-1.3 1.1-3.2 1.2-4.7.3-.7 1.7-1.8 3.2-3.3 4.2-.8-1.6-.6-3.8.2-5.4 1-2 2.8-3.2 4.8-3.4 2.5-.2 4.8 1.2 5.5 3.6.7 2.4-.2 5-2.2 6.3-2.1 1.4-4.9 1.2-6.8-.5-1.9-1.7-2.5-4.5-1.4-6.8.3-.7.9-1.2 1.6-1.4-.8-.5-1.7-.7-2.6-.5-1.9.4-3.3 2.2-3.4 4.1-.1 1.5.6 3 1.9 3.9-.7 1.4-2.1 2.3-3.6 2.3-2.5 0-4.5-2-4.5-4.5 0-2.5 2-4.5 4.5-4.5 1.2 0 2.3.5 3.1 1.3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function NotFound() {
  return (
    <main className="main">
      <section className="not-found">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <NavLink to="/" className="back-button">
          Back to Home
        </NavLink>
      </section>
    </main>
  );
}

function App() {
  console.log("App component rendered");
  return (
    <Router>
      <div className="app">
        <header className="navbar">
          <div className="navbar-left">
            <div className="profile-pic"></div>
            <h3 className="name">Jay Patel</h3>
          </div>
          <nav className="navbar-right">
            <NavLink to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About
            </NavLink>
            <NavLink to="/works" className="nav-link" activeClassName="active">
              Works
            </NavLink>
          </nav>
        </header>

        <div className="floating-emojis">
          <span className="emoji emoji-1">🎨</span>
          <span className="emoji emoji-2">💻</span>
          <span className="emoji emoji-3">✨</span>
          <span className="emoji emoji-4">🚀</span>
          <span className="emoji emoji-5">🎨</span>
          <span className="emoji emoji-6">💻</span>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer className="footer">
          <div className="footer-content">
            <p>
              Available for Remote & On-Site • 2+ Years Experience • Based in
              Mumbai
            </p>
            <p className="footer-subtext">Collaborative • Interactive Design</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
