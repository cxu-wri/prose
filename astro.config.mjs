import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "三绝简",
      defaultLocale: "root",
      locales: {
        root: {
          label: "简体中文",
          lang: "zh-CN",
        },
        // en: {
        //   label: "English",
        //   lang: "en",
        // },
      },
      social: {},
      sidebar: [
        {
          label: "三绝简",
          autogenerate: { directory: "read-review" },
        },
      ],
    }),
  ],
});
