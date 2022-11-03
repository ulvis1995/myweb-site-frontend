import React from 'react';
import st from './admin.module.scss';
import { DeleteIcon, EditIcon } from '../../assets/image/icons';
import { Collapse } from 'antd';
import CreateNews from '../../components/NewsComponents/CreateNews/CreateNews';
import CreatePortfolio from '../../components/PortfolioComponents/CreatePortfolioCard/CreatePortfolio';
import CreateAbout from '../../components/AboutComponents/CreateAbout/CreateAbout';
import HeaderBlockText from '../../components/HeaderBlock/HeaderBlockText';
import { newsApi, useDeleteNewsMutation } from '../../store/Api/NewsApi';
import { aboutApi, useDeleteAboutMutation } from '../../store/Api/AboutApi';
import { portfolioApi, useDeletePortfolioMutation } from '../../store/Api/PortfolioApi';

const { Panel } = Collapse;

export const Admin = () => {
  const [chooseEdit, setChoose] = React.useState<string | null>(null);
  const [deleteNews] = useDeleteNewsMutation();
  const [deleteAbout] = useDeleteAboutMutation();
  const [deleteProject] = useDeletePortfolioMutation();

  const { newsList } = newsApi.useGetNewsQuery(undefined, {
    selectFromResult: ({ data }) => ({ newsList: data ?? [] }),
  });
  const { aboutList } = aboutApi.useGetAboutQuery(undefined, {
    selectFromResult: ({ data }: any) => ({ aboutList: data ?? [] }),
  });
  const { portfolioList } = portfolioApi.useGetPortfolioQuery(undefined, {
    selectFromResult: ({ data }: any) => ({ portfolioList: data ?? [] }),
  });

  const chooseNews = newsList.find(
    (news: { id: string; title: string; text: string; date: string; imgUrl: string }) =>
      chooseEdit !== null && news.id === chooseEdit,
  );

  const chooseAbout = aboutList.find(
    (about: { id: string; text: string }) => chooseEdit !== null && about.id === chooseEdit,
  );

  const chooseProject = portfolioList.find(
    (project: {
      id: string;
      imgUrl: string;
      type: { id: string; title: string };
      deploy: string | null;
      description: string;
      gitUrl: string;
      is_best_work: boolean;
      name: string;
      technology: string;
    }) => chooseEdit !== null && project.id === chooseEdit,
  );

  const handleEdit = (id: string | null) => {
    setChoose(id);
  };

  const handleRemove = (removeId: string, type: string) => {
    switch (type) {
      case 'news':
        deleteNews({ id: removeId }).unwrap();
        break;
      case 'about':
        deleteAbout({ id: removeId }).unwrap();
        break;
      case 'project':
        deleteProject({ id: removeId }).unwrap();
        break;
      default:
        break;
    }
  };

  return (
    <div className="wrapper">
      <div className={st.container}>
        <Collapse bordered={false} className={st.collapse}>
          <HeaderBlockText>Создать:</HeaderBlockText>
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
          <HeaderBlockText>Редактировать:</HeaderBlockText>
          <Panel header="Новости" key="1">
            <ul className={st.list_update}>
              {newsList.map((news: { id: string; title: string }) => (
                <li key={news.id}>
                  <span>{news.title}</span>
                  <div className={st.control_buttons}>
                    <button onClick={() => handleEdit(news.id)}>
                      <EditIcon />
                    </button>
                    <button onClick={() => handleRemove(news.id, 'news')}>
                      <DeleteIcon />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            {chooseEdit !== null && (
              <CreateNews newsId={chooseEdit} chooseNews={chooseNews} handleEdit={handleEdit}>
                Редактировать новость
              </CreateNews>
            )}
          </Panel>
          <Panel header="Портфолио" key="2">
            <ul className={st.list_update}>
              {portfolioList.map(
                (project: {
                  id: string;
                  imgUrl: string;
                  type: { id: string; title: string };
                  deploy: string | null;
                  description: string;
                  gitUrl: string;
                  is_best_work: boolean;
                  name: string;
                  technology: string;
                }) => (
                  <li key={project.id}>
                    <span>{project.name}</span>
                    <div className={st.control_buttons}>
                      <button onClick={() => handleEdit(project.id)}>
                        <EditIcon />
                      </button>
                      <button onClick={() => handleRemove(project.id, 'project')}>
                        <DeleteIcon />
                      </button>
                    </div>
                  </li>
                ),
              )}
            </ul>
            {chooseEdit !== null && (
              <CreatePortfolio
                portfolioId={chooseEdit}
                chooseProject={chooseProject}
                handleEdit={handleEdit}>
                Изменить данные
              </CreatePortfolio>
            )}
          </Panel>
          <Panel header="Обо мне" key="3">
            <ul className={st.list_update}>
              {aboutList.map((item: { id: string; text: string }) => (
                <li key={item.id}>
                  <span>{item.text}</span>
                  <div className={st.control_buttons}>
                    <button onClick={() => handleEdit(item.id)}>
                      <EditIcon />
                    </button>
                    <button onClick={() => handleRemove(item.id, 'about')}>
                      <DeleteIcon />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            {chooseEdit !== null && (
              <CreateAbout aboutId={chooseEdit} chooseAbout={chooseAbout} handleEdit={handleEdit}>
                Сохранить изменения
              </CreateAbout>
            )}
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};
