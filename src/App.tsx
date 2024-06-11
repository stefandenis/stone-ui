import React from 'react';
import './App.css';
import AppRoutes from "./routes/Routes/Routes";
import {CssBaseline, ThemeProvider} from "@mui/material";
import { darkTheme } from "./theme";
import {ReactQueryProvider} from "./data-access/react-query-provider";
import {setAxiosDefaults} from "./data-access/api";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

setAxiosDefaults()

function App() {
  return (
        <ThemeProvider theme={darkTheme}>
            <ReactQueryProvider>
              <CssBaseline/>
                <ErrorBoundary>
                    <AppRoutes />
                </ErrorBoundary>
            </ReactQueryProvider>
        </ThemeProvider>
  );
}

export default App;
