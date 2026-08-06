// app/press/page.tsx
export const metadata = {
  title: "Press & Media — INGLU Website UI",
  description:
    "From campus movements and creator economies to brand partnerships and youth culture, INGLU sits at the center of the next generation's growth story.",
};

export default function PressPage() {
  return (
    <div className="page-press">
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">Press &amp; Media</p>
            <h1>Stories shaping India&apos;s youth ecosystem.</h1>
            <p>
              From campus movements and creator economies to brand
              partnerships and youth culture, INGLU sits at the center of
              the next generation&apos;s growth story.
            </p>
            <div className="hero-ctas">
              <a className="btn blue" href="#content">
                Download media kit
              </a>
              <a className="btn" href="/ecosystem">
                Contact press team
              </a>
            </div>
          </div>
          <div className="hero-card" aria-hidden="true">
            <div className="metric-strip">
              <div className="stat">
                <strong>2017</strong>
                <span>Founded</span>
              </div>
              <div className="stat">
                <strong>500+</strong>
                <span>Campuses</span>
              </div>
              <div className="stat">
                <strong>1000+</strong>
                <span>Events</span>
              </div>
              <div className="stat">
                <strong>1L+</strong>
                <span>Youth</span>
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
                <h2>Stories shaping India&apos;s youth ecosystem.</h2>
              </div>
              <p className="lead">
                From campus movements and creator economies to brand
                partnerships and youth culture, INGLU sits at the center
                of the next generation&apos;s growth story.
              </p>
            </div>
            <div className="grid four">
              <div className="stat">
                <strong>2017</strong>
                <span>Founded</span>
              </div>
              <div className="stat">
                <strong>500+</strong>
                <span>Campuses</span>
              </div>
              <div className="stat">
                <strong>1000+</strong>
                <span>Events</span>
              </div>
              <div className="stat">
                <strong>1L+</strong>
                <span>Youth</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">As featured in</p>
                <h2>
                  A refined newsroom for media and partner credibility.
                </h2>
              </div>
              <p className="lead">
                As featured in connects YourStory, Entrepreneur India and
                Hindustan Times into one clear path for youth, campuses,
                creators and partners.
              </p>
            </div>
            <div className="grid">
              <article className="card">
                <h3>YourStory</h3>
                <p>Startup and ecosystem coverage.</p>
              </article>
              <article className="card">
                <h3>Entrepreneur India</h3>
                <p>Founder and growth stories.</p>
              </article>
              <article className="card">
                <h3>Hindustan Times</h3>
                <p>Youth culture and campus movement.</p>
              </article>
              <article className="card">
                <h3>Business Today</h3>
                <p>Brand and market context.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">The INGLU story</p>
                <h2>Key milestones for press and media teams.</h2>
              </div>
              <p className="lead">
                The INGLU story connects The Beginning, Expansion and The
                Ecosystem into one clear path for youth, campuses,
                creators and partners.
              </p>
            </div>
            <div className="grid three">
              <article className="card">
                <h3>The Beginning</h3>
                <p>2017: campus communities and student ambition.</p>
              </article>
              <article className="card">
                <h3>Expansion</h3>
                <p>2019: city-to-city movement.</p>
              </article>
              <article className="card">
                <h3>The Ecosystem</h3>
                <p>2021: events, creators and opportunities at scale.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}