import React from "react";
import { useHistory } from "react-router";
import StyledHeader from "./style";

const Header = () => {
  const history = useHistory();
  return (
    <StyledHeader>
      <img
        src="/shared/logo.svg"
        alt="galleria's logo"
        className="logo"
        onClick={() => history.push("/")}
      />
      <span>START SLIDESHOW</span>
    </StyledHeader>
  );
};

export default React.memo(Header);
