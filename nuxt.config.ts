import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/md-editor-v3@5.3.2/lib/style.css",
        },
        // 添加预览样式
        {
          rel: "stylesheet",
          href: "https://unpkg.com/md-editor-v3@5.3.2/lib/preview.css",
        },
      ],
      script: [
        {
          src: "https://unpkg.com/md-editor-v3@5.3.2/lib/umd/index.js",
          defer: true,
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ],
  ],
});
