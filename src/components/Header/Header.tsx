import React from 'react';
import st from './header.module.scss';
import icon from '../../img/DSC_1815.webp';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className={st.wrapper}>
      <div className={st.container}>
        <Link to='/'>
          <div className={st.avatar}>
            <img src={icon} />
          </div>
        </Link>
        <div className={st.list}>
          <ul>
            <li><Link to='/news'>Новости</Link></li>
            <li><Link to='/portfolio'>Портфолио</Link></li>
            <li><Link to='/about'>Обо мне</Link></li>
            <li><Link to='/contacts'>Контакты</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;