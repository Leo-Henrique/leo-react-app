import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
        </ThemeProvider>
    );
}
