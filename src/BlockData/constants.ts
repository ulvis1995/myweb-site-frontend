import telegram from '../img/social/telegram_logo_icon_168692.svg';
import vk from '../img/social/vk-2173.svg';
import gmail from '../img/social/icons8-gmail.svg';
import mailru from '../img/social/mail_ru_logo_icon_147267.svg';
import git from '../img/social/icons8-github.svg';
import hh from '../img/social/hh.ru__min_.svg';
import habr from '../img/social/habrahabr-ru-icon.png';

export const menuList: { id: number; link: string; text: string }[] = [
  {
    id: 1,
    link: '/news',
    text: 'Новости',
  },
  {
    id: 2,
    link: '/portfolio',
    text: 'Портфолио',
  },
  {
    id: 3,
    link: '/about',
    text: 'Обо мне',
  },
  {
    id: 4,
    link: '/contacts',
    text: 'Контакты',
  },
];

export const skills: string[] = [
  'HTML',
  'CSS',
  'Адаптивная верстка',
  'JavaScript',
  'React',
  'Redux/ReduxToolKit',
  'Ant Design',
  'ApexCharts',
  'Redux-Persist',
  'Git',
  'REST API',
  'SQL(PostgresSQL)',
];

export const contacts = [
  {
    header: 'Соц.сети',
    data: [
      {
        id: 'telegram',
        title: 'Telegram',
        ref: 'https://t.me/vitaparamonova',
        image: telegram,
      },
      {
        id: 'vk',
        title: 'Vkontakte',
        ref: 'https://vk.com/id135541653',
        image: vk,
      },
    ],
  },
  {
    header: 'Почта',
    data: [
      {
        id: 'gmail',
        title: 'Gmail',
        ref: 'mailto:violettapar1995@gmail.com',
        image: gmail,
      },
      {
        id: 'mailru',
        title: 'Mail.ru',
        ref: 'mailto:viopar@mail.ru',
        image: mailru,
      },
    ],
  },
  {
    header: 'Git и резюме',
    data: [
      {
        id: 'gitHub',
        title: 'GitHub',
        ref: 'https://github.com/ulvis1995',
        image: git,
      },
      {
        id: 'hh',
        title: 'HeadHunter.ru',
        ref: 'https://kazan.hh.ru/resume/c6de691dff0b1c697f0039ed1f6d49506d7858',
        image: hh,
      },
      {
        id: 'habr',
        title: 'Habr',
        ref: 'https://career.habr.com/violettaparamonova',
        image: habr,
      },
    ],
  },
];
