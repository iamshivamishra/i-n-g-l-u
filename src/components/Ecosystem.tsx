import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { StatCard, Card, type Stat, type InfoCard } from "../components/StatCard";
import OrbitMap, { type OrbitNode } from "../components/OrbitMap";

export const metadata: Metadata = {
  title: "The Ecosystem — INGLU Website UI",
  description:
    "Fourteen verticals across Education, Enhancement and Entertainment, each strengthening the next so campus opportunities, creator economy and student community all compound.",
};

const HERO_STATS: Stat[] = [
  { value: "E1", label: "Education" },
  { value: "E2", label: "Enhancement" },
  { value: "E3", label: "Entertainment" },
  { value: "14", label: "Verticals" },
];

const ORBIT_NODES: OrbitNode[] = [
  { label: "Education" },
  { label: "Enhancement" },
  { label: "Entertainment" },
  { label: "THE GRID" },
  { label: "FOMO" },
  { label: "Muse" },
  { label: "Creators" },
  { label: "SPACEBAR" },
];

const E3_MODEL_CARDS: InfoCard[] = [
  {
    title: "Education",
    description: "Talent with skills, proof and career capital.",
  },
  {
    title: "Enhancement",
    description: "Earnings, credentials, network and a home to use them.",
  },
  {
    title: "Entertainment",
    description: "Events, music, esports and the culture students show up for.",
  },
];

const VERTICAL_CARDS: InfoCard[] = [
  { title: "INGLU Education", description: "Skills built with brands." },
  { title: "CUET Prep", description: "The on-ramp before campus begins." },
  { title: "INGLU Creators", description: "50 followers or 500K, you are in." },
  { title: "SPACEBAR", description: "The home where the ecosystem belongs." },
  { title: "Society OS", description: "Operating system for college societies." },
  { title: "FOMO Xperience", description: "Campus events people talk about after." },
];

export default function EcosystemPage() {
  return (
    <>
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">The Ecosystem</p>
            <h1>14 verticals. One living ecosystem.</h1>
            <p>
              Fourteen verticals across Education, Enhancement and
              Entertainment, each strengthening the next so campus
              opportunities, creator economy and student community all
              compound.
            </p>
            <div className="hero-ctas">
              <a className="btn blue" href="#content">
                Explore the map
              </a>
              <a className="btn" href="/ecosystem">
                See every vertical
              </a>
            </div>
          </div>

          <div className="hero-card" aria-hidden="true">
            <div className="metric-strip">
              {HERO_STATS.map((stat) => (
                <div className="stat" key={stat.label}>
                  <strong>{stat.value}</strong>
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
                <h2>14 verticals. One living ecosystem.</h2>
              </div>
              <p className="lead">
                Fourteen verticals across Education, Enhancement and
                Entertainment, each strengthening the next so campus
                opportunities, creator economy and student community all
                compound.
              </p>
            </div>
            <div className="grid four">
              {HERO_STATS.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem Map */}
        <section className="section navy">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Ecosystem Map</p>
                <h2>Everything connected. Everything compounding.</h2>
              </div>
              <p className="lead">
                A visual system for showing how INGLU verticals feed each
                other through the E3 core.
              </p>
            </div>
            <OrbitMap coreLabel="E³" nodes={ORBIT_NODES} />
          </div>
        </section>

        {/* Built on the E3 model */}
        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Built on the E3 model.</p>
                <h2>
                  Serve one and it is a feature. Serve all three and it
                  becomes an ecosystem.
                </h2>
              </div>
              <p className="lead">
                Built on the E3 model. connects Education, Enhancement and
                Entertainment into one clear path for youth, campuses,
                creators and partners.
              </p>
            </div>
            <div className="grid three">
              {E3_MODEL_CARDS.map((card) => (
                <Card key={card.title} title={card.title} description={card.description} />
              ))}
            </div>
          </div>
        </section>

        {/* Every vertical */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Every vertical</p>
                <h2>Fifteen products. One purpose.</h2>
              </div>
              <p className="lead">
                Every vertical connects INGLU Education, CUET Prep and INGLU
                Creators into one clear path for youth, campuses, creators
                and partners.
              </p>
            </div>
            <div className="grid">
              {VERTICAL_CARDS.map((card) => (
                <Card key={card.title} title={card.title} description={card.description} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}