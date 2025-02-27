import { defineNuxtPlugin } from "#app";
import { MdPreview } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("MdPreview", MdPreview);
});
