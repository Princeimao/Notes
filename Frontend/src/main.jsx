import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import QueryProvider from "./hooks/QueryProvider.jsx";
import { Provider } from "react-redux";
import { store } from "./context/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </QueryProvider>
  </Provider>
);
