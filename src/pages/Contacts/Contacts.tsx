import React from 'react';
import st from './contacts.module.scss';
import { contacts } from '../../BlockData/constants';

type Props = {};

const Contacts: React.FC = ({}: Props) => {
  return (
    <main className="wrapper">
      <div className={st.container}>
        {contacts.map((block) => (
          <div className={st.block} key={block.header}>
            <h3>{block.header}</h3>
            <ul>
              {block.data.map((i) => (
                <li key={i.id}>
                  <a href={i.ref} target="_blank" title={i.title}>
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

export default Contacts;
