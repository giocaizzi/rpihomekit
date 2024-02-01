"use client";

import { Welcome , Apps} from './components.js';
import RootLayout from './layout.js';


export default function Home() {
  return (
    <div>
      <Welcome/>
      <Apps/>
    </div>
  );
}