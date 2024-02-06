import '@/components/styles.css';

import PropTypes from 'prop-types';


export default function Card(props) {

  return (
    <div className="card">
      <h1>rpihomekit</h1>
      <p>{props.message}</p>
      <p>Client version: {props.client_version}</p>
      <p>Server version: {props.server_version}</p>
    </div>
  );
}

Card.propTypes = {
  message: PropTypes.string,
  client_version: PropTypes.string,
  server_version: PropTypes.string
};

Card.defaultProps = {}

