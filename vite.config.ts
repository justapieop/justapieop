import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import generouted from "@generouted/react-router/plugin";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), generouted(), babel({ presets: [reactCompilerPreset()] })],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
