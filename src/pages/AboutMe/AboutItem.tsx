import React from 'react';
import { AboutItemProps } from '../../types/typesProps';
import st from './about.module.scss';

const AboutItem = ({ item }: AboutItemProps) => {
  return (
    <div className={st.container_biografy}>
      <ul className={st.container_biografy_list}>
        {item?.map((point) => (
          <li key={point.id}>{point.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default AboutItem;
