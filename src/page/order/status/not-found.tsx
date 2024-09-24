import type { FC } from 'react';
import Button from '../../../components/button';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../components/logo';

interface NotFoundProps {
  orderNumber: string | undefined;
  zipCode: string | undefined;
}

const NotFound: FC<NotFoundProps> = ({ orderNumber, zipCode }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white mx-auto max-w-xs shadow-md border rounded-xl py-12 px-6 text-center flex flex-col gap-y-4 m-auto">
      <div className="mt-[-80px]">
        <Logo className="m-auto" />
      </div>
      <h1 className="text-2xl">Order not found</h1>
      <div className="text-xs text-gray-400 px-4">
        Your order coud not be found please check your order details:
      </div>
      <table className="text-xs text-gray-400 px-4">
        <tbody>
          <tr>
            <td>Order number</td>
            <td>{orderNumber}</td>
          </tr>
          <tr>
            <td>ZipCode</td>
            <td>{zipCode}</td>
          </tr>
        </tbody>
      </table>
      <Button onClick={() => navigate('/', { replace: true })}>
        Back to login
      </Button>
    </div>
  );
};

export default NotFound;
