import React from "react";
import StyledHeader from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <img src="/shared/logo.svg" alt="galleria's logo" className="logo" />
      <span>START SLIDESHOW</span>
    </StyledHeader>
  );
};

export default React.memo(Header);
