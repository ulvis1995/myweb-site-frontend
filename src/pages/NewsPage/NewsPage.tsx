import React from 'react';
import st from './new-page.module.scss';
import NewsCard from '../../components/NewsComponents/NewsCard';
import { useGetNewsQuery } from '../../store/Api/NewsApi';
import SkeletonBlock from '../../components/Skeleton/Skeleton';

export const NewsPage = () => {
  const { data, isLoading } = useGetNewsQuery();

  return (
    <main className="wrapper">
      <div className={st.container}>
        <div className={st.container_news}>
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
      </div>
    </main>
  );
};
