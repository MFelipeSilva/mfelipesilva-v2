import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  min-height: 843px;
  width: 100%;
  height: 100%;
  padding: 6em 0;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  & > section {
    display: flex;
    max-width: 920px;
    gap: 19px;
    flex-direction: column;

    & > h1 {
      font-size: clamp(25px, 3vw, 35px);
      color: #000;
      font-weight: 700;

      text-transform: uppercase;
    }

    & > div {
      display: grid;
      gap: 2em;
      grid-template-columns: repeat(2, 1fr);

      @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }

    @media (max-width: 1440px) {
      width: 65vw;
    }

    @media (max-width: 768px) {
      width: 75vw;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    display: block;
    position: absolute;
    inset: 0px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.55s ease;

    @media (max-width: 768px) {
      height: 350px !important;
    }
  }

  &:hover::after {
    opacity: 1;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    filter: blur(0);
    transition: filter 0.55s ease;
  }

  &:hover > img {
    filter: blur(5px);
  }

  &:nth-of-type(1),
  &:nth-of-type(4),
  &:nth-of-type(5) {
    height: 460px;
  }

  &:nth-of-type(2),
  &:nth-of-type(3),
  &:nth-of-type(6) {
    height: 420px;
  }

  & > div {
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    gap: 1.5em;
    z-index: 1;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.1s ease;

    &:hover {
      opacity: 1;
    }

    & > h2 {
      text-align: center;
      color: #fff;
      font-size: 30px;

      @media (max-width: 480px) {
        font-size: 25px;
      }
    }

    & > a {
      display: flex;
      color: #fff;
      gap: 0.3em;
      padding: 0.8em 2em;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      background-color: #000;
      border: none;
      outline: none;
      font-weight: 300;
      text-decoration: none;

      @media (max-width: 480px) {
        font-size: 14px;
        padding: 0.6em 1.5em;

        & > svg {
          width: 16px;
          height: 16px;
        }
      }
    }

    & > p > a {
      display: flex;
      gap: 0.1em;
      color: #fff;
      align-items: center;
      font-size: 14px;
      font-weight: 300;
      text-underline-offset: 4px;

      & > svg {
        animation: forward 0.5s infinite alternate;
      }

      @media (max-width: 480px) {
        font-size: 13px;

        & > svg {
          width: 26px;
          height: 26px;
        }
      }
    }

    & > div {
      display: flex;
      width: 100%;
      gap: 0.5em;
      position: absolute;
      bottom: 20px;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      & > div {
        display: flex;

        & > span {
          width: 100%;
          color: #fff;
          padding: 4px 8px;
          font-size: 12px;
          font-weight: 300;
          border-radius: 8px;
          background-color: #7b2cbf;

          @media (max-width: 480px) {
            font-size: 10px;
            padding: 3px 6px;
          }
        }
      }
    }

    @media (max-width: 480px) {
      width: 90%;
    }
  }

  @keyframes forward {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(3px);
    }
  }

  @media (max-width: 1280px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    height: 350px !important;
  }
`;
