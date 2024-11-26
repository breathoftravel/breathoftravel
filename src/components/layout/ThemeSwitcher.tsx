"use client";
import React from "react";
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch";
import { SunIcon, MoonIcon } from "lucide-react";
import { themes } from "@/providers/ThemeProvider";

const ThemeSwitcher: React.FC = () => {
    const { setTheme, theme } = useTheme()

    return (
        <div className="flex items-center gap-2">
                    <SunIcon className="h-5 w-5" />
                    <Switch
                        id="theme-mode"
                        aria-label={`Toggle ${theme} mode`}
                        checked={theme === themes.dark}
                        onCheckedChange={(checked: boolean) => setTheme(checked ? themes.dark : themes.light)}
                    />
                    <MoonIcon className="h-5 w-5" />
                </div>
    );
};

export default ThemeSwitcher;
