import React from 'react';
import st from './new-page.module.scss';
import { newsList } from '../../BlockData/newsData';
import NewsCard from '../../components/NewsComponents/NewsCard/NewsCard';

export const NewsPage = () => {
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
          </div>
        </div>
      </div>
    </main>
  );
};
