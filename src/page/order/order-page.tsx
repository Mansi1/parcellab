import { useCallback, useLayoutEffect, useState, type FC } from 'react';
import Layout from '../../components/layout';
import SquarLogo from '../../assets/parcelab-logo-square.svg?react';
import { useNavigate, useParams } from 'react-router-dom';
import { getOrder, Order } from '../../api';
import Button from '../../components/button';
import Checkpoint from './checkpoint';
import Article from './articel';
import LinearProgress from '../../components/linear-progress';
interface OrderPageProps {}
type OrderPageState =
  | {
      status: 'LOADING' | 'NOT_FOUND';
    }
  | {
      status: 'SUCCESS';
      order: Order;
    };

const OrderPage: FC<OrderPageProps> = () => {
  const navigate = useNavigate();
  const { trackingNumber, zipCode } = useParams();
  const [state, setState] = useState<OrderPageState>({ status: 'LOADING' });

  const load = useCallback(async () => {
    if (state.status !== 'LOADING') {
      setState({
        status: 'LOADING',
      });
    }
    if (!trackingNumber || !zipCode) {
      navigate('/', { replace: true });
      return;
    }
    const order = await getOrder(trackingNumber, zipCode);
    if (!!order) {
      setState({ status: 'SUCCESS', order });
    } else {
      setState({ status: 'NOT_FOUND' });
    }
  }, []);

  useLayoutEffect(() => {
    void load();
  }, []);
  return (
    <Layout>
      {state.status === 'LOADING' && (
        <div className="bg-white mx-auto max-w-xs shadow-md border rounded-xl py-12 px-6 text-center flex flex-col gap-y-4 m-auto">
          <div className="mt-[-80px]">
            <SquarLogo className="bg-[#002172] fill-white rounded-xl p-2 w-20 shadow-xl m-auto" />
          </div>
          <h1 className="text-2xl">Loading....</h1>
        </div>
      )}
      {state.status === 'NOT_FOUND' && (
        <div className="bg-white mx-auto max-w-xs shadow-md border rounded-xl py-12 px-6 text-center flex flex-col gap-y-4 m-auto">
          <div className="mt-[-80px]">
            <SquarLogo className="bg-[#002172] fill-white rounded-xl p-2 w-20 shadow-xl m-auto" />
          </div>
          <h1 className="text-2xl">Order not found</h1>
          <div className="text-xs text-gray-400 px-4">
            Your order coud not be found please check your order details:
          </div>
          <table className="text-xs text-gray-400 px-4">
            <tbody>
              <tr>
                <td>Order number</td>
                <td>{trackingNumber}</td>
              </tr>
              <tr>
                <td>ZipCode</td>
                <td>{zipCode}</td>
              </tr>
            </tbody>
          </table>
          <Button onClick={() => navigate('/', { replace: true })}>
            Try again
          </Button>
        </div>
      )}
      {state.status === 'SUCCESS' && (
        <div className="h-full w-full content-center">
          <div className="p-8 flex">
            <SquarLogo className="bg-[#002172] fill-white rounded-xl p-2 w-20 shadow-xl" />
            <div className="grow"></div>
            <div>
              <button
                onClick={() => navigate('/', { replace: true })}
                className="bg-blue-100 rounded-lg p-1.5 border-2 border-gray-500 hover:bg-gray-300 text-sm"
              >
                🔒 sign out
              </button>
            </div>
          </div>
          <div className="flex w-full h-fit  ">
            <div className="w-full max-w-xs bg-white mx-auto shadow-md rounded-xl flex flex-col gap-y-4">
              <div className="p-4 grow">
                <div className="text-2xl font-bold">Ready for collection</div>
                <div className="text-md font-bold pt-4">
                  the goods will be ready for collection on the next working
                  day.{' '}
                </div>
              </div>
              <div>
                <img
                  className="w-full"
                  src="https://img.notionusercontent.com/s3/prod-files-secure%2Fbc4a989a-55ce-4f6c-ac1f-b3b890871503%2F0c19ecc9-b4e4-4ac2-8812-0ffe966eeb6e%2Fmap.png/size/w=1420?exp=1727264777&sig=hiO8kwWrcVcew9mpmmusCS-IRTxAxUeSBb4nIsPhgTo"
                />
                <Button className="rounded-none rounded-b-xl w-full">
                  Get direction
                </Button>
              </div>
            </div>
            <div className="w-full max-w-xs bg-white mx-auto shadow-md rounded-xl flex flex-col gap-y-4  p-6">
              <div className="text-md">Shipping updates</div>
              {/*dont know how to calculate it*/}
              <LinearProgress percentage={75} />
              <div className="grow">
                {state.order.checkpoints
                  .filter((_, i) => i < 4)
                  .map((checkpoint, i) => (
                    <Checkpoint
                      key={checkpoint.status + '-' + i}
                      checkpoint={checkpoint}
                    />
                  ))}
              </div>
              {state.order.checkpoints.length > 3 && (
                <button
                  className=" text-gray-300 text-xs"
                  onClick={() => {
                    alert('clicked on more have to be implemented');
                  }}
                >
                  more
                </button>
              )}
            </div>
            <div className="w-full max-w-xs bg-white mx-auto shadow-md rounded-xl flex flex-col gap-y-4 p-6">
              <div className="text-md">Articles</div>
              <div className="grow">
                {state.order.delivery_info.articles
                  .filter((_, i) => i < 4)
                  .map((article) => (
                    <Article
                      key={'article-' + article.articleNo}
                      article={article}
                    />
                  ))}
              </div>
              {state.order.delivery_info.articles.length > 3 && (
                <button
                  className=" text-gray-300 text-xs"
                  onClick={() => {
                    alert('clicked on more have to be implemented');
                  }}
                >
                  more
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default OrderPage;
