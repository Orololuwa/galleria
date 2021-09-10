import React from "react";
import Header from "./header";
import StyledLayout from "./style";

const Layout: React.FC = (props) => {
  return (
    <StyledLayout>
      <Header />
      {props.children}
    </StyledLayout>
  );
};

export default Layout;
