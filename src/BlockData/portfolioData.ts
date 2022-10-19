import image1 from '../assets/image/projects_card/pokedex.JPG';
import image2 from '../assets/image/projects_card/kinopoinsk.JPG';
import image3 from '../assets/image/projects_card/mini-game.JPG';

import pokedex from '../assets/image/projects_card/pokedex.JPG';
import kinopoisk from '../assets/image/projects_card/kinopoinsk.JPG';
import rpg_battle from '../assets/image/projects_card/mini-game.JPG';
import fitness from '../assets/image/projects_card/fintess.JPG';
import tatoo from '../assets/image/projects_card/tatoo.JPG';
import todo from '../assets/image/projects_card/todo.JPG';
import lotr from '../assets/image/projects_card/lotr.JPG';
import excel from '../assets/image/projects_card/excel.JPG';
import pizza from '../assets/image/projects_card/pizza.JPG';
import blog from '../assets/image/projects_card/blog.JPG';
import link from '../assets/image/projects_card/links.JPG';
import store from '../assets/image/projects_card/store.JPG'; 


export interface projectListType {
  title: string,
  description: string | null,
  list:{
    id: number,
    name: string,
    gitUrl: string,
    deploy: string | null,
    description: string,
    imgUrl: string | null,
    technology: string[]
  }[]
}

export const projectList: projectListType = {
  title: 'Мои работы и проекты',
  description: 'Это небольшая галерея, выполненных мной проектов. Они выставлены в порядке улучшения моих навыков и пополнения знаний новыми технологиями. Более подробно со всеми проектами можно ознакомиться в соответствующем разделе',
  list: [
    {
      id: 1,
      name: 'RPGBattle',
      gitUrl: 'https://github.com/ulvis1995/taskAndGames/tree/master/task4-lad%20RPG%20Battle',
      deploy: null,
      description: 'Эта мини-игра создавалась в качестве тестового задания на знание JavaScript для стажировки в компанию Lad24.ru.',
      imgUrl: image3,
      technology: ['JavaScript']
    },
    {
      id: 2,
      name: 'Кинопоиск',
      gitUrl: 'https://github.com/ulvis1995/kinopoisk-react-redux-typescript/',
      deploy: 'https://kinopoisk-react-typescript.herokuapp.com/',
      description: 'Проект создавался с использованием неофициальной базы данных Kinopoisk, адаптивная верстка по принципу first-mobile, использование библиотеки React, последовательное выстраивание проекта на React, затем перевод на Redux, использование библиотки Ant, с последующим добавлением TypeScript',
      imgUrl: image2,
      technology: ['TypeScript', 'React', 'Redux', 'Antd']
    },
    {
      id: 3,
      name: 'Покедекс',
      gitUrl: 'https://github.com/ulvis1995/pokedex-rtk-ts',
      deploy: 'https://pokedex-rtk.herokuapp.com/',
      description: 'Данный проект создавался с использованием открытой API - https://pokeapi.co. Адаптивная верстка, использование React в связке с ReduxToolkit и типизацией TypeScript, использование дополнительных библиотек готовых компонентов - Ant Design, ApexCharts.',
      imgUrl: image1,
      technology: ['TypeScript', 'React', 'ReduxToolKit', 'Antd', 'ApexCharts']
    },
] }

