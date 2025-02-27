<template>
  <div>
    <div
      class="mr-2 flex justify-center items-center rounded-full"
      @click="changeMode"
    >
      <div v-if="themeStore.theme === 'dark'">黑夜</div>
      <div v-else>白天</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMyThemeStore } from "~/store/theme";

const themeStore = useMyThemeStore();

const changeMode = () => {
  themeStore.theme === "light" ? themeStore.darkMode() : themeStore.lightMode();
};
</script>
