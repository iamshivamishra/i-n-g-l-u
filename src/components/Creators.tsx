// app/creators/page.tsx
export const metadata = {
  title: "INGLU Creators — INGLU Website UI",
  description:
    "Get paid for the content you already make. 50 followers or 500K, you are in. Real brand collaborations, real growth, no follower gatekeeping.",
};

export default function CreatorsPage() {
  return (
    <div className="page-creators">
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">INGLU Creators</p>
            <h1>The creator economy starts here.</h1>
            <p>
              Get paid for the content you already make. 50 followers or
              500K, you are in. Real brand collaborations, real growth, no
              follower gatekeeping.
            </p>
            <div className="hero-ctas">
              <a className="btn blue" href="#content">
                Join INGLU Creators
              </a>
              <a className="btn" href="/ecosystem">
                Browse creators
              </a>
            </div>
          </div>
          <div className="hero-card" aria-hidden="true">
            <div className="metric-strip">
              <div className="stat">
                <strong>500+</strong>
                <span>Creators</span>
              </div>
              <div className="stat">
                <strong>14 days</strong>
                <span>To first gig</span>
              </div>
              <div className="stat">
                <strong>10-15%</strong>
                <span>Commission</span>
              </div>
              <div className="stat">
                <strong>Verified</strong>
                <span>Creator network</span>
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
                <h2>The creator economy starts here.</h2>
              </div>
              <p className="lead">
                Get paid for the content you already make. 50 followers or
                500K, you are in. Real brand collaborations, real growth,
                no follower gatekeeping.
              </p>
            </div>
            <div className="grid four">
              <div className="stat">
                <strong>500+</strong>
                <span>Creators</span>
              </div>
              <div className="stat">
                <strong>14 days</strong>
                <span>To first gig</span>
              </div>
              <div className="stat">
                <strong>10-15%</strong>
                <span>Commission</span>
              </div>
              <div className="stat">
                <strong>Verified</strong>
                <span>Creator network</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">The creator journey</p>
                <h2>From first post to paid, on a single path.</h2>
              </div>
              <p className="lead">
                The creator journey connects Create, Publish and
                Collaborate into one clear path for youth, campuses,
                creators and partners.
              </p>
            </div>
            <div className="grid">
              <article className="card">
                <h3>Create</h3>
                <p>Make the content you already love making.</p>
              </article>
              <article className="card">
                <h3>Publish</h3>
                <p>Post it anywhere, any audience size.</p>
              </article>
              <article className="card">
                <h3>Collaborate</h3>
                <p>Match with creators and the ecosystem.</p>
              </article>
              <article className="card">
                <h3>Work with brands</h3>
                <p>AI-matched paid gigs in about 14 days.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Opportunities</p>
                <h2>Real gigs matched to you.</h2>
              </div>
              <p className="lead">
                Opportunities connects Brand campaigns, Event coverage and
                Internships into one clear path for youth, campuses,
                creators and partners.
              </p>
            </div>
            <div className="grid">
              <article className="card">
                <h3>Brand campaigns</h3>
                <p>Paid gigs from Denver, Nykaa, Monster and more.</p>
              </article>
              <article className="card">
                <h3>Event coverage</h3>
                <p>Shoot, stream and cover INGLU events.</p>
              </article>
              <article className="card">
                <h3>Internships</h3>
                <p>Content, social and production roles.</p>
              </article>
              <article className="card">
                <h3>Ambassador programs</h3>
                <p>Earn your node on The Grid.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}