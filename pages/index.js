import React from 'react';
import Navigation from "../components/Navigation.js";
import Head from 'next/head'
import {createGlobalStyle} from 'styled-components'

const Home = () => {
    return(
        <div>
        <GlobalStyles/>
        <Head>
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap" rel="stylesheet"></link>   
        <link href="https://fonts.googleapis.com/css?family=Ruda&display=swap" rel="stylesheet"></link> 
        <title>Home</title>
        </Head>
        <Navigation/>    
      
       
        </div>
    )
}
const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: Roboto Mono;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
  outline: none;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  line-height: 3;
 
}
a:visited{
    color: tomato;
}
a:hover{
    color: #B10F2E;
}
a:active{
    color: #FDFFFF;
}
body{
    background-color: #570000;
}
nav {
text-transform: uppercase;
 width:100%;
 display: flex;
 
 height: 80px;
 background: #280000;
 color:#FDFFFF;
 text-decoration:none;
 justify-content:center;
 font-family: 'Ruda';
 align-items: center;

 font-size: 2em;
 font-weight: bolder;

}
nav>ul{
    display:flex;
}
nav>ul>li{
    padding:1em;
}
h3{
    
    font-size:2em;
}
`
export default Home;


