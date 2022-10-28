import React from 'react';
import { newsList } from '../../../BlockData/newsData';
import HeaderBlockLink from '../../HeaderBlock/HeaderBlockLink';
import NewsCard from '../NewsCard/NewsCard';

function NewsBlock() {
  return (
    <div className="block-wrapper">
      <HeaderBlockLink>Новости и планы</HeaderBlockLink>
      <div className="block-list">
        {[...newsList].reverse().map((item) => (
          <NewsCard
            key={`${item.id}_${item.title}`}
            title={item.title}
            text={item.text}
            imgUrl={item.imgUrl}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
}

export default NewsBlock;
