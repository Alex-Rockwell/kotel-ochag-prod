<template>
  <section class="news-page">
    <div class="container page">
      <div class="news-page__img-wrapper">
        <img
          class="news-page__top-img"
          src="../../../assets/images/news/news3.jpg"
          alt="news image"
        />
      </div>
      <h1 class="news-page__title news-page__title--article">Увеличенная гарантия на продукцию «СервисГаз» до 5 лет!</h1>
      <p class="news-page__text">
        Напольное газовое оборудование ТМ «Очаг» отвечает высшим стандартам качества! Мы уверены в качестве нашей продукции! 
      </p>
      <p class="news-page__text">
        Успешный опыт продаж и положительные отзывы потребителей позволяют с радостью сообщить Вам об увеличении гарантийного периода.
      </p>
      <p class="news-page__text">
        Теперь на все котлы серии «Премиум» и «Стандарт» с автоматикой САБК Вы получаете  5 лет гарантии – причем бесплатно*!!!
      </p>
      <p class="news-page__text">
        *Более подробно можно ознакомиться в руководстве по эксплуатации
      </p>

    </div>
  </section>
</template>

<script setup>
import { useMeta } from "vue-meta";

useMeta({
  title: "Увеличенная гарантия на продукцию «СервисГаз» до 5 лет!",
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
  max-width: 900px;

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
