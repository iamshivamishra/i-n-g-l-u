// app/brands/page.tsx
export const metadata = {
  title: "For Brands — INGLU Website UI",
  description:
    "INGLU connects brands directly with students, creators, campuses and communities through real-world experiences, creator ecosystems and measurable engagement.",
};

export default function BrandsPage() {
  return (
    <div className="page-brands">
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">For Brands</p>
            <h1>Reach Gen Z where culture actually happens.</h1>
            <p>
              INGLU connects brands directly with students, creators,
              campuses and communities through real-world experiences,
              creator ecosystems and measurable engagement.
            </p>
            <div className="hero-ctas">
              <a className="btn blue" href="#content">
                Talk to partnerships
              </a>
              <a className="btn" href="/ecosystem">
                Explore case studies
              </a>
            </div>
          </div>
          <div className="hero-card" aria-hidden="true">
            <div className="metric-strip">
              <div className="stat">
                <strong>500+</strong>
                <span>Campuses</span>
              </div>
              <div className="stat">
                <strong>50+</strong>
                <span>Brand partners</span>
              </div>
              <div className="stat">
                <strong>7 days</strong>
                <span>Activation window</span>
              </div>
              <div className="stat">
                <strong>1L+</strong>
                <span>Youth reach</span>
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
                <h2>Reach Gen Z where culture actually happens.</h2>
              </div>
              <p className="lead">
                INGLU connects brands directly with students, creators,
                campuses and communities through real-world experiences,
                creator ecosystems and measurable engagement.
              </p>
            </div>
            <div className="grid four">
              <div className="stat">
                <strong>500+</strong>
                <span>Campuses</span>
              </div>
              <div className="stat">
                <strong>50+</strong>
                <span>Brand partners</span>
              </div>
              <div className="stat">
                <strong>7 days</strong>
                <span>Activation window</span>
              </div>
              <div className="stat">
                <strong>1L+</strong>
                <span>Youth reach</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Traditional youth marketing is breaking.</p>
                <h2>
                  Attention is fragmented, reach does not equal engagement,
                  and communities cannot be bought.
                </h2>
              </div>
              <p className="lead">
                Traditional youth marketing is breaking. connects Attention
                is fragmented, Reach is not engagement and Communities
                cannot be bought into one clear path for youth, campuses,
                creators and partners.
              </p>
            </div>
            <div className="grid three">
              <article className="card">
                <h3>Attention is fragmented</h3>
                <p>Gen Z lives across apps, feeds, campuses and communities.</p>
              </article>
              <article className="card">
                <h3>Reach is not engagement</h3>
                <p>Impressions are cheap. Trust is not.</p>
              </article>
              <article className="card">
                <h3>Communities cannot be bought</h3>
                <p>You have to be part of them, not interrupt them.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Ways to win Gen Z</p>
                <h2>One ecosystem. Multiple entry points.</h2>
              </div>
              <p className="lead">
                Ways to win Gen Z connects Campus activations, Creator
                campaigns and Product launches into one clear path for
                youth, campuses, creators and partners.
              </p>
            </div>
            <div className="grid">
              <article className="card">
                <h3>Campus activations</h3>
                <p>On-ground experiences across colleges.</p>
              </article>
              <article className="card">
                <h3>Creator campaigns</h3>
                <p>Student creators make authentic content.</p>
              </article>
              <article className="card">
                <h3>Product launches</h3>
                <p>Introduce products where Gen Z already is.</p>
              </article>
              <article className="card">
                <h3>Ambassador programs</h3>
                <p>Always-on local campus presence.</p>
              </article>
              <article className="card">
                <h3>Community building</h3>
                <p>Grow and energise youth communities.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}