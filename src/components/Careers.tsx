// app/careers/page.tsx
export const metadata = {
  title: "Careers — INGLU Website UI",
  description:
    "Join the team creating the infrastructure behind India's largest youth ecosystem across students, creators, campuses, brands and opportunities.",
};

export default function CareersPage() {
  return (
    <div className="page-careers">
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">Careers at INGLU</p>
            <h1>Build the future of youth culture.</h1>
            <p>
              Join the team creating the infrastructure behind
              India&apos;s largest youth ecosystem across students,
              creators, campuses, brands and opportunities.
            </p>
            <div className="hero-ctas">
              <a className="btn blue" href="#content">
                View open roles
              </a>
              <a className="btn" href="/ecosystem">
                Why work here
              </a>
            </div>
          </div>
          <div className="hero-card" aria-hidden="true">
            <div className="metric-strip">
              <div className="stat">
                <strong>High</strong>
                <span>Ownership</span>
              </div>
              <div className="stat">
                <strong>Fast</strong>
                <span>Learning</span>
              </div>
              <div className="stat">
                <strong>Cross</strong>
                <span>Verticals</span>
              </div>
              <div className="stat">
                <strong>Real</strong>
                <span>Impact</span>
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
                <h2>Build the future of youth culture.</h2>
              </div>
              <p className="lead">
                Join the team creating the infrastructure behind
                India&apos;s largest youth ecosystem across students,
                creators, campuses, brands and opportunities.
              </p>
            </div>
            <div className="grid four">
              <div className="stat">
                <strong>High</strong>
                <span>Ownership</span>
              </div>
              <div className="stat">
                <strong>Fast</strong>
                <span>Learning</span>
              </div>
              <div className="stat">
                <strong>Cross</strong>
                <span>Verticals</span>
              </div>
              <div className="stat">
                <strong>Real</strong>
                <span>Impact</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Why join INGLU?</p>
                <h2>Build something that matters and learn fast.</h2>
              </div>
              <p className="lead">
                Why join INGLU? connects Build something that matters,
                Learn fast and Work across verticals into one clear path
                for youth, campuses, creators and partners.
              </p>
            </div>
            <div className="grid">
              <article className="card">
                <h3>Build something that matters</h3>
                <p>Work people actually use, not slide decks.</p>
              </article>
              <article className="card">
                <h3>Learn fast</h3>
                <p>Run real projects and see impact within weeks.</p>
              </article>
              <article className="card">
                <h3>Work across verticals</h3>
                <p>Education, creators, events, brands and media.</p>
              </article>
              <article className="card">
                <h3>Grow with the ecosystem</h3>
                <p>Scope expands as the network scales.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Who we need</p>
                <h2>
                  Roles across growth, partnerships, operations and
                  community.
                </h2>
              </div>
              <p className="lead">
                Who we need connects Growth & Marketing, Partnerships and
                Operations into one clear path for youth, campuses,
                creators and partners.
              </p>
            </div>
            <div className="grid">
              <article className="card">
                <h3>Growth & Marketing</h3>
                <p>Funnels, content, analytics and campus footprint.</p>
              </article>
              <article className="card">
                <h3>Partnerships</h3>
                <p>Brands, colleges and sponsors.</p>
              </article>
              <article className="card">
                <h3>Operations</h3>
                <p>Events, programs and process design.</p>
              </article>
              <article className="card">
                <h3>Community</h3>
                <p>Programs, ambassadors and rituals.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}