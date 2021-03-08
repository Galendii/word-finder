import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


    
    html{
        background:var(--primary-700);
        
    }
    body{
        margin: 0;
        width: 100%;
        height: 100%;
        overflow-x:hidden;
        overflow-y:auto;
        color: var(--dark);
        font-family: var(--text-font);
    }
   
    span{
        color: var(--dark);
        font-family: var(--text-font);
    }
    input,textarea,option{
        font-family: var(--text-font);
        
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s;
    }
    
    
    :root{
        --primary: #2e2e2e;
        --primary-500: #212121;
        --primary-600: #1b1a1a;
        --primary-700: #0c0a0a;
        --secondary: #D6A239;
        --secondary-100: #A57D43;
        --secondary--800:#E0B767;
        --white: #fff;
        --silver:#1F1300;
        --gray: #8E8E8E;
        --dark: #000;
        --light-gray: #f1f1f1;
        --green: #007F00;
        --red: #e02030;
        --pure-red:#ff0000;
        --light-blue: #24C9C3;
        --light-blue-opacity: rgba(36, 201, 195,0.4);
        --dark-blue: #197D87;
        --radius-sm: 4px;
        --radius-md: 12px;
        --radius-lg: 24px;
        --radius-circle: 50%;
        --font-mute: 10px;
        --font-sm: 16px;
        --font-md: 18px;
        --font-lg: 32px;
        --title-font: 'Poppins', sans-serif;
        --text-font: 'Montserrat', sans-serif;

    }
    
`;

export default GlobalStyles;
