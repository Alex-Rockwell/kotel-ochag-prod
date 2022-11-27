<template>
  <RouterLink
    v-if="newsElement.newsLink"
    class="news__item"
    :to="newsElement.newsLink"
     
  >
    <div class="news__item-img">
      <img :src="newsElement.newsImg" alt="" />
    </div>
    <div class="news__item-text">
      <h6 class="news__item-text__title">{{ newsElement.newsTitle }}</h6>
      <p class="news__item-text__description">
        {{ newsElement.newsText }}
      </p>
    </div>
  </RouterLink>
  <a
    v-if="newsElement.externalLink"
    class="news__item"
    href="https://www.youtube.com/channel/UCilXY6MBNQs4yiVbLFiONaQ"
     
  >
    <div class="news__item-img">
      <img :src="newsElement.newsImg" alt="" />
    </div>
    <div class="news__item-text">
      <h6 class="news__item-text__title">{{ newsElement.newsTitle }}</h6>
      <p class="news__item-text__description">
        {{ newsElement.newsText }}
      </p>
    </div>
  </a>
</template>

<script setup>
defineProps(["newsElement"]);
// const src = props.newsElement.newsImg
</script>

<style lang="scss" scoped>
.news__item {
  max-width: 400px;
  max-height: 100%;
  position: relative;
  transition: all 0.7s;
  display: flex;
  flex-direction: column;
  // margin-bottom: 20px;
  cursor: pointer;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    margin-bottom: 0;
  }
}

.news__item:hover::before {
  transform: scale(1);
}

.news__item-img {
  max-width: 100%;
  height: 220px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 385px;
  flex-shrink: 1;
  overflow: hidden;
  
  @media (max-width: 1400px) {
    height: 185px;
  }

  @media (max-width: 790px) {
    flex-shrink: 1;
    max-width: 100%;
    height: 115px;
  }
  @media (max-width: 450px) {
    height: auto;
  }
}

.news__item-img img {
  transition: transform 0.7s;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
}

.news__item:hover .news__item-img img {
  transform: scale(1.1);
}

.news__item-text {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-basis: auto;
  max-width: 100%;

  @media (max-width: 1050px) {
    padding-left: 20px;
  }
  @media (max-width: 900px) {
    padding-left: 0;
  }
}

.news__item-text__title {
  font-size: 20px;
  line-height: 1.4;
  font-weight: 700;
  margin-bottom: 20px;
  @media (max-width: 520px) {
    line-height: 1.5;
    margin-bottom: 10px;
    font-size: 20px;
  }
}

.news__item-text__description {
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: 10px;
  @media (max-width: 1400px) {
    line-height: 1.4;
    margin-bottom: 10px;
    font-size: 12px;
  }
  @media (max-width: 520px) {
    line-height: 1.4;
    margin-bottom: 10px;
    font-size: 14px;
  }
}

.news__link {
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 520px) {
    line-height: 1.1;
    margin-bottom: 10px;
    font-size: 13px;
  }
}

a,
a > span {
  position: relative;
  color: inherit;
  text-decoration: none;
  line-height: 24px;
}
a:before,
a:after,
a > span:before,
a > span:after {
  content: "";
  position: absolute;
  transition: transform 0.5s ease;
}

.hover-3 {
  display: inline-flex;
  padding-top: 10px;
  padding-bottom: 5px;
  overflow: hidden;
}
.hover-3:before {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #636363;
  transform: translateX(-100%);
}
.hover-3:hover:before {
  transform: translateX(0);
}
</style>
