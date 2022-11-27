<template>
  <div id="aboutPage" class="aboutPage">
    <AboutInfo2 />
    <AboutCompany2 id="aboutCompany" />
    <AboutPartners id="aboutPartners" />
    <HomeNews />
  </div>
</template>

<script setup>
import AboutPartners from "../components/AboutPartners.vue";
import AboutInfo2 from "../components/AboutInfo2.vue";
import AboutCompany2 from "../components/AboutCompany2.vue";
import HomeNews from "../components/HomeNews.vue";
import { useMeta } from "vue-meta";

useMeta({
  title: "О компании",
  keywords: "котел-очаг, официальный сайт",
  htmlAttrs: { lang: "ru", amp: true },
});
</script>

<style lang="scss" scoped>
.aboutPage {
  @media (max-width: 440px) {
    margin-top: -30px !important;
  }
}
</style>
