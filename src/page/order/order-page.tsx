import { useCallback, useLayoutEffect, useState, type FC } from 'react';
import Layout from '../../components/layout';
import { useNavigate, useParams } from 'react-router-dom';
import { getOrder, Order } from '../../api';
import Loading from './status/loading';
import NotFound from './status/not-found';
import Error from './status/error';
import Success from './status/success';
interface OrderPageProps {}
type OrderPageState =
  | {
      status: 'LOADING' | 'NOT_FOUND' | 'ERROR';
    }
  | {
      status: 'SUCCESS';
      order: Order;
    };

const OrderPage: FC<OrderPageProps> = () => {
  const navigate = useNavigate();

  const { orderNumber, zipCode } = useParams<{
    orderNumber: string;
    zipCode: string;
  }>();
  const [state, setState] = useState<OrderPageState>({ status: 'LOADING' });

  const load = useCallback(async () => {
    try {
      if (state.status !== 'LOADING') {
        setState({
          status: 'LOADING',
        });
      }
      if (!orderNumber || !zipCode) {
        navigate('/', { replace: true });
        return;
      }
      const order = await getOrder(orderNumber, zipCode);
      if (!!order) {
        setState({ status: 'SUCCESS', order });
      } else {
        setState({ status: 'NOT_FOUND' });
      }
    } catch (e) {
      setState({ status: 'ERROR' });
    }
  }, [orderNumber, zipCode]);

  useLayoutEffect(() => {
    void load();
  }, []);
  return (
    <Layout>
      {state.status === 'LOADING' && <Loading />}
      {state.status === 'NOT_FOUND' && (
        <NotFound orderNumber={orderNumber} zipCode={zipCode} />
      )}
      {state.status === 'ERROR' && (
        <Error
          orderNumber={orderNumber}
          zipCode={zipCode}
          onRetry={() => {
            load();
          }}
        />
      )}
      {state.status === 'SUCCESS' && <Success order={state.order} />}
    </Layout>
  );
};

export default OrderPage;