export const studingList: projectListType = {
  title: 'Мои работы',
  description: 'Это небольшая галерея, выполненных мной проектов. Они выставлены в обратном порядке создания репозиториев в Git, т.е. вверху списка идут более свежие работы',
  list: [
  {
    id: 1,
    name: 'Сайт фитнес-клуба',
    gitUrl: 'https://github.com/ulvis1995/my-project-fitnes',
    deploy: null,
    description: 'Первый проект по верстке, самостоятельная разработка интерфейса (HTML, CSS) с включением связей между страницами, модальные окна.',
    imgUrl: fitness,
    technology: ['JavaScript', 'HTML', 'SCSS']
  },
  {
    id: 2,
    name: 'Сайт тату-салона',
    gitUrl: 'https://github.com/ulvis1995/tatoo-salon',
    deploy: null,
    description: 'Второй проект по верстке, подготовлена одна страница - адаптивная (в основу взят сайт:https://tatukazan.ru/#). Применялись: HTML, CSS, препроцессор Sass, gulp, js for modal window',
    imgUrl: tatoo,
    
    technology: ['JavaScript', 'HTML', 'SCSS', 'Adaptive']
  },
  {
    id: 3,
    name: 'Todo-list на чистом JS',
    gitUrl: 'https://github.com/ulvis1995/todo',
    deploy: null,
    description: 'Эта работа - первое самостоятельное применение чистого JavaScript, направлено на получение понимания, что такое JS и как с ним работать. Это было самое сложное - так как мне в принципе требовалось самостоятельно понять работу функций, рендеринга и прочих вещей. В папке проекта на GitHub присутствуют несколько вариаций JS файлов работы данного мини-приложения',
    imgUrl: todo,    
    technology: ['JavaScript', 'HTML', 'CSS']
  },
  {
    id: 4,
    name: 'Todo-list на React',
    gitUrl: 'https://github.com/ulvis1995/react-todo',
    deploy: null,
    description: 'Данное приложение переделка изначального Todo-листа с использованием React, как первое приложение с использованием этой библиотеки, а также некоторое дополнение функционала',
    imgUrl: todo,
    technology: ['JavaScript', 'HTML', 'CSS', 'React']
  },
  {
    id: 5,
    name: 'Мини-википедия по вселенной Lord of the Ring (Властелин колец)',
    gitUrl: 'https://github.com/ulvis1995/lotr-react',
    deploy: null,
    description: 'Это первый проект, где мною были изучены способы обращения к открытым API, в также обработка соответствующих ответов от базы данных, с последующим отражением полученной информации в приложении. Дизайн и качество проработки приложения оставляет желать лучшего, что отчасти связано с непроработанностью самой Api. Здесь мне было важно именно получить опыт работы с запросами и отражением результатов',
    imgUrl: lotr,
    technology: ['React', 'HTML', 'SCSS', 'Adaptive']
  },
  {
    id: 6,
    name: 'Очередная переделка Todo-листа на классовые компоненты React',
    gitUrl: 'https://github.com/ulvis1995/todo-react-class',
    deploy: null,
    description: 'Я решила переписать Todo-лист на классовые компоненты, так как чувствовала в себе некоторую неуверенность в их применении. Поэтому, чтобы улучшить свое понимание классовых компонентов, я переписала это приложение с функциональных компонентов на классовые',
    imgUrl: todo,
    technology: ['JavaScript', 'HTML', 'CSS', 'React']
  },
  {
    id: 7,
    name: 'Кинопоиск',
    gitUrl: 'https://github.com/ulvis1995/kinopoisk-react-redux',
    deploy: null,
    description: 'Проект с использованием неофициальной базы данных Kinopoisk, адаптивная верстка по принципу first-mobile, использование библиотеки React, последовательное выстраивание проекта на React, затем перевод на Redux, использование библиотки Antd',
    imgUrl: kinopoisk,
    technology: ['HTML', 'CSS', 'React', 'Redux', 'Antd']
  },
  {
    id: 8,
    name: 'Кинопоиск',
    gitUrl: 'https://github.com/ulvis1995/kinopoisk-react-redux-typescript',
    deploy: 'https://kinopoisk-react-typescript.herokuapp.com/',
    description: 'Проект с использованием неофициальной базы данных Kinopoisk, адаптивная верстка по принципу first-mobile, использование библиотеки React, последовательное выстраивание проекта на React, затем перевод на Redux, использование библиотки Antd',
    imgUrl: kinopoisk,
    technology: ['HTML', 'CSS', 'React', 'Redux', 'TypeScript', 'Antd']
  },
  {
    id: 9,
    name: 'RPGBattle',
    gitUrl: 'https://github.com/ulvis1995/taskAndGames/tree/master/task4-lad%20RPG%20Battle',
    deploy: null,
    description: 'Эта мини-игра создавалась в качестве тестового задания на знание JavaScript для стажировки в компанию Lad24.ru.',
    imgUrl: rpg_battle,
    technology: ['JavaScript', 'HTML', 'CSS']
  },
  {
    id: 10,
    name: 'Покедекс',
    gitUrl: 'https://github.com/ulvis1995/pokedex-rtk-ts',
    deploy: 'https://pokedex-rtk.herokuapp.com/',
    description: 'Данный проект создавался с использованием открытой API - https://pokeapi.co. Адаптивная верстка, использование React в связке с ReduxToolkit и типизацией TypeScript, использование дополнительных библиотек готовых компонентов - Ant Design, ApexCharts.',
    imgUrl: pokedex,
    technology: ['HTML', 'SCSS', 'React', 'ReduxToolKit', 'TypeScript', 'Antd', 'ApexCharts', 'Adaptive']
  },
] }


