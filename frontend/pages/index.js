// pages/page1.js
import React from 'react';
import WelcomeCard from '../components/WelcomeCard.js';
import RootLayout from '../app/layout';

export default function Home() {
  return (
    <RootLayout>
      <WelcomeCard message="Welcome to our website!" version="1.0.0" />
    </RootLayout>
  );
}