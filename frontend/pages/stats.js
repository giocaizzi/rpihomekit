import RootLayout from '../app/layout';
import { StatsCard } from '../components/Card.js';

export default function Stats() {
    const stats = {
        "ciao": 2,
        "boo": 3
    }
    return (
        <RootLayout>
            <StatsCard stats={stats} />
        </RootLayout>
    );
}