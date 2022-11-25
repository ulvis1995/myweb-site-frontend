import React from 'react';
import { aboutApi } from '../../../store/Api';
import st from '../admin-component.module.scss';
import { ControlButtons } from '../ControlButtons/ControlButtons';
import { CreateAbout } from './CreateAbout';

export const AboutPanel = () => {
  const [chooseId, setChoose] = React.useState<string | null>(null);

  const handleEdit = (id: string | null) => {
    setChoose(id);
  };

  const { aboutList } = aboutApi.useGetAboutQuery(undefined, {
    selectFromResult: ({ data }) => ({ aboutList: data ?? [] }),
  });

  const chooseAbout = aboutList.find((about) => chooseId !== null && about.id === chooseId);

  return (
    <div>
      <ul className={st.list_update}>
        {aboutList.map((item) => (
          <li key={item.id}>
            <span>{item.text}</span>
            <ControlButtons handleEdit={handleEdit} id={item.id} type={'about'} />
          </li>
        ))}
      </ul>
      {chooseId !== null && (
        <CreateAbout aboutId={chooseId} chooseAbout={chooseAbout} handleEdit={handleEdit}>
          Сохранить изменения
        </CreateAbout>
      )}
    </div>
  );
};
