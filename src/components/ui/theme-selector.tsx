import * as React from "react";
import { Moon, Sun, Eye, Palette } from "lucide-react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { useTheme } from "../theme-provider";
import type { Theme } from "../theme-provider";

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  const themes = [
    {
      name: "Light",
      value: "light",
      icon: Sun,
      label: "Light theme",
    },
    {
      name: "Dark",
      value: "dark",
      icon: Moon,
      label: "Dark theme",
    },
    {
      name: "High Contrast",
      value: "high-contrast",
      icon: Eye,
      label: "High contrast theme",
    },
    {
      name: "Color Blind - Deuteranopia",
      value: "deuteranopia",
      icon: Palette,
      label: "Optimized for red-green color blindness",
    },
    {
      name: "Color Blind - Protanopia",
      value: "protanopia",
      icon: Palette,
      label: "Optimized for red-green color blindness (protanopia)",
    },
    {
      name: "System",
      value: "system",
      icon: Palette,
      label: "System theme",
    },
  ];

  const currentTheme = themes.find((t) => t.value === theme) || themes[0];
  const Icon = currentTheme.icon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-9 px-0">
          <Icon className="h-4 w-4" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.value}
            onClick={() => setTheme(t.value as Theme)}
          >
            <t.icon className="mr-2 h-4 w-4" />
            {t.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
