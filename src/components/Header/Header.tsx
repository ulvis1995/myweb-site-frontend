import React from 'react';
import st from './header.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { EnterIcon, LogoIcon } from '../../assets/image/icons';
import { MenuIcon } from '../../assets/image/icons';
import { menuList } from '../../BlockData/constants';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loginAdmin } from '../../store/slices/UserSlice';
import { paths } from '../../app/AppRouter';

type TProps = {
  clickDrawer: () => void;
};

const Header = ({ clickDrawer }: TProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAdmin } = useAppSelector(({ user }) => user);

  const handleExit = () => {
    dispatch(loginAdmin(false));
    navigate(`${paths.MAIN}`);
  };

  return (
    <header className={st.wrapper}>
      <div className={st.container}>
        <Link to="/" className={st.logo_block}>
          <div className={st.avatar}>
            <LogoIcon />
          </div>
          <h2>Vita</h2>
        </Link>
        <div className={st.menu}>
          <ul className={st.list}>
            {menuList.map((item) => (
              <li key={item.text}>
                <Link to={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
          {isAdmin ? (
            <div className={st.admin_panel}>
              <Link to="admin">Admin</Link>
              <button className={st.exit} onClick={handleExit}>
                <EnterIcon />
              </button>
            </div>
          ) : (
            <Link to="auth" className={st.enter}>
              <EnterIcon />
            </Link>
          )}
        </div>
        <button className={st.menu_icon} onClick={clickDrawer}>
          <MenuIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
