import {WelcomeCard} from './components/Card.js';
import RootLayout from './layout.js';

export default function Home() {
  return (
    <RootLayout>
      <WelcomeCard/>
    </RootLayout>
  );
}