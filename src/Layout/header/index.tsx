import React from "react";
import StyledHeader from "./style";
import Logo from "assets/shared/logo.svg";

const Header = () => {
  return (
    <StyledHeader>
      <img src={Logo} alt="galleria's logo" className="logo" />
      <span>START SLIDESHOW</span>
    </StyledHeader>
  );
};

export default React.memo(Header);
