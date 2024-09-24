import type { FC } from 'react';
import Button from '../../../components/button';
import Logo from '../../../components/logo';

interface ErrorProps {
  orderNumber: string | undefined;
  zipCode: string | undefined;
  onRetry: () => void;
}

const Error: FC<ErrorProps> = ({ orderNumber, zipCode, onRetry }) => {
  return (
    <div className="bg-white mx-auto max-w-xs shadow-md border rounded-xl py-12 px-6 text-center flex flex-col gap-y-4 m-auto">
      <div className="mt-[-80px]">
        <Logo className="m-auto" />
      </div>
      <h1 className="text-2xl">Unexpected error happend</h1>
      <div className="text-xs text-gray-400 px-4">
        please try again or contact support{' '}
        <a href="mailto:support@parcellab.com">support@parcellab.com</a>:
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
      <Button onClick={onRetry}>Try again</Button>
    </div>
  );
};

export default Error;
