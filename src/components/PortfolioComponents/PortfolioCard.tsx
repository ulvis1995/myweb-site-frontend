import React from 'react';
import { useLocation } from 'react-router-dom';
import { LinkIcon } from '../../assets/image/icons/LinkIcon';
import { baseurl } from '../../constants/constants';
import { PortfolioCardProps } from '../../types/typesProps';
import st from './portfolio-card.module.scss';

const PortfolioCard = (props: PortfolioCardProps) => {
  const location = useLocation();

  return (
    <div className="block-item">
      <div className="block-item_image">
        {props.imgUrl && <img src={`${baseurl}/${props.imgUrl}`} alt={props.name} />}
      </div>
      <div className={`block-item_info ${st.project_info}`}>
        <div>
          <h3>{props.name}</h3>
          <ul>
            <li>
              Git:
              <a href={props.gitUrl} target="_blank" rel="noreferrer">
                <LinkIcon />
              </a>
            </li>
            {props.deploy !== null && (
              <li>
                Deploy:
                <a href={props.deploy} target="_blank" rel="noreferrer">
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
