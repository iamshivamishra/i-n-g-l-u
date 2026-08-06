  import type { Metadata } from "next";
  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";
  import { StatCard, Card, type Stat, type InfoCard } from "../components/StatCard";
  import { AnimatedCounter } from "../components/Animatedcounter";

  export const metadata: Metadata = {
    title: "About INGLU — INGLU Website UI",
    description:
      "INGLU is a global youth ecosystem connecting students, creators, campuses, brands and opportunities through education, enhancement and entertainment.",
  };

  const HERO_STATS: Stat[] = [
    { value: "1000+", label: "Events" },
    { value: "500+", label: "Campuses" },
    { value: "50+", label: "Brands" },
    { value: "1L+", label: "Youth" },
  ];

  const ECOSYSTEM_CARDS: InfoCard[] = [
    {
      title: "Students",
      description:
        "Internships, real skills, campus leadership and a student community where you belong.",
    },
    {
      title: "Creators",
      description: "Creator economy access without follower gatekeeping.",
    },
    {
      title: "Colleges",
      description: "Sponsors, artists and a campus network for students at zero cost.",
    },
    {
      title: "Brands",
      description: "Gen Z reach through verified campus and creator channels.",
    },
  ];

  const WHY_IT_MATTERS_CARDS: InfoCard[] = [
    { title: "50M students", description: "Talent locked out by access." },
    { title: "Brands guessing", description: "Budgets spent without proof of relevance." },
    { title: "Campuses siloed", description: "Communities reset when each batch graduates." },
  ];

  const STORY_CARDS: InfoCard[] = [
    {
      title: "2017",
      description:
        "One college, a handful of students, and a belief that young talent deserved to be seen.",
    },
    {
      title: "2021",
      description: "Events became an ecosystem across students, creators, campuses and brands.",
    },
    {
      title: "Now",
      description: "A connected operating layer for opportunity, culture and youth growth.",
    },
  ];

  export default function AboutPage() {
    return (
      <>
        {/* <Navbar activePath="/about" /> */}

        <header className="hero">
          <div className="container hero-grid">
            <div>
              <p className="kicker">About INGLU GLOBAL</p>
              <h1>The next generation needs more than a degree.</h1>
              <p>
                INGLU is a global youth ecosystem connecting students, creators,
                campuses, brands and opportunities through education, enhancement
                and entertainment.
              </p>
              <div className="hero-ctas">
                <a className="btn blue" href="#content">
                  See what we do
                </a>
                <a className="btn" href="/ecosystem">
                  Explore the ecosystem
                </a>
              </div>
            </div>

            <div className="hero-card" aria-hidden="true">
  <div className="metric-strip">
    {HERO_STATS.map((stat) => (
      <div className="stat" key={stat.label}>
        <strong>
          <AnimatedCounter
            value={stat.value}
            className="text-[42px] font-black leading-none tracking-[-.055em] text-[#0757f8]"
          />
        </strong>
        <span>{stat.label}</span>
      </div>
    ))}
  </div>
</div>
          </div>
        </header>

        <main id="content">
          {/* At a glance */}
          <section className="section">
            <div className="container">
              <div className="section-head">
                <div>
                  <p className="kicker">At a glance</p>
                  <h2>The next generation needs more than a degree.</h2>
                </div>
                <p className="lead">
                  INGLU is a global youth ecosystem connecting students, creators,
                  campuses, brands and opportunities through education,
                  enhancement and entertainment.
                </p>
              </div>
              <div className="grid four">
                {HERO_STATS.map((stat) => (
                  <StatCard key={stat.label} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>
          </section>

          {/* One ecosystem, five ways in */}
          <section className="section soft">
            <div className="container">
              <div className="section-head">
                <div>
                  <p className="kicker">One ecosystem. Five ways in.</p>
                  <h2>
                    Not a marketing agency, a creator platform or an event
                    company. All three, connected.
                  </h2>
                </div>
                <p className="lead">
                  One ecosystem. Five ways in. connects Students, Creators and
                  Colleges into one clear path for youth, campuses, creators and
                  partners.
                </p>
              </div>
              <div className="grid">
                {ECOSYSTEM_CARDS.map((card) => (
                  <Card key={card.title} title={card.title} description={card.description} />
                ))}
              </div>
            </div>
          </section>

          {/* Why it matters */}
          <section className="section">
            <div className="container">
              <div className="section-head">
                <div>
                  <p className="kicker">Why it matters</p>
                  <h2>
                    India&apos;s most ambitious generation grew up disconnected
                    from the opportunities meant for them.
                  </h2>
                </div>
                <p className="lead">
                  Why it matters connects 50M students, Brands guessing and
                  Campuses siloed into one clear path for youth, campuses,
                  creators and partners.
                </p>
              </div>
              <div className="grid three">
                {WHY_IT_MATTERS_CARDS.map((card) => (
                  <Card key={card.title} title={card.title} description={card.description} />
                ))}
              </div>
            </div>
          </section>

          {/* The story */}
          <section className="section soft">
            <div className="container">
              <div className="section-head">
                <div>
                  <p className="kicker">The story</p>
                  <h2>
                    Since 2017, INGLU has grown from campus communities into a
                    national youth ecosystem.
                  </h2>
                </div>
                <p className="lead">
                  The story connects 2017, 2021 and Now into one clear path for
                  youth, campuses, creators and partners.
                </p>
              </div>
              <div className="grid three">
                {STORY_CARDS.map((card) => (
                  <Card key={card.title} title={card.title} description={card.description} />
                ))}
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
