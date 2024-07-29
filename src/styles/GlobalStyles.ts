import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from '../providers/ThemeProvider';

export const GlobalStyles = createGlobalStyle`

@font-face {
	font-family:'teka-regular' ;
	src: url('/assets/fonts/KHTekaTRIAL-Regular.woff');
}
@font-face {
	font-family:'teka-medium' ;
	src: url('/assets/fonts/KHTekaTRIAL-Medium.woff');
}
@font-face {
	font-family:'telegraf-regular' ;
	src: url('/assets/fonts/PPTelegraf-Regular.otf');
}
@font-face {
	font-family:'acma-light' ;
	src: url('/assets/fonts/PPAcma-Light.otf');
}


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
	font-family: 'teka-regular', sans-serif;
	background-color: ${ThemeProvider.colors.core.primary};
 
}

`;
