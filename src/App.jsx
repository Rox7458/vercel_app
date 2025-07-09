import React from "react";
import AppRouter from "./router/AppRouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { Provider } from "react-redux";
import store from "./app/store";

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
