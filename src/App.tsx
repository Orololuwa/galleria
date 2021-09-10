import { ThemeProvider } from "styled-components";
import { theme } from "theme";
import GlobalStyles from "global";
import Layout from "Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <div className="App">My first Typescript Project</div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
