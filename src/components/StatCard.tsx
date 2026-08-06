export interface Stat {
  value: string;
  label: string;
}

export function StatCard({ value, label }: Stat) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

export interface InfoCard {
  title: string;
  description: string;
}

export function Card({ title, description }: InfoCard) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
