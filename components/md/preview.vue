<template>
  <MdPreview
    v-model="content"
    :mdHeadingId="mdHeadingId"
    :theme="theme"
    previewTheme="default"
    codeTheme="atom"
    @onHtmlChanged="onHtmlChanged"
    :autoFoldThreshold="99"
  />
</template>

<script setup>
// import { MdPreview } from "md-editor-v3";
// import "md-editor-v3/lib/preview.css";
import { useMyThemeStore } from "~/store/theme";

const content = defineModel("content", {
  type: String,
  required: true,
});

const props = defineProps({
  previewTheme: {
    type: String,
    required: true,
  },
});

const themeStore = useMyThemeStore();

const anchorIdList = ref([]);

const mdHeadingId = (text, level, index) => {
  const anchorId = `${index}`;
  anchorIdList.value.push(anchorId);
  return anchorId;
};

const anchors = ref([]);

const mdInit = () => {
  anchors.value = [];
  const hList = anchorIdList.value.map((id) => document.getElementById(id));
  anchors.value = Array.from(hList).map((el, index) => ({
    id: anchorIdList.value[index],
    title: el.innerText,
    active: false,
  }));
};

const observerHList = () => {
  const hList = document.body.querySelectorAll("h1, h2, h3, h4, h5, h6");

  const myObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const { id } = entry.target;
        if (entry.isIntersecting) {
          anchors.value.forEach((anchor) => {
            anchor.active = false;
          });
          const anchor = anchors.value.find((item) => item.id === id);
          if (!anchor.active) {
            anchor.active = true;
          }
        }
      });
    },
    {
      rootMargin: "0px 0px -99% 0px",
    }
  );

  hList.forEach((el, index) => {
    myObserver.observe(el);
  });
};

const onHtmlChanged = async () => {
  await nextTick();
  observerHList();
};

const theme = computed(() => themeStore.theme);

// onMounted(async () => {
//   await nextTick();
//   mdInit();
// });

defineExpose({
  anchors,
});
</script>
