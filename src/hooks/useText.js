import { useEffect, useState } from "react";
import { URI_API } from "../consts/consts";

export const useText = holiday => {
  const [text, setText] = useState('Выберите повод поздравления');

  useEffect(() => {
    if (!holiday) return;

    fetch(`${URI_API}text/${holiday}`)
      .then(response => {
        if (response.status !== 200) {
          throw new Error(response.status)
        }
        return response.json();
      })
      .then(data => {
        if (data.text) {
          setText(data.text);
        }
      })
      .catch(err => console.warn(err))

  }, [holiday]);

  return [text];
};
