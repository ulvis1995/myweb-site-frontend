import React from 'react';
import PortfolioBlock from '../../components/PortfolioComponents/PortfolioBlock';
import st from './portfolio-page.module.scss';
import { typeApi, useGetPortfolioQuery } from '../../store/Api';

export const PortfolioPage = () => {
  const { data } = useGetPortfolioQuery();
  const { type } = typeApi.useGetTypeProjectQuery(undefined, {
    selectFromResult: ({ data }) => ({ type: data ?? [] }),
  });

  const myProjectList = data
    ?.filter((project) => project.type?.id === '2')
    .sort((a, b) => Number(a.id) - Number(b.id));

  const courseList = data
    ?.filter((project) => project.type?.id === '1')
    .sort((a, b) => Number(a.id) - Number(b.id));

  return (
    <main className="wrapper">
      <div className={st.container}>
        <PortfolioBlock portfolio={myProjectList} type={type[1]?.title} />
        <PortfolioBlock portfolio={courseList} type={type[0]?.title} />
      </div>
    </main>
  );
};
