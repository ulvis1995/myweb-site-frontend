import React from 'react';
import st from './about.module.scss';
import girl from '../../img/girl.png';
import close from '../../img/about/close.png';
import { aboutData } from './about-data';
import AboutItem from './AboutItem';

const About: React.FC = () => {
  const [openBlock, setOpenBlock] = React.useState<number | null>(null);
  const chooseBlock = aboutData.find(block => block.id === openBlock);

  const changeBlock = (id: number | null) => {
    setOpenBlock(id)
  }

  return (
    <main className={st.wrapper}>
      <div className={st.container}>
        <div className={st.container_gretting}> 
          <div className={st.container_gretting_text}>
              <p>
                <span>Почему именно IT? </span>
                Еще недавно я была оценщиком, но специальность довольно быстро приелась, несмотря на достойную оплату, ввиду ее довольно большой однообразности и несоответствия внутренним установкам. Так что, поразмыслив, было решено попробовать себя в этой, как оказалось захватывающей все мое внимание, области. 
              </p>
              <p>
                Работа оценщиком мне нравилась до тех пор пока были горизонты развития и возможности получения нового опыта, который довольно быстро скатился к рутиной работе и шаблонам.
              </p>
              <p>
                А мир IT буквально кричит из каждого "утюга", что здесь придется постоянно развиваться и учиться. Это именно тот драйвер, что мне нужен, чтобы подогревать интерес к делу и отодвигать горизонт развития все дальше, в попытке его достичь. К тому же, разработка дает давно забытое детское чувство радости от игры в конструктор, когда тебе нужно добавить деталь, не поломав при этом остальную конструкцию, и это безусловно затягивает, заставляя забывать о времени, и с удивлением обнаруживать, что за окном давно стемнело. 
              </p>
            </div>
            <div className={st.container_gretting_image}>
              <img src={girl} alt='Парамонова Виолетта'/>
            </div>
        </div>
        <div className={st.container_about}>
          {aboutData.map(item => {
            return (
            <button 
              className={st.container_about_block} 
              key={item.id}
              onClick={() => changeBlock(item.id)}
              >
              <img src={item.image} alt={item.title} title={item.title}/>
              <p>{item.title}</p>
            </button>)}
          )}
          <button 
            className={st.container_about_block}
            onClick={() => changeBlock(null)}
            disabled={openBlock === null}
            >
            <img src={close} alt='Закрыть описание' title='Закрыть описание'/>
            <p>Закрыть описание</p>
          </button>
        </div>
        {openBlock !== null ? <AboutItem item={chooseBlock}/> : ''}
      </div>
    </main>
  )
}

export default About