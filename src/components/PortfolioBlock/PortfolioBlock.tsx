import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { projectListType } from '../PortfolioCard/portfolio-list';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import st from './portfolio-block.module.scss';

interface PortfolioBlockProps {
  portfolio: projectListType
}

const PortfolioBlock: React.FC<PortfolioBlockProps> = (props) => {
  const location = useLocation();

  return (
    <div className={st.portfolio}>
      <div className={st.portfolio_title}>
        <h2>{props.portfolio.title}</h2>
        <p>{props.portfolio.description}</p>
        {location.pathname === '/' && <button><Link to='/portfolio'>Посмотреть больше...</Link></button>}
      </div>
      <div className={st.portfolio_list}>
        {props.portfolio.list.map(item => 
          <PortfolioCard key={`${item.id}_${item.name}`}
          name={item.name}
          gitUrl={item.gitUrl}
          deploy={item.deploy}
          description={item.description}
          imgUrl={item.imgUrl}
          />)}
      </div>
    </div>
  )
}

export default PortfolioBlock