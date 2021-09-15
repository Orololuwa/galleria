import React, { useContext } from "react";
import { useHistory } from "react-router";
import StyledHeader from "./style";
import { StoreContext } from "context/store-context";

const Header = () => {
  const history = useHistory();
  const ctx = useContext(StoreContext);

  const slideShow = ctx.slideShow;

  const startSlideShowHandler = () => {
    history.push(`/art-${1}`);
    ctx.startSlideShow();
  };

  const stopSlidesShowHandler = () => {
    ctx.stopSlideShow();
  };

  return (
    <StyledHeader>
      <img
        src="/shared/logo.svg"
        alt="galleria's logo"
        className="logo"
        onClick={() => history.push("/")}
      />
      {!slideShow && (
        <span onClick={startSlideShowHandler}>START SLIDESHOW</span>
      )}
      {slideShow && <span onClick={stopSlidesShowHandler}>STOP SLIDESHOW</span>}
    </StyledHeader>
  );
};

export default React.memo(Header);
