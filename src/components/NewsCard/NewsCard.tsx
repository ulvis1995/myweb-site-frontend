import React from 'react';
import st from './news-card.module.scss';
import imgNone from '../../img/news.png';

interface NewsProps {
  title: string;
  text: string;
  imgUrl: string | null;
  date: string;
}

const NewsCard: React.FC<NewsProps> = (props) => {
  return (
    <div className={`block-item`}>
      <div className={`block-item_image`}>
        <img src={props.imgUrl !== null ? props.imgUrl : imgNone} />
      </div>
      <div className={`block-item_info ${st.news}`}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <span>{props.date}</span>
      </div>
    </div>
  );
};

export default NewsCard;
