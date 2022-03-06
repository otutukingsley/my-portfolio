import styled from "styled-components"

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.navColor};

  @media (max-width: 1070px) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkFont};
    box-shadow: unset;
  }

  .nav-wrapper {
    max-width: 75.25rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2.2rem;

    @media (max-width: 290px) {
      width: 100%;
      padding: 1rem;
    }

    .hamburger-btn {
      background: transparent !important;
      border: none !important;
      cursor: pointer !important;
      color: ${({ theme }) => theme.colors.skyBlue};

      &:hover {
        background: transparent !important;
      }
    }

    .nav-heading {
      color: ${({ theme }) => theme.colors.white};

      @media (max-width: 1070px) {
        font-size: 1.3rem;
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      justify-content: stretch;
      gap: 1.5rem;

      li {
        position: relative;
        a {
          transition: color 0.5s ease-in-out;
          display: block;
          width: 100%;
          &:hover {
            color: ${({ theme }) => theme.colors.white};
            border-bottom: 4px solid ${({ theme }) => theme.colors.skyBlue};
          }
        }
      }
    }
  }
`
