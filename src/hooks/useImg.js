import { useEffect, useState } from "react";
import { URI_API } from "../consts/consts";
import CardBG from '../img/card-bg.jpg';

export const useImg = holiday => {
  const [image, setImage] = useState(CardBG);

  useEffect(() => {
    if (!holiday) return;

    fetch(`${URI_API}image/${holiday}`)
      .then(response => {
        if (response.status !== 200) {
          throw new Error(response.status)
        }
        return response.json();
      })
      .then(data => {
        if (data.urlImg) {
          setImage(data.urlImg);
          // console.log(data.urlImg);
        }
      })
      .catch(err => console.warn(err))

  }, [holiday]);

  return [image];
};