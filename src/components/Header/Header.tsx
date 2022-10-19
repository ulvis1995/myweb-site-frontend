import React from 'react';
import st from './header.module.scss';
import { Link } from 'react-router-dom';
import { LogoIcon } from '../../assets/image/icons';
import { MenuIcon } from '../../assets/image/icons';
import { menuList } from '../../BlockData/constants';

type TProps = {
  clickDrawer: () => void;
};

const Header = ({ clickDrawer }: TProps) => {
  return (
    <header className={st.wrapper}>
      <div className={st.container}>
        <Link to="/" className={st.logo_block}>
          <div className={st.avatar}>
            <LogoIcon />
          </div>
          <h2>Vita</h2>
        </Link>
        <ul className={st.list}>
          {menuList.map((item) => (
            <li key={item.text}>
              <Link to={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
        <button className={st.menu_icon} onClick={clickDrawer}>
          <MenuIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
