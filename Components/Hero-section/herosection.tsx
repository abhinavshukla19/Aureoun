import "./hero-section.css"

export const Hero_section = () => {
  const heromovie = {
    name: "Neon",
    lastname: "Protocol",
    match: "98%",
    year: "2024",
    rating: "4K Ultra HD",
    ageRating: "5.1",
    description: "In a future where silence is currency, a rogue data courier discovers a frequency that could rewrite human history. Now, she must outrun the very system she helped build."
  }

  return (
    <>
      <section className="hero">
        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="hero-tag">#1 IN MOVIES TODAY</span>

          <h1 className="hero-title">
            {heromovie.name} <span>{heromovie.lastname}</span>
          </h1>

          <div className="hero-meta">
            <span className="match">{heromovie.match} Match</span>
            <span className="year">{heromovie.year}</span>
            <span className="rating">{heromovie.rating}</span>
            <span className="age-rating">{heromovie.ageRating}</span>
          </div>

          <p className="hero-desc">
            {heromovie.description}
          </p>

          <div className="hero-actions">
            <button className="btn primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Play
            </button>
            <button className="btn secondary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
              More Info
            </button>
          </div>
        </div>
      </section>
    </>
  )
}