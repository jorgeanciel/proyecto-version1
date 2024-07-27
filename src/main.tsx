import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";
import { ThemeProvider } from "@/components/core/theme-provider/theme-provider";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { createTheme } from "./styles/theme/create-theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssVarsProvider theme={createTheme()}>
      <RouterProvider router={router} />
    </CssVarsProvider>
  </React.StrictMode>
);
