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
.swiper {
  width: 100%;
  height: 100%;
  background: #000;
}

.swiper-slide {
  font-size: 18px;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 60px;
}

.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
}

.swiper-slide .title {
  font-size: 41px;
  font-weight: 300;
}

.swiper-slide .subtitle {
  font-size: 21px;
}

.swiper-slide .text {
  font-size: 14px;
  max-width: 400px;
  line-height: 1.3;
}
`;
