// app/refunds/page.tsx
export const metadata = {
  title: "Refund Policy — INGLU Website UI",
  description:
    "A premium refund policy UI for event registrations, experiences, memberships and paid programs.",
};

export default function RefundsPage() {
  return (
    <div className="page-refunds">
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">Legal</p>
            <h1>Clear refund rules for events and programs.</h1>
            <p>
              A premium refund policy UI for event registrations,
              experiences, memberships and paid programs.
            </p>
            <div className="hero-ctas">
              <a className="btn blue" href="#content">
                Request support
              </a>
              <a className="btn" href="/ecosystem">
                View terms
              </a>
            </div>
          </div>
          <div className="hero-card" aria-hidden="true">
            <div className="metric-strip">
              <div className="stat">
                <strong>Clear</strong>
                <span>Eligibility</span>
              </div>
              <div className="stat">
                <strong>Fast</strong>
                <span>Support</span>
              </div>
              <div className="stat">
                <strong>Event</strong>
                <span>Rules</span>
              </div>
              <div className="stat">
                <strong>Program</strong>
                <span>Rules</span>
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
                <h2>Clear refund rules for events and programs.</h2>
              </div>
              <p className="lead">
                A premium refund policy UI for event registrations,
                experiences, memberships and paid programs.
              </p>
            </div>
            <div className="grid four">
              <div className="stat">
                <strong>Clear</strong>
                <span>Eligibility</span>
              </div>
              <div className="stat">
                <strong>Fast</strong>
                <span>Support</span>
              </div>
              <div className="stat">
                <strong>Event</strong>
                <span>Rules</span>
              </div>
              <div className="stat">
                <strong>Program</strong>
                <span>Rules</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Refund flow</p>
                <h2>A support-oriented layout for reducing confusion.</h2>
              </div>
              <p className="lead">
                Refund flow connects Eligibility, Timelines and
                Exceptions into one clear path for youth, campuses,
                creators and partners.
              </p>
            </div>
            <div className="grid three">
              <article className="card">
                <h3>Eligibility</h3>
                <p>When refunds apply and what evidence is needed.</p>
              </article>
              <article className="card">
                <h3>Timelines</h3>
                <p>Expected review and processing windows.</p>
              </article>
              <article className="card">
                <h3>Exceptions</h3>
                <p>
                  No-show, transfer, cancellation and event-specific
                  terms.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}