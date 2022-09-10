import { createGlobalStyle } from 'styled-components';

import {
  LogoFont,
  RubikBold,
  RubikLight,
  RubikMedium,
  RubikRegular,
} from '@fonts';

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Dancing Script', cursive;
        src: url(${LogoFont}) format('truetype');
        font-weight: 700;
    } 

    @font-face {
        font-family: 'Rubik', sans-serif;
        src: url(${RubikLight}) format('truetype');
        font-weight: 300;
    } 

    @font-face {
        font-family: 'Rubik', sans-serif;
        src: url(${RubikRegular}) format('truetype');
        font-weight: 400;
    } 

    @font-face {
        font-family: 'Rubik', sans-serif;
        src: url(${RubikMedium}) format('truetype');
        font-weight: 500;
    } 

    @font-face {
        font-family: 'Rubik', sans-serif;
        src: url(${RubikBold}) format('truetype');
        font-weight: 700;
    } 
`;
