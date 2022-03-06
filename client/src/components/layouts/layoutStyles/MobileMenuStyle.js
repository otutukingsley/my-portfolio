import styled from "styled-components"

export const MobileMenu = styled.div`
  position: absolute;
  padding: 2rem 0;
  left: 0;
  width: 17rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.blueBgColor};
  transform: ${({ menu }) => (menu ? "translateX(0%)" : "translateX(-100%)")};
  transition: all 0.5s ease-in-out;
  z-index: 1000;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);

  @media (min-width: 1070px) {
    transform: translateX(-100%);
  }

  .mobile-ul {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    height: 100%;

    .mobile-img-container {
      border-radius: 50%;
      width: 160px;
      margin: 1rem auto;
    }

    .mobile-img {
      width: 100%;
      border-radius: 50%;
      object-fit: cover;
    }

    .mobile-list {
      width: 100%;
      margin: 2rem auto;
    }

    li {
      border-top: 1px solid ${({ theme }) => theme.colors.darkFont};
      border-bottom: 1px solid ${({ theme }) => theme.colors.darkFont};
      margin: 1rem 0;

      .mobile-links {
        color: ${({ theme }) => theme.colors.navColor};
        display: block;
        padding: 1.25rem;

        &:hover {
          color: ${({ theme }) => theme.colors.white};
          border-left: 2px solid ${({ theme }) => theme.colors.skyBlue};
        }
      }

      .active-mobile {
        color: ${({ theme }) => theme.colors.white};
        border-left: 2px solid ${({ theme }) => theme.colors.skyBlue};
      }
    }
  }
`
