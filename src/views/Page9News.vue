<template>
  <section class="news">
    <div class="container">
      <h2 class="company__title">Новости</h2>
      <div class="news__container">
        <HomeNewsItem v-for="el in elements" :key="el.id" :newsElement="el" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { newsData } from "../../assets/newsData";
import { onMounted, ref } from "vue";
import HomeNewsItem from "../components/HomeNewsItem.vue";
import { useMeta } from "vue-meta";

const data = ref([]);
const elements = ref([]);

const getData = () => {
  data.value = newsData;
  elements.value = newsData;
  if (elements.value.length > 4) {
    // elements.value = elements.value.slice(0, 4);
  }
};

onMounted(() => {
  getData();
  // console.log(elements.value);
  useMeta({
    title: "Новости",
    keywords: "котел-очаг, официальный сайт",
    htmlAttrs: { lang: "ru", amp: true },
  });
});
</script>

<style lang="scss" scoped>
.news {
  padding-top: 100px;

  @media (max-width: 450px) {
    padding-top: 30px;
  }
}
.company__title {
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  color: #3c3f47;
  margin-bottom: 20px;
  padding-bottom: 20px;

  @media (max-width: 720px) {
    font-size: 28px;
  }
  @media (max-width: 450px) {
    padding-bottom: 0;
  }
}
.news__container {
  display: grid;
  grid-template: minmax(480px, auto) / repeat(4, 24%);
  grid-auto-rows: minmax(480px, auto);
  column-gap: 20px;
  max-width: 100%;

  @media (max-width: 1200px) {
    grid-template: minmax(100px, auto) / repeat(2, 24%);
    grid-template-columns: repeat(2, 48%);
    grid-auto-rows: minmax(100px, auto);
  }
  @media (max-width: 500px) {
    margin-bottom: 10px;
  }
  @media (max-width: 400px) {
    grid-template: minmax(100px, auto) / repeat(1, 100%);
    grid-template-columns: repeat(1, 100%);
    grid-auto-rows: minmax(100px, auto);
  }
}
.news__link-box {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  margin-bottom: 37px;
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

  span:first-child {
    margin-right: 10px;
    padding-right: 25px;
  }
  span:last-child {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
