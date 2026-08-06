// app/events/page.tsx
export const metadata = {
  title: "Events — INGLU Website UI",
  description:
    "Upcoming, live and past moments across FOMO, Ground Zero, campus festivals, workshops, creator meetups, artist showcases and brand activations.",
};

export default function EventsPage() {
  return (
    <div className="page-events">
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">What&apos;s Happening</p>
            <h1>Culture people show up for.</h1>
            <p>
              Upcoming, live and past moments across FOMO, Ground Zero,
              campus festivals, workshops, creator meetups, artist
              showcases and brand activations.
            </p>
            <div className="hero-ctas">
              <a className="btn blue" href="#content">
                Register for FOMO
              </a>
              <a className="btn" href="/ecosystem">
                See calendar
              </a>
            </div>
          </div>
          <div className="hero-card" aria-hidden="true">
            <div className="metric-strip">
              <div className="stat">
                <strong>FOMO Dubai</strong>
                <span>Nov 15, 2026</span>
              </div>
              <div className="stat">
                <strong>287</strong>
                <span>Registered</span>
              </div>
              <div className="stat">
                <strong>57%</strong>
                <span>Full</span>
              </div>
              <div className="stat">
                <strong>Ground Zero S2</strong>
                <span>Aug 10, 2026</span>
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
                <h2>Culture people show up for.</h2>
              </div>
              <p className="lead">
                Upcoming, live and past moments across FOMO, Ground Zero,
                campus festivals, workshops, creator meetups, artist
                showcases and brand activations.
              </p>
            </div>
            <div className="grid four">
              <div className="stat">
                <strong>FOMO Dubai</strong>
                <span>Nov 15, 2026</span>
              </div>
              <div className="stat">
                <strong>287</strong>
                <span>Registered</span>
              </div>
              <div className="stat">
                <strong>57%</strong>
                <span>Full</span>
              </div>
              <div className="stat">
                <strong>Ground Zero S2</strong>
                <span>Aug 10, 2026</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Featured events</p>
                <h2>
                  Premium event cards for upcoming, live and past formats.
                </h2>
              </div>
              <p className="lead">
                Featured events connects FOMO Dubai, Ground Zero S2 and
                Campus fest takeovers into one clear path for youth,
                campuses, creators and partners.
              </p>
            </div>
            <div className="grid three">
              <article className="card">
                <h3>FOMO Dubai</h3>
                <p>Nov 15, 2026 · Dubai, UAE · 500 capacity.</p>
              </article>
              <article className="card">
                <h3>Ground Zero S2</h3>
                <p>Aug 10, 2026 · Delhi · creator battles and campus energy.</p>
              </article>
              <article className="card">
                <h3>Campus fest takeovers</h3>
                <p>Sponsors, artists, audiences and culture operations.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Event formats</p>
                <h2>Each event becomes a repeatable cultural product.</h2>
              </div>
              <p className="lead">
                Event formats connects Founder talks, Creator meetups and
                Workshops into one clear path for youth, campuses, creators
                and partners.
              </p>
            </div>
            <div className="grid">
              <article className="card">
                <h3>Founder talks</h3>
                <p>The real backstory behind ambitious youth journeys.</p>
              </article>
              <article className="card">
                <h3>Creator meetups</h3>
                <p>How creators actually collaborate, earn and grow.</p>
              </article>
              <article className="card">
                <h3>Workshops</h3>
                <p>Hands-on sessions that leave students with proof.</p>
              </article>
              <article className="card">
                <h3>Live shows</h3>
                <p>Artists, music, culture and the moment wall.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}