import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import ThemeProvider from "./context/themecontext/themeprovider";

const Persistor = persistStore(store);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={Persistor}>
          <App />
        </PersistGate>
      </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
