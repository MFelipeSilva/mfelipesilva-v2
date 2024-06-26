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
    gap: 4em;
    align-items: center;
    justify-content: space-between;

    & > div:nth-child(1) {
      display: flex;
      width: 35vw;
      max-width: 565px;
      gap: 19px;
      padding-bottom: 18em;
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

        & > span {
          font-weight: 600;
          word-wrap: break-word;
        }
      }

      @media (max-width: 1280px) {
        width: 100%;
        padding-bottom: 0;
      }
    }

    & > div:nth-child(2) {
      @media (max-width: 1280px) {
        width: 100%;
      }
    }

    @media (max-width: 1280px) {
      width: 450px;
      gap: 3em;
      align-items: start;
      flex-direction: column;
      justify-content: center;
    }

    @media (max-width: 580px) {
      width: 80vw;
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    height: 100%;
    padding: 6em 0;
    align-items: start;
  }
`;
