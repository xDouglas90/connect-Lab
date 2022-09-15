import { createGlobalStyle } from 'styled-components';

import { colors } from '@styles';
import { setValueByTheme } from '@utils';

export const GlobalStyles = createGlobalStyle`
    :root {  
        // Colors
        --background: ${({ theme }) => theme.colors.background};
        --primary: ${({ theme }) => theme.colors.primary};
        --primary-light: ${colors.primary.light};
        --secondary: ${({ theme }) => theme.colors.secondary};
        --error: ${({ theme }) => theme.colors.error};
        --info: ${({ theme }) => theme.colors.info};
        --warning: ${({ theme }) => theme.colors.warning};
        --success: ${({ theme }) => theme.colors.success};
        --text: ${({ theme }) => theme.colors.text};
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
        box-shadow: 0 0 0 2px var(--primary);
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
        background-color: ${({ theme }) =>
          setValueByTheme(
            theme.title,
            'var(--common-lt-gray)',
            'var(--common-black)'
          )};
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

    :focus {
        border-radius: inherit;
        box-shadow: none;
        border: none;
        outline: 1px solid var(--primary); 
    }

    h1, h2, h3, h4, h5, h6, strong {
        color: var(--primary);
        font-weight: 700;
    } 

    h1 {
        font-family: 'Dancing Script', cursive;
    }

    p, span {
        color:  var(--text);
    }

    a {
        color: var(--secondary);
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
        color: var(--secondary);
    }

    ul {
        list-style: none;
    }
`;
