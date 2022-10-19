import React from 'react';
import { Link } from 'react-router-dom';
import { LineIcon } from '../../assets/image/icons';
import st from './header-block.module.scss';

type TProps = {
  children: string;
};

const HeaderBlockLink = ({ children }: TProps) => {
  const checkLink = (text: string) => {
    switch (text) {
      case 'Мои работы и проекты':
        return '/portfolio';
      case 'Новости и планы':
        return '/news';

      default:
        return '/';
    }
  };

  return (
    <Link to={checkLink(children)} className={`${st.block_header} ${st.header_link}`}>
      <LineIcon />
      <h2>{children}</h2>
      <LineIcon />
    </Link>
  );
};

export default HeaderBlockLink;
