import { createContext, useState } from "react";

const ThemeContext = createContext({});

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState("darkblue");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };
