// app/muse/page.tsx
export const metadata = {
  title: "Muse Records — INGLU Website UI",
  description:
    "Muse Records is INGLU's label for emerging campus musicians, discovering student artists and turning live performances into the soundtrack of youth culture.",
};

export default function MusePage() {
  return (
    <div className="page-muse">
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">Muse Records · INGLU</p>
            <h1>Where campus artists become movements.</h1>
            <p>
              Muse Records is INGLU&apos;s label for emerging campus
              musicians, discovering student artists and turning live
              performances into the soundtrack of youth culture.
            </p>
            <div className="hero-ctas">
              <a className="btn blue" href="#content">
                Apply to Muse roster
              </a>
              <a className="btn" href="/ecosystem">
                Book our artists
              </a>
            </div>
          </div>
          <div className="hero-card" aria-hidden="true">
            <div className="metric-strip">
              <div className="stat">
                <strong>PARO</strong>
                <span>Flagship</span>
              </div>
              <div className="stat">
                <strong>50+</strong>
                <span>Colleges</span>
              </div>
              <div className="stat">
                <strong>Spotify</strong>
                <span>Editorial</span>
              </div>
              <div className="stat">
                <strong>2026</strong>
                <span>Tour year</span>
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
                <h2>Where campus artists become movements.</h2>
              </div>
              <p className="lead">
                Muse Records is INGLU&apos;s label for emerging campus
                musicians, discovering student artists and turning live
                performances into the soundtrack of youth culture.
              </p>
            </div>
            <div className="grid four">
              <div className="stat">
                <strong>PARO</strong>
                <span>Flagship</span>
              </div>
              <div className="stat">
                <strong>50+</strong>
                <span>Colleges</span>
              </div>
              <div className="stat">
                <strong>Spotify</strong>
                <span>Editorial</span>
              </div>
              <div className="stat">
                <strong>2026</strong>
                <span>Tour year</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">The roster</p>
                <h2>Emerging artists, real momentum.</h2>
              </div>
              <p className="lead">
                The roster connects Hip-Hop, Indie and Electronic into one
                clear path for youth, campuses, creators and partners.
              </p>
            </div>
            <div className="grid">
              <article className="card">
                <h3>Hip-Hop</h3>
                <p>Cyphers, bars and the campus movement.</p>
              </article>
              <article className="card">
                <h3>Indie</h3>
                <p>Campus voices finding their sound.</p>
              </article>
              <article className="card">
                <h3>Electronic</h3>
                <p>Producers building the next campus rave.</p>
              </article>
              <article className="card">
                <h3>Fusion</h3>
                <p>Where classical meets the cypher.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Muse experiences</p>
                <h2>More than music. A live culture.</h2>
              </div>
              <p className="lead">
                Muse experiences connects Campus concerts, Recording
                sessions and Creator collaborations into one clear path
                for youth, campuses, creators and partners.
              </p>
            </div>
            <div className="grid">
              <article className="card">
                <h3>Campus concerts</h3>
                <p>Emerging artists live on 500+ campuses.</p>
              </article>
              <article className="card">
                <h3>Recording sessions</h3>
                <p>Studio time, production and music videos.</p>
              </article>
              <article className="card">
                <h3>Creator collaborations</h3>
                <p>Artists paired with student creators.</p>
              </article>
              <article className="card">
                <h3>Showcases</h3>
                <p>
                  Rooms where labels, brands and audiences discover talent.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}