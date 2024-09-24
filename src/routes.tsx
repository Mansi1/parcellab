import LoginPage from './page/login-page';
import { ErrorBoundary } from './error-boundary';
import NotFoundPage from './page/not-found-page';
import OrderPage from './page/order/order-page';

export const ROUTES = [
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/order/:trackingNumber/zipcode/:zipCode',
    element: <OrderPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
].map((r) => ({ ...r, element: <ErrorBoundary>{r.element}</ErrorBoundary> }));
