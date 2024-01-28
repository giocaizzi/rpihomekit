export function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export function WelcomeCard({ message, version }) {
  return (
    <>
      <h2>{message}</h2>
      <div>Version: {version}</div>
    </>
  );
}

export function InfoCard({ info }) {
  return <p>{info}</p>;
}

export function StatsCard({ stats }) {
  return (
    <div>
      <h2> Stats</h2>
      {Object.entries(stats).map(([key, value]) => (
        <div key={key}>{key}: {value}</div>
      ))}
    </div>
  );
}