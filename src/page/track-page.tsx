import type { FC } from 'react';
import Layout from '../components/layout';
import SquarLogo from '../assets/parcelab-logo-square.svg?react';
interface TrackPageProps {}
const TrackPage: FC<TrackPageProps> = () => {
  return (
    <Layout>
      <form className="mx-auto max-w-sm shadow-md border rounded-xl p-4">
        <SquarLogo />
        <h1>Track your oder</h1>
        <div>
          Enter your order number and zip code combination to see the order
          details and shipping updates
        </div>
        <input />
        <input />
        <button>Track</button>
      </form>
    </Layout>
  );
};

export default TrackPage;
