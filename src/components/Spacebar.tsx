// app/spacebar/page.tsx
export const metadata = {
  title: "SPACEBAR — INGLU Website UI",
  description:
    "Spacebar is the room between ideas and action, where late-night thoughts become projects, startups, bands, festivals and friendships.",
};

export default function SpacebarPage() {
  return (
    <div className="page-spacebar">
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">SPACEBAR</p>
            <h1>The best ideas need space.</h1>
            <p>
              Spacebar is the room between ideas and action, where
              late-night thoughts become projects, startups, bands,
              festivals and friendships.
            </p>
            <div className="hero-ctas">
              <a className="btn blue" href="#content">
                Step inside
              </a>
              <a className="btn" href="/ecosystem">
                Find your corner
              </a>
            </div>
          </div>
          <div className="hero-card" aria-hidden="true">
            <div className="metric-strip">
              <div className="stat">
                <strong>Ideas</strong>
                <span>Sticky notes</span>
              </div>
              <div className="stat">
                <strong>People</strong>
                <span>Introductions</span>
              </div>
              <div className="stat">
                <strong>Projects</strong>
                <span>First drafts</span>
              </div>
              <div className="stat">
                <strong>Outcomes</strong>
                <span>Startups</span>
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
                <h2>The best ideas need space.</h2>
              </div>
              <p className="lead">
                Spacebar is the room between ideas and action, where
                late-night thoughts become projects, startups, bands,
                festivals and friendships.
              </p>
            </div>
            <div className="grid four">
              <div className="stat">
                <strong>Ideas</strong>
                <span>Sticky notes</span>
              </div>
              <div className="stat">
                <strong>People</strong>
                <span>Introductions</span>
              </div>
              <div className="stat">
                <strong>Projects</strong>
                <span>First drafts</span>
              </div>
              <div className="stat">
                <strong>Outcomes</strong>
                <span>Startups</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">The living room</p>
                <h2>Stay a while. Watch the room wake up.</h2>
              </div>
              <p className="lead">
                The living room connects Ideas, People and Projects into
                one clear path for youth, campuses, creators and
                partners.
              </p>
            </div>
            <div className="grid">
              <article className="card">
                <h3>Ideas</h3>
                <p>Sticky notes. Half-thoughts. The maybe.</p>
              </article>
              <article className="card">
                <h3>People</h3>
                <p>Introductions. Shared obsessions.</p>
              </article>
              <article className="card">
                <h3>Projects</h3>
                <p>Sketches. Prototypes. First drafts.</p>
              </article>
              <article className="card">
                <h3>Outcomes</h3>
                <p>Startups. Bands. Festivals. Friends.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Moments, not metrics</p>
                <h2>
                  You cannot put a number on the night it all clicked.
                </h2>
              </div>
              <p className="lead">
                Moments, not metrics connects 11:42 PM, 4:10 PM and 9:05
                AM into one clear path for youth, campuses, creators and
                partners.
              </p>
            </div>
            <div className="grid">
              <article className="card">
                <h3>11:42 PM</h3>
                <p>Three strangers, one whiteboard, zero plan.</p>
              </article>
              <article className="card">
                <h3>4:10 PM</h3>
                <p>Someone needed a guitarist.</p>
              </article>
              <article className="card">
                <h3>9:05 AM</h3>
                <p>A second-year asked a question. A final-year stayed.</p>
              </article>
              <article className="card">
                <h3>2:23 AM</h3>
                <p>The experiment failed beautifully.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}