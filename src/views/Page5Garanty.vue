<template>
  <section class="garanty-page">
    <GarantyHeader />
    <GarantyVideo />
    <GarantyFoto />
    <LibraryComponent />
    <GarantyMap id="garantyMap" />
  </section>
</template>

<script setup>
import GarantyMap from "../components/GarantyMap.vue";
import GarantyHeader from "../components/GarantyHeader.vue";
import GarantyVideo from "../components/GarantyVideo.vue";
import GarantyFoto from "../components/GarantyFoto.vue";
import LibraryComponent from "../components/LibraryComponent.vue";
import { useMeta } from "vue-meta";

useMeta({
  title: "Гарантия и сервис",
  keywords: "котел-очаг, официальный сайт",
  htmlAttrs: { lang: "ru", amp: true },
});
</script>

<style lang="scss" scoped>
.garanty-page {
  padding-bottom: 100px;
}
</style>
