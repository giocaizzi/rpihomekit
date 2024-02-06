"use client";

import Welcome from '@/components/Welcome';
import Box from '@/components/Box';


export default function Home() {
  return (
    <div>
      <Welcome/>
      <Box>
        <p>Ciao!</p>
      </Box>
    </div>
  );
}