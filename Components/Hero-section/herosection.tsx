import { Plus } from "lucide-react"
import "./hero-section.css"

export const Hero_section = () => {
  const heromovie = {
    name: "Love At First Sight",
    lastname: "",
    match: "98%",
    year: "2025",
    rating: "4K Ultra HD",
    ageRating: "5.1",
    description:
      "Love at First Sight is a heartwarming romantic story that begins with a chance encounter and unfolds into an unforgettable connection. As two strangers navigate distance, timing, and fate, the film explores how fleeting moments can change lives forever. A tender exploration of destiny, hope, and emotional vulnerability."
  }

  return (
    <section className="hero">
      {/* 🎬 Background Video */}
      <video
        className="hero-video"
        src="https://pub-0ab957bd269d4ddbb175b1627b53d2a4.r2.dev/Love--at-first-sight/movie/Love_at_First_Sight_Official_Trailer_Netflix_1080P.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 🎥 Hero Content */}
      <div className="hero-content">
        <span className="hero-tag">#1 IN MOVIES TODAY</span>

        <h1 className="hero-title">
          {heromovie.name}
          {heromovie.lastname && <span>{heromovie.lastname}</span>}
        </h1>

        <div className="hero-meta">
          <span className="match">{heromovie.match} Match</span>
          <span className="year">{heromovie.year}</span>
          <span className="rating">{heromovie.rating}</span>
          <span className="age-rating">{heromovie.ageRating}</span>
        </div>

        <p className="hero-desc">{heromovie.description}</p>

        <div className="hero-actions">
          <button className="btn primary">▶ Play</button>
          <button className="movie-icon-button"><Plus size={20} /></button>
        </div>
      </div>
    </section>
  )
}