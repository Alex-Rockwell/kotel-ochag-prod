<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} | Котел-Очаг` : `Котел-Очаг`
    }}</template>
  </metainfo>
  <div id="anchor" style="position: absolute; top: -100px; left: 0"></div>
  <Header2 />
  <RouterView />
  <Footer />
</template>

<script setup>
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
import Header2 from "./components/Header2.vue";
import { useMeta } from "vue-meta";

useMeta({
  title: "",
  description: "Газовые котлы Очаг",
  keywords: "котел-очаг, официальный сайт",
  htmlAttrs: { lang: "ru", amp: true },
});
</script>

<style lang="scss">
:root {
  --swiper-theme-color: #d1d1d1 !important;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #3c3f47;
  padding-top: 80px;
  overflow-x: hidden;
}
@-moz-document url-prefix() {
  body {
    font-family: sans-serif;
  }
}
.container {
  max-width: 1704px;
  margin: auto;

  @media (max-width: 1919px) {
    padding-left: 80px;
    padding-right: 80px;
  }

  @media (max-width: 1599px) {
    padding-left: 25px;
    padding-right: 25px;
  }
  @media (max-width: 1439px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (max-width: 767px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: 575px) {
    padding-left: 20px;
    padding-right: 20px;
  }
}
.title-1 {
  font-size: 36px;
  font-weight: 700;
  line-height: 47px;
  letter-spacing: 0em;
  text-align: left;
}
.title-2 {
  font-size: 24px;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: left;
}
.title-main {
  font-size: 36px;
  line-height: 1.5;
  font-weight: 700;

  @media (max-width: 1440px) {
    font-size: 32px;
  }
  @media (max-width: 720px) {
    font-size: 28px;
  }
  @media (max-width: 450px) {
    font-size: 28px;
  }
  @media (max-width: 350px) {
    font-size: 20px;
    word-wrap: break-word;
  }
}
.text-main {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
.centered {
  text-align: center;
}
.mt-50 {
  margin-top: 50px;
}
.mt-20 {
  margin-top: 20px;
}
.mb-37 {
  margin-bottom: 37px;
}
.mb-30 {
  margin-bottom: 30px;
}

.page {
  min-height: 60vh;
}

.container2 {
  margin-left: 107px;
  margin-right: 111px;
  padding: 0;
  max-width: 1702px;
  width: auto;
  @media (max-width: 1919px) {
    margin-left: 80px;
    margin-right: 80px;
  }
  @media (max-width: 1600px) {
    margin-left: 25px;
    margin-right: 25px;
  }
  @media (max-width: 1439px) {
    margin-left: 50px;
    margin-right: 50px;
  }
  @media (max-width: 991px) {
    margin-left: 30px;
    margin-right: 30px;
  }
  @media (max-width: 767px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (max-width: 575px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (max-width: 1600px) {
    margin-left: 25px;
    margin-right: 25px;
  }
  @media (max-width: 1600px) {
    margin-left: 25px;
    margin-right: 25px;
  }
  @media (max-width: 1600px) {
    margin-left: 25px;
    margin-right: 25px;
  }
}

// swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal
// swiper-pagination-bullet swiper-pagination-bullet-active
.swiper-wrapper {
  position: relative;
}
.swiper-pagination-horizontal {
  left: 50%;
}
.swiper {
  position: relative;
}
.swiper-pagination {
  position: absolute;
  z-index: 510 !important;
  bottom: 0;
  left: 55%;
  transform: translateX(-50%);
  @media (max-width: 1600px) {
    display: none !important;
  }
}
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 0 !important;
  left: 50% !important;
  max-width: 21.5vw !important;
  background-color: rgba(255, 255, 255, 0.5) !important;
  transform: translate(-50%);
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 5px;
}
.swiper-pagination span {
  border-radius: 50px;
  height: 10px;
  width: 10px;
  background-color: rgb(128, 128, 128);
  @media (max-width: 800px) {
    background-color: transparent;
  }
}
.swiper-pagination span.swiper-pagination-bullet-active {
  background-color: rgb(255, 0, 0);
  @media (max-width: 800px) {
    background-color: transparent;
  }
}

.swiper-button-prev {
  padding-left: 20px;
  @media (max-width: 650px) {
    // display: none !important;
    // color: transparent !important;
  }
}

.swiper-button-next {
  padding-right: 20px;
  @media (max-width: 650px) {
    // display: none !important;
  }
}
</style>
