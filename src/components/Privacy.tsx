// app/privacy/page.tsx
export const metadata = {
  title: "Privacy Policy — INGLU Website UI",
  description:
    "A premium legal page UI for INGLU's privacy policy, designed to be readable, structured and trustworthy.",
};

export default function PrivacyPage() {
  return (
    <div className="page-privacy">
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">Legal</p>
            <h1>Privacy built for a youth ecosystem.</h1>
            <p>
              A premium legal page UI for INGLU&apos;s privacy policy,
              designed to be readable, structured and trustworthy.
            </p>
            <div className="hero-ctas">
              <a className="btn blue" href="#content">
                Contact privacy team
              </a>
              <a className="btn" href="/ecosystem">
                DPDP Compliance
              </a>
            </div>
          </div>
          <div className="hero-card" aria-hidden="true">
            <div className="metric-strip">
              <div className="stat">
                <strong>Clear</strong>
                <span>Data use</span>
              </div>
              <div className="stat">
                <strong>Secure</strong>
                <span>Systems</span>
              </div>
              <div className="stat">
                <strong>User</strong>
                <span>Control</span>
              </div>
              <div className="stat">
                <strong>DPDP</strong>
                <span>Ready</span>
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
                <h2>Privacy built for a youth ecosystem.</h2>
              </div>
              <p className="lead">
                A premium legal page UI for INGLU&apos;s privacy policy,
                designed to be readable, structured and trustworthy.
              </p>
            </div>
            <div className="grid four">
              <div className="stat">
                <strong>Clear</strong>
                <span>Data use</span>
              </div>
              <div className="stat">
                <strong>Secure</strong>
                <span>Systems</span>
              </div>
              <div className="stat">
                <strong>User</strong>
                <span>Control</span>
              </div>
              <div className="stat">
                <strong>DPDP</strong>
                <span>Ready</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">What this page should cover</p>
                <h2>
                  A structured legal reading experience for students,
                  creators, partners and brands.
                </h2>
              </div>
              <p className="lead">
                What this page should cover connects Information
                collected, How it is used and User choices into one
                clear path for youth, campuses, creators and partners.
              </p>
            </div>
            <div className="grid three">
              <article className="card">
                <h3>Information collected</h3>
                <p>
                  Account, contact, program, event and communication
                  information.
                </p>
              </article>
              <article className="card">
                <h3>How it is used</h3>
                <p>
                  To operate opportunities, events, partnerships and
                  community programs.
                </p>
              </article>
              <article className="card">
                <h3>User choices</h3>
                <p>Access, update, unsubscribe and privacy requests.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}