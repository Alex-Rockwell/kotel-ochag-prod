<template>
  <div>
    <HomeShopsMap :isMapPage="true"/>
  </div>
</template>

<script setup>
import HomeShopsMap from "../components/HomeShopsMap.vue";
import { useMeta } from "vue-meta";

useMeta({
  title: "Где купить",
  keywords: "котел-очаг, официальный сайт",
  htmlAttrs: { lang: "ru", amp: true },
});
</script>

<style lang="scss" scoped>
.title-main {
  padding-top: 50px;
}
.shops-section {
  background-color: transparent;
}
</style>
