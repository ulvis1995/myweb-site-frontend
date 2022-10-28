import React from 'react';
import st from './main.module.scss';
import { projectList } from '../../BlockData/portfolioData';
import PortfolioBlock from '../../components/PortfolioComponents/PortfolioBlock/PortfolioBlock';
import GrettingBlock from '../../components/Gretting/GrettingBlock';
import HardSkillsBlock from '../../components/HardSkillsBlock/HardSkillsBlock';
import NewsBlock from '../../components/NewsComponents/NewsBlock/NewsBlock';

import axios from '../../axios';

export const Main = () => {
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
