import Link from "next/link";

import Image from "next/image";

import { Popover } from "antd";

import i18n from "@/utils/i18n";

import { useTranslation } from "react-i18next";

import styled from "styled-components";

import logo from "../../public/images/logo.png";

import {
  IconBrazil,
  IconGlobe,
  IconLightMode,
  IconMenu,
  IconUnitedStates,
} from "./icons";

export const StyledHeader = styled.header`
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
      width: 50px;
      height: 50px;
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
        border-radius: 8px;
        border: none;
        outline: none;
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
        & > div {
          display: none;
        }

        & > div:nth-child(3) {
          display: flex;
        }
      }
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
    <StyledHeader>
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
            <button>
              <IconMenu />
            </button>
          </div>
        </div>
      </nav>
    </StyledHeader>
  );
};
