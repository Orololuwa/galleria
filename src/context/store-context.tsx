import { Thumbnail } from "models/Thumbnails";
import { createContext, FC } from "react";
import data from "data.json";

type StoreContextType = {
  data: Thumbnail[];
};

export const StoreContext = createContext<StoreContextType>({
  data: []
});

const ContextValue: StoreContextType = {
  data: data
};

const StoreContextProvider: FC = (props) => {
  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
