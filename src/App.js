import { useEffect, useState } from "react";
import Input from "./components/Input";
import List from "./components/List";

function App() {
    const [darkMode, setDarkMode] = useState(getInitialMode);
    useEffect(() => {
        localStorage.setItem("dark", JSON.stringify(darkMode));
    }, [darkMode]);

    function getInitialMode() {
        const isReturningUser = "dark" in localStorage;
        const savedMode = JSON.parse(localStorage.getItem("dark"));
        const userPreferesDark = getUserPreference();

        if (isReturningUser) {
            //if the user visited this page before
            return savedMode;
        } else if (userPreferesDark) {
            // if the user's browser has preference
            return true;
        } else {
            return false;
        }
    }

    function getUserPreference() {
        if (!window.matchMedia) return;
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    return (
        <div className={darkMode ? "App dark-mode" : "App light-mode"}>
            <div className="toggleContainer">
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={() => setDarkMode(prevMode => !prevMode)}
                        className="checkbox"
                        id="checkbox"
                    />
                    <span className="slider round" />
                </label>
            </div>
            <List />
        </div>
    );
}

export default App;
