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
 }
 body{
  background-color: black;
  height: 50vh;
 }


`;

export default Global;
