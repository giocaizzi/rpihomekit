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