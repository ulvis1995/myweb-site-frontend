import React from 'react';
import st from './main.module.scss';
import myphoto from '../../img/myphoto.JPG';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import { projectList } from '../../components/PortfolioCard/portfolio-list';
import { newsList } from '../../components/News/newsList';
import NewsCard from '../../components/News/NewsCard';

const Main: React.FC = () =>  {

  return (
    <main className={st.wrapper}>
      <div className={st.container}>
        <div className={st.container_attention}>
          <h3>
            Внимание! Сайт находится на стадии разработки и будет дополняться со временем.
            Извините за доставленные неудобства, на данный момент готова стартовая страница
          </h3>
        </div>
        <div className={st.container_gretting}>
          <div className={st.container_gretting_text}>
            <h3>Привет, меня зовут</h3>
            <h2>Парамонова Виолетта,</h2>
            <p>и я frontend-разработчик</p>
          </div>
          <div className={st.container_gretting_image}>
            <img src={myphoto} alt='Парамонова Виолетта'/>
          </div>
        </div>
        <div className={st.container_portfolio}>
          <div className={st.container_portfolio_title}>
            <h2>Мои работы</h2>
            <p>Это небольшая галерея, выполненных мной проектов. Они выставлены в порядке улучшения моих навыков и пополнения знаний новыми технологиями. Более подробно со всеми проектами можно ознакомиться в соответствующем разделе</p>
            <button>Посмотреть больше...</button>
          </div>
          <div className={st.container_portfolio_list}>
            {projectList.map(item => 
              <PortfolioCard key={`${item.id}_${item.name}`}
              name={item.name}
              gitUrl={item.gitUrl}
              deploy={item.deploy}
              description={item.description}
              imgUrl={item.imgUrl}
              />)}
          </div>
        </div>
        <div className={st.container_technology}>
          <h2>Изучено и могу применять:</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Адаптивная верстка</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux/ReduxToolKit</li>
            <li>Ant Design</li>
            <li>ApexCharts</li>
            <li>Redux-Persist</li>
            <li>Git</li>
            <li>Умение обращаться с REST API</li>
            <li>Базовые знания SQL(PostgresSQL)</li>
          </ul>
        </div>
        <div className={st.container_news}>
          <div className={st.container_portfolio_title}>
            <h2>Новости и планы</h2>
            <p>Этот раздел посвящен моим планам и событиям происходящим в моей деятельности, связанной с миром ИТ. В частности, здесь будет отражаться информация касательно развития данного сайта.</p>
            <button>Посмотреть больше...</button>
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



export default Main