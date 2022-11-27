<template>
  <section class="news-page">
    <div class="container page">
      <div class="news-page__img-wrapper">
        <img
          class="news-page__top-img"
          src="../../../assets/images/news/news4.jpg"
          alt="news image"
        />
      </div>
      <h1 class="news-page__title news-page__title--article">
        СМК «СервисГаз» соответствует стандарту ISO 9001:2015
      </h1>
      <p class="news-page__text">
        Компания «СервисГаз» вновь прошла сертификацию по системе менеджмента
        качества в соответствии с требованиями стандарта ГОСТ Р ИСО 9001-2015
        (ISO 9001:2015).
      </p>
      <p class="news-page__text">
        Наличие сертификата ISO 9001-2015 подтверждает, что система менеджмента
        качества в компании «СервисГаз» соответствует всем законодательным
        требованиям, система управления функционирует на должном уровне и
        постоянно оптимизируется с целью повышения удовлетворенности клиентов и
        развития компании.
      </p>
      <p class="news-page__text">
        Компания уделяет пристальное внимание СМК, которая была внедрена и
        впервые сертифицирована на соответствие требованиям ISO в январе 2011
        года. Ежегодно в компании осуществляются надзорные проверки СМК со
        стороны органа по сертификации, а раз в три года СМК предприятия
        подвергается масштабному аудиту в целях ресертификации.
      </p>
      <p class="news-page__text">
        Прохождение сертификации также свидетельствует о том, что производимое
        компанией оборудование является безопасными, а все осуществляемые
        процессы в организации управляемы и постоянно контролируются.
      </p>
      <a class="news__link-all" href="../../../assets/files/ИСОRU.pdf"
        >Cертификат ИСО RU</a
      >
    </div>
  </section>
</template>

<script setup>
import { useMeta } from "vue-meta";

useMeta({
  title: "СМК «СервисГаз» соответствует стандарту ISO 9001:2015",
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
  max-width: 800px;

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

.news__link-all:active,
.news__link-all:link,
.news__link-all:visited {
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  color: #2cb0ff;
  text-decoration: none;
  position: relative;

  &:hover {
    text-decoration: underline;
  }

  // span:first-child {
  //   margin-right: 10px;
  //   padding-right: 25px;
  // }
  // span:last-child {
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  // }
}
</style>
