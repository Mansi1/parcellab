import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="text-center h-full content-center py-10">
        <h1 className="text-8xl mb-4">404</h1>

        <div className="max-w-[550px] m-auto">
          <div className="text-xl mb-4">Sorry, the page is not found</div>
          <div className="lg:flex items-center my-10">
            <div className="text-xl ">
              The link you followed is probably broken or the page has been
              removed.{' '}
            </div>
            <div className="grow text-8xl mx-8">
              <span>:/</span>
            </div>
          </div>
          <button onClick={() => navigate('/', { replace: true })}>
            return to home
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
