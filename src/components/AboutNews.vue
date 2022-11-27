<template>
  <section class="news">
    <div class="container">
      <h2 class="title-main company__title">Новости</h2>
      <div class="news__container">
        <AboutNewsItem v-for="el in elements" :key="el.id" :newsElement="el"/>
      </div>
      <div class="news__link-box">
        <RouterLink class="news__link-all" to="/news">
          <span>Все новости</span>
          <span>
            <svg
              width="27"
              height="16"
              viewBox="0 0 27 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="#2CB0FF"
            >
              <path
                d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM1 9H26V7H1V9Z"
              />
            </svg>
          </span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>



<script setup>
import { newsData } from "../../assets/newsData";
import { onMounted, ref } from "vue";
import AboutNewsItem from "./AboutNewsItem.vue";

const data = ref([]);
const elements = ref([]);

const getData = () => {
  data.value = newsData;
  elements.value = newsData;
  if (elements.value.length > 4) {
    elements.value = elements.value.slice(0,4)
  }
};

onMounted(() => {
  getData();
  console.log(elements.value);
});
</script>



<style lang="scss" scoped>
.news {
  margin-top: 50px;
  padding-top: 30px;
  padding-bottom: 50px;

  @media (max-width: 450px) {
    margin-top: 20px;
    padding-top: 0;
    padding-bottom: 0;
  }
}
.company__title {
  color: #3c3f47;
  margin-bottom: 20px;
  padding-bottom: 20px;


  @media (max-width: 450px) {
    padding-bottom: 0;
  }
}
.news__container {
  display: grid;
  grid-template: minmax(350px, auto) / repeat(4, 24%);
  grid-auto-rows: minmax(350px, auto);
  gap: 20px;
  margin-bottom: 37px;
  max-width: 100%;

  @media (max-width: 1200px) {
    grid-template: minmax(100px, auto) / repeat(2, 24%);
    grid-template-columns: repeat(2, 48%);
    grid-auto-rows: minmax(100px, auto);
  }
  @media (max-width: 450px) {
    gap: 0;
    margin-bottom: 0;
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
