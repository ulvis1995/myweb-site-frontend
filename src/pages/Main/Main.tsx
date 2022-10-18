import React from 'react';
import st from './main.module.scss';
import { projectList } from '../../BlockData/portfolioData';
import PortfolioBlock from '../../components/PortfolioBlock/PortfolioBlock';
import GrettingBlock from '../../components/Gretting/GrettingBlock';
import HardSkillsBlock from '../../components/HardSkillsBlock/HardSkillsBlock';
import NewsBlock from '../../components/NewsBlock/NewsBlock';

const Main: React.FC = () => {
  return (
    <main className="wrapper">
      <div className={st.container}>
        <GrettingBlock />
        <PortfolioBlock portfolio={projectList} />
        <HardSkillsBlock />
        <NewsBlock />
      </div>
    </main>
  );
};

export default Main;
