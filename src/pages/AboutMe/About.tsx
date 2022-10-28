import React from 'react';
import st from './about.module.scss';
import { aboutData } from '../../BlockData/aboutData';
import AboutItem from './AboutItem';

export const About = () => {
  const [openBlock, setOpenBlock] = React.useState<number>(1);
  const chooseBlock = aboutData.find((block) => block.id === openBlock);

  const changeBlock = (id: number) => {
    setOpenBlock(id);
  };

  return (
    <main className="wrapper">
      <div className={st.container}>
        <div className={st.container_gretting}>
          <p>
            <span>Почему именно IT? </span>
            Еще недавно я была оценщиком, но специальность довольно быстро приелась, несмотря на
            достойную оплату, ввиду ее довольно большой однообразности и несоответствия внутренним
            установкам. Так что, поразмыслив, было решено попробовать себя в этой, как оказалось
            захватывающей все мое внимание, области.
          </p>
          <p>
            Работа оценщиком мне нравилась до тех пор пока были горизонты развития и возможности
            получения нового опыта, который довольно быстро скатился к рутиной работе и шаблонам.
          </p>
          <p>
            Мир IT же буквально кричит из каждого "утюга", что здесь придется постоянно развиваться
            и учиться. Это именно тот драйвер, что мне нужен, чтобы подогревать интерес к делу и
            отодвигать горизонт развития все дальше, в попытке его достичь. К тому же, разработка
            дает давно забытое детское чувство радости от игры в конструктор, когда тебе нужно
            добавить деталь, не поломав при этом остальную конструкцию, и это безусловно затягивает,
            заставляя забывать о времени, и с удивлением обнаруживать, что за окном давно стемнело.
          </p>
        </div>
        <div className={st.container_about}>
          {aboutData.map((item) => {
            return (
              <div key={item.id}>
                <input
                  type="radio"
                  id={item.title}
                  name="about"
                  value={item.title}
                  checked={openBlock === item.id}
                  onChange={() => changeBlock(item.id)}
                />
                <label htmlFor={item.title}>{item.title}</label>
              </div>
            );
          })}
        </div>
        {openBlock !== null ? <AboutItem item={chooseBlock} /> : ''}
      </div>
    </main>
  );
};
