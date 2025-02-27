import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  // 使用 UMD 全局变量注册 MdPreview 组件
  if (window.MdEditorV3 && window.MdEditorV3.MdPreview) {
    nuxtApp.vueApp.component("MdPreview", window.MdEditorV3.MdPreview);
  }
});
