import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 html {
  font-size: medium;
  scroll-behavior: smooth;
  font-family: "Nunito",sans-serif;;
 }
 body{
  background-color: black;
  height: 50vh;
 }


`;

export default Global;
