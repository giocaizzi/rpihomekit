import './styles.css';
import { useFetch } from './lib/fetch.js';
// import packageInfo from '../..package.json';


export function Dock({ children }) {
  return (
    <div className="dock shadow">
      <p>Welcome!</p>
    </div>
  );
}


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

export function FetchCard(endpoint = '/') {
  const { data, loading, error } = useFetch(endpoint);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (<Card props={data} />);
}