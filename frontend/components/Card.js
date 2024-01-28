"use client";

import './Card.css';

export function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export function WelcomeCard({ message, version }) {
  return (
    <Card>
      <h2>{message}</h2>
      <div>Version: {version}</div>
    </Card>
  );
}

export function InfoCard({ info }) {
  return (
    <Card>
    <p>{info}</p>
    </Card>
  );
}



import { useState, useEffect } from 'react';

export function StatsCard() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/stats')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>Stats</h2>
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>{key}: {value}</div>
      ))}
    </div>
  );
}