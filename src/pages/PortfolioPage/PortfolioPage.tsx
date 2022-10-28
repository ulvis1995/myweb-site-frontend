import React from 'react';
import PortfolioBlock from '../../components/PortfolioComponents/PortfolioBlock/PortfolioBlock';
import st from './portfolio-page.module.scss';
import { courseList, studingList } from '../../BlockData/portfolioData';

export const PortfolioPage = () => {
  return (
    <main className="wrapper">
      <div className={st.container}>
        <PortfolioBlock portfolio={studingList} />
        <PortfolioBlock portfolio={courseList} />
      </div>
    </main>
  );
};
