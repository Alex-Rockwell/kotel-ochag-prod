<template>
  <section class="news-page">
    <div class="container page">
      <div class="news-page__img-wrapper">
        <img
          class="news-page__top-img"
          src="../../../assets/images/news/news5.jpg"
          alt="news image"
        />
      </div>
      <h1 class="news-page__title news-page__title--article">
        Стань участником наших семинаров, оставив заявку на сайте
      </h1>
      <p class="news-page__text">
        Если Вы заинтересованы в том, чтобы Ваши специалисты получили полную и
        доступную информацию по нашему оборудованию, свяжитесь с нами любым
        удобным для Вас способом:
      </p>
      <p class="news-page__text">
        Телефоны: 8 (8422) 25-03-48, 8 (8422) 25-03-49;
      </p>
      <p class="news-page__text">
        E-Mail: <a href="mailto:kotel@sgaz.ru">kotel@sgaz.ru</a>
      </p>
      <p class="news-page__text">
        Или можете оставить заявку на нашем сайте котел-очаг.рф в разделе
        «Гарантия и сервис».
      </p>
      <p class="news-page__text">
        Компания «СервисГаз» всегда открыта для взаимного информационного
        сотрудничества со своими партнёрами.
      </p>
    </div>
  </section>
</template>

<script setup>
import { useMeta } from "vue-meta";

useMeta({
  title: "Стань участником наших семинаров, оставив заявку на сайте",
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
  max-width: 1000px;

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
