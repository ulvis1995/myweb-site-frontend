import React from 'react';
import st from './main.module.scss';
import { projectList } from '../../BlockData/portfolioData';
import PortfolioBlock from '../../components/PortfolioComponents/PortfolioBlock/PortfolioBlock';
import GrettingBlock from '../../components/Gretting/GrettingBlock';
import HardSkillsBlock from '../../components/HardSkillsBlock/HardSkillsBlock';
import NewsBlock from '../../components/NewsComponents/NewsBlock/NewsBlock';

import { useAppDispatch } from '../../app/hooks';
import { useGetNewsQuery } from '../../store/Api/NewsApi';
import { listNews } from '../../store/slices/NewsSlice';

export const Main = () => {
  const dispatch = useAppDispatch();
  const { data } = useGetNewsQuery('');

  // React.useEffect(() => {
  //   dispatch(listNews(data));
  // }, []);
  // console.log(data);

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
