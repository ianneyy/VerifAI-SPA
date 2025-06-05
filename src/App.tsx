// src/App.tsx
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/theme-provider";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Outlet />
      <Analytics />
      
    </ThemeProvider>
  );
}
