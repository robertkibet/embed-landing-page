import React, {ReactNode} from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {Wrapper, MainContent} from "./styles";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({children}: LayoutProps) => {
  return (
    <Wrapper>
      <Navbar />
      <MainContent>{children}</MainContent>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
