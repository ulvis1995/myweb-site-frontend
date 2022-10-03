import React from 'react';
import PortfolioBlock from '../../components/PortfolioBlock/PortfolioBlock';
import st from './portfolio-page.module.scss';
import { courseList, studingList } from './portfoliolist';

const PortfolioPage: React.FC = () => {
  return (
    <main className={st.wrapper}>
      <div className={st.container}>
        <PortfolioBlock portfolio={studingList} />
        <PortfolioBlock portfolio={courseList} />
      </div>
    </main>
  )
}

export default PortfolioPage;