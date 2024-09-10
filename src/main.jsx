import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import i18next from "i18next";
import App from "./App.jsx";
import "./index.css";
import "./i18n";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Router>
  </StrictMode>
);
