import AutoImport from "unplugin-auto-import/vite";

export const autoImportPlugin = () => {
  return AutoImport({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.md$/, // .md
    ],
    imports: [
      // presets
      "react",
      "react-router-dom",
      // custom
      {
        // "/@/hooks/web/useMessage": ["useMessage"],
      },
    ],
    eslintrc: {
      enabled: true,
      globalsPropValue: true,
    },
  });
};
