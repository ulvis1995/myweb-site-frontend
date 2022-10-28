import React from 'react';
import st from './admin.module.scss';
import { Collapse } from 'antd';
import CreateNews from '../../components/NewsComponents/CreateNews/CreateNews';
import CreatePortfolio from '../../components/PortfolioComponents/CreatePortfolioCard/CreatePortfolio';
import CreateAbout from '../../components/AboutComponents/CreateAbout/CreateAbout';
import HeaderBlockText from '../../components/HeaderBlock/HeaderBlockText';

const { Panel } = Collapse;

export const Admin = () => {
  return (
    <div className="wrapper">
      <div className={st.container}>
        <Collapse bordered={false} className={st.collapse}>
          <HeaderBlockText>Создать:</HeaderBlockText>
          <Panel header="Новости" key="1">
            <CreateNews />
          </Panel>
          <Panel header="Портфолио" key="2">
            <CreatePortfolio />
          </Panel>
          <Panel header="Обо мне" key="3">
            <CreateAbout />
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};
