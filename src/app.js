import React from "react";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Routes from "./routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#282c33",
    },
    secondary: {
      main: "#eded26",
    },
  },
});

const { store, persistor } = configureStore();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <NavBar />
              <Routes />
            </BrowserRouter>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
