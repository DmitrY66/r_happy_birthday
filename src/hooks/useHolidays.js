import { useEffect, useState } from "react";
import { URI_API } from "../consts/consts";

export const useHolidays = () => {
  const [holidays, setHolidays] = useState({});

  useEffect(() => {
    fetch(URI_API)
      .then(response => {
        if (response.status !== 200) {
          throw new Error(response.status)
        }
        return response.json();
      })
      .then(data => setHolidays(data))
      .catch(err => console.warn(err))
  }, [setHolidays]);

  return [holidays];
};
