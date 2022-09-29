import React from 'react';
import st from './footer.module.scss';
import telegram from '../../img/social/telegram_logo_icon_168692.svg';
import vk from '../../img/social/vk-2173.svg';
import gmail from '../../img/social/icons8-gmail.svg';
import mailru from '../../img/social/mail_ru_logo_icon_147267.svg';
import git from '../../img/social/icons8-github.svg';
import hh from '../../img/social/hh.ru__min_.svg';
import habr from '../../img/social/habrahabr-ru-icon.png'


const Footer: React.FC = () => {
  return (
    <footer className={st.wrapper}>
      <div className={st.container}>
        <div className={st.block}>
          <h3>Соц.сети</h3>
          <ul>
            <li>
              <a href='https://t.me/vitaparamonova' target="_blank" title='Telegram'>
                <img src={telegram}/>
              </a>
            </li>
            <li>
              <a href='https://vk.com/id135541653' target="_blank" title='Vkontakte'>
                <img src={vk} id='vk'/>
              </a>
            </li>
          </ul>
        </div>
        <div className={st.block}>
          <h3>Почта</h3>
          <ul>
            <li>
              <a href='mailto:violettapar1995@gmail.com' title='Gmail'>
                <img src={gmail}/>
              </a>
            </li>
            <li>
              <a href='mailto:viopar@mail.ru' target="_blank" title='Mail.ru'>
                <img src={mailru}/>
              </a>
            </li>
          </ul>
        </div>
        <div className={st.block}>
          <h3>Git и резюме</h3>
          <ul>
            <li>
              <a href='https://github.com/ulvis1995' target="_blank" title='GitHub'>
                <img src={git}/>
              </a>
            </li>
            <li>
              <a href='https://kazan.hh.ru/resume/c6de691dff0b1c697f0039ed1f6d49506d7858' 
                title='HeadHunter.ru' target="_blank">
                <img src={hh}/>
              </a>
            </li>
            <li>
              <a href='https://career.habr.com/violettaparamonova' 
                title='Habr' target="_blank">
                <img src={habr}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer