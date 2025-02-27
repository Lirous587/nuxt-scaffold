// filepath: /e:/0.web/nuxt-scaffold/plugins/md-editor.client.ts
import { defineNuxtPlugin } from "#app";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("MdEditor", MdEditor);
});
