import React from 'react';
import st from './hard-skills.module.scss';
import { skills } from '../../constants/constants';
import HeaderBlockText from '../HeaderBlock/HeaderBlockText';

function HardSkillsBlock() {
  return (
    <div className={st.technology}>
      <HeaderBlockText>Hard Skills</HeaderBlockText>
      <ul className={st.technology_list}>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default HardSkillsBlock;
