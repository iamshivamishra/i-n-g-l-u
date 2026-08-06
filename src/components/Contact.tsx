// app/contact/page.tsx
export const metadata = {
  title: "Contact — INGLU Website UI",
  description:
    "One message in, the right team out. Tell us who you are and we will point you straight into the ecosystem.",
};

export default function ContactPage() {
  return (
    <div className="page-contact">
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">Contact INGLU</p>
            <h1>Let&apos;s build something meaningful.</h1>
            <p>
              One message in, the right team out. Tell us who you are and
              we will point you straight into the ecosystem.
            </p>
            <div className="hero-ctas">
              <a className="btn blue" href="#content">
                Send message
              </a>
              <a className="btn" href="/ecosystem">
                hello@inglu.global
              </a>
            </div>
          </div>
          <div className="hero-card" aria-hidden="true">
            <div className="metric-strip">
              <div className="stat">
                <strong>New Delhi</strong>
                <span>Base</span>
              </div>
              <div className="stat">
                <strong>12-48 hrs</strong>
                <span>Response</span>
              </div>
              <div className="stat">
                <strong>Every</strong>
                <span>Message read</span>
              </div>
              <div className="stat">
                <strong>Nationwide</strong>
                <span>Building</span>
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
                <h2>Let&apos;s build something meaningful.</h2>
              </div>
              <p className="lead">
                One message in, the right team out. Tell us who you are
                and we will point you straight into the ecosystem.
              </p>
            </div>
            <div className="grid four">
              <div className="stat">
                <strong>New Delhi</strong>
                <span>Base</span>
              </div>
              <div className="stat">
                <strong>12-48 hrs</strong>
                <span>Response</span>
              </div>
              <div className="stat">
                <strong>Every</strong>
                <span>Message read</span>
              </div>
              <div className="stat">
                <strong>Nationwide</strong>
                <span>Building</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Reach the ecosystem</p>
                <h2>
                  Whether it is student opportunities, creator
                  partnerships, campus collaborations or brand
                  partnerships, the door is open.
                </h2>
              </div>
              <p className="lead">
                Reach the ecosystem connects Students, Creators and Brands
                into one clear path for youth, campuses, creators and
                partners.
              </p>
            </div>
            <div className="grid">
              <article className="card">
                <h3>Students</h3>
                <p>Find internships, events and opportunities.</p>
              </article>
              <article className="card">
                <h3>Creators</h3>
                <p>Join brand campaigns and creator programs.</p>
              </article>
              <article className="card">
                <h3>Brands</h3>
                <p>Run youth campaigns through the ecosystem.</p>
              </article>
              <article className="card">
                <h3>Campuses</h3>
                <p>Bring the campus engine to your students.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Quick answers</p>
                <h2>Before you reach out.</h2>
              </div>
              <p className="lead">
                Quick answers connects How can I partner with INGLU?, How
                do I become a creator? and Can my college collaborate?
                into one clear path for youth, campuses, creators and
                partners.
              </p>
            </div>
            <div className="grid three">
              <article className="card">
                <h3>How can I partner with INGLU?</h3>
                <p>
                  Tell us your goals and the partnerships team replies
                  with a tailored path.
                </p>
              </article>
              <article className="card">
                <h3>How do I become a creator?</h3>
                <p>Join INGLU Creators and get matched to briefs.</p>
              </article>
              <article className="card">
                <h3>Can my college collaborate?</h3>
                <p>
                  Yes, the college pathway is built for societies,
                  committees and institutions.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section navy">
          <div className="container split">
            <div className="panel glass-panel">
              <p className="kicker">Route your request</p>
              <h2>One message in, the right team out.</h2>
              <p className="lead">
                Students, creators, brands, campuses, event partners and
                media all get a clear route into the ecosystem.
              </p>
            </div>
            <form
              className="form"
              action="mailto:hello@inglu.global"
              method="post"
              encType="text/plain"
            >
              <input name="name" placeholder="Name" autoComplete="name" />
              <input name="email" placeholder="Email" autoComplete="email" />
              <input name="phone" placeholder="Phone number" autoComplete="tel" />
              <select defaultValue="">
                <option value="" disabled>
                  I am a...
                </option>
                <option>Student</option>
                <option>Creator</option>
                <option>Brand</option>
                <option>Campus Partner</option>
              </select>
              <textarea name="message" placeholder="Message"></textarea>
              <button type="submit" className="btn blue">
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}