import * as React from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkToggler() {
  const [isDark, setIsDark] = React.useState(false);

  // Initialize theme on first render – check localStorage or system preference
  React.useLayoutEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const prefersDark =
      !stored && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = stored === "dark" || prefersDark;

    document.documentElement.classList.toggle("dark", initialDark);
    setIsDark(initialDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <div className="fixed z-10 bottom-10 right-10">
      <button
        onClick={toggleTheme}
        aria-live="polite"
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        className="
          group
          inline-flex items-center justify-center
          rounded-full overflow-hidden focus:outline-none
          bg-white/90 dark:bg-gray-800/80
          shadow-lg p-3
          hover:bg-white/100 dark:hover:bg-gray-700/90
          transition-colors duration-200
        "
      >
        <span
          className={`
            block transform transition-transform
            duration-500 ease-out
            ${isDark ? "rotate-360 scale-110" : "rotate-0 scale-100"}
          `}
        >
          {isDark ? <Sun size={24} /> : <Moon size={24} />}
        </span>
      </button>
    </div>
  );
}
