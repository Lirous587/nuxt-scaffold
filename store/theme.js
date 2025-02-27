export const useMyThemeStore = defineStore("myThemeStore", () => {
  const theme = ref("dark");

  const initMode = () => {
    if (localStorage.theme === "dark") {
      darkMode();
    } else {
      lightMode();
    }
  };

  const darkMode = () => {
    // 设置 data-theme 为 dark
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.theme = "dark";
    theme.value = "dark";
  };

  const lightMode = () => {
    // 设置 data-theme 为 light
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.theme = "light";
    theme.value = "light";
  };

  const getMode = () => {
    return theme;
  };

  return {
    theme,
    initMode,
    getMode,
    darkMode,
    lightMode,
  };
});
