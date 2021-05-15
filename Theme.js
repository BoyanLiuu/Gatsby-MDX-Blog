import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        box-sizing: border-box;
        font-size: 62.5%;
        --very-dark-blue-color: hsl(219, 29%, 14%);
        --dark-grey-color: hsl(214, 17%, 51%);
        --dark-grey-opacity-color: hsla(214, 17%, 51%,0.2);
        --violet-color: hsl(235, 69%, 61%);
        --very-light-violet-color: rgba(89, 100, 224, 0.1);
        --half-light-violet-color: rgba(89, 100, 224, 0.4);
        --light-violet-color: hsl(235,82%,77%);
        --card-content-color: hsl(214,17%,51%);
        --scroll-bar-color: rgba(70, 70, 207, 0.6);
        --hovered-scroll-bar-color: rgba(70, 70, 207, 1);
    }
    *,
    ::before,
    ::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    body{
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        overflow-y: scroll;
    }
    p {
        line-height:1.75;
        color: rgba(0, 0, 0, 0.8);
    }
    h2{
        font-size:2.4rem;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
        margin-top: 2.8rem;
        margin-bottom: 2rem;
        line-height: 1.5;
        color: rgb(1, 1, 1);
    }
    a {
        text-decoration: none;
    }
`
