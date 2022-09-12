import { createGlobalStyle } from 'styled-components';

import { colors } from '@styles';

export const GlobalStyles = createGlobalStyle`
    :root {  
        // Colors
        --primary-light: ${colors.primary.light};
        --primary-main: ${colors.primary.main};
        --primary-dark: ${colors.primary.dark};
        --secondary-light: ${colors.secondary.light};
        --secondary-main: ${colors.secondary.main};
        --secondary-dark: ${colors.secondary.dark};
        --error-light: ${colors.error.light};
        --error-main: ${colors.error.main};
        --error-dark: ${colors.error.dark};
        --info-light: ${colors.info.light};
        --info-main: ${colors.info.main};
        --info-dark: ${colors.info.dark};
        --warning-light: ${colors.warning.light};
        --warning-main: ${colors.warning.main};
        --warning-dark: ${colors.warning.dark};
        --success-light: ${colors.success.light};
        --success-main: ${colors.success.main};
        --success-dark: ${colors.success.dark};
        --common-black: ${colors.common.black};
        --common-lt-gray: ${colors.common.lightGray};
        --common-dk-gray: ${colors.common.darkGray};
        --common-white: ${colors.common.white};


        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    :focus {
        outline: transparent;
        box-shadow: 0 0 0 2px var(--primary-color);
    }

    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }   

    html {
        scroll-behavior: smooth;
        font-size: 87.5%; // 14px
        
        @media (min-width: 768px) {
            font-size: 93.75%; // 15px
        }

        @media (min-width: 1200px) {
            font-size: 100%; // 16px
        }
    }

    body {
        background-color: var(--common-lt-gray);
        margin: 0;
        padding: 0;
    }

    body, input, textarea, button {
        color: var(--common-dk-gray);
        font-family: 'Rubik', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 24px;
    }

    h1, h2, h3, h4, h5, h6, strong {
        color: var(--primary-main);
        font-weight: 700;
    } 

    h1 {
        font-family: 'Dancing Script', cursive;
    }

    p {
        color:  var(--secondary-light);
    }

    a {
        color: var(--secondary-main);
        cursor: pointer;
        text-decoration: none;
    }

    button, input, select, textarea {
        appearance: none;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 0;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    input::placeholder {
        color: var(--secondary-light);
    }
`;
