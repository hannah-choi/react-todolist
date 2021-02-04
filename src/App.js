import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./Global";
import Input from "./components/Input";
import List from "./components/List";
import ThemeToggle from "./components/ThemeToggle";

function App() {
    // const [darkMode, setDarkMode] = useState(getInitialMode);
    // useEffect(() => {
    //     localStorage.setItem("dark", JSON.stringify(darkMode));
    // }, [darkMode]);

    // function getInitialMode() {
    //     const isReturningUser = "dark" in localStorage;
    //     const savedMode = JSON.parse(localStorage.getItem("dark"));
    //     const userPreferesDark = getUserPreference();

    //     if (isReturningUser) {
    //         //if the user visited this page before
    //         return savedMode;
    //     } else if (userPreferesDark) {
    //         // if the user's browser has preference
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // function getUserPreference() {
    //     if (!window.matchMedia) return;
    //     return window.matchMedia("(prefers-color-scheme: dark)").matches;
    // }

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
                <List />
            </>
        </ThemeProvider>
    );
}

export default App;
