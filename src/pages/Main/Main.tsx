import React from 'react';
import st from './main.module.scss';
import PortfolioBlock from '../../components/PortfolioComponents/PortfolioBlock';
import GrettingBlock from '../../components/Gretting/GrettingBlock';
import HardSkillsBlock from '../../components/HardSkillsBlock/HardSkillsBlock';
import NewsBlock from '../../components/NewsComponents/NewsBlock';
import { useGetPortfolioQuery } from '../../store/Api';

export const Main = () => {
  const { data } = useGetPortfolioQuery();

  const projectList = data
    ?.filter((project) => project.is_best_work === true)
    .sort((a, b) => Number(a.id) - Number(b.id));

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
