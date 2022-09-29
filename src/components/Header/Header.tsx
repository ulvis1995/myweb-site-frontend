import React from 'react';
import st from './header.module.scss';
import icon from '../../img/DSC_1815.webp'

const Header: React.FC = () => {
  return (
    <header className={st.wrapper}>
      <div className={st.container}>
        <div className={st.avatar}>
          <img src={icon} />
        </div>
        <div className={st.list}>
          <ul>
            <li>Новости</li>
            <li>Портфолио</li>
            <li>Технологии</li>
            <li>Обо мне</li>
            <li>Контакты</li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;