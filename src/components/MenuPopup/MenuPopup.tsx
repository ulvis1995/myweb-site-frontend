import React from 'react';
import { Drawer } from 'antd';
import { LogoIcon } from '../../img/icons';
import { ExitIcon } from '../../img/icons/ExitIcon';
import st from './menu-popup.module.scss';
import { Link } from 'react-router-dom';
import { menuList } from '../../BlockData/constants';

type TProps = {
  clickDrawer: () => void;
  open: boolean;
};

const MenuPopup = ({ clickDrawer, open }: TProps) => {
  return (
    <div className={st.container}>
      <Drawer
        title={
          <Link to="/" className={st.logo_block} onClick={clickDrawer}>
            <div className={st.avatar}>
              <LogoIcon />
            </div>

            <h2>Vita</h2>
          </Link>
        }
        closeIcon={<ExitIcon />}
        placement="top"
        onClose={clickDrawer}
        open={open}
        height="70%"
        getContainer={false}>
        <ul className={st.container_list}>
          {menuList.map((item) => (
            <Link to={item.link} key={item.link} onClick={clickDrawer}>
              <li>{item.text}</li>
            </Link>
          ))}
        </ul>
      </Drawer>
    </div>
  );
};

export default MenuPopup;
