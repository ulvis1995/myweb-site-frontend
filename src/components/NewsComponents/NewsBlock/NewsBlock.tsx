import React from 'react';
import { newsList } from '../../../BlockData/newsData';
import { useGetNewsQuery } from '../../../store/Api/NewsApi';
import HeaderBlockLink from '../../HeaderBlock/HeaderBlockLink';
import NewsCard from '../NewsCard/NewsCard';

function NewsBlock() {
  const { data } = useGetNewsQuery('');
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
        {data?.map(
          (item: { id: any; title: string; text: string; imgUrl: string | null; date: string }) => (
            <NewsCard
              key={`${item.id}_${item.title}`}
              title={item.title}
              text={item.text}
              imgUrl={item.imgUrl}
              date={item.date}
            />
          ),
        )}
      </div>
    </div>
  );
}

export default NewsBlock;
