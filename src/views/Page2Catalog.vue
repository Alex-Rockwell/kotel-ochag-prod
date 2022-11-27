<template>
  <HomeCatalogSection />
</template>

<script setup>
import HomeCatalogSection from "../components/HomeCatalogSection.vue";
import { useMeta } from "vue-meta";

useMeta({
  title: "Каталог",
  keywords: "котел-очаг, официальный сайт",
  htmlAttrs: { lang: "ru", amp: true },
});
</script>

<style lang="scss" scoped></style>
