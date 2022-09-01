import { createContext, useContext } from "react";
import { useImg } from "../hooks/useImg";
import { holidaysContext } from "./holidaysContext";

export const imgContext = createContext({});

export const ImgContextProvider = ({ children }) => {
  const { holiday } = useContext(holidaysContext);
  const [image] = useImg(holiday);
  // console.log('image: ', image);

  return (
    <imgContext.Provider value={image}>
      {children}
    </imgContext.Provider>
  )
}