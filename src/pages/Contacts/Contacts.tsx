import React from 'react';
import st from './contacts.module.scss';
import { contacts } from '../../constants/constants';

export const Contacts = () => {
  return (
    <main className="wrapper">
      <div className={st.container}>
        {contacts.map((block) => (
          <div className={st.block} key={block.header}>
            <h3>{block.header}</h3>
            <ul>
              {block.data.map((i) => (
                <li key={i.id}>
                  <a href={i.ref} target="_blank" rel="noopener" title={i.title}>
                    {i.image}
                  </a>
                  <p>{i.text}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
};
