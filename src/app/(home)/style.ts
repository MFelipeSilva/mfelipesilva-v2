import styled from "styled-components";

export const Container = styled.main`
  & {
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    & > section {
      display: flex;
      width: 75vw;
      max-width: 1434px;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;

      & > div {
        display: flex;
        margin: 1.5em 0;
        align-items: center;
        flex-direction: column;

        & > div:nth-child(1) {
          padding: 1em 0;

          & > h1 {
            font-size: clamp(40px, 4vw, 55px);
            color: #000;
            font-weight: 700;
            text-transform: uppercase;
          }

          & > h2 {
            font-size: clamp(22px, 2.5vw, 32px);
            font-weight: 300;
          }
        }

        & > div:nth-child(2) {
          width: 305px;
          border-bottom: 2px solid #000000;
        }

        & > div:nth-child(3) {
          display: flex;
          gap: 0.5em;
          padding: 1em 0;
          align-items: center;
          justify-content: center;

          & > div > svg {
            color: #000;
            cursor: pointer;
            transition: color 0.33s ease;

            &:hover {
              color: #7b2cbf;
            }
          }
        }
      }

      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }

      @media (max-width: 1600px) {
        img {
          width: 430px;
        }
      }

      @media (max-width: 1440px) {
        width: 85vw;
      }

      @media (max-width: 1024px) {
        padding: 0;

        & > div {
          display: flex;

          & > div:nth-child(2) {
            width: 255px;
          }

          & > div:nth-child(3) {
            & > svg:nth-child(1) {
              width: 47px;
            }
            & > svg {
              width: 40px;
            }
            & > svg:nth-child(4) {
              width: 43px;
            }
          }
        }

        img {
          width: 320px;
        }
      }

      @media (max-width: 768px) {
        width: 80vw;

        img {
          display: none;
        }
      }

      @media (max-width: 520px) {
        width: 80vw;

        & > div {
          & > div:nth-child(2) {
            width: 50vw;
          }

          & > div:nth-child(3) {
            & > svg:nth-child(1) {
              width: 40px;
            }
            & > svg {
              width: 35px;
            }
            & > svg:nth-child(4) {
              width: 38px;
            }
          }
        }
      }
    }
  }
`;
