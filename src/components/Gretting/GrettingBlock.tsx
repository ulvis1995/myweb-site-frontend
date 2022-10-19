import React from 'react';
import myphoto from '../../assets/image/photo.png';
import st from './gretting.module.scss';

const GrettingBlock = () => {
  return (
    <div className={st.gretting}>
      <div className={st.gretting_text}>
        <h3>Привет, меня зовут</h3>
        <h2>Парамонова Виолетта,</h2>
        <p>и я frontend-разработчик</p>
      </div>
      <div className={st.gretting_image}>
        <div className={st.gretting_image_first}>
          <img src={myphoto} alt="Парамонова Виолетта" />
        </div>
        <div className={st.gretting_image_back}></div>
      </div>
    </div>
  );
};

export default GrettingBlock;
