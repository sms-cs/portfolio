import './App.css'

function App() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Sebastian Salazar</p>
        <h1>Computer Science Graduate & Future Cybersecurity Master’s Student</h1>
        <p className="heroText">
          I build clean, useful websites and software projects with a focus on real-world impact,
          startups, and digital solutions.
        </p>

        <div className="buttons">
          <a href="#projects">View Projects</a>
          <a href="#contact" className="secondary">Contact Me</a>
        </div>
      </section>

      <section className="section">
        <h2>About Me</h2>
        <p>
          I’m a Computer Science graduate from Quinnipiac University and an incoming M.S.
          Cybersecurity student. I’m interested in software engineering, cybersecurity,
          entrepreneurship, and building products that solve real problems.
        </p>
      </section>

      <section className="section" id="projects">
        <h2>Projects</h2>

        <div className="grid">
          <div className="card">
            <h3>SaloStack</h3>
            <p>
              A web development and digital solutions brand focused on helping small businesses
              improve their online presence.
            </p>
          </div>

          <div className="card">
            <h3>Tempo AI / AI-DJ</h3>
            <p>
              An AI-powered DJ platform designed to help users create smoother music transitions
              and better playlist flow.
            </p>
          </div>

          <div className="card">
            <h3>Smart Market</h3>
            <p>
              A marketplace-style web project focused on product browsing, business workflows,
              and a cleaner customer experience.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <p>React, JavaScript, HTML, CSS, GitHub, Python, Cybersecurity, Web Development</p>
      </section>

      <section className="section" id="contact">
        <h2>Contact</h2>
        <p>Email: your-email@example.com</p>
        <p>GitHub: github.com/sms-cs</p>
        <p>LinkedIn: linkedin.com/in/your-linkedin</p>
      </section>
    </main>
  )
}

export default App