"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes"

export type Theme = "light" | "dark" | "system";

export const themes: { [key: string]: Theme } = {
  light: "light",
  dark: "dark",
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}