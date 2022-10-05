import React from 'react';
import st from './new-page.module.scss';
import { newsList } from '../../components/News/newsList';
import NewsCard from '../../components/News/NewsCard';

const NewsPage: React.FC = () => {
  return (
    <main className={st.wrapper}>
      <div className={st.container}>
        <div className={st.container_news}>
          <div className={st.container_portfolio_title}>
            <h2>Новости и планы</h2>
            <p>Этот раздел посвящен моим планам и событиям происходящим в моей деятельности, связанной с миром ИТ. В частности, здесь будет отражаться информация касательно развития данного сайта.</p>
            {/* <button>Посмотреть больше...</button> */}
          </div>
          <div className={st.container_news_list}>
            {[...newsList].reverse().map(item => 
            <NewsCard key={`${item.id}_${item.title}`}
              title={item.title}
              text={item.text}
              imgUrl={item.imgUrl}
              date={item.date}
            />)}
          </div>
        </div>
      </div>
    </main>
  )
}

export default NewsPage