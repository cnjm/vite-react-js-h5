import react from "@vitejs/plugin-react-swc";
import { componentResolverPlugin } from "./componentResolver";
import { autoImportPlugin } from "./autoImport";

export function createVitePlugins() {
  const vitePlugins = [react(), componentResolverPlugin(), autoImportPlugin()];

  return vitePlugins;
}
