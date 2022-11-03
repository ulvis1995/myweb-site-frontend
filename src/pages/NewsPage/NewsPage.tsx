import React from 'react';
import st from './new-page.module.scss';
import { newsList } from '../../BlockData/newsData';
import NewsCard from '../../components/NewsComponents/NewsCard/NewsCard';
import { useGetNewsQuery } from '../../store/Api/NewsApi';

export const NewsPage = () => {
  const { data } = useGetNewsQuery('');

  return (
    <main className="wrapper">
      <div className={st.container}>
        <div className={st.container_news}>
          <div className={st.container_news_list}>
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
              (item: {
                id: any;
                title: string;
                text: string;
                imgUrl: string | null;
                date: string;
              }) => (
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
      </div>
    </main>
  );
};
