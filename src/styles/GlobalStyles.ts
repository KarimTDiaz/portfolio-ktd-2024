import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*,*::after,*::before{
    box-sizing: border-box;
}
img{
	max-width: 100%;
	display: block;
}
ul {
	list-style: none;
	padding-left: 0;
	margin-top: 0;
	margin-bottom: 0;
  }
a {
	text-decoration: none;
	color: inherit;
  }
 
body {
	margin: 0;
    margin-left: auto;
    margin-right: auto;
	font-family: 'grotesk-light', sans-serif;
}

`;
