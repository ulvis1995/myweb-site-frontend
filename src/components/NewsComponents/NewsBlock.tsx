import React from 'react';
import { useGetNewsQuery } from '../../store/Api';
import HeaderBlockLink from '../HeaderBlock/HeaderBlockLink';
import SkeletonBlock from '../Skeleton/Skeleton';
import NewsCard from './NewsCard';

function NewsBlock() {
  const { data, isLoading } = useGetNewsQuery();

  return (
    <div className="block-wrapper">
      <HeaderBlockLink>Новости и планы</HeaderBlockLink>
      {isLoading ? (
        <div className="block-list">
          <SkeletonBlock />
          <SkeletonBlock />
          <SkeletonBlock />
          <SkeletonBlock />
        </div>
      ) : (
        <div className="block-list">
          {data &&
            [...data]
              .reverse()
              .slice(0, 4)
              .map((item) => (
                <NewsCard
                  key={`${item.id}_${item.title}`}
                  title={item.title}
                  text={item.text}
                  imgUrl={item.imgUrl}
                  date={item.date}
                />
              ))}
        </div>
      )}
    </div>
  );
}

export default NewsBlock;
