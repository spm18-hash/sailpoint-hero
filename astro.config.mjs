// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: "Poppins",
      provider: fontProviders.google(),
      cssVariable: "--font-sans",
      weights: [400, 500, 600],
      formats: ["woff2"],
    },
  ],
});
