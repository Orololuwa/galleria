import Backdrop from "components/Backdrop";
import { FC, memo } from "react";
import GalleryProvider from "./style";

interface galleryProps {
  image: string;
  title: string;
  onConfirm: () => void;
}

const Gallery: FC<galleryProps> = (props) => (
  <>
    <Backdrop onConfirm={props.onConfirm} />
    <GalleryProvider>
      <p onClick={props.onConfirm}>close</p>
      <img src={props.image} alt={props.title} />
    </GalleryProvider>
  </>
);

export default memo(Gallery);
