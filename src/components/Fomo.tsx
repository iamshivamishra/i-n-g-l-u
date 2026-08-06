// app/fomo/page.tsx
export const metadata = {
  title: "FOMO Xperience — INGLU Website UI",
  description:
    "India's loudest youth events: founder talks, creator economy, hands-on workshops and a live show in one day on your campus.",
};

export default function FomoPage() {
  return (
    <div className="page-fomo">
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">FOMO Xperience</p>
            <h1>You had to be there.</h1>
            <p>
              India&apos;s loudest youth events: founder talks, creator
              economy, hands-on workshops and a live show in one day on
              your campus.
            </p>
            <div className="hero-ctas">
              <a className="btn blue" href="#content">
                Host FOMO
              </a>
              <a className="btn" href="/ecosystem">
                Sponsor FOMO
              </a>
            </div>
          </div>
          <div className="hero-card" aria-hidden="true">
            <div className="metric-strip">
              <div className="stat">
                <strong>100+</strong>
                <span>Campuses</span>
              </div>
              <div className="stat">
                <strong>1 day</strong>
                <span>Format</span>
              </div>
              <div className="stat">
                <strong>0</strong>
                <span>Fluff</span>
              </div>
              <div className="stat">
                <strong>All access</strong>
                <span>Energy</span>
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
                <h2>You had to be there.</h2>
              </div>
              <p className="lead">
                India&apos;s loudest youth events: founder talks, creator
                economy, hands-on workshops and a live show in one day on
                your campus.
              </p>
            </div>
            <div className="grid four">
              <div className="stat">
                <strong>100+</strong>
                <span>Campuses</span>
              </div>
              <div className="stat">
                <strong>1 day</strong>
                <span>Format</span>
              </div>
              <div className="stat">
                <strong>0</strong>
                <span>Fluff</span>
              </div>
              <div className="stat">
                <strong>All access</strong>
                <span>Energy</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">The moment wall</p>
                <h2>Scroll through the stuff people brag about.</h2>
              </div>
              <p className="lead">
                The moment wall connects The drop that shook the quad, From
                hostel room to Rs 40Cr and How creators actually get paid
                into one clear path for youth, campuses, creators and
                partners.
              </p>
            </div>
            <div className="grid">
              <article className="card">
                <h3>The drop that shook the quad</h3>
                <p>Amity · Noida.</p>
              </article>
              <article className="card">
                <h3>From hostel room to Rs 40Cr</h3>
                <p>Founder story at Bennett University.</p>
              </article>
              <article className="card">
                <h3>How creators actually get paid</h3>
                <p>Creator economy at SRM Chennai.</p>
              </article>
              <article className="card">
                <h3>3,000 phones up at once</h3>
                <p>Campus fest at Christ Bangalore.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">FOMO modules</p>
                <h2>A single day built like a cultural stack.</h2>
              </div>
              <p className="lead">
                FOMO modules connects Founder talk, Workshop and Creator
                meetup into one clear path for youth, campuses, creators
                and partners.
              </p>
            </div>
            <div className="grid">
              <article className="card">
                <h3>Founder talk</h3>
                <p>Ambition in first person.</p>
              </article>
              <article className="card">
                <h3>Workshop</h3>
                <p>Hands-on, useful, fast.</p>
              </article>
              <article className="card">
                <h3>Creator meetup</h3>
                <p>Collaboration that keeps going.</p>
              </article>
              <article className="card">
                <h3>Live show</h3>
                <p>The reason everyone remembers it.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}