import React from 'react';
import st from './portfoli-card.module.scss';
import pokedex from '../../img/projects_card/pokedex.JPG';

interface CardProps {
  name: string,
  gitUrl: string,
  deploy: string | null,
  description: string,
  imgUrl: string | null
}

const PortfolioCard: React.FC<CardProps> = (props) => {
  return (
    <div className={st.project}>
      <div className={st.project_image}>
        {props.imgUrl &&<img src={props.imgUrl} />}
      </div>
      <div className={st.project_info}>
        <h3>{props.name}</h3>
        <ul>
          <li>Git:
            <a href={props.gitUrl} target='_blank'>
            {props.gitUrl}
            </a>
          </li>
          {props.deploy !== null && <li>Deploy:
            <a href={props.deploy} target='_blank'>
            {props.deploy}
            </a>
          </li>}
        </ul>
        <span>{props.description}</span>
      </div>
    </div>
  )
}

export default PortfolioCard;