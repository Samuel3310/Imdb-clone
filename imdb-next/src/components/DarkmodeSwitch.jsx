"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const DarkmodeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div>
      {mounted && currentTheme === "dark" ? (
        <MdLightMode
          onClick={() => setTheme("light")}
          className="text-2xl cursor-pointer hover:text-amber-500 mr-2"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme("dark")}
          className="text-2xl cursor-pointer hover:text-amber-500 mr-2"
        />
      )}
    </div>
  );
};

export default DarkmodeSwitch;