export const courseList: projectListType = {
  title: 'Учебные проекты',
  description: 'Это список проектов, которые выполнялись на основе онлайн-курсов, путем повторения кода, объясняющего преподавателя',
  list: [
  {
    id: 1,
    name: 'Создание собственного Excel на чистом JS',
    gitUrl: 'https://github.com/ulvis1995/excel-course',
    deploy: null,
    description: 'Эта работа была сделана на основе онлайн-курса от Владилена Минина, основателя онлайн-школы Result Shcool. Суть проекта - создать аналог Google-Sheets или Excel на чистом JavaScript с добавлением роутинга',
    imgUrl: excel,
    technology: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 2,
    name: 'Веб-приложение сайта пиццы',
    gitUrl: 'https://github.com/ulvis1995/react-pizza-by-Archakov',
    deploy: null,
    description: 'Данное веб-приложение создано по примеру онлайн-курса от Archakov Blog, здесь мною впервые был применен React, а также дополнительная библиотека state-meneger - Redux. Приложение отчасти напоминает дизайном Dodo-pizza',
    imgUrl: pizza,
    technology: ['HTML', 'SCSS', 'React', 'Redux']
  },
  {
    id: 3,
    name: 'Блог Mern серверная часть',
    gitUrl: 'https://github.com/ulvis1995/blog-mern-by-archakov',
    deploy: 'https://blog-mern-archakov.herokuapp.com/',
    description: 'Это веб-приложение создано по онлайн-курсу от Archakov Blog и состоит из двух частей - серверной и фронтэнда, здесь представлена ссылка на серверную часть. В общем приложение представляет собой блог с возможностью авторизации, создания, редактирования и удаления постов',
    imgUrl: null,
    technology: ['HTML', 'SCSS', 'React', 'NodeJS', 'MongoDB']
  },
  {
    id: 4,
    name: 'Блог Mern клиентская часть',
    gitUrl: 'https://github.com/ulvis1995/blog-mern-front-archakov',
    deploy: 'https://blog-mern-front-archakov-655do7xlm-ulvis1995.vercel.app/',
    description: 'Это веб-приложение создано по онлайн-курсу от Archakov Blog и состоит из двух частей - серверной и фронтэнда, здесь представлена ссылка на клиентскую часть. В общем приложение представляет собой блог с возможностью авторизации, создания, редактирования и удаления постов.',
    imgUrl: blog,
    technology: ['HTML', 'SCSS', 'React', 'NodeJS', 'MongoDB']
  },
  {
    id: 5,
    name: 'Обработчик ссылок - MERN приложение',
    gitUrl: 'https://github.com/ulvis1995/mern-from-minin',
    deploy: null,
    description: 'Это веб-приложение создано по онлайн-курсу от Владилена Минина и представляет собой обработчик ссылок, это fullstack-приложение',
    imgUrl: link,
    technology: ['HTML', 'SCSS', 'React', 'NodeJS', 'MongoDB', 'MaterialUI']
  },
  {
    id: 6,
    name: 'Онлайн-магазин fullstack',
    gitUrl: 'https://github.com/ulvis1995/online-store-fullstack',
    deploy: null,
    description: 'Это веб-приложение создано по онлайн-курсу UlbiTV и представляет онлайн-магазин, без особой верстки, но основным функционалом магазина, возможностью авторизации, добавления товаров от имени администратора и пр.',
    imgUrl: store,
    technology: ['HTML', 'SCSS', 'React', 'NodeJS', 'PostgeSQL']
  },
] }