import Link from "next/link";

import styled from "styled-components";

import { IconGlobe, IconLightMode, IconMenu } from "./icons";

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 6em;
  position: absolute;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  & > nav {
    display: flex;
    width: 75vw;
    max-width: 1434px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > span {
      font-size: 20px;
      font-weight: 600;
      text-transform: uppercase;
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
      margin: 0 50px;
      justify-content: space-between;
    }

    & > div {
      display: flex;
      gap: 5px;

      & > div {
        display: flex;
        padding: 7px;
        border-radius: 8px;
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

    @media (max-width: 1440px) {
      width: 85vw;
    }
  }
`;

export const Navbar = () => {
  return (
    <Header>
      <nav>
        <span>Logo</span>
        <ul>
          <li>
            <Link href="#">Sobre</Link>
          </li>
          <li>
            <Link href="#">Projetos</Link>
          </li>
          <li>
            <Link href="#">Contato</Link>
          </li>
        </ul>
        <div>
          <div>
            <IconGlobe />
          </div>
          <div>
            <IconLightMode />
          </div>
          <div>
            <IconMenu />
          </div>
        </div>
      </nav>
    </Header>
  );
};
