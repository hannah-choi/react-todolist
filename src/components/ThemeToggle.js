import React from "react";

export default function ThemeToggle({ toggleTheme }) {
    return (
        <div className="toggleContainer">
            Light{" "}
            <label className="switch">
                <input
                    type="checkbox"
                    className="checkbox"
                    id="checkbox"
                    onClick={() => toggleTheme()}
                />
                <span className="slider round" />
            </label>{" "}
            Dark
        </div>
    );
}
