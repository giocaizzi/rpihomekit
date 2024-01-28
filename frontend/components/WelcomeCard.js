// components/WelcomeCard.js
import React from 'react';

export default function WelcomeCard({ message, version }) {
  return (
    <div className="card">
      <h2>{message}</h2>
      <div>Version: {version}</div>
    </div>
  );
}