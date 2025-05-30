import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
            root.classList.add("dark");
            setIsDark(true);
        } else {
            root.classList.remove("dark");
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        const root = window.document.documentElement;
        const newTheme = isDark ? "light" : "dark";

        if (newTheme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        localStorage.setItem("theme", newTheme);
        setIsDark(!isDark);
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="text-2xl transition-transform duration-300 hover:scale-110 p-2"
        >
            <i className={`fas ${isDark ? "fa-sun text-white" : "fa-moon text-blue-500"}`}></i>
        </button>
    );
}
