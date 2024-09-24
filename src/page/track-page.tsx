import type { FC } from 'react';
import Layout from '../components/layout';
import SquarLogo from '../assets/parcelab-logo-square.svg?react';
import Button from '../components/button';
interface TrackPageProps {}
const TrackPage: FC<TrackPageProps> = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-sm shadow-md border rounded-xl py-12 px-8 text-center flex flex-col gap-y-4 m-auto">
        <div className="mt-[-80px]">
          <SquarLogo className="bg-[#002172] fill-white rounded-xl p-2 w-20 shadow-xl m-auto" />
        </div>
        <h1 className="text-2xl">Track your oder</h1>
        <div className="text-xs text-gray-400 px-4">
          Enter your order number and zip code combination to see the order
          details and shipping updates
        </div>
        <div className="text-left">
          <label
            htmlFor="orderNumber"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Order Number
          </label>

          <input
            className="border-2 rounded-md bg-gray-50 p-2 w-full"
            name="orderNumber"
          />
        </div>
        <div className="text-left">
          <label
            htmlFor="zipcode"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Zip Code
          </label>
          <input
            className="border-2 rounded-md bg-gray-50 p-2 w-full"
            name="zipcode"
          />
        </div>
        <hr></hr>
        <Button>Track</Button>
      </div>
    </Layout>
  );
};

export default TrackPage;
