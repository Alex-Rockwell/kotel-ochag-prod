<template>
  <section class="news-page">
    <div class="container page">
      <div class="news-page__img-wrapper">
        <img
          class="news-page__top-img"
          src="../../../assets/images/news/news10.jpg"
          alt="news image"
        />
      </div>
      <h1 class="news-page__title news-page__title--article">Расширяем ассортимент!</h1>
      <p class="news-page__text">
        Рады сообщить Вам приятную новость о расширение модельного ряда газовых
        парапетных котлов ТМ «ОЧАГ» серии КСГЗ «Compact».
      </p>
      <p class="news-page__text">
        С мая 2022 года к покупке доступны котлы ТМ «ОЧАГ» серии КСГЗ «Compact»
        мощностью 7кВт, 10кВт, 12,5кВт, 16кВт, 20кВт оснащенные автоматикой
        безопасности САБК.
      </p>
      <p class="news-page__text">
        Автоматика безопасности САБК производства компании «СервисГаз» давно
        зарекомендовала себя на рынке как одна из самых надежных систем
        безопасности для газового отопительного оборудования.
      </p>
      <p class="news-page__text">
        Преимущества парапетных газовых котлов ТМ «ОЧАГ» серии КСГЗ «Compact» от
        производителя «СервисГаз»:
      </p>
      <ul class="news-page__list">
        <li class="news__page__list-item">Полная энергонезависимость</li>
        <li class="news__page__list-item">КПД не менее 90%</li>
        <li class="news__page__list-item">Компактные габаритные размеры</li>
        <li class="news__page__list-item">
          Простой монтаж (двухстороннее универсальное подключение газа и
          теплоносителя)
        </li>
        <li class="news__page__list-item">
          Закрытая камера сгорания - подача воздуха производится извне,
          благодаря чему в помещении сохраняется благоприятный микроклимат
        </li>
        <li class="news__page__list-item">
          Максимальное рабочее давление теплоносителя 0,2 мПа (кГс/см2)
        </li>
        <li class="news__page__list-item">
          Практичная и безопасная система дымоудаления
        </li>
        <li class="news__page__list-item">
          Удобный контроль горения запальной и основной горелки через смотровое
          окно
        </li>
        <li class="news__page__list-item">
          Возможность эксплуатировать в отопительной системе с естественной и
          принудительной циркуляцией
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useMeta } from "vue-meta";

useMeta({
  title: "Расширяем ассортимент!",
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
