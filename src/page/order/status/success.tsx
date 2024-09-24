import { Order } from '../../../api';
import type { FC } from 'react';
import Button from '../../../components/button';
import SuccessCard from './success-card';
import LinearProgress from '../../../components/linear-progress';
import Checkpoint from '../checkpoint';
import Article from '../articel';
import SignOutButton from '../sing-out-button';
import Logo from '../../../components/logo';

interface SuccessProps {
  order: Order;
}

const Success: FC<SuccessProps> = ({ order }) => {
  return (
    <div className="h-full w-full max-w-[1024px] content-center m-auto">
      <div className="p py-8 flex ">
        <Logo />
        <div className="grow" />
        <div>
          <SignOutButton />
        </div>
      </div>
      <div className="flex w-full h-fit flex-wrap gap-8">
        <SuccessCard>
          <div className="p-4 grow">
            <div className="text-2xl font-bold">Ready for collection</div>
            <div className="text-md font-bold pt-4">
              the goods will be ready for collection on the next working day.{' '}
            </div>
          </div>
          <div>
            <img
              className="w-full"
              src="https://img.notionusercontent.com/s3/prod-files-secure%2Fbc4a989a-55ce-4f6c-ac1f-b3b890871503%2F0c19ecc9-b4e4-4ac2-8812-0ffe966eeb6e%2Fmap.png/size/w=1420?exp=1727264777&sig=hiO8kwWrcVcew9mpmmusCS-IRTxAxUeSBb4nIsPhgTo"
            />
            <Button
              className="rounded-none rounded-b-xl w-full"
              onClick={() => {
                alert('implement get direction');
              }}
            >
              Get direction
            </Button>
          </div>
        </SuccessCard>
        <SuccessCard className="p-4">
          <div className="text-md">Shipping updates</div>
          {/*dont know how to calculate it*/}
          <LinearProgress percentage={75} />
          <div className="grow">
            {order.checkpoints
              .filter((_, i) => i < 4)
              .map((checkpoint, i) => (
                <Checkpoint
                  key={checkpoint.status + '-' + i}
                  checkpoint={checkpoint}
                />
              ))}
          </div>
          {order.checkpoints.length > 3 && (
            <button
              className=" text-gray-300 text-xs"
              onClick={() => {
                alert('clicked on more have to be implemented');
              }}
            >
              more
            </button>
          )}
        </SuccessCard>
        <SuccessCard className="p-4">
          <div className="text-md">Articles</div>
          <div className="grow">
            {order.delivery_info.articles
              .filter((_, i) => i < 4)
              .map((article) => (
                <Article
                  key={'article-' + article.articleNo}
                  article={article}
                />
              ))}
          </div>
          {order.delivery_info.articles.length > 3 && (
            <button
              className=" text-gray-300 text-xs"
              onClick={() => {
                alert('clicked on more have to be implemented');
              }}
            >
              more
            </button>
          )}
        </SuccessCard>
      </div>
    </div>
  );
};

export default Success;
