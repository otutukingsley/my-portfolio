import styled from 'styled-components'

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