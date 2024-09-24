import { FormEvent, ReactNode, useState, type FC } from 'react';
import Layout from '../../components/layout';
import Button from '../../components/button';
import { getOrder } from '../../api';
import { useNavigate } from 'react-router-dom';
import Input from './input';
import { getOrderLink } from '../../routes';
import Logo from '../../components/logo';
interface LoginPageProps {}
type LoginPageState = {
  status: 'NOT_FOUND' | 'NONE' | 'LOADING' | 'ERROR' | 'INVALID';
  orderNumber: string;
  zipCode: string;
};

const STATUS_MAP: Record<LoginPageState['status'], ReactNode> = {
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

const LoginPage: FC<LoginPageProps> = () => {
  const navigate = useNavigate();

  const [state, setState] = useState<LoginPageState>({
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
        navigate(getOrderLink(order.tracking_number, order.zip_code), {
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
          <Logo />
        </div>
        <h1 className="text-2xl">Track your oder</h1>
        <div className="text-xs text-gray-400 px-4">
          Enter your order number and zip code combination to see the order
          details and shipping updates
        </div>
        <Input
          error={state.status === 'INVALID'}
          name="orderNumber"
          label="Order Number"
          value={state.orderNumber}
          onChange={(value) =>
            setState((c) => ({
              ...c,
              status: 'NONE',
              orderNumber: value,
            }))
          }
        />
        <Input
          error={state.status === 'INVALID'}
          name="zipcode"
          label="Zip Code"
          value={state.zipCode}
          onChange={(value) =>
            setState((c) => ({
              ...c,
              status: 'NONE',
              zipCode: value,
            }))
          }
        />
        <hr></hr>
        {STATUS_MAP[state.status]}
        <Button disabled={state.status === 'LOADING'} type="submit">
          Track
        </Button>
      </form>
    </Layout>
  );
};

export default LoginPage;
