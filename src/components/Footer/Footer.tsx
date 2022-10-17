import React from 'react';
import st from './footer.module.scss';
import { contacts } from '../../BlockData/constants';

const Footer: React.FC = () => {
  return (
    <footer className={st.wrapper}>
      <div className={st.container}>
        {contacts.map((block) => (
          <div className={st.block} key={block.header}>
            <h3>{block.header}</h3>
            <ul>
              {block.data.map((i) => (
                <li key={i.id}>
                  <a href={i.ref} target="_blank" title={i.title}>
                    <img src={i.image} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
