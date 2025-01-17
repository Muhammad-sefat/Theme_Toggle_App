import React, { useContext } from "react";
import { themeContext } from "./ThemeProvider";

const App = () => {
  const { theme, toggleTheme } = useContext(themeContext);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-all duration-500 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <h1 className="text-3xl font-bold mb-8">
        Theme Toggle App ( {theme.toUpperCase()} Mode )
      </h1>
      <div
        className={`w-20 h-8 flex items-center rounded-full p-1 cursor-pointer ${
          theme === "light" ? "bg-gray-300" : "bg-blue-600"
        }`}
        onClick={toggleTheme}
      >
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            theme === "dark" ? "translate-x-11" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default App;
