import vitePluginImp from "vite-plugin-imp";

export const componentResolverPlugin = () => {
  return vitePluginImp({
    libList: [
      {
        libName: "antd-mobile",
        libDirectory: "es/components",
        style(name) {
          return `antd-mobile/es/components/${name}/${name}.css`;
        },
      },
    ],
  });
};
