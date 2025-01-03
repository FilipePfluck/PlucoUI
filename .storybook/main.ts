import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";
import { isCssProperty } from '../styled-system/jsx'

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {},
  webpackFinal: async (config) => {
    //@ts-ignore
    config.resolve.modules = [
      path.resolve(__dirname, ".."),
      path.resolve(__dirname, "..", "src"),
      "node_modules",
    ]

    //@ts-ignore
    config.resolve.alias = {
      //@ts-ignore
      ...config.resolve.alias,
      "@/hooks": path.resolve(__dirname, "../src/hooks"),
      "@/utils": path.resolve(__dirname, "../src/utils"),
      "@/panda": path.resolve(__dirname, "../panda"),
      "@/components": path.resolve(__dirname, "../src/components"),
      "@/styled-system": path.resolve(__dirname, "../styled-system"),
      '@/pluco': path.resolve(__dirname, "../src/pluco.ts"),
      "@/": path.resolve(__dirname, "../src")
    };

    return config;
  }
};
export default config;