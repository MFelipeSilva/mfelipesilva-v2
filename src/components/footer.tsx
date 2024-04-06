import Link from "next/link";

import styled from "styled-components";

import { iconsData } from "@/utils/iconsData";

export const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  height: 4em;
  align-items: center;
  justify-content: center;

  & > div {
    display: flex;
    width: 75vw;
    max-width: 1434px;
    justify-content: space-between;

    & > span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.SECONDARY};
      font-weight: 300;
    }

    & > div {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;

      & > a:nth-child(1) > svg {
        width: 20px;
        height: 20px;
      }

      & > a > svg {
        cursor: pointer;
        width: 22px;
        height: 22px;
        color: ${({ theme }) => theme.COLORS.TERTIARY};

        &:hover {
          color: #000;
        }
      }
      & > a:nth-child(4) > svg {
        width: 24px;
        height: 24px;
      }
    }

    @media (max-width: 768px) {
      align-items: center;
      flex-direction: column;

      & > div {
        display: none;
      }
    }
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <span>© Copyright 2024 - Felipe Da Silva</span>
        <div>
          {iconsData.map((icon) => (
            <Link key={icon.id} href={icon.url} target="_blank">
              {icon.icon}
            </Link>
          ))}
        </div>
      </div>
    </StyledFooter>
  );
};
