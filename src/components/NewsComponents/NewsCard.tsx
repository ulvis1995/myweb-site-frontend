import React from 'react';
import st from './news-card.module.scss';
import imgNone from '../../assets/image/news.png';
import { baseurl } from '../../constants/constants';
import { NewsProps } from '../../types/typesProps';

const NewsCard = (props: NewsProps) => {
  return (
    <div className={`block-item`}>
      <div className={`block-item_image`}>
        <img src={props.imgUrl !== null ? `${baseurl}/${props.imgUrl}` : imgNone} />
      </div>
      <div className={`block-item_info ${st.news}`}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <span>{new Date(props.date).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default NewsCard;
