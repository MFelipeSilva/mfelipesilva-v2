import styled from "styled-components";

export const Container = styled.main`
  & {
    display: flex;
    min-height: 700px;
    width: 100%;
    height: 84vh;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    & > section {
      display: flex;
      max-width: 1434px;
      width: 75vw;
      height: 100%;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;

      & > div:nth-child(1) {
        display: flex;
        margin: 1.5em 0;
        align-items: center;
        flex-direction: column;

        & > div:nth-child(1) {
          padding: 1em 0;

          & > h1 {
            font-size: clamp(30px, 3.5vw, 54px);
            color: ${({ theme }) => theme.COLORS.SECONDARY};
            font-weight: 700;
            text-transform: uppercase;
          }

          & > h2 {
            font-size: clamp(26px, 3vw, 47px);
            color: ${({ theme }) => theme.COLORS.SECONDARY};
            font-weight: 200;
          }
        }

        & > div:nth-child(2) {
          width: 305px;
          border-bottom: 2px solid ${({ theme }) => theme.COLORS.SECONDARY};

          @media (max-width: 1280px) {
            width: 70%;
          }

          @media (max-width: 480px) {
            width: 80%;
          }
        }

        & > div:nth-child(3) {
          display: flex;
          gap: 0.5em;
          padding: 1em 0;
          align-items: center;
          justify-content: center;

          & > div > a {
            display: flex;
            width: min-content;
            height: min-content;
            align-items: center;
            justify-content: center;

            & > svg {
              color: ${({ theme }) => theme.COLORS.SECONDARY};
              cursor: pointer;
              transition: color 0.33s ease;

              &:hover {
                color: #7b2cbf;
              }
            }
          }

          @media (max-width: 1024px) {
            & > div:nth-child(1) > a > svg {
              width: 35px;
              height: 35px;
            }
            & > div > a > svg {
              width: 40px;
              height: 40px;
            }
            & > div:nth-child(4) > a > svg {
              width: 43px;
              height: 43px;
            }
          }

          @media (max-width: 520px) {
            & > div:nth-child(1) > a > svg {
              width: 31px;
              height: 31px;
            }
            & > div > a > svg {
              width: 35px;
              height: 35px;
            }
            & > div:nth-child(4) > a > svg {
              width: 38px;
              height: 38px;
            }
          }
        }

        @media (max-width: 768px) {
          width: auto;
        }
      }

      & > img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        scale: 1;
        transition: scale 1s ease-in-out;

        &:hover {
          scale: 1.2;
        }

        @media (max-width: 1440px) {
          width: 45%;
          height: 90%;
        }
      }

      @media (max-width: 1024px) {
        padding: 0;

        & > div {
          display: flex;
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
      }
    }
  }
`;
