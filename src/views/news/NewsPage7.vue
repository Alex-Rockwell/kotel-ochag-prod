<template>
  <section class="news-page">
    <div class="container page">
      <div class="news-page__img-wrapper">
        <img
          class="news-page__top-img"
          src="../../../assets/images/news/news7.png"
          alt="news image"
        />
      </div>
      <h1 class="news-page__title news-page__title--article">
        Семинары в Ставропольском крае и Северокавказском регионе
      </h1>
      <p class="news-page__text">
        Cпециалистами компании ООО «СервисГаз» при поддержке партнера ООО
        «Теплоопт» г. Георгиевск были проведены выездные семинары в АО «Газпром
        газораспределение» по Ставропольскому краю в г.Зеленокумск, г.Пятигорск,
        в компаниях партнерах по Северокавказскому региону в г.Нальчик,
        г.Владикавказ, г.Урус Мартан.
      </p>
      <p class="news-page__text">
        На семинаре были представлены котлы и аппараты торговой марки «Очаг»,
        особенности конструкции, эксплуатационные характеристики, основные
        принципы диагностики и сервисной поддержки.
      </p>
      <p class="news-page__text">
        Подробное внимание было уделено газогорелочным устройствам производства
        компании ООО «СервисГаз», конструктивным особенностям, принципу работы и
        сервисному сопровождению линейки российских газовых блоков от
        производителя.
      </p>
    </div>
  </section>
</template>

<script setup>
import { useMeta } from "vue-meta";

useMeta({
  title: "Семинары в Ставропольском крае и Северокавказском регионе",
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
