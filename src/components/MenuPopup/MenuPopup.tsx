import React from 'react';
import { Drawer } from 'antd';
import { EnterIcon, LogoIcon } from '../../assets/image/icons';
import { ExitIcon } from '../../assets/image/icons/ExitIcon';
import st from './menu-popup.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { menuList } from '../../BlockData/constants';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loginAdmin } from '../../store/slices/UserSlice';

type TProps = {
  clickDrawer: () => void;
  open: boolean;
};

const MenuPopup = ({ clickDrawer, open }: TProps) => {
  const navigate = useNavigate();
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
