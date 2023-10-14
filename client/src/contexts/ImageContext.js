import { createContext, useContext, useState } from 'react';

const ImgSrcContext = createContext();

export const ImgSrcProvider = ({ children }) => {
  const [imgSrc, setImgSrc] = useState(null);

  const handleCapture = (imageSrc) => {
    setImgSrc(imageSrc);
  };

  return (
    <ImgSrcContext.Provider value={{ imgSrc, onCapture: handleCapture }}>
      {children}
    </ImgSrcContext.Provider>
  );
};

export const useImgSrc = () => {
  return useContext(ImgSrcContext);
};
