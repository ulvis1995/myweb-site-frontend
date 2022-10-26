import React, { useEffect } from 'react';
import st from './main.module.scss';
import { projectList } from '../../BlockData/portfolioData';
import PortfolioBlock from '../../components/PortfolioBlock/PortfolioBlock';
import GrettingBlock from '../../components/Gretting/GrettingBlock';
import HardSkillsBlock from '../../components/HardSkillsBlock/HardSkillsBlock';
import NewsBlock from '../../components/NewsBlock/NewsBlock';

import axios from '../../axios';

const Main: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/about');
      const data = response.data;

      console.log(data);
      // return data
    };

    fetchData();
  }, []);

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
