import { createGlobalStyle } from 'styled-components';
import colors from './colors';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${colors.primary};
    color: ${colors.secondary};
    font-family: 'Cormorant Garamond', serif;
    font-size: larger;
    letter-spacing: 0.1rem;
  }
`;
 
export default GlobalStyle;