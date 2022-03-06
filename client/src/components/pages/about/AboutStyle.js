import styled from "styled-components"

export const AboutSection = styled.section`
  background-color: ${({ theme }) => theme.colors.black};
  max-width: 1240px;
  margin: auto;
  height: 100%;
  color: ${({ theme }) => theme.colors.blueBgColor};
  position: relative;
  top: 0;
  left: 0;
  -webkit-animation: moveFromBottom 0.5s ease both;
  animation: moveFromBottom 0.5s ease both;
  display: block;
  padding: 60px;
  border-right: 15px solid ${({ theme }) => theme.colors.black};
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behaviour: smooth;
  scrollbar-width: thin; /* "auto" or "thin" */
  scrollbar-color: ${({ theme }) => theme.colors.skyBlue}
    ${({ theme }) => theme.colors.white}; /* scroll thumb and track */

  @media (max-width: 1060px) {
    padding: 60px 30px;
  }

  @media (max-width: 290px) {
    padding: 60px 15px;
  }

  @media (max-width: 1070px) {
    border-right: unset;
    scrollbar-width: none;
    scrollbar-color: none;
  }

  &::-webkit-scrollbar {
    width: 0.2rem !important;
    border-radius: 0.5rem;

    @media (max-width: 1070px) {
      display: none;
    }
  }

  &::-webkit-scrollbar-track {
    margin: 5rem 0;
    border-left: 0.1px solid ${({ theme }) => theme.colors.white};
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.white};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.skyBlue};
    border-radius: 0.5rem;
  }

  @-webkit-keyframes moveFromBottom {
    from {
      -webkit-transform: translateY(100%);
    }
  }
  @keyframes moveFromBottom {
    from {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
  }

  .border-line {
    display: inline-block;
    position: absolute;
    background: 0px 0px;
    width: 110px;
    height: 110px;
    border-top: 3px solid rgb(77, 145, 222);
    border-left: 3px solid rgb(77, 145, 222);
    left: 20px;
    top: 20px;
    z-index: 0;

    @media (max-width: 700px) {
      display: none;
    }
  }

  .content-box {
    display: block;

    .header-content {
      width: 100%;
      padding: 0.5rem 0;
      text-align: center;

      h1 {
        font-size: clamp(2rem, 3.5vw, 3.75rem);
      }
      p {
        text-align: center;
        background-color: ${({ theme }) => theme.colors.skyBlue};
        color: ${({ theme }) => theme.colors.white};
        font-weight: 100;
        font-size: 0.8rem;
        display: inline-block;
        padding: 0.3rem;
      }
    }

    .section-content {
      padding: 1.875rem 0;

      .image-container {
        border-radius: 2px;
        background-image: url("/images/indblack.jpeg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        -webkit-background-size: cover;
        height: 350px;
        text-align: center;

        @media (max-width: 1380px) {
          height: 530px;
        }

        @media (max-width: 800px) {
          display: none;
        }
      }

      .about-text {
        width: 100%;

        h3 {
          color: ${({ theme }) => theme.colors.white};
          margin-bottom: 0.8rem;
          text-align: center;
        }

        p {
          text-align: left;
          font-size: 0.875rem;
          line-height: 1.5;
          color: ${({ theme }) => theme.colors.lightGray};
          font-weight: 100;

          @media (max-width: 290px) {
            font-size: 0.7rem;
          }
        }
      }

      .about-info {
        text-align: left;
        padding: 1rem 0;

        .social-li {
          display: flex;
          align-items: center;

          .socials {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.6rem;

            .github,
            .linkedin {
              padding: 0;
            }

            .social-icon {
              color: ${({ theme }) => theme.colors.lightGray};
              font-size: 25px;
              transition: all 0.3s ease-in-out;

              &:hover {
                color: ${({ theme }) => theme.colors.skyBlue};
              }
            }
          }
        }

        .infos li {
          padding: 0;
          margin: 0 0 1rem 0;

          &:last-child {
            margin: 0;
          }
        }

        .infos {
          padding: 1rem 0;
        }

        .title {
          color: ${({ theme }) => theme.colors.white};
          border-bottom: 3px solid ${({ theme }) => theme.colors.skyBlue};
          font-size: 1rem;
          margin-right: 1rem;

          @media (max-width: 290px) {
            font-size: 0.8rem;
          }

          @media (max-width: 700px) {
            margin-right: 0.2rem;
          }
        }

        .value.email {
          color: ${({ theme }) => theme.colors.skyBlue};
          @media (max-width: 290px) {
            font-size: 0.8rem;
          }
        }

        .value {
          color: ${({ theme }) => theme.colors.lightGray};
          @media (max-width: 290px) {
            font-size: 0.8rem;
          }
        }
      }
    }

    .skills-container {
      padding: 2rem 0;

      .skills-heading {
        display: flex;
        align-items: center;
        width: 100%;

        .skills-h3 {
          margin-right: auto;
          border-left: 3px solid ${({ theme }) => theme.colors.skyBlue};
          display: inline-block;
          color: ${({ theme }) => theme.colors.white};
          font-weight: 100;
          font-size: 1.5rem;
          padding-left: 0.625rem;
        }
      }

      .skills-content {
        margin: 2.5rem 0;

        .skill-icon {
          width: 110px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
`
