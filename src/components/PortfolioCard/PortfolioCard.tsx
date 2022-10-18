import React from 'react';
import { useLocation } from 'react-router-dom';
import { LinkIcon } from '../../img/icons/LinkIcon';
import st from './portfolio-card.module.scss';

interface CardProps {
  name: string;
  gitUrl: string;
  deploy: string | null;
  description: string;
  imgUrl: string | null;
  technology: string[];
}

const PortfolioCard: React.FC<CardProps> = (props) => {
  const location = useLocation();

  return (
    <div className={`block-item`}>
      <div className={`block-item_image`}>{props.imgUrl && <img src={props.imgUrl} />}</div>
      <div className={`block-item_info ${st.project_info}`}>
        <div>
          <h3>{props.name}</h3>
          <ul>
            <li>
              Git:
              <a href={props.gitUrl} target="_blank">
                <LinkIcon />
              </a>
            </li>
            {props.deploy !== null && (
              <li>
                Deploy:
                <a href={props.deploy} target="_blank">
                  <LinkIcon />
                </a>
              </li>
            )}
          </ul>
          <ul>
            {props.technology.map((item) => (
              <li className={st.project_info_stack} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {location.pathname !== '/' ? <span>{props.description}</span> : ''}
      </div>
    </div>
  );
};

export default PortfolioCard;
