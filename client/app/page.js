"use client";
import { useFetch } from './lib/fetch.js';
import packageInfo from '../package.json';
import { Card } from './components/Card.js';
import RootLayout from './layout.js';

export default function Home() {
  const { data, loading, error } = useFetch('/');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <RootLayout>
      <Card message={data.message} client_version={packageInfo.version} server_version={data.version} />
    </RootLayout>
  );
}