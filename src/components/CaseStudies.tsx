// app/case-studies/page.tsx
export const metadata = {
  title: "Case Studies — INGLU Website UI",
  description:
    "From campus activations and creator campaigns to national youth engagement programs, see how brands achieved measurable outcomes through the INGLU ecosystem.",
};

export default function CaseStudiesPage() {
  return (
    <div className="page-case-studies">
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">Success Stories</p>
            <h1>Proof that communities move culture.</h1>
            <p>
              From campus activations and creator campaigns to national
              youth engagement programs, see how brands achieved
              measurable outcomes through the INGLU ecosystem.
            </p>
            <div className="hero-ctas">
              <a className="btn blue" href="#content">
                Explore case studies
              </a>
              <a className="btn" href="/ecosystem">
                Partner with INGLU
              </a>
            </div>
          </div>
          <div className="hero-card" aria-hidden="true">
            <div className="metric-strip">
              <div className="stat">
                <strong>1L+</strong>
                <span>Reach</span>
              </div>
              <div className="stat">
                <strong>+18%</strong>
                <span>Engagement</span>
              </div>
              <div className="stat">
                <strong>500+</strong>
                <span>Creators</span>
              </div>
              <div className="stat">
                <strong>4.5M+</strong>
                <span>Conversions</span>
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
                <h2>Proof that communities move culture.</h2>
              </div>
              <p className="lead">
                From campus activations and creator campaigns to national
                youth engagement programs, see how brands achieved
                measurable outcomes through the INGLU ecosystem.
              </p>
            </div>
            <div className="grid four">
              <div className="stat">
                <strong>1L+</strong>
                <span>Reach</span>
              </div>
              <div className="stat">
                <strong>+18%</strong>
                <span>Engagement</span>
              </div>
              <div className="stat">
                <strong>500+</strong>
                <span>Creators</span>
              </div>
              <div className="stat">
                <strong>4.5M+</strong>
                <span>Conversions</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Featured case study</p>
                <h2>
                  Nykaa x INGLU launched a Gen Z campus awareness campaign
                  for a new beauty line.
                </h2>
              </div>
              <p className="lead">
                Featured case study connects Objective, Challenge and
                Solution into one clear path for youth, campuses, creators
                and partners.
              </p>
            </div>
            <div className="grid">
              <article className="card">
                <h3>Objective</h3>
                <p>Launch awareness with credible student voices.</p>
              </article>
              <article className="card">
                <h3>Challenge</h3>
                <p>Traditional channels were expensive and shallow.</p>
              </article>
              <article className="card">
                <h3>Solution</h3>
                <p>
                  Campus ambassador network plus student-creator
                  activations.
                </p>
              </article>
              <article className="card">
                <h3>Result</h3>
                <p>Authentic content engine across colleges.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Campaign types</p>
                <h2>Repeatable formats with measurable outcomes.</h2>
              </div>
              <p className="lead">
                Campaign types connects Beauty, Food and beverage and
                Entertainment into one clear path for youth, campuses,
                creators and partners.
              </p>
            </div>
            <div className="grid three">
              <article className="card">
                <h3>Beauty</h3>
                <p>Campus awareness and creator sampling.</p>
              </article>
              <article className="card">
                <h3>Food and beverage</h3>
                <p>College activations and student offers.</p>
              </article>
              <article className="card">
                <h3>Entertainment</h3>
                <p>Event-led recall and fan communities.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}