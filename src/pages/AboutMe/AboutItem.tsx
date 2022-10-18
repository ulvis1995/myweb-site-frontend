import React from 'react';
import { TAboutItem } from '../../BlockData/aboutData';
import st from './about.module.scss';

interface AboutItemProps {
  item: TAboutItem | undefined;
}

const AboutItem: React.FC<AboutItemProps> = (props) => {
  return (
    <div className={st.container_biografy}>
      <ul className={st.container_biografy_list}>
        {props.item?.list.map((point) => (
          <li key={point.id}>{point.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default AboutItem;
