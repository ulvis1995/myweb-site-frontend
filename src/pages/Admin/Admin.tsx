import React from 'react';
import st from './admin.module.scss';
import { Collapse } from 'antd';
import HeaderBlockText from '../../components/HeaderBlock/HeaderBlockText';
import {
  CreateAbout,
  CreateNews,
  CreatePortfolio,
  NewsPanel,
  PortfolioPanel,
  AboutPanel,
} from '../../components/AdminComponents';

const { Panel } = Collapse;

export const Admin = () => {
  return (
    <div className="wrapper">
      <div className={st.container}>
        <Collapse bordered={false} className={st.collapse}>
          <HeaderBlockText>Создать</HeaderBlockText>
          <Panel header="Новости" key="1">
            <CreateNews>Создать новость</CreateNews>
          </Panel>
          <Panel header="Портфолио" key="2">
            <CreatePortfolio>Добавить в портфолио</CreatePortfolio>
          </Panel>
          <Panel header="Обо мне" key="3">
            <CreateAbout>Добавить информацию</CreateAbout>
          </Panel>
        </Collapse>
        <Collapse bordered={false} className={st.collapse}>
          <HeaderBlockText>Редактировать / Удалить</HeaderBlockText>
          <Panel header="Новости" key="1">
            <NewsPanel />
          </Panel>
          <Panel header="Портфолио" key="2">
            <PortfolioPanel />
          </Panel>
          <Panel header="Обо мне" key="3">
            <AboutPanel />
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};
