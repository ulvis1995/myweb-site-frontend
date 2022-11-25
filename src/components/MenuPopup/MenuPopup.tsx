import React from 'react';
import st from './menu-popup.module.scss';
import { Link } from 'react-router-dom';
import { Drawer } from 'antd';
import { ExitIcon, LogoIcon } from '../../assets/image/icons';
import { menuList } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loginAdmin } from '../../store/slices/UserSlice';
import { MenuPopupProps } from '../../types/typesProps';

const MenuPopup = ({ clickDrawer, open }: MenuPopupProps) => {
  const dispatch = useAppDispatch();
  const { isAdmin } = useAppSelector(({ user }) => user);

  const handleExit = () => {
    dispatch(loginAdmin(false));
    clickDrawer();
  };

  return (
    <div className={st.container}>
      <Drawer
        title={
          <div className={st.title}>
            <Link to="/" className={st.logo_block} onClick={clickDrawer}>
              <div className={st.avatar}>
                <LogoIcon />
              </div>
              <h2>Vita</h2>
            </Link>
            {isAdmin ? (
              <Link to="/" onClick={handleExit}>
                Выйти
              </Link>
            ) : (
              <Link to="auth" onClick={clickDrawer}>
                Войти
              </Link>
            )}
          </div>
        }
        closeIcon={<ExitIcon />}
        placement="top"
        onClose={clickDrawer}
        open={open}
        height="70%"
        getContainer={false}>
        <ul>
          {menuList.map((item) => (
            <Link to={item.link} key={item.link} onClick={clickDrawer}>
              <li>{item.text}</li>
            </Link>
          ))}
          {isAdmin ? (
            <li>
              <Link to="admin" onClick={clickDrawer}>
                Admin
              </Link>
            </li>
          ) : (
            ''
          )}
        </ul>
      </Drawer>
    </div>
  );
};

export default MenuPopup;
