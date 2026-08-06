// app/colleges/page.tsx
export const metadata = {
  title: "For Colleges — INGLU Website UI",
  description:
    "Beyond academics and placements, INGLU turns your campus into a living ecosystem of events, societies, creators and leaders at zero cost to the institution.",
};

export default function CollegesPage() {
  return (
    <div className="page-colleges">
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">For Colleges</p>
            <h1>Build the campus students remember.</h1>
            <p>
              Beyond academics and placements, INGLU turns your campus
              into a living ecosystem of events, societies, creators and
              leaders at zero cost to the institution.
            </p>
            <div className="hero-ctas">
              <a className="btn blue" href="#content">
                Partner with INGLU
              </a>
              <a className="btn" href="/ecosystem">
                See a campus come alive
              </a>
            </div>
          </div>
          <div className="hero-card" aria-hidden="true">
            <div className="metric-strip">
              <div className="stat">
                <strong>500+</strong>
                <span>Campuses</span>
              </div>
              <div className="stat">
                <strong>Zero cost</strong>
                <span>Institution</span>
              </div>
              <div className="stat">
                <strong>Brand funded</strong>
                <span>Programs</span>
              </div>
              <div className="stat">
                <strong>Living</strong>
                <span>Campus engine</span>
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
                <h2>Build the campus students remember.</h2>
              </div>
              <p className="lead">
                Beyond academics and placements, INGLU turns your campus
                into a living ecosystem of events, societies, creators
                and leaders at zero cost to the institution.
              </p>
            </div>
            <div className="grid four">
              <div className="stat">
                <strong>500+</strong>
                <span>Campuses</span>
              </div>
              <div className="stat">
                <strong>Zero cost</strong>
                <span>Institution</span>
              </div>
              <div className="stat">
                <strong>Brand funded</strong>
                <span>Programs</span>
              </div>
              <div className="stat">
                <strong>Living</strong>
                <span>Campus engine</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">The campus transformation</p>
                <h2>The same campus. Two completely different futures.</h2>
              </div>
              <p className="lead">
                The campus transformation connects Passive campus and
                Thriving campus into one clear path for youth, campuses,
                creators and partners.
              </p>
            </div>
            <div className="grid three">
              <article className="card">
                <h3>Passive campus</h3>
                <p>Disconnected, few opportunities, degrees only.</p>
              </article>
              <article className="card">
                <h3>Thriving campus</h3>
                <p>Connected, opportunity-rich, stories that last.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Why colleges partner</p>
                <h2>
                  It does not add an event. It compounds into a
                  reputation.
                </h2>
              </div>
              <p className="lead">
                Why colleges partner connects More engagement, More
                communities and More opportunities into one clear path
                for youth, campuses, creators and partners.
              </p>
            </div>
            <div className="grid">
              <article className="card">
                <h3>More engagement</h3>
                <p>Students stop spectating and start showing up.</p>
              </article>
              <article className="card">
                <h3>More communities</h3>
                <p>Clubs, societies and crews multiply.</p>
              </article>
              <article className="card">
                <h3>More opportunities</h3>
                <p>Events, internships and creators arrive on campus.</p>
              </article>
              <article className="card">
                <h3>Stronger reputation</h3>
                <p>The campus everyone wants to be on.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}