import './Card.css';


export function Card(props) {

  return (
    <div className="card">
      <h1>rpihomekit</h1>
      <p>{props.message}</p>
      <p>Client version: {props.client_version}</p>
      <p>Server version: {props.server_version}</p>
    </div>
  );
}