import styled from 'styled-components'

export const MobileMenu = styled.div`
position: absolute;
left: 0;
width: 17rem;
height:100%;
background-color: ${({ theme }) => theme.colors.black};
color: ${({ theme }) => theme.colors.blueBgColor};
transform: ${({ menu }) => menu ? "translateX(0%)" : "translateX(-100%)"};
transition: all 0.5s ease-in-out;
z-index: 1000;
box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
-webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
-moz-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);



@media (min-width: 1070px) {
transform: translateX(-100%);
 }

 .mobile-ul{
  display: flex;
  flex-direction: column;
  height: 100%;

  .mobile-list{
    width: 100%;
    margin: auto 0;
  }

  li{
    border-top: 1px solid ${({ theme}) => theme.colors.darkFont};
    border-bottom: 1px solid ${({ theme}) => theme.colors.darkFont};
    margin: 1rem 0;
    padding: 1.25rem;

    &:hover a{
      color: ${({ theme}) => theme.colors.white};
    }

    .mobile-links{
      color:${({ theme }) => theme.colors.navColor};

      &:hover{
        color: ${({ theme}) => theme.colors.white};
        
      }
    }

    .link-div{
      border: 2px soild red;
    }
    .active-mobile{
      color: ${({ theme}) => theme.colors.white}; 
    }
  }
}
`