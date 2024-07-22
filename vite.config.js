import { defineConfig } from "vite";
import { createVitePlugins } from "./build/plugin/index";
import { resolve } from "path";
const pathResolve = (dir) => {
  // eslint-disable-next-line no-undef
  return resolve(process.cwd(), ".", dir);
};

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: createVitePlugins(),
    build: {
      target: "es2015",
      minify: "esbuild",
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          assetFileNames: "[ext]/[name].[hash].[ext]",
          chunkFileNames: (chunkInfo) => {
            const facadeModuleId = chunkInfo.facadeModuleId
              ? chunkInfo.facadeModuleId.split("/")
              : [];
            const fileName =
              facadeModuleId[facadeModuleId.length - 2] || "[name]";

            return `js/${fileName}/[name].[hash].js`;
          },
        },
      },
    },
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
