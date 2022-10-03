import image1 from '../../img/projects_card/pokedex.JPG';
import image2 from '../../img/projects_card/kinopoinsk.JPG';
import image3 from '../../img/projects_card/mini-game.JPG'


export interface projectListType {
  title: string,
  description: string | null,
  list:{
    id: number,
    name: string,
    gitUrl: string,
    deploy: string | null,
    description: string,
    imgUrl: string | null
  }[]
}

export const projectList: projectListType = {
  title: 'Мои работы',
  description: 'Это небольшая галерея, выполненных мной проектов. Они выставлены в порядке улучшения моих навыков и пополнения знаний новыми технологиями. Более подробно со всеми проектами можно ознакомиться в соответствующем разделе',
  list: [
  {
    id: 1,
    name: 'Покедекс',
    gitUrl: 'https://github.com/ulvis1995/pokedex-rtk-ts',
    deploy: 'https://pokedex-rtk.herokuapp.com/',
    description: 'Данный проект создавался с использованием открытой API - https://pokeapi.co. Адаптивная верстка, использование React в связке с ReduxToolkit и типизацией TypeScript, использование дополнительных библиотек готовых компонентов - Ant Design, ApexCharts.',
    imgUrl: image1
  },
  {
    id: 2,
    name: 'Кинопоиск',
    gitUrl: 'https://github.com/ulvis1995/kinopoisk-react-redux-typescript/',
    deploy: 'https://kinopoisk-react-typescript.herokuapp.com/',
    description: 'Проект создавался с использованием неофициальной базы данных Kinopoisk, адаптивная верстка по принципу first-mobile, использование библиотеки React, последовательное выстраивание проекта на React, затем перевод на Redux, использование библиотки Ant, с последующим добавлением TypeScript',
    imgUrl: image2
  },
  {
    id: 3,
    name: 'RPGBattle',
    gitUrl: 'https://github.com/ulvis1995/taskAndGames/tree/master/task4-lad%20RPG%20Battle',
    deploy: null,
    description: 'Эта мини-игра создавалась в качестве тестового задания на знание JavaScript для стажировки в компанию Lad24.ru.',
    imgUrl: image3
  },
] }

