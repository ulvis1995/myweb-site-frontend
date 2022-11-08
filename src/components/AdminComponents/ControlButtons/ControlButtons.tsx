import React from 'react';
import { DeleteIcon, EditIcon } from '../../../assets/image/icons';
import st from './control-buttons.module.scss';
import {
  useDeleteAboutMutation,
  useDeleteNewsMutation,
  useDeletePortfolioMutation,
} from '../../../store/Api';
import { ControlButtonsProps } from '../../../types/typesProps';

export const ControlButtons = (props: ControlButtonsProps) => {
  const [deleteNews] = useDeleteNewsMutation();
  const [deleteAbout] = useDeleteAboutMutation();
  const [deleteProject] = useDeletePortfolioMutation();

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
    <div className={st.control_buttons}>
      <button onClick={() => props.handleEdit(props.id)}>
        <EditIcon />
      </button>
      <button onClick={() => handleRemove(props.id, props.type)}>
        <DeleteIcon />
      </button>
    </div>
  );
};
