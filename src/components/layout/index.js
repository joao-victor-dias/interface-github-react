import React from "react";
import Header from "../header";
import * as S from "./styled";
import Logo from "../logo/index";


const Layout = ({children }) => {
  return (    
    <S.WrapperLayout>
      <Logo/>        
      <Header />
      {children}      
    </S.WrapperLayout>
    
  );
};

export default Layout;
