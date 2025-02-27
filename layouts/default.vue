<template>
  <div>
    <NavHeader></NavHeader>
    <main>
      <MdEdit></MdEdit>
    </main>
  </div>
</template>

<script lang="ts" setup>
const content = ref(`
 # 标题1
 ## 标题2
`);
</script>
