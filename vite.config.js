import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import Vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [Vue({ include: [/\.vue$/] }), tailwindcss(), vueDevTools()],
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`
    }
  }
});
