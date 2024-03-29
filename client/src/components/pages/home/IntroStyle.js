import styled from 'styled-components'
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

  .resume-btn{
    margin-top: 15px;
    cursor: pointer;
  }
}
`

export const Container = styled.div`
max-width: 75.25rem;
margin: 0 auto;
padding: 2rem;
width: 100%;
height: 100%;

.home-socials {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 15px;

  .github,
  .linkedin {
    padding: 0;
  }

  .social-icon {
    color: ${({ theme }) => theme.colors.darkFont};
    font-size: 25px;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.skyBlue};
    }
  }
}
`