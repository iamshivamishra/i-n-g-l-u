// app/artists/page.tsx
export const metadata = {
  title: "For Artists — INGLU Website UI",
  description:
    "Singers, dancers, poets, painters and performers step into the light and become culture through real audiences and live moments.",
};

export default function ArtistsPage() {
  return (
    <div className="page-artists">
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">INGLU Artists</p>
            <h1>Your talent deserves a stage.</h1>
            <p>
              Singers, dancers, poets, painters and performers step into the
              light and become culture through real audiences and live
              moments.
            </p>
            <div className="hero-ctas">
              <a className="btn blue" href="#content">
                Claim your stage
              </a>
              <a className="btn" href="/ecosystem">
                Walk the gallery
              </a>
            </div>
          </div>
          <div className="hero-card" aria-hidden="true">
            <div className="metric-strip">
              <div className="stat">
                <strong>Music</strong>
                <span>Room</span>
              </div>
              <div className="stat">
                <strong>Dance</strong>
                <span>Movement</span>
              </div>
              <div className="stat">
                <strong>Visual Art</strong>
                <span>Gallery</span>
              </div>
              <div className="stat">
                <strong>Spoken Word</strong>
                <span>Stage</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="content">
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">At a glance</p>
                <h2>Your talent deserves a stage.</h2>
              </div>
              <p className="lead">
                Singers, dancers, poets, painters and performers step into
                the light and become culture through real audiences and
                live moments.
              </p>
            </div>
            <div className="grid four">
              <div className="stat">
                <strong>Music</strong>
                <span>Room</span>
              </div>
              <div className="stat">
                <strong>Dance</strong>
                <span>Movement</span>
              </div>
              <div className="stat">
                <strong>Visual Art</strong>
                <span>Gallery</span>
              </div>
              <div className="stat">
                <strong>Spoken Word</strong>
                <span>Stage</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Every kind of artist</p>
                <h2>However you make your mark, there is a wall for it.</h2>
              </div>
              <p className="lead">
                Every kind of artist connects Musicians, Singers and
                Dancers into one clear path for youth, campuses, creators
                and partners.
              </p>
            </div>
            <div className="grid">
              <article className="card">
                <h3>Musicians</h3>
                <p>Producers, bands, bedroom beatmakers.</p>
              </article>
              <article className="card">
                <h3>Singers</h3>
                <p>Voices that carry a whole room.</p>
              </article>
              <article className="card">
                <h3>Dancers</h3>
                <p>Movement that says the unsayable.</p>
              </article>
              <article className="card">
                <h3>Poets</h3>
                <p>Spoken word, slam, verse and story.</p>
              </article>
              <article className="card">
                <h3>Visual artists</h3>
                <p>Painters, illustrators and designers.</p>
              </article>
              <article className="card">
                <h3>Performers</h3>
                <p>Theatre, stand-up and the whole stage.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">How talent gets found</p>
                <h2>Discovery is just the moment the room goes quiet.</h2>
              </div>
              <p className="lead">
                How talent gets found connects Campus stages, Festivals and
                Bookers into one clear path for youth, campuses, creators
                and partners.
              </p>
            </div>
            <div className="grid three">
              <article className="card">
                <h3>Campus stages</h3>
                <p>Real talent in front of real audiences.</p>
              </article>
              <article className="card">
                <h3>Festivals</h3>
                <p>Moments that travel beyond the room.</p>
              </article>
              <article className="card">
                <h3>Bookers</h3>
                <p>People who can sign, share and support.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}