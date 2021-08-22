import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "./core/store/configureStore";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./core/theme";
const store = configureStore();

import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
    </ThemeProvider>
  );

  expect(getByText(/My Favorite List/i)).toBeInTheDocument();
});
