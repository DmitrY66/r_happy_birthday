import style from './ImageCard.module.css';
import { useContext } from 'react';
import { imgContext } from '../../../context/imgContext';

const ImageCard = () => {
  const img = useContext(imgContext);
  // console.log('img: ', img);

  return (
    <img
      className={style.img}
      src={img}
      alt="Фон открытки"
      width={840}
      height={520} />
  )
};

export default ImageCard;
