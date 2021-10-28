import styled from 'styled-components'
import { AboutSection } from '../about/AboutStyle'

export const ProjectsSection = styled(AboutSection)`
.project-container{
  margin: 2rem 0;
  padding: 2rem 0;
}

.project-card{
  border-bottom: 1px solid ${({ theme}) => theme.colors.darkFont};

  &:last-child{
    border-bottom: unset;
  }
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
      color: ${({ theme}) => theme.colors.lightGray};

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