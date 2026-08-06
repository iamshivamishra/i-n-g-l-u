// app/grid/page.tsx
export const metadata = {
  title: "THE GRID — INGLU Website UI",
  description:
    "The Grid is INGLU's opportunity infrastructure connecting students, creators, campus leaders and brands so internships, collaborations and real networking move to the people building things.",
};

export default function GridPage() {
  return (
    <div className="page-grid">
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">The Grid · INGLU</p>
            <h1>Your next opportunity is already in the network.</h1>
            <p>
              The Grid is INGLU&apos;s opportunity infrastructure
              connecting students, creators, campus leaders and brands so
              internships, collaborations and real networking move to the
              people building things.
            </p>
            <div className="hero-ctas">
              <a className="btn blue" href="#content">
                Apply to The Grid
              </a>
              <a className="btn" href="/ecosystem">
                See the network
              </a>
            </div>
          </div>
          <div className="hero-card" aria-hidden="true">
            <div className="metric-strip">
              <div className="stat">
                <strong>200+</strong>
                <span>Active nodes</span>
              </div>
              <div className="stat">
                <strong>500+</strong>
                <span>Campuses</span>
              </div>
              <div className="stat">
                <strong>Tiers</strong>
                <span>Progression</span>
              </div>
              <div className="stat">
                <strong>Paid</strong>
                <span>Opportunities</span>
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
                <h2>Your next opportunity is already in the network.</h2>
              </div>
              <p className="lead">
                The Grid is INGLU&apos;s opportunity infrastructure
                connecting students, creators, campus leaders and brands
                so internships, collaborations and real networking move
                to the people building things.
              </p>
            </div>
            <div className="grid four">
              <div className="stat">
                <strong>200+</strong>
                <span>Active nodes</span>
              </div>
              <div className="stat">
                <strong>500+</strong>
                <span>Campuses</span>
              </div>
              <div className="stat">
                <strong>Tiers</strong>
                <span>Progression</span>
              </div>
              <div className="stat">
                <strong>Paid</strong>
                <span>Opportunities</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Why The Grid exists</p>
                <h2>Talent is everywhere. Access is not.</h2>
              </div>
              <p className="lead">
                Why The Grid exists connects Opportunities fragmented,
                Communities isolated and Access uneven into one clear path
                for youth, campuses, creators and partners.
              </p>
            </div>
            <div className="grid three">
              <article className="card">
                <h3>Opportunities fragmented</h3>
                <p>
                  Internships, gigs and collabs scattered across DMs and
                  luck.
                </p>
              </article>
              <article className="card">
                <h3>Communities isolated</h3>
                <p>
                  Every campus works alone and networks reset at
                  graduation.
                </p>
              </article>
              <article className="card">
                <h3>Access uneven</h3>
                <p>Who you know decides what you get.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">What flows through</p>
                <h2>Opportunity in every form.</h2>
              </div>
              <p className="lead">
                What flows through connects Internships, Campus ambassador
                roles and Collaborations into one clear path for youth,
                campuses, creators and partners.
              </p>
            </div>
            <div className="grid">
              <article className="card">
                <h3>Internships</h3>
                <p>Real, paid internships from INGLU brand partners.</p>
              </article>
              <article className="card">
                <h3>Campus ambassador roles</h3>
                <p>Represent brands and build local presence.</p>
              </article>
              <article className="card">
                <h3>Collaborations</h3>
                <p>Creators, founders, leaders and projects.</p>
              </article>
              <article className="card">
                <h3>Growth</h3>
                <p>Credentials, network and proof of momentum.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}