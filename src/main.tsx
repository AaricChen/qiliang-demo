import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Toast from "./components/Toast.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={4}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      autoHideDuration={3000}
      Components={{
        default: Toast,
        error: Toast,
        success: Toast,
        warning: Toast,
        info: Toast,
      }}
    >
      <CssBaseline />
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);
