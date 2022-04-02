import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {
        //Colors
        --background-color: #fff;
        --text-color: #000;
        --secondary-color: #9CA8B4;
        --border-color: #2B333B;
        --top-nav-color: #fff;
        --system-gray3: #C7C7CC;
        --system-gray: #8E8E93;

        //Sizes
       --icon-font-size: 24px;

        
        //Sizes
        --header-height: 44px;
        
        @media (prefers-color-scheme: dark) {   
        --background-color: #0E141A;
        --text-color: #fff;
        --secondary-color: #9CA8B4;
        --border-color: #2B333B;
        --active-green: #00A907;
        --top-nav-color: #0B1014;
        --system-gray3: #48484A;
        --system-gray: #8E8E93;
        --blue: #0A84FF;
        --velvet: #5E5CE6;
        --error: #FF453A;
}
    }

    body {
        background-color: var(--background-color);
        color: var(--text-color);
        font-family: -apple-system, BlinkMacSystemFont,"Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
        height: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
    }
`;
export default GlobalStyles;
