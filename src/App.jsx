import { useState } from 'react'
import laptopPerson from './assets/laptop-person-clean.jpg'
import starLogo from './assets/top-left-logo.png'
import './App.css'

const navItems = ['About', 'Experience', 'Projects', 'Contacts']

const resumeUrl = `${import.meta.env.BASE_URL}resume_sms.pdf`
const resumePreviewUrl = `${import.meta.env.BASE_URL}resume-preview.png`

const profileLinks = [
  { label: 'linkedin ->', href: 'https://www.linkedin.com/in/smscs/' },
  { label: 'github ->', href: 'https://github.com/sms-cs' },
]

function PageChrome({ showNav, onResumeClick }) {
  return (
    <>
      <img className="corner-logo" src={starLogo} alt="Portfolio logo" />

      {showNav && (
        <nav className="category-list" aria-label="Explore sections">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
      )}

      <nav className="profile-links" aria-label="Profile links">
        <button type="button" onClick={onResumeClick}>
          resume -&gt;
        </button>

        {profileLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="dot-stack" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </>
  )
}

function ResumeModal({ onClose }) {
  return (
    <div className="resume-modal" role="dialog" aria-modal="true" aria-labelledby="resume-title">
      <div className="resume-panel">
        <header className="resume-panel-header">
          <h2 id="resume-title">resume preview</h2>
          <button type="button" onClick={onClose}>
            close -&gt;
          </button>
        </header>

        <div className="resume-preview">
          <img src={resumePreviewUrl} alt="Resume preview" />
        </div>

        <footer className="resume-panel-actions">
          <a href={resumeUrl} download="Sebastian-Salazar-Resume.pdf">
            download -&gt;
          </a>
        </footer>
      </div>
    </div>
  )
}

function IntroScreen({ isTransitioning, onExplore }) {
  return (
    <main
      className={`intro-screen${isTransitioning ? ' is-transitioning' : ''}`}
      aria-label="Portfolio intro"
    >
      <section className="intro-stack">
        <div className="intro-copy">
          <h1>PORTFOLIO</h1>
          <p>Sebastian Michael Salazar</p>
        </div>

        <img className="center-person" src={laptopPerson} alt="Person sitting with a laptop" />

        <button
          className="explore-link"
          type="button"
          onClick={onExplore}
          disabled={isTransitioning}
        >
          explore -&gt;
        </button>
      </section>
    </main>
  )
}

function App() {
  const [isExploring, setIsExploring] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  function handleExplore() {
    if (isTransitioning) return

    setIsTransitioning(true)

    window.setTimeout(() => {
      setIsExploring(true)
      setIsTransitioning(false)
    }, 720)
  }

  return (
    <>
      <PageChrome showNav={isExploring} onResumeClick={() => setIsResumeOpen(true)} />
      {isExploring ? (
        <main className="empty-screen" aria-label="Explore page under construction">
          <section className="explore-disclaimer">
            <h1>Nothing to see yet!</h1>
            <p>This website is still under construction.</p>
          </section>
        </main>
      ) : (
        <IntroScreen isTransitioning={isTransitioning} onExplore={handleExplore} />
      )}
      {isResumeOpen && <ResumeModal onClose={() => setIsResumeOpen(false)} />}
    </>
  )
}

export default App
