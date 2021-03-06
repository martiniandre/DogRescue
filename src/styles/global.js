import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html,body{
        max-width:100vw;
        min-height:100vh;
    }
    body{
        background: var(--white);
    }
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    *,button,input{
        border:0;
        outline:0;
        border-radius:0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Roboto', sans-serif;
    }
    input{
      border: 1px solid var(--primary);
    }
    a{
        text-decoration:none;
    }
    :root{
        --primary:#5F41B2/* 6273BD  *//* #7e84f3/ *//*  #3700b3  */;
        --secondary: #23036a/* 6273BD *//* 23036a */;
        --ternary: #1871AC;
        --white: #fbfbfb;
        --black: #242423;
    }

    @media(max-width:768px){
      body{
        text-align:center;
      }
    }
`;
