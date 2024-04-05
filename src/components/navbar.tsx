import { useState, useEffect } from "react";

import Link from "next/link";

import { Popover } from "antd";

import i18n from "@/utils/i18n";

import { useTranslation } from "react-i18next";

import styled from "styled-components";

import {
  IconBrazil,
  IconClose,
  IconGlobe,
  IconLightMode,
  IconMenu,
  IconUnitedStates,
} from "./icons";

interface IHeaderProps {
  isOpen: boolean;
}

export const StyledHeader = styled.header<IHeaderProps>`
  display: flex;
  width: 100%;
  height: 5em;
  align-items: end;
  flex-direction: row;
  justify-content: center;

  & > nav {
    display: flex;
    max-width: 1434px;
    width: 75vw;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > div > a > img {
      width: 45px;
      height: 45px;
    }

    & > ul {
      display: flex;
      list-style: none;
      flex-direction: row;

      & > li > a {
        color: #000;
        font-size: 15px;
        padding: 9.5px 15px;
        border-radius: 8px;
        text-decoration: none;
        text-transform: uppercase;
        transition: color 0.55s ease, background-color 0.55s ease;

        &:hover {
          color: #7b2cbf;
          background-color: rgba(0, 0, 0, 0.1);
        }
      }

      @media (max-width: 768px) {
        & > li > a {
          display: none;
        }
      }
    }

    @media (max-width: 768px) {
      justify-content: space-between;
    }

    & > div {
      display: flex;
      gap: 5px;

      & > div > button {
        display: flex;
        padding: 7px;
        border: none;
        outline: none;
        color: #000;
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        transition: color 0.55s ease, background-color 0.55s ease;

        &:hover {
          color: #7b2cbf;
          background-color: rgba(0, 0, 0, 0.1);
        }
      }

      & > div {
        cursor: pointer;
      }

      & > div:nth-child(3) {
        display: none;
      }

      @media (max-width: 768px) {
        & > div:nth-child(1),
        :nth-child(2) {
          display: flex;

          & > button > svg {
            width: 30px;
          }
        }

        & > div:nth-child(3) {
          display: flex;
          z-index: 4;
        }
      }
    }
  }

  & > div {
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    backdrop-filter: ${({ isOpen }) => (isOpen ? "blur(3px)" : "blur(0)")};
    -webkit-backdrop-filter: ${({ isOpen }) =>
      isOpen ? "blur(3px)" : "blur(0)"};
    transition: backdrop-filter 0.55s ease-in-out,
      -webkit-backdrop-filter 0.55s ease-in-out;

    @media (max-width: 768px) {
      display: flex;
    }
  }

  & > aside {
    display: none;
    position: fixed;
    width: min(75vw, 350px);
    height: 100vh;
    top: 0;
    bottom: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    z-index: 3;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    box-shadow: 1px 0 15px 5px rgba(0, 0, 0, 0.1);
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    transition: 0.55s ease-in-out;

    & > ul {
      display: flex;
      width: 100%;
      gap: 2em;
      list-style: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & > li > a {
        color: #000;
        font-size: 25px;
        text-decoration: none;
        text-transform: uppercase;
        transition: color 0.55s ease, font-weight 0.55s ease;

        &:hover {
          color: #7b2cbf;
          font-weight: 700;
        }
      }
    }

    @media (max-width: 768px) {
      display: flex;
    }
  }
`;

const Content = styled.div`
  display: flex;
  gap: 0.5em;
  flex-direction: column;

  span {
    display: flex;
    gap: 0.7em;
    padding: 7px 15px;
    cursor: pointer;
    font-weight: 700;
    border-radius: 8px;
    align-items: center;
    text-transform: uppercase;
    transition: color 0.55s ease, background-color 0.55s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const onToggleScroll = () => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  };

  useEffect(() => {
    onToggleScroll();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const content = (
    <Content>
      <span onClick={() => i18n.changeLanguage("pt")}>
        <IconBrazil />
        Pt-br
      </span>
      <span onClick={() => i18n.changeLanguage("en")}>
        <IconUnitedStates />
        En
      </span>
    </Content>
  );

  return (
    <StyledHeader isOpen={isOpen}>
      <nav>
        <div>
          <Link href="/">
            <img src="https://i.ibb.co/zGSd4BW/logo-white.png" alt="logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/about">{t("navbar.about")}</Link>
          </li>
          <li>
            <Link href="/projects">{t("navbar.projects")}</Link>
          </li>
          <li>
            <Link href="/contact">{t("navbar.contact")}</Link>
          </li>
        </ul>
        <div>
          <div>
            <Popover placement="bottomRight" trigger="click" content={content}>
              <button>
                <IconGlobe />
              </button>
            </Popover>
          </div>
          <div>
            <button>
              <IconLightMode />
            </button>
          </div>
          <div>
            {isOpen ? (
              <button onClick={() => setIsOpen(!isOpen)}>
                <IconClose />
              </button>
            ) : (
              <button onClick={() => setIsOpen(!isOpen)}>
                <IconMenu />
              </button>
            )}
          </div>
        </div>
      </nav>
      <div onClick={() => setIsOpen(!isOpen)} />
      <aside>
        <ul>
          <li>
            <Link href="/about">{t("navbar.about")}</Link>
          </li>
          <li>
            <Link href="/projects">{t("navbar.projects")}</Link>
          </li>
          <li>
            <Link href="/contact">{t("navbar.contact")}</Link>
          </li>
        </ul>
      </aside>
    </StyledHeader>
  );
};
