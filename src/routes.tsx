import LoginPage from './page/login/login-page';
import { ErrorBoundary } from './error-boundary';
import NotFoundPage from './page/not-found-page';
import OrderPage from './page/order/order-page';
const ORDER_PAGE_PATH = '/order/:orderNumber/zipcode/:zipCode';
export const ROUTES = [
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: ORDER_PAGE_PATH,
    element: <OrderPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
].map((r) => ({ ...r, element: <ErrorBoundary>{r.element}</ErrorBoundary> }));

export const getOrderLink = (orderNumber: string, zipCode: string): string => {
  return ORDER_PAGE_PATH.replace(':orderNumber', orderNumber).replace(
    ':zipCode',
    zipCode
  );
};
