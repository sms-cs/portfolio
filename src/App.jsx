import './App.css'

const linkedinUrl = 'https://www.linkedin.com/in/your-linkedin/'
const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`

function App() {
  return (
    <main className="page">
      <h1>Sebastian Salazar</h1>

      <p>Computer Science graduate.</p>

      <section aria-labelledby="links-title">
        <h2 id="links-title">Links</h2>
        <ul>
          <li>
            <a href={linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={resumeUrl}>Resume</a>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default App
