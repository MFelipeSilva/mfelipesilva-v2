import React, { ReactNode } from "react";

import styled from "styled-components";

import { motion } from "framer-motion";

import "@/utils/i18n";

import { Navbar } from "./navbar";
import { Footer } from "./footer";

interface ILayoutProps {
  children: ReactNode;
}

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;

  & > div {
    width: 100%;
    height: 100%;
  }
`;

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <LayoutContainer>
      <Navbar />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <Footer />
    </LayoutContainer>
  );
};
