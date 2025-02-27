<template>
  <div>
    <NavHeader></NavHeader>
    <main>
      <MdEdit :content="markdownContent"></MdEdit>
      <MdView :content="markdownContent"></MdView>
    </main>
  </div>
</template>

<script lang="ts" setup>
const markdownContent = ref(
  "# Hello Markdown\n这是一段示例文本\n[超链接](https://github.com/Lirous587)"
);
const previewTheme = ref("default");
</script>
