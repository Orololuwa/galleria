import { Thumbnail } from "models/Thumbnails";
import { createContext, FC, useState } from "react";
import data from "data.json";

type StoreContextType = {
  data: Thumbnail[];
  slideShow: boolean;
  startSlideShow: () => void;
  stopSlideShow: () => void;
};

export const StoreContext = createContext<StoreContextType>({
  data: [],
  slideShow: false,
  startSlideShow: () => {},
  stopSlideShow: () => {}
});

const StoreContextProvider: FC = (props) => {
  const [slides, setSlides] = useState(false);

  const startSlidesHandler = () => setSlides(true);
  const stopSlidesHandler = () => setSlides(false);

  const ContextValue: StoreContextType = {
    data: data,
    slideShow: slides,
    startSlideShow: startSlidesHandler,
    stopSlideShow: stopSlidesHandler
  };

  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
