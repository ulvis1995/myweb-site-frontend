import {
  GitIcon,
  GmailIcon,
  HabrIcon,
  HhIcon,
  MailRuIcon,
  TelegramIcon,
  VkIcon,
} from '../assets/image/icons';

export const baseurl = 'http://localhost:5000';

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
        image: <TelegramIcon />,
        text: '@vitaparamonova',
      },
      {
        id: 'vk',
        title: 'Vkontakte',
        ref: 'https://vk.com/id135541653',
        image: <VkIcon />,
        text: 'id135541653',
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
        image: <GmailIcon />,
        text: 'violettapar1995@gmail.com',
      },
      {
        id: 'mailru',
        title: 'Mail.ru',
        ref: 'mailto:viopar@mail.ru',
        image: <MailRuIcon />,
        text: 'viopar@mail.ru',
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
        image: <GitIcon />,
        text: 'https://github.com/ulvis1995',
      },
      {
        id: 'hh',
        title: 'HeadHunter.ru',
        ref: 'https://kazan.hh.ru/resume/c6de691dff0b1c697f0039ed1f6d49506d7858',
        image: <HhIcon />,
        text: 'https://kazan.hh.ru/resume/c6de691dff0b1c697f0039ed1f6d49506d7858',
      },
      {
        id: 'habr',
        title: 'Habr',
        ref: 'https://career.habr.com/violettaparamonova',
        image: <HabrIcon />,
        text: 'https://career.habr.com/violettaparamonova',
      },
    ],
  },
];
