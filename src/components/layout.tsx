import React, { ReactNode } from "react";

import styled from "styled-components";

import { Navbar } from "./navbar";

interface ILayoutProps {
  children: ReactNode;
}

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <LayoutContainer>
      <Navbar />
      {children}
    </LayoutContainer>
  );
};
