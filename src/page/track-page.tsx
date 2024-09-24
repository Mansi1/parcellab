import { FormEvent, ReactNode, useState, type FC } from 'react';
import Layout from '../components/layout';
import SquarLogo from '../assets/parcelab-logo-square.svg?react';
import Button from '../components/button';
import { getOrder } from '../api';
import { useNavigate } from 'react-router-dom';
interface TrackPageProps {}
type TrackPageState = {
  status: 'NOT_FOUND' | 'NONE' | 'LOADING' | 'ERROR' | 'INVALID';
  orderNumber: string;
  zipCode: string;
};
const STATUS_MAP: Record<TrackPageState['status'], ReactNode> = {
  NOT_FOUND: (
    <div className="text-left text-xs text-red-700">Sorry no order found!</div>
  ),
  NONE: <div className="text-left text-xs opacity-0">NONE</div>,
  LOADING: (
    <div className="text-left text-xs text-gray-700">Loading order...</div>
  ),
  ERROR: (
    <div className="text-left text-xs text-red-700">
      An unexpected error happend please try again!
    </div>
  ),
  INVALID: (
    <div className="text-left text-xs text-red-700">Input is invalid</div>
  ),
};

console.log('orderNumber', 'AB20221219');
console.log('zipCode', '60156');

const TrackPage: FC<TrackPageProps> = () => {
  const navigate = useNavigate();

  const [state, setState] = useState<TrackPageState>({
    status: 'NONE',
    orderNumber: '',
    zipCode: '',
  });

  const handleFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    try {
      evt.preventDefault();
      setState((c) => ({ ...c, status: 'LOADING' }));
      //validate state
      if (state.orderNumber?.length < 3 || state.zipCode?.length < 3) {
        setState((c) => ({ ...c, status: 'INVALID' }));
        return;
      }
      //redirect to other view
      const order = await getOrder(state.orderNumber, state.zipCode);
      if (!order) {
        setState((c) => ({ ...c, status: 'NOT_FOUND' }));
      } else {
        navigate(`/order/${order.tracking_number}/zipcode/${order.zip_code}`, {
          replace: true,
        });
      }
    } catch (e) {
      setState((c) => ({ ...c, status: 'ERROR' }));
    }
  };

  return (
    <Layout>
      <form
        onSubmit={handleFormSubmit}
        className="bg-white mx-auto max-w-xs shadow-md border rounded-xl py-12 px-6 text-center flex flex-col gap-y-4 m-auto"
      >
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
            value={state.orderNumber}
            onChange={(evt) =>
              setState((c) => ({
                ...c,
                status: 'NONE',
                orderNumber: evt.target.value,
              }))
            }
            className={
              'border-2 rounded-md bg-gray-50 p-2 w-full' +
              (state.status === 'INVALID' ? ' border-red-700' : '')
            }
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
            value={state.zipCode}
            onChange={(evt) =>
              setState((c) => ({
                ...c,
                status: 'NONE',
                zipCode: evt.target.value,
              }))
            }
            className={
              'border-2 rounded-md bg-gray-50 p-2 w-full' +
              (state.status === 'INVALID' ? ' border-red-700' : '')
            }
            name="zipcode"
          />
        </div>
        <hr></hr>
        {STATUS_MAP[state.status]}
        <Button disabled={state.status === 'LOADING'} type="submit">
          Track
        </Button>
      </form>
    </Layout>
  );
};

export default TrackPage;
