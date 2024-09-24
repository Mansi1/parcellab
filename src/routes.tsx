import TrackPage from './page/track-page';
import { ErrorBoundary } from './error-boundary';
import NotFoundPage from './page/not-found-page';

export const ROUTES = [
  {
    path: '/',
    element: <TrackPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
].map((r) => ({ ...r, element: <ErrorBoundary>{r.element}</ErrorBoundary> }));
