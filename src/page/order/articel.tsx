import type { FC } from 'react';
import { Article as ArticleType } from '../../api';

interface ArticleProps {
  article: ArticleType;
}

const Article: FC<ArticleProps> = ({ article }) => {
  return (
    <div className="flex mb-2">
      <div className="pr-4">
        <img
          className="aspect-auto w-[80px]"
          src={article.articleImageUrl ?? '/no_img.jpg'}
          alt={article.articleName}
        />
      </div>
      <div className="text-xs">
        <div>{article.articleName}</div>
        <div className="text-gray-500">Articel number: {article.articleNo}</div>
        <div>{article.price.toFixed(2)} €</div>
      </div>
    </div>
  );
};

export default Article;
