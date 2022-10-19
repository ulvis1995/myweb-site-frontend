import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { projectListType } from '../../BlockData/portfolioData';
import { LineIcon } from '../../assets/image/icons';
import HeaderBlockLink from '../HeaderBlock/HeaderBlockLink';
import HeaderBlockText from '../HeaderBlock/HeaderBlockText';
import PortfolioCard from '../PortfolioCard/PortfolioCard';

interface PortfolioBlockProps {
  portfolio: projectListType;
}

const PortfolioBlock = (props: PortfolioBlockProps) => {
  const location = useLocation();

  return (
    <div className="block-wrapper">
      {location.pathname === '/' ? (
        <HeaderBlockLink>Мои работы и проекты</HeaderBlockLink>
      ) : (
        <HeaderBlockText>{props.portfolio.title}</HeaderBlockText>
      )}
      <div className="block-list">
        {[...props.portfolio.list].reverse().map((item) => (
          <PortfolioCard
            key={`${item.id}_${item.name}`}
            name={item.name}
            gitUrl={item.gitUrl}
            deploy={item.deploy}
            description={item.description}
            imgUrl={item.imgUrl}
            technology={item.technology}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioBlock;
