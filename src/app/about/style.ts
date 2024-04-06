import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  min-height: 843px;
  width: 100%;
  height: 84vh;
  gap: 4em;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  & > section {
    display: flex;
    max-width: 1243px;
    width: 65vw;
    height: 100%;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;

    & > div:nth-child(1) {
      display: flex;
      width: 29.6vw;
      max-width: 565px;
      gap: 19px;
      flex-direction: column;

      & > h1 {
        font-size: clamp(25px, 3vw, 35px);
        color: ${({ theme }) => theme.COLORS.SECONDARY};
        font-weight: 700;
        text-transform: uppercase;
      }
      & > p {
        color: ${({ theme }) => theme.COLORS.SECONDARY};
        font-size: clamp(14px, 3vw, 16px);
        font-weight: 300;
      }

      & > div:nth-child(3) {
        display: flex;
        width: 100%;
        gap: 70px;
        margin-left: 20px;
        flex-direction: row;
        justify-content: flex-start;

        div > {
          display: flex;
          flex-direction: column;
        }
      }

      & > div > div > p {
        display: list-item;
        color: ${({ theme }) => theme.COLORS.SECONDARY};
        font-size: clamp(14px, 3vw, 16px);
        font-weight: 300;
      }

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    & > div:nth-child(2) {
      & > img {
        pointer-events: none;
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }

      @media (max-width: 1440px) {
        width: 45%;
        height: 45%;
      }

      @media (max-width: 768px) {
        width: 301px;
        height: 379px;
      }
    }

    @media (max-width: 1220px) {
      width: 70vw;
    }

    @media (max-width: 768px) {
      width: 80vw;
      gap: 2.5em;
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    height: 100%;
    padding: 6em 0;
  }
`;
