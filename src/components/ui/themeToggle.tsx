import { useEffect, useState } from "react";

// Import dos ícones BoxIcons via CDN ou use SVG inline
// Aqui vou usar SVG inline para não depender de libs externas

export default function ThemeToggle() {
    // Estado para modo dark ativo ou não
    const [isDark, setIsDark] = useState(false);

    // Ao montar o componente, verificar se o modo dark está ativo no localStorage ou no sistema
    useEffect(() => {
        // Primeiro verifica o localStorage
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        } else if (storedTheme === "light") {
            document.documentElement.classList.remove("dark");
            setIsDark(false);
        } else {
            // Sem preferência no storage: verifica preferência do sistema
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (prefersDark) {
                document.documentElement.classList.add("dark");
                setIsDark(true);
            }
        }
    }, []);

    // Função para alternar tema
    function toggleTheme() {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDark(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        }
    }

    return (
        <button
            onClick={toggleTheme}
            aria-label="Alternar tema claro/escuro"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            title="Alternar tema claro/escuro"
        >
            {isDark ? (
                // Ícone Sol (modo dark está ativo, clique para modo claro)
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 0v2M12 22v2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M0 12h2M22 12h2M4.22 19.78l1.42-1.42M16.36 7.64l1.42-1.42" />
                </svg>
            ) : (
                // Ícone Lua (modo claro está ativo, clique para modo escuro)
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79z" />
                </svg>
            )}
        </button>
    );
}
