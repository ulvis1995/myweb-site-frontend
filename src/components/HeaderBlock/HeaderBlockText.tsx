import React from 'react';
import { LineIcon } from '../../assets/image/icons';
import st from './header-block.module.scss';

type TProps = {
  children: string;
};

const HeaderBlockText = ({ children }: TProps) => {
  return (
    <div className={`${st.block_header}`}>
      <LineIcon />
      <h2>{children}</h2>
      <LineIcon />
    </div>
  );
};

export default HeaderBlockText;
