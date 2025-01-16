'use client'

import { useTheme } from 'next-themes'
import React, { useEffect , useState } from 'react'
import { MdLightMode } from "react-icons/md";
import { BiMoon } from "react-icons/bi";


export default function DarkMode() {
    const { theme, setTheme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const currentTheme = theme === 'system' ? systemTheme : theme

    useEffect(() => setMounted(true), [])
  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            className="hover:text-rose-500 text-xl"
            onClick={() => setTheme("light")}
          />
        ) : (
          <BiMoon
            className="hover:text-rose-500 text-xl"
            onClick={() => setTheme("dark")}
          />
        ))}
    </div>
  );
}
