import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Start from "./components/Start";
import Menu from "./components/Menu";
import { styleReset } from "react95";
import { createGlobalStyle, ThemeProvider } from "styled-components";

/* Pick a theme of your choice */
import original from "react95/dist/themes/original";
import rainyDay from "react95/dist/themes/rainyDay";
import matrix from "react95/dist/themes/matrix";
import Meme from "./components/Meme";

/* Original Windows95 font (optional) */
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import { useState } from "react";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

/* Original Windows95 font (optional) */

function App() {
  const [color, setcolor] = useState(rainyDay);
  const change = (c, b) => {
    const matrixbg = document.getElementById("bod");
    matrixbg.style.background = `url(${b})`;
    matrixbg.style.backgroundSize = "cover";
    setcolor(c);
  };
  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={color}>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route exact path="/home" element={<Home change={change} />} />
          <Route exact path="/meme" element={<Meme />} />
        </Routes>
        <Menu />
      </ThemeProvider>
    </div>
  );
}

export default App;
