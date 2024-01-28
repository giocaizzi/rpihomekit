"use client"
import './Card.css';


export function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export function WelcomeCard() {
}