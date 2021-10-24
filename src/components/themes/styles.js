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
  color: #e5e5e5;
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
  color: ${({ theme}) => theme.colors.white};
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
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1.5rem;

  @media(max-width: 850px){
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    grid-gap: unset;
  }

  @media(max-width: 490px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 290px){
    grid-template-columns: 1fr;
  }
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

@media (max-width: 1070px) {
border-bottom: 1px solid ${({ theme }) => theme.colors.darkFont};
box-shadow: unset;
}

.nav-wrapper{
 max-width: 75.25rem;
 margin: 0 auto;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 1rem 2rem;


 @media(max-width: 290px) {
  width: 100%;
  padding: 1rem;
 }


 .hamburger-btn{
   background: transparent !important;
   border: none !important;
   cursor: pointer !important;
   color: ${({ theme }) => theme.colors.skyBlue};

   &:hover{
    background: transparent !important;
   }
 }

 .nav-heading{
  color: ${({ theme }) => theme.colors.white};


  @media (max-width: 1070px) {
    font-size: 1.3rem;
  }
}

 .navigation{
   display: flex;
   align-items: center;
   justify-content: stretch;
   gap: 1.5rem;

   li {
    position: relative;

    a{
      transition: color .5s ease-in-out;
      &:hover{
        color:${({ theme }) => theme.colors.white};
        border-bottom: 4px solid ${({ theme }) => theme.colors.skyBlue};
      }
    }

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

@media (max-width: 1070px) {
  padding: 0 0;
  height: calc(100vh - 60px);
}
`

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

    .active-mobile{
      color: ${({ theme}) => theme.colors.white}; 
    }
  }
}
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
-webkit-animation: moveFromBottom .5s ease both;
animation: moveFromBottom .5s ease both;
display: block;
padding: 60px;
border-right: 15px solid ${({ theme }) => theme.colors.black};
overflow-y: auto;
scroll-behaviour: smooth;

@media(max-width: 1060px){
padding: 60px 30px;
}

@media(max-width:290px){
  padding:60px 15px;
}

@media(max-width: 1070px){
  border-right: unset;
}


&::-webkit-scrollbar{
  width: 0.2rem !important;
  border-radius: 0.5rem;
  
  @media(max-width: 1070px){
    display: none;
  }
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

@-webkit-keyframes moveFromBottom{
  from{
    -webkit-transform:translateY(100%);
  }
}
@keyframes moveFromBottom{
  from{
    -webkit-transform:translateY(100%);
    transform:translateY(100%);
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


  @media (max-width: 700px){
    display: none;
  }
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

  .section-content{
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


      @media(max-width: 1380px){
        height: 530px;
      }

      @media(max-width:800px){
        display: none;
      }
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

        @media(max-width: 290px){
          font-size: .7rem;
        }
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

        @media(max-width: 290px){
          font-size: .8rem;
        }

        @media(max-width: 700px){
          margin-right: .2rem;
        }
      }

      .value.email{
        color: ${({ theme }) => theme.colors.skyBlue};
        @media(max-width: 290px){
          font-size: .8rem;
        }
      }

      .value{
        color: #e5e5e5;
        @media(max-width: 290px){
          font-size: .8rem;
        }
      }
    }
  }

  .skills-container{
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
      margin: 2.5rem 0;

      .skill-icon{
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

export const ProjectsSection = styled(AboutSection)`
.project-container{
  margin: 2rem 0;
  padding: 2rem 0;
}

.project-card{

  .img-name{

    .project-img-container{
      width: 100%;
      height: auto;
      display: block;

      .project-pic{
        width: 100% !important;
        height: 100%;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
        border-radius: .3rem;
        padding: 0;
        margin: 0;

      }
    }

    .portfolio-heading{
      display: flex;
      align-items: center;
      width: 100%;
      margin-bottom: 1rem;

      .portfolio-h3{
        margin-right: auto;
        border-left: 3px solid ${({ theme}) => theme.colors.skyBlue};
        display: inline-block;
        color: ${({ theme }) => theme.colors.white};
        font-weight: 100;
        font-size: 1.5rem;
        padding-left: 0.625rem;
        text-align: left;


        @media (max-width: 700px) {
          font-size: 1.2rem;
          
        }
      }
    }

    .repo-live{
      width: 100%;
      height: auto;
      padding: 1rem 0;
      display: flex;
      justify-content: space-between;


      a{
        color: ${({ theme }) => theme.colors.white};
        border-bottom: 3px solid ${({ theme }) => theme.colors.skyBlue};
        transition: all 0.3s ease-in-out;

        &:hover{
          color: ${({ theme }) => theme.colors.skyBlue};
          border-bottom: 3px solid ${({ theme }) => theme.colors.white}; 
        }
      }
    }
  }

  .desc{
    padding-top: 2.55rem;
    text-align: left;
    width: 100%;


    @media (max-width: 700px){
      padding-top: 1rem;
    }

    ul{
      list-style: inside;

      li{
        margin-bottom: .2rem;

        &:last-child{
          margin-bottom: unset;
        }
      }
    }

    p, li{
      line-height: 1.4;
      font-size: .875rem;
      color: #e5e5e5;

      @media(max-width: 290px){
        font-size: .8rem;
      }
    }

    #description, #technologies-used{
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 1rem;
      font-weight: 100;
    }

    #description{
      @media(max-width:700px){
        font-size: 1.2rem;
      }
    }

    #technologies-used{
      margin-top: 1rem;

      @media(max-width:700px){
        font-size: 1rem;
      }
    }
  }
}
`

export const ContactSection = styled(AboutSection)` 
.contact-heading{
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;

  .contact-h3{
    margin-right: auto;
    border-left: 3px solid ${({ theme}) => theme.colors.skyBlue};
    display: inline-block;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 100;
    font-size: 1.5rem;
    padding-left: 0.625rem;
  }
}


.form-div{
  max-width: 43.75rem;
  margin: 3rem auto;

  form{
   width: 100%;

   .form-group{
     width: 100%;

      input, textarea{
       width: 100%;
       background-color: transparent;
       color: #e5e5e5;
       outline: none;
       border-radius: none;
       border: 1px solid #555555;
       margin: 1.25rem 0;
       padding: .938rem;
      }
    }
  }

  .btn-container{
    display: flex;
    align-items: center;

    button{
      margin-right: auto;
    }
  }
}
`