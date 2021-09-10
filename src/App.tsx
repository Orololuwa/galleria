import { ThemeProvider } from "styled-components";
import { theme } from "theme";
import GlobalStyles from "global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">My first Typescript Project</div>
    </ThemeProvider>
  );
}

export default App;
