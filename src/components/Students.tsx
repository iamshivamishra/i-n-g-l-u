// app/students/page.tsx
export const metadata = {
  title: "For Students — INGLU Website UI",
  description:
    "Earn from the content you already make. Land real internships and paid brand collaborations. Build a network and a name that outlast your degree.",
};

export default function StudentsPage() {
  return (
    <div className="page-students">
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">For Students · Since 2017</p>
            <h1>Your college life just became worth something.</h1>
            <p>
              Earn from the content you already make. Land real internships
              and paid brand collaborations. Build a network and a name that
              outlast your degree.
            </p>
            <div className="hero-ctas">
              <a className="btn blue" href="#content">
                Join THE GRID
              </a>
              <a className="btn" href="/ecosystem">
                Explore the Ecosystem
              </a>
            </div>
          </div>
          <div className="hero-card" aria-hidden="true">
            <div className="metric-strip">
              <div className="stat">
                <strong>Rs 8-25K</strong>
                <span>Typical stipend</span>
              </div>
              <div className="stat">
                <strong>50K+</strong>
                <span>Students</span>
              </div>
              <div className="stat">
                <strong>14</strong>
                <span>Verticals</span>
              </div>
              <div className="stat">
                <strong>500+</strong>
                <span>Campuses</span>
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
                <h2>Your college life just became worth something.</h2>
              </div>
              <p className="lead">
                Earn from the content you already make. Land real
                internships and paid brand collaborations. Build a network
                and a name that outlast your degree.
              </p>
            </div>
            <div className="grid four">
              <div className="stat">
                <strong>Rs 8-25K</strong>
                <span>Typical stipend</span>
              </div>
              <div className="stat">
                <strong>50K+</strong>
                <span>Students</span>
              </div>
              <div className="stat">
                <strong>14</strong>
                <span>Verticals</span>
              </div>
              <div className="stat">
                <strong>500+</strong>
                <span>Campuses</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">The student advantage</p>
                <h2>Six ways college starts paying you back.</h2>
              </div>
              <p className="lead">
                The student advantage connects Internships, Brand
                collaborations and Networking into one clear path for
                youth, campuses, creators and partners.
              </p>
            </div>
            <div className="grid">
              <article className="card">
                <h3>Internships</h3>
                <p>Real internships, not coffee runs.</p>
              </article>
              <article className="card">
                <h3>Brand collaborations</h3>
                <p>Paid campus and creator briefs.</p>
              </article>
              <article className="card">
                <h3>Networking</h3>
                <p>The connections that change a career.</p>
              </article>
              <article className="card">
                <h3>Leadership</h3>
                <p>Run campus programs that actually matter.</p>
              </article>
              <article className="card">
                <h3>Creator opportunities</h3>
                <p>Monetize content at any audience size.</p>
              </article>
              <article className="card">
                <h3>Community</h3>
                <p>Belong to a network that outlasts your degree.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">The E3 experience</p>
                <h2>
                  Experience equals Education plus Entertainment plus
                  Enhancement.
                </h2>
              </div>
              <p className="lead">
                The E3 experience connects Education, Entertainment and
                Enhancement into one clear path for youth, campuses,
                creators and partners.
              </p>
            </div>
            <div className="grid three">
              <article className="card">
                <h3>Education</h3>
                <p>Industry-led bootcamps, playbooks and career capital.</p>
              </article>
              <article className="card">
                <h3>Entertainment</h3>
                <p>FOMO Xperience, festivals, shows and campus culture.</p>
              </article>
              <article className="card">
                <h3>Enhancement</h3>
                <p>THE GRID, SPACEBAR and leadership opportunities.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}