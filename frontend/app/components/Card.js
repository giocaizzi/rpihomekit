"use client";
import { useFetch } from '../lib/fetch.js';
import './Card.css';

import { version } from '../../package.json';

export function WelcomeCard() {
  const { data, loading, error } = useFetch('/');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="card">
      <h1>rpihomekit</h1>
      <p>{data.message}</p>
      <p>Client version: {version}</p>
      <p>Server version: {data.version}</p>
    </div>
  );
}