import styled from 'styled-components'
import { AboutSection } from '../about/AboutStyle'


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
       color: ${({ theme}) => theme.colors.lightGray};
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