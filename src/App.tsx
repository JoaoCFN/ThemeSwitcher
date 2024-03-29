import React from 'react';
// O THEME PROVIDER SERVE PARA RECEBER OS ESTILO DO TEMA E O TORNAREM GLOBAIS
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "./utils/usePersistedState";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toogleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toogleTheme={toogleTheme}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
