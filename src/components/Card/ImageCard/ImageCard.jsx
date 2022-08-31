import style from './ImageCard.module.css';
import { useContext } from 'react';
import { imgContext } from '../../../context/imgContext';

const ImageCard = (props) => {
  const img = useContext(imgContext);
  console.log('img: ', img);

  return (
    <img
      className={style.img}
      src={props.img}
      alt="Фон открытки"
      width={840}
      height={520} />
  )
};

export default ImageCard;
