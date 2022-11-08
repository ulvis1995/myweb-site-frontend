import React from 'react';
import { ControlButtons } from '../ControlButtons/ControlButtons';
import st from '../admin-component.module.scss';
import { CreateNews } from './CreateNews';
import { newsApi } from '../../../store/Api';

export const NewsPanel = () => {
  const [chooseId, setChoose] = React.useState<string | null>(null);

  const handleEdit = (id: string | null) => {
    setChoose(id);
  };
  const { newsList } = newsApi.useGetNewsQuery(undefined, {
    selectFromResult: ({ data }) => ({ newsList: data ?? [] }),
  });

  const chooseNews = newsList.find((news) => chooseId !== null && news.id === chooseId);

  return (
    <div>
      <ul className={st.list_update}>
        {newsList.map((news) => (
          <li key={news.id}>
            <span>{news.title}</span>
            <ControlButtons handleEdit={handleEdit} id={news.id} type={'news'} />
          </li>
        ))}
      </ul>
      {chooseId !== null && (
        <CreateNews newsId={chooseId} chooseNews={chooseNews} handleEdit={handleEdit}>
          Редактировать новость
        </CreateNews>
      )}
    </div>
  );
};
