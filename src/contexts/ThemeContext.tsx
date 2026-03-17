import {
  useState,
  createContext,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { THEME_KEY } from "../config/localStorageKeys";

const THEME_CHOICES = ["light", "dark"] as const;
type ThemeChoice = (typeof THEME_CHOICES)[number];

const DEFAULT_THEME: ThemeChoice = "light";

const isThemeChoice = (value: any): value is ThemeChoice => {
  return THEME_CHOICES.includes(value);
};

interface ThemeContextValue {
  theme: ThemeChoice;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const getLSTheme = (): ThemeChoice => {
  const lsRecord = localStorage.getItem(THEME_KEY);
  return isThemeChoice(lsRecord) ? lsRecord : DEFAULT_THEME;
};

const setLSTheme = (theme: ThemeChoice) => {
  return localStorage.setItem(THEME_KEY, theme);
};

const setDOMTheme = (theme: ThemeChoice) => {
  THEME_CHOICES.forEach((themeChoice) => {
    document.documentElement.classList.remove(`theme-${themeChoice}`);
  });

  document.documentElement.classList.add(`theme-${theme}`);
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeChoice>(getLSTheme);
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === THEME_KEY && isThemeChoice(event.newValue)) {
        setTheme(event.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    setDOMTheme(theme);
    setLSTheme(theme);
  }, [theme]);

  const contextValue: ThemeContextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
