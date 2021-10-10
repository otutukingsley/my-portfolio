import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html{
    scroll-behaviour: smooth;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Overpass', sans-serif;
    font-size: clamp(1rem, 1.2vw, 2rem);
    color:${({ theme}) => theme.colors.darkFont};
}
a{
    text-decoration: none;
}

ul{
    list-style:none;
}

.btn{
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.5rem;
}

.btn-primary{
  background-color: ${({ theme }) => theme.colors.skyBlue};
  color: ${({ theme }) => theme.colors.white};
}

.btn-cap{
  text-transform: uppercase;
}

.btn-bold{
  font-weight: bold;
}
`

export const Container = styled.div`
max-width: 75.25rem;
margin: 0 auto;
padding: 2rem;
width: 100%;
height: 100%;
`


export const Nav = styled.nav`
position: sticky;
top: 0;
left: 0;
right:0;
z-index: 10;
box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
background-color: ${({ theme }) => theme.colors.white};

.nav-wrapper{
 max-width: 75.25rem;
 margin: 0 auto;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 1rem 2rem;

 .navigation{
   display: flex;
   align-items: center;
   justify-content: stretch;
   gap: 1.5rem;

   a{
    color:${({ theme }) => theme.colors.darkFont};
   }

   li {
    position: relative;
    &:after {
        content: '';
        display: block;
        padding-top: 0.188rem;
        margin: auto;
        height: .05rem;
        width: 0px;
        background: transparent;
        transition: width .5s ease, background-color .5s ease;
      }

      &:hover:after {
        width: 100%;
        background:${({ theme }) => theme.colors.skyBlue} ;
      }
    }
  }
}
`

export const Intro = styled.section`
background-color: ${({ theme}) => theme.colors.white};
height: 91vh;
text-align: center;


.intro-desc{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75%;
  gap: 1.6rem;

  .intro-title{
    font-size: clamp(2rem, 8.5vw, 7rem);
  }

  .sub-title{
    font-weight: normal;
  }
}
.more{
  margin: 2rem 0;
}
`

export const AboutSection = styled.section`
background-color: ${({ theme }) => theme.colors.skyBlue};
padding: 1rem 0;
width: 100%;
text-align: center;
color: ${({ theme }) => theme.colors.blueBgColor};

.about-title{
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(1.5rem, 2.5vw, 3.5rem);
  padding: 1rem 0 0 0;
}
.about-lead{
  font-size: clamp(.8rem, 2vw, 1rem);
  padding: 0 0 1rem 0;
}
.about-text{
  text-align: justify;
  padding: 1rem 0;
  font-size: 1rem;
  line-height: 1.5;
}
`

export const SkillsSection = styled.section`
width: 100%;
text-align: center;
padding: 1.5rem 0;


.skills-header{
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 2.5vw, 3.5rem);
}

.skills-wrapper{
  width: 100%;
  text-align: center;
  margin: 2.5rem auto;

  img{
    padding: 1.25rem;
  }

  .icon{
    width: 11.875rem;
    height: 11.25rem;
  }

  .icon-card {
    background-color: ${({ theme}) => theme.colors.bgColor2};
    border-radius: 0.5rem;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
    padding: 1.25rem;
    margin: 0.625rem;
    cursor: pointer;
    transition: all .3s ease-out;

    &:hover {
      transform: translateY(-2px);
    }
  }
}
`