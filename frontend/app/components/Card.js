"use client"
import './Card.css';
import { useState, useEffect } from 'react';

export function WelcomeCard() {
  const [data, setData] = useState({ message: '', version: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4201/')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="card">
      <h1>rpihomekit</h1>
      <p>{data.message}</p>
      <p>Version: {data.version}</p>
    </div>
  );
}