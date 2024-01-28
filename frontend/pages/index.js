import {Card, WelcomeCard} from '../components/Card.js';
import RootLayout from '../app/layout';

export default function Home() {
  return (
    <RootLayout>
      <Card>
      <WelcomeCard message="Welcome to our website!" version="1.0.0" />
      </Card>
    </RootLayout>
  );
}