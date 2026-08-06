// app/campus-buzz/page.tsx
export const metadata = {
  title: "Campus Buzz — INGLU Website UI",
  description:
    "Articles, podcast drops, creator stories, community updates and news from the youth ecosystem.",
};

export default function CampusBuzzPage() {
  return (
    <div className="page-campus-buzz">
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">Campus Buzz</p>
            <h1>Stories straight from the ecosystem.</h1>
            <p>
              Articles, podcast drops, creator stories, community updates
              and news from the youth ecosystem.
            </p>
            <div className="hero-ctas">
              <a className="btn blue" href="#content">
                Read latest
              </a>
              <a className="btn" href="/ecosystem">
                Submit a story
              </a>
            </div>
          </div>
          <div className="hero-card" aria-hidden="true">
            <div className="metric-strip">
              <div className="stat">
                <strong>Latest</strong>
                <span>Brand deal playbook</span>
              </div>
              <div className="stat">
                <strong>Muse Drop</strong>
                <span>PARO editorial</span>
              </div>
              <div className="stat">
                <strong>GRID</strong>
                <span>Riya hit Circuit</span>
              </div>
              <div className="stat">
                <strong>Weekly</strong>
                <span>Drops</span>
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
                <h2>Stories straight from the ecosystem.</h2>
              </div>
              <p className="lead">
                Articles, podcast drops, creator stories, community updates
                and news from the youth ecosystem.
              </p>
            </div>
            <div className="grid four">
              <div className="stat">
                <strong>Latest</strong>
                <span>Brand deal playbook</span>
              </div>
              <div className="stat">
                <strong>Muse Drop</strong>
                <span>PARO editorial</span>
              </div>
              <div className="stat">
                <strong>GRID</strong>
                <span>Riya hit Circuit</span>
              </div>
              <div className="stat">
                <strong>Weekly</strong>
                <span>Drops</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Latest posts</p>
                <h2>
                  Editorial cards with practical playbooks and ecosystem
                  updates.
                </h2>
              </div>
              <p className="lead">
                Latest posts connects How to pitch your first brand deal,
                Riya, NIFT hit Circuit tier and PARO hits Spotify editorial
                into one clear path for youth, campuses, creators and
                partners.
              </p>
            </div>
            <div className="grid three">
              <article className="card">
                <h3>How to pitch your first brand deal</h3>
                <p>
                  A practical playbook for student creators from DM to
                  signed brief.
                </p>
              </article>
              <article className="card">
                <h3>Riya, NIFT hit Circuit tier</h3>
                <p>From zero earnings to Rs 8,000/month in 45 days.</p>
              </article>
              <article className="card">
                <h3>PARO hits Spotify editorial</h3>
                <p>Campus-to-playlist in four months.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Content streams</p>
                <h2>
                  The buzz layer should feel alive without becoming noisy.
                </h2>
              </div>
              <p className="lead">
                Content streams connects Articles, Podcast and
                Announcements into one clear path for youth, campuses,
                creators and partners.
              </p>
            </div>
            <div className="grid three">
              <article className="card">
                <h3>Articles</h3>
                <p>Practical guides and youth culture commentary.</p>
              </article>
              <article className="card">
                <h3>Podcast</h3>
                <p>Founder stories, creator talks and campus operators.</p>
              </article>
              <article className="card">
                <h3>Announcements</h3>
                <p>Events, drops, rosters and opportunities.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}