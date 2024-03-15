import styled from "styled-components";

import {
  IconEmail,
  IconGithub,
  IconLinkedin,
  IconInstagram,
} from "@/components/icons";

export const StyledFooter = styled.footer`
  display: flex;
  position: absolute;
  width: 100%;
  height: 4em;
  bottom: 0;
  align-items: center;
  justify-content: center;

  & > div {
    display: flex;
    width: 75vw;
    justify-content: space-between;

    & > span {
      font-size: 14px;
      font-weight: 300;
    }

    & > div {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;

      & > div:nth-child(1) > svg {
        width: 25px;
        height: 25px;
      }
      & > div > svg {
        cursor: pointer;
        width: 22px;
        height: 22px;
        color: #343a40;

        &:hover {
          color: #000;
        }
      }
      & > div:nth-child(4) > svg {
        width: 23.5px;
        height: 23.5px;
      }
    }

    @media (max-width: 768px) {
      gap: 10px;
      align-items: center;
      flex-direction: column;
    }
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <span>© Copyright 2024 - Felipe Da Silva</span>
        <div>
          <div>
            <IconEmail />
          </div>
          <div>
            <IconGithub />
          </div>
          <div>
            <IconLinkedin />
          </div>
          <div>
            <IconInstagram />
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};
