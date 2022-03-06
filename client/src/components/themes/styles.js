import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
.Toastify__toast-theme--colored.Toastify__toast--info {
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.skyBlue};
  border-radius: unset;
}

.Toastify__toast-container {
  top: 15%;
  right: 12%;
}

html{
    scroll-behaviour: smooth;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'DM Sans', sans-serif;
    font-size: clamp(1rem, 1.2vw, 1rem);
    color:${({ theme }) => theme.colors.darkFont};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
a{
    text-decoration: none;
}

ul{
    list-style:none;
}

img{
  width: 100%;
  height: 100%;
}

.btn{
  padding: .5rem .8rem;
  font-size: .9rem;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 100;
}

.btn-primary{
  background-color: ${({ theme }) => theme.colors.skyBlue};
  color: ${({ theme }) => theme.colors.white};
}

.btn-outline-primary{
  background-color: transparent;
  color: ${({ theme }) => theme.colors.lightGray};
  border: 2px solid ${({ theme }) => theme.colors.skyBlue};
  font-weight: 100;
  transition: all 0.3s ease-in-out;

  @media(max-width: 290px){
    font-size: .8rem;
  }

  &:hover{
    background-color: ${({ theme }) => theme.colors.skyBlue};
    color: ${({ theme }) => theme.colors.white};
  }
}

.btn-cap{
  text-transform: uppercase;
}

.btn-bold{
  font-weight: bold;
}

.grid-1-2{
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1.5rem;

  @media(max-width: 1380px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 800px){
    grid-template-columns: 1fr;
    
  }
}


.active{
  border-bottom: 4px solid ${({ theme }) => theme.colors.skyBlue};
  color: ${({ theme }) => theme.colors.white};
}

.inactive{
  color:${({ theme }) => theme.colors.navColor};
}


.a-grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;

  @media(max-width: 1380px){
    grid-template-columns: 1fr;
    grid-gap: unset;
  }
}

.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.5rem;

  @media(max-width: 920px){
    grid-template-columns: 1fr;
    grid-gap: unset;
  }
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
}
.grid-6 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  place-items: center;
  grid-gap: 1.5rem;
}
`
