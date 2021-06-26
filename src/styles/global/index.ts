import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 *,*::before, *::after {
    margin: 0px;
    padding: 0px;
    outline: none;
    box-sizing: border-box;
  }

  body {
    width:100%;
    height: 100vh;
    background-color: #000;

    font-family: "Roboto",sans-serif;
    font-size: 2.0em;
    font-weight: 600;
    color: #e2d6ff;
  }

  #root {
    width: 100%;
    height: 100%;
    /* background: linear-gradient(160deg,rgba(130,87,230,0.40) 10%, rgba(4,211,97,0.40) 90%); */
    background-image: url("https://nextlevelweek.com/images/home/hero.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    display:flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }
`
