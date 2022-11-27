<template>
  <section class="container news-page">
    <div class="page">
      <h1 class="news-page__title news-page__title--video">
        Сервисгаз — четверть века на рынке газового отопительного оборудования
      </h1>
      <div class="info__video-wrapper">
        <iframe
          class="info__video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/48MP_odptkA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p class="news-page__text">
        Компании "СервисГаз" исполнилось 26 лет! За эти годы проделана
        колоссальная работа! Группа компаний СервисГаз добилась отличных
        результатов и стала одним из лучших предприятий России в своей отрасли .
        Высокая производительность , энтузиазм и слаженные действия всего
        коллектива вывели группу компаний СервисГаз на первые позиции среди
        производителей отопительной техники! Впереди еще очень много работы и
        новых грандиозных проектов. Мы будем радовать наших партнеров новинками
        надежного и качественного оборудования!
      </p>
    </div>
  </section>
</template>

<script setup>
import { useMeta } from "vue-meta";

useMeta({
  title: "Сервисгаз — четверть века на рынке газового отопительного оборудования",
  keywords: "котел-очаг, официальный сайт",
  htmlAttrs: { lang: "ru", amp: true },
});
</script>

<style lang="scss" scoped>
.page {
  max-width: 900px;
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
  padding-top: 50px;

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
  padding-bottom: 30px;
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
  max-width: 900px;
  padding-bottom: 56.25%;
  height: 0;
  margin-bottom: 30px;
}
.info__video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
