import { defineConfig } from "vite";
import { createVitePlugins } from "./build/plugin/index";
import { resolve } from "path";
const pathResolve = (dir) => {
  return resolve(process.cwd(), ".", dir);
};

// https://vitejs.dev/config/
export default defineConfig((command, mode) => {
  return {
    plugins: createVitePlugins(),
    resolve: {
      // 别名
      alias: [
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve("src") + "/",
        },
      ],
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true, // 支持内联 JavaScript
          modifyVars: {
            // 更改主题
          },
        },
      },
    },
  };
});
