import React from 'react';
import st from './news-card.module.scss';

interface NewsProps {
  title: string,
  text: string,
  imgUrl: string | null,
  date: string
}

const NewsCard: React.FC<NewsProps> = (props) => {
  return (
    <div className={st.new}>
      <div className={st.new_info}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <span>{props.date}</span>
      </div>
      {props.imgUrl !== null && <div className={st.new_image}>
        <img src={props.imgUrl}></img>
      </div>}
    </div>
  )
}

export default NewsCard