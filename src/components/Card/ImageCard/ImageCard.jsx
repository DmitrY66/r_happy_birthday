import style from './ImageCard.module.css';
// import { useContext } from 'react';
// import { imgContext } from '../../../context/imgContext';
import CardBG from '../../../img/card-bg.jpg';
import { useSelector } from "react-redux";

const ImageCard = () => {
  // const urlImg = useContext(imgContext);
  // console.log('urlImg: ', urlImg);
  const { urlImg, } = useSelector(state => state.img);
  console.log('urlImg: ', urlImg);

  return (
    <img
      className={style.img}
      src={urlImg || CardBG}
      alt="Фон открытки"
      width={840}
      height={520} />
  )
};

export default ImageCard;
