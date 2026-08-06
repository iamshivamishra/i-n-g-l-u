// app/terms/page.tsx
export const metadata = {
  title: "Terms of Service — INGLU Website UI",
  description:
    "A premium terms page UI covering participation, events, creator programs, brand collaborations and platform conduct.",
};

export default function TermsPage() {
  return (
    <div className="page-terms">
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">Legal</p>
            <h1>Terms for participating in the INGLU ecosystem.</h1>
            <p>
              A premium terms page UI covering participation, events,
              creator programs, brand collaborations and platform
              conduct.
            </p>
            <div className="hero-ctas">
              <a className="btn blue" href="#content">
                Read policies
              </a>
              <a className="btn" href="/ecosystem">
                Contact support
              </a>
            </div>
          </div>
          <div className="hero-card" aria-hidden="true">
            <div className="metric-strip">
              <div className="stat">
                <strong>Fair</strong>
                <span>Participation</span>
              </div>
              <div className="stat">
                <strong>Safe</strong>
                <span>Community</span>
              </div>
              <div className="stat">
                <strong>Clear</strong>
                <span>Programs</span>
              </div>
              <div className="stat">
                <strong>Trusted</strong>
                <span>Partners</span>
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
                <h2>Terms for participating in the INGLU ecosystem.</h2>
              </div>
              <p className="lead">
                A premium terms page UI covering participation, events,
                creator programs, brand collaborations and platform
                conduct.
              </p>
            </div>
            <div className="grid four">
              <div className="stat">
                <strong>Fair</strong>
                <span>Participation</span>
              </div>
              <div className="stat">
                <strong>Safe</strong>
                <span>Community</span>
              </div>
              <div className="stat">
                <strong>Clear</strong>
                <span>Programs</span>
              </div>
              <div className="stat">
                <strong>Trusted</strong>
                <span>Partners</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Terms structure</p>
                <h2>
                  A scannable policy layout that does not feel like a
                  wall of text.
                </h2>
              </div>
              <p className="lead">
                Terms structure connects Participation, Conduct and
                Programs into one clear path for youth, campuses,
                creators and partners.
              </p>
            </div>
            <div className="grid three">
              <article className="card">
                <h3>Participation</h3>
                <p>
                  Rules for joining programs, events and communities.
                </p>
              </article>
              <article className="card">
                <h3>Conduct</h3>
                <p>Community expectations and safety.</p>
              </article>
              <article className="card">
                <h3>Programs</h3>
                <p>
                  Terms for internships, creator briefs and brand
                  activations.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}