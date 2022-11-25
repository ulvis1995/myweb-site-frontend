import React from 'react';
import { useLocation } from 'react-router-dom';
import { useGetPortfolioQuery } from '../../store/Api';
import { PortfolioBlockProps } from '../../types/typesProps';
import HeaderBlockLink from '../HeaderBlock/HeaderBlockLink';
import HeaderBlockText from '../HeaderBlock/HeaderBlockText';
import SkeletonBlock from '../Skeleton/Skeleton';
import PortfolioCard from './PortfolioCard';

const PortfolioBlock = (props: PortfolioBlockProps) => {
  const location = useLocation();
  const { isLoading } = useGetPortfolioQuery();

  return (
    <div className="block-wrapper">
      {location.pathname === '/' ? (
        <HeaderBlockLink>Мои работы и проекты</HeaderBlockLink>
      ) : (
        <HeaderBlockText>{props.type}</HeaderBlockText>
      )}
      {isLoading ? (
        <div className="block-list">
          <SkeletonBlock />
          <SkeletonBlock />
          <SkeletonBlock />
          <SkeletonBlock />
        </div>
      ) : (
        <div className="block-list">
          {props.portfolio &&
            [...props.portfolio]
              .reverse()
              .map((item) => (
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
      )}
    </div>
  );
};

export default PortfolioBlock;
