import heroImage from './assets/hero.png'
import './App.css'

const projects = [
  {
    name: 'SaloStack',
    description:
      'A web development and digital solutions brand for small businesses that need a cleaner online presence.',
  },
  {
    name: 'Tempo AI',
    description:
      'An AI-DJ concept focused on smoother playlist flow, music transitions, and better listening experiences.',
  },
  {
    name: 'Smart Market',
    description:
      'A marketplace-style web project exploring product browsing, business workflows, and customer experience.',
  },
]

const skills = [
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'GitHub Pages',
  'Python',
  'Cybersecurity',
  'Web Development',
]

function App() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="#home">
          Sebastian Salazar
        </a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Computer Science | Cybersecurity | Web Development</p>
          <h1>Building useful software with a security-minded approach.</h1>
          <p className="hero-text">
            I am a Computer Science graduate from Quinnipiac University and an incoming
            cybersecurity graduate student. This portfolio is a simple home base for my projects,
            skills, and contact information.
          </p>
          <div className="actions">
            <a className="button" href="#projects">
              View projects
            </a>
            <a
              className="button secondary"
              href="https://github.com/sms-cs"
              target="_blank"
              rel="noreferrer"
            >
              GitHub profile
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portfolio technology stack preview">
          <img src={heroImage} alt="" />
          <div>
            <span className="stat-label">Current focus</span>
            <strong>React sites, software projects, and cybersecurity foundations</strong>
          </div>
        </div>
      </section>

      <section className="section about" aria-labelledby="about-title">
        <p className="section-kicker">About</p>
        <h2 id="about-title">A practical portfolio starter.</h2>
        <p>
          I like building clean, useful websites and software projects that solve real problems.
          This site is intentionally simple for now so I can keep adding stronger project details,
          screenshots, and links over time.
        </p>
      </section>

      <section className="section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <p className="section-kicker">Projects</p>
          <h2 id="projects-title">Work in progress</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills" aria-labelledby="skills-title">
        <div className="section-heading">
          <p className="section-kicker">Skills</p>
          <h2 id="skills-title">Tools I am building with</h2>
        </div>
        <ul className="skill-list" aria-label="Skills">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="section contact" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 id="contact-title">Let us connect.</h2>
          <p>More contact links can go here as the portfolio grows.</p>
        </div>
        <a className="button" href="https://github.com/sms-cs" target="_blank" rel="noreferrer">
          Visit GitHub
        </a>
      </section>
    </main>
  )
}

export default App
