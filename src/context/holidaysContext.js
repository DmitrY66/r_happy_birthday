import { createContext, useState } from "react";
import { useHolidays } from "../hooks/useHolidays";

export const holidaysContext = createContext({});

export const HolidaysContextProvider = ({ children }) => {
  const [holiday, setHoliday] = useState('');
  const [holidays] = useHolidays();

  const changeHoligay = nameHoliday => {
    setHoliday(nameHoliday);
    // toggleChoises();
  };

  return (
    <holidaysContext.Provider value={{ holidays, holiday, changeHoligay }}>
      {children}
    </holidaysContext.Provider>
  )
}
