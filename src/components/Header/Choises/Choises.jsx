import { useState, useContext } from 'react';
import { holidayContext } from '../../../context/holidayContext';
import style from './Choises.module.css';

const holidays = {
  newyear: 'Новый год',
  birthdayWomen: 'День рождения Ж',
  birthdayMen: 'День рождения M',
  womenday: '8 марта',
  knowledgeday: 'День знаний',
};

const Choises = () => {
  const [isOpenChoises, setIsOpenChoises] = useState(false);
  // const [holiday, setHoliday] = useState('Выбрать праздник');

  const { holiday, setHoliday } = useContext(holidayContext);
  console.log('holiday: ', holiday);

  const toggleChoises = () => {
    setIsOpenChoises(!isOpenChoises);
  };

  const changeHoligay = nameHoliday => {
    setHoliday(nameHoliday);
    toggleChoises();
  };

  return (
    <div className={style.wrapper}>
      <button
        className={style.button}
        onClick={toggleChoises}
      >{holiday}</button>
      {
        isOpenChoises && (
          <ul className={style.list}>
            {
              Object.entries(holidays).map(item => (
                <li
                  className={style.itemlist}
                  key={item[0]}
                  onClick={() => {
                    changeHoligay(item[1]);
                  }}
                >{item[1]}</li>
              ))
            }
          </ul>
        )
      }
    </div>
  );
};

export default Choises;