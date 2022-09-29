interface newsListType {
  id: number,
  title: string,
  text: string,
  imgUrl: string | null,
  date: string
}

export const newsList: newsListType[] = [
  {
    id: 1,
    title: 'Запускаю сайт-визитку',
    text: 'Это приложение должно стать моим сайтом-визиткой и облегчить просмотр моих данных для потенциальных работодателей. Я хочу упростить им тем самым анализ данных обо мне и представить их в наглядной форме',
    imgUrl: null,
    date: `${new Date().toLocaleDateString()}`
  }, 
  {
    id: 2,
    title: 'Планирую сделать страницу с моими проектами',
    text: 'Подробно опишу каждый проект, который имеется в моем Git, с упониманием технологий, которые я применяла впервые к конкретному проекту',
    imgUrl: null,
    date: `${new Date().toLocaleDateString()}`
  }
]