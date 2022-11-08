import React from 'react';
import { portfolioApi } from '../../../store/Api';
import st from '../admin-component.module.scss';
import { ControlButtons } from '../ControlButtons/ControlButtons';
import { CreatePortfolio } from './CreatePortfolio';

export const PortfolioPanel = () => {
  const [chooseId, setChoose] = React.useState<string | null>(null);

  const handleEdit = (id: string | null) => {
    setChoose(id);
  };
  const { portfolioList } = portfolioApi.useGetPortfolioQuery(undefined, {
    selectFromResult: ({ data }) => ({ portfolioList: data ?? [] }),
  });

  const chooseProject = portfolioList.find(
    (project) => chooseId !== null && project.id === chooseId,
  );

  return (
    <div>
      <ul className={st.list_update}>
        {portfolioList.map((project) => (
          <li key={project.id}>
            <span>{project.name}</span>
            <ControlButtons handleEdit={handleEdit} id={project.id} type={'project'} />
          </li>
        ))}
      </ul>
      {chooseId !== null && (
        <CreatePortfolio
          portfolioId={chooseId}
          chooseProject={chooseProject}
          handleEdit={handleEdit}>
          Изменить данные
        </CreatePortfolio>
      )}
    </div>
  );
};
