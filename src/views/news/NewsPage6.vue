<template>
  <section class="news-page">
    <div class="container page">
      <div class="news-page__img-wrapper">
        <img
          class="news-page__top-img"
          src="../../../assets/images/news/news6.jpg"
          alt="news image"
        />
      </div>
      <h1 class="news-page__title news-page__title--article">
        Выездной технический семинар в рамках программы «Обучение специалистов»
        г. Махачкала
      </h1>
      <p class="news-page__text">
        Совсем недавно специалисты ООО «СервисГаз» провели выездной семинар в
        рамках программы партнерства с ООО «Горизонт М» в г. Махачкала
      </p>
      <p class="news-page__text">
        На семинаре совместно с компаниями ООО «ПК Контур» г. Заречный, ПГ ROYFL
        THERMO г.Краснодар, SFA RUS г.Москва , представляющими компоненты к
        системам отопления, специалистами ООО «СервисГаз» были представлены
        котлы и аппараты торговой марки «Очаг». Часть семинара была посвящана
        теме: "Устройство, принцип работы и особенности сервисного сопровождения
        газогорелочных устройств производства компании «СервисГаз».
      </p>
    </div>
  </section>
</template>

<script setup>
import { useMeta } from "vue-meta";

useMeta({
  title: "Выездной технический семинар в рамках программы «Обучение специалистов»",
  keywords: "котел-очаг, официальный сайт",
  htmlAttrs: { lang: "ru", amp: true },
});
</script>

<style lang="scss" scoped>
.page {
  max-width: 1200px;
  margin: auto;
}
.news-page {
  padding-bottom: 100px;
}
.news-page__img-wrapper {
  margin-top: 30px;
  max-width: 600px;
  height: auto;
}
.news-page__top-img {
  width: 100%;
  height: 100%;
}
.news-page__title {
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  color: #3c3f47;

  @media (max-width: 720px) {
    font-size: 28px;
  }
}
.news-page__title--article {
  padding-top: 30px;
  padding-bottom: 30px;
}
.news-page__title--video {
  padding-top: 50px;
}
.news-page__text {
  margin-bottom: 10px;
  line-height: 1.6;
}
.news-page__list {
  padding-left: 20px;
}
.news__page__list-item {
  margin-bottom: 10px;
}
.info__video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  margin-bottom: 20px;
}
.info__video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
