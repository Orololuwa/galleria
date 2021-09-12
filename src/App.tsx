import { ThemeProvider } from "styled-components";
import { theme } from "theme";
import GlobalStyles from "global";
import Layout from "Layout";
import HomePage from "pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <HomePage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
