<template>
  <div class="product">
    <RouterLink :to="`/catalog/${product.id}`"  target="_blank">
      <div class="product__img-box" >
        <img
          src="../../assets/images/kotel_product_Img_1.png"
          :alt="product.title"
          class="product__img"
        />
      </div>
    </RouterLink>
    <h3 class="product__title">{{ product.shortTitle }}</h3>
    <p class="product__description">{{ product.typeName }}</p>
    <p class="product__description">{{ product.feature1 }}</p>
    <p class="product__subtitle">{{ product.feature2 }}</p>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
defineProps(["product"]);


</script>

<style lang="scss" scoped>
.product {
  max-width: 325px;
  max-height: 480px;
  background-color: #F9F9F9;
  padding: 15px 35px 30px;
  transition: 0.3s ease;

  &:hover {
    background-color: #0d6efd;
    color: #fff;
  }

  @media (max-width: 440px) {
    padding: 15px 15px 30px;
  }
  @media (max-width: 390px) {
    padding: 5px 15px 10px;
  }
}
.product__img-box {
  max-width: 280px;
  max-height: 273px;
  margin: auto;
  display: block;

  @media (max-width: 440px) {
    max-height: 130px;
  }
  @media (max-width: 370px) {
    max-height: 130px;
  }
}
.product__img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: auto;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 440px) {
    max-height: 150px;
  }
}
.product__title {
  font-size: 34px;
  font-weight: 400;
  line-height: 41px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 20px;

  @media (max-width: 680px) {
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
  }
  @media (max-width: 440px) {
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
  }
}
.product__description {
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 5px;

  @media (max-width: 680px) {
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
  }
  @media (max-width: 370px) {
    font-size: 8px;
    font-weight: 400;
    line-height: 8px;
  }
}
.product__subtitle {
  font-size: 23px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 15px;

  @media (max-width: 680px) {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
  }
  @media (max-width: 390px) {
    margin-top: 5px;
  }
}
</style>
