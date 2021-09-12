import { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "theme";
import GlobalStyles from "global";
import Layout from "Layout";
import { Switch, Route } from "react-router-dom";
import routes from "routes";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => (
              <Route
                path={route.path}
                exact={route.exact}
                key={idx}
                component={route.component}
              />
            ))}
          </Switch>
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
