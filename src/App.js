import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./Global";
import List from "./components/List";
import Input from "./components/Input";
import ProgressManager from "./components/ProgressManager";
import ThemeToggle from "./components/ThemeToggle";

function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <>
                <GlobalStyles />
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                <Input />
                <List />
                <ProgressManager />
            </>
        </ThemeProvider>
    );
}

export default App;
