import React from 'react';
import st from './page404.module.scss';
import page404 from '../../assets/image/404.webp';

export const Page404 = () => {
  return (
    <main className="wrapper">
      <div className={st.container}>
        <h1>Страница не найдена</h1>
        <img src={page404} alt="Страница не найдена" />
      </div>
    </main>
  );
};
