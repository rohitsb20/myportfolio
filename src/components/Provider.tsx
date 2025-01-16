"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

export default function Provider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="text-black dark:text-white dark:bg-black min-h-screen select-none transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
}
