import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const defaultConfig = {
  mode: "jit",
  plugins: [vue()],
  root: "frontend/",
  build: {
    write: true,
    manifest: true,
    emptyDir: true,
  },
  server: {
    watch: {
      usePolling: true,
    },
    cors: true,
    strictPort: true,
    port: 80,
    // proxy: {
    //   "^/api/": {
    //     target: "http://localhost:81",
    //     ws: true,
    //   },
    // },
  },
};

export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      ...defaultConfig,
    };
  } else {
    return {
      ...defaultConfig,
      base: "/dist/",
    };
  }
});
