import React from 'react';
import st from './about.module.scss';
import AboutItem from './AboutItem';
import { aboutApi, typeApi, useGetAboutQuery } from '../../store/Api';
import { Skeleton } from 'antd';

export const About = () => {
  const [openBlock, setOpenBlock] = React.useState<number>(1);
  const { isLoading } = useGetAboutQuery();

  const { type } = typeApi.useGetTypeAboutQuery(undefined, {
    selectFromResult: ({ data }) => ({ type: data ?? [] }),
  });
  const { aboutList } = aboutApi.useGetAboutQuery(undefined, {
    selectFromResult: ({ data }) => ({ aboutList: data ?? [] }),
  });

  const chooseBlock = aboutList.filter((about) => Number(about.type?.id) === openBlock);

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
          {type?.map((item) => {
            return (
              <div key={item.id}>
                <input
                  type="radio"
                  id={item.title}
                  name="about"
                  value={item.title}
                  checked={openBlock === Number(item.id)}
                  onChange={() => changeBlock(Number(item.id))}
                />
                <label htmlFor={item.title}>{item.title}</label>
              </div>
            );
          })}
        </div>
        {isLoading ? (
          <Skeleton
            active
            paragraph={{ rows: 12, width: '100%' }}
            style={{ height: '380px' }}
            title={false}
          />
        ) : (
          <AboutItem item={chooseBlock} />
        )}
      </div>
    </main>
  );
};
