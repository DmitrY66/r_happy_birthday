import { useEffect, useState } from 'react';
import style from './Choises.module.css';
import { useSelector, useDispatch } from "react-redux";
import { fetchHolidays } from '../../../store/holidaysSlice';
import { fetchText } from '../../../store/textSlice';
import { fetchImg } from '../../../store/imgSlice';
import { NavLink, useParams } from 'react-router-dom';

const Choises = () => {
  const [isOpenChoises, setIsOpenChoises] = useState(false);
  const { holidays, loading } = useSelector(state => state.holidays);
  const dispatch = useDispatch();
  const { holiday } = useParams();

  const toggleChoises = () => {
    if (loading !== 'success') return;
    setIsOpenChoises(!isOpenChoises);
  };

  useEffect(() => {
    dispatch(fetchHolidays());
    if (holiday) {
      dispatch(fetchText(holiday));
      dispatch(fetchImg(holiday));
    }
  }, [dispatch, holiday]);

  return (
    <div className={style.wrapper}>
      <button
        className={style.button}
        onClick={toggleChoises}
      >
        {
          loading !== 'success' ?
            'Загрузка...' :
            holidays[holiday] || 'Выбрать праздник'
        }
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
                    // dispatch(setHoliday(item[0]));
                    // dispatch(fetchText(item[0]));
                    // dispatch(fetchImg(item[0]));
                    toggleChoises();
                  }}
                >
                  <NavLink
                    to={`card/${item[0]}`}
                    className={({ isActive }) => (isActive ? style.linkActive : '')}
                  >{item[1]}</NavLink>
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
