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
    font-family: 'DM Sans', sans-serif;
    font-size: clamp(1rem, 1.2vw, 1rem);
    color:${({ theme}) => theme.colors.darkFont};
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

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
}
.grid-6 {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1.5rem;
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
background-color: ${({ theme }) => theme.colors.black};
color: ${({ theme }) => theme.colors.navColor};

h1{
  color: ${({ theme }) => theme.colors.white}
}

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
    color:${({ theme }) => theme.colors.navColor};
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

export const MainBg = styled.div`
position: relative;
width: 100%;
height: 100%;
padding: 25px 5%;
background-color: ${({ theme}) => theme.colors.white};
background-image: url('/images/main_bg_light.jpg');
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
height: calc(100vh - 67px);
text-align: center;
background-attachment: fixed;
-webkit-background-size: cover;
background-attachment: scroll;
overflow: hidden;
`

export const Intro = styled.section`
text-align: center;
width: 100%;
height: 100%;


.intro-desc{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  .intro-title{
    font-size: clamp(2rem, 6.5vw, 5rem);
    color: ${({ theme }) => theme.colors.skyBlue};
  }

  .sub-title{
    font-weight: normal;
  }
}
`

export const AboutSection = styled.section`
background-color: ${({ theme }) => theme.colors.black};
max-width: 1240px;
margin: auto;
height: 100%;
color: ${({ theme }) => theme.colors.blueBgColor};
position: relative;
top: 0;
left:0;
-webkit-animation: moveFromRight .6s ease both;
animation: moveFromRight .6s ease both;
display: block;
padding: 60px;
border-right: 15px solid ${({ theme }) => theme.colors.black};
overflow-y: auto;
scroll-behaviour: smooth;


&::-webkit-scrollbar{
  width: 0.2rem !important;
  border-radius: 0.5rem;
}

&::-webkit-scrollbar-track{
  margin: 5rem 0;
  border-left: 0.1px solid ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
}

&::-webkit-scrollbar-thumb{
  background-color: ${({ theme }) => theme.colors.skyBlue};
  border-radius: 0.5rem;
}

@-webkit-keyframes moveFromRight {
  from {
      -webkit-transform: translateX(100%)
  }
}

@keyframes moveFromRight {
  from {
      -webkit-transform: translateX(100%);
      transform: translateX(100%)
  }
}

.border-line{
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
}


.content-box{
  display: block;

  .header-content{
    width: 100%;
    padding: .5rem 0;
    text-align: center;

    h1{
      font-size: clamp(2rem, 3.5vw, 3.75rem);
    }
    p{
      text-align: center;
      background-color: ${({ theme }) => theme.colors.skyBlue};
      color: ${({ theme }) => theme.colors.white};
      font-weight: 100;
      font-size: .8rem;
      display: inline-block;
      padding: .3rem;
    }
  }

  .about-content{
    padding: 1.875rem 0;


    .image-container{
      border-radius: 2px;
      background-image: url('/images/selfie.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      -webkit-background-size: cover;
      height: 350px;
      text-align: center;
    }

    .about-text{
      width: 100%;

      h3{
        color: ${({ theme }) => theme.colors.white};
        margin-bottom: .8rem;
        text-align: center;
      }

      p{
        text-align: justify;
        font-size: .875rem;
        line-height: 1.5;
        color: #e5e5e5;
        font-weight: 100;
      }
    }

    .about-info{
      text-align: left;
      padding: 1rem 0;


      .social-li{
        display: flex;
        align-items: center;

        .socials{
          display: flex;
          align-items: center;
          justify-content: center;
          gap: .6rem;

          .github, .linkedin{
            padding: 0;
          }

          .social-icon{
            color:#e5e5e5;
            font-size: 25px;
            transition: all 0.3s ease-in-out;

            &:hover {
              color: ${({ theme }) => theme.colors.skyBlue};
            }
          }
        }
      }

      .infos li{
        padding: 0;
        margin: 0 0 1rem 0;

        &:last-child{
          margin: 0;
        }
      }

      .infos{
        padding: 1rem 0;
      }

      .title{
        color: ${({ theme }) => theme.colors.white};
        border-bottom: 3px solid ${({ theme }) => theme.colors.skyBlue};
        font-size: 1rem;
        margin-right: 1rem;
      }

      .value.email{
        color: ${({ theme }) => theme.colors.skyBlue};
      }

      .value{
        color: #e5e5e5;
      }
    }
  }

  .skills-container{
    // border: 2px solid red;
    padding: 2rem 0;

    .skills-heading{
      display: flex;
      align-items: center;
      width: 100%;

      .skills-h3{
        margin-right: auto;
        border-left: 3px solid ${({ theme}) => theme.colors.skyBlue};
        display: inline-block;
        color: ${({ theme }) => theme.colors.white};
        font-weight: 100;
        font-size: 1.5rem;
        padding-left: 0.625rem;
      }
    }

    .skills-content{
      // border: 2px solid red;
      margin: 2.5rem 0;

      .skill-icon{
        // border: 2px solid #e5e5e5;
        width: 110px;

        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
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

export const ProjectsSection = styled.section`
background-color: ${({ theme }) => theme.colors.white};
color: ${({ theme }) => theme.colors.white};
border: 2px solid red;
-webkit-animation: moveFromLeft .6s ease both;
animation: moveFromLeft .6s ease both;


@-webkit-keyframes moveFromLeft{
  from{
    -webkit-transform:translateX(-100%);
  }
}
@keyframes moveFromLeft{
  from{
    -webkit-transform:translateX(-100%);
    transform:translateX(-100%);
  }
}


.project-wrapper{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  border: 2px solid red;
}

.project-card{
  text-align: center;
  width: 21.875rem;
  border: 2px solid white;
  background-color: ${({ theme}) => theme.colors.bgColor2};
  border-radius: 0.5rem;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  border: 1px solid rgba(20, 23, 55, 0.1);


  .project-pic{
    width: 100%;
    height: 100%;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
    border: 2px solid rgba(20, 23, 55, 0.1);
  }
}
.project-heading{
  color: black;
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 2.5vw, 3.5rem);
  text-align: justify;
  font-size: 1rem
}

.desc{
  text-align: left;
  color: black;

}

.card-header{
  // border: 2px solid red;
}
.card-img-desc{
  border: 2px solid red;
  margin: 1rem;
}
`