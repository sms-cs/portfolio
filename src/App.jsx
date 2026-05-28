import './App.css'

const linkedinUrl = 'https://www.linkedin.com/in/your-linkedin/'
const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`
const djImageUrl = `${import.meta.env.BASE_URL}dj-dog.svg`

function App() {
  return (
    <main className="page">
      <section className="card" aria-label="Portfolio transition">
        <img className="dj-image" src={djImageUrl} alt="DJ dog illustration" />

        <p className="small-text">portfolio loading...</p>
        <h1>Sebastian Michael Salazar</h1>
        <p className="intro">computer science, cybersecurity, and whatever comes next.</p>

        <div className="button-row">
          <a className="button primary" href="#links">
            View Site
          </a>
          <a className="button" href={linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="button" href={resumeUrl}>
            Resume
          </a>
        </div>

        <p className="note" id="links">
          this is just the transition page. the real theme is coming soon.
        </p>
      </section>
    </main>
  )
}

export default App
