import { useState, useContext } from 'react';
import { holidaysContext } from '../../../context/holidaysContext';
import style from './Choises.module.css';

const Choises = () => {
  const [isOpenChoises, setIsOpenChoises] = useState(false);
  const { holidays, holiday, changeHoligay } = useContext(holidaysContext);

  const toggleChoises = () => {
    setIsOpenChoises(!isOpenChoises);
  };

  return (
    <div className={style.wrapper}>
      <button
        className={style.button}
        onClick={toggleChoises}
      >
        {holidays[holiday] || 'Выбрать праздник'}
      </button>
      {
        isOpenChoises && (
          <ul className={style.list}>
            {
              Object.entries(holidays).map(item => (
                <li
                  className={style.itemlist}
                  key={item[0]}
                  onClick={() => {
                    changeHoligay(item[0]);
                    toggleChoises();
                  }}
                >
                  {item[1]}
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  );
};

export default Choises;
