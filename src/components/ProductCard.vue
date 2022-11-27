<template>
  <div class="product">
    <div class="product__top-box">
      <RouterLink :to="`/catalog/${product.seoTitle}`">
        <div class="product__img-box">
          <img :src="imgSource" :alt="product.title" class="product__img" />
        </div>
      </RouterLink>
      <div class="product__textbox">
        <h3 class="product__name">
          <span class="product__title">{{ product.shortTitle }}</span>
          <span class="product__feature2">{{ product.price }} ₽</span>
        </h3>
        <p class="product__description">{{ product.shortTypeName }}</p>
        <p class="product__description">
          {{ product.power }} кВт / {{ product.space }} м<sup>2</sup>
        </p>
      </div>
    </div>
    <!-- <div class="product__bottom-box">
      <div class="bottom-box-l">
        <button @click="openModal" class="product__btn-order">Заказать</button>
        <RouterLink class="product__link" to="/contacts" target="_blank"
          >Где купить?</RouterLink>
      </div>
      <div class="bottom-box-r">
        <p class="product__price">{{ product.price }} &#8381;</p>
      </div>
    </div> -->
    <div v-if="product.hitSign" class="hitSign">Хит</div>
    <ModalBuyProduct v-if="isOpen" v-model:show="isOpen" :product2="product2" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import ModalBuyProduct from "./ModalBuyProduct.vue";

const props = defineProps(["product"]);
const isOpen = ref(false);

// const openModal = () => {
//   isOpen.value = true;
// };
const imgSource = "../../" + props.product.image;
</script>

<style lang="scss" scoped>
.product {
  min-width: fit-content;
  max-width: 325px;
  max-height: 550px;
  position: relative;

  @media (max-width: 700px) {
    max-width: 250px;
    max-height: 500px;
  }
  @media (max-width: 390px) {
    padding: 5px 15px 10px;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
}
.product__top-box {
  background-color: #f9f9f9;
  padding: 20px;
  padding-top: 5px;
  padding-bottom: 10px;
  transition: 0.3s ease;
  max-width: 100%;
  &:hover {
    background-color: #00b2f6;

    & .product__description,
    & .product__feature2,
    & .product__title {
      color: #fff;
    }
  }
}
.product__bottom-box {
  padding: 20px;
  padding-top: 15px;
  max-width: 100%;
  display: flex;
  align-items: flex-start;
}
.bottom-box-l {
  margin-right: auto;
}
.bottom-box-l {
  margin-right: auto;
}
.product__price {
  font-size: 24px;
  color: #00b2f6;

  @media (max-width: 600px) {
    font-size: 20px;
  }
  @media (max-width: 510px) {
    font-size: 16px;
  }
}
.product__btn-order {
  display: block;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #00b2f6;
  border-radius: 50px;
  color: #00b2f6;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 5px;
  transition: 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: #00b2f6;
    color: #fff;
  }
  @media (max-width: 520px) {
    font-size: 12px;
  }
}
.product__link {
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #00b2f6;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 520px) {
    font-size: 12px;
  }
}
.product__img-box {
  max-width: 200px;
  max-height: 400px;
  margin: auto;
  display: block;

  @media (max-width: 1370px) {
    max-width: 128px;
  }

  @media (max-width: 440px) {
    // max-height: 130px;
  }
  @media (max-width: 370px) {
    // max-height: 130px;
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

  @media (max-width: 550px) {
    max-height: 250px;
  }
  @media (max-width: 370px) {
    // max-height: 130px;
  }
}
.product__name {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: -10px;
  & *:first-child {
    margin-right: auto;
  }
  @media (max-width: 1370px) {
    margin-top: 10px;
    margin-bottom: -5px;
  }
  @media (max-width: 1250px) {
    flex-direction: column;
    align-items: flex-start;
  }
}
.product__title {
  font-size: 24px;
  font-weight: 400;
  line-height: 41px;
  letter-spacing: 0em;
  text-align: left;

  @media (max-width: 1700px) {
    font-size: 20px;
  }
  @media (max-width: 1370px) {
    font-size: 18px;
    line-height: 18px;
  }
  @media (max-width: 680px) {
    font-size: 20px;
    font-weight: 400;
    // line-height: 25px;
  }
  @media (max-width: 440px) {
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
  }
  @media (max-width: 420px) {
    margin-top: 15px;
  }
  @media (max-width: 340px) {
    font-size: 14px;
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
    // font-size: 8px;
    // font-weight: 400;
    // line-height: 8px;
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
.product__feature2 {
  font-size: 17px;
  font-weight: 700;
  line-height: 22px;
  color: #00b2f6;

  @media (max-width: 1370px) {
    font-size: 13px;
  }
  @media (max-width: 680px) {
    font-size: 12px;
    line-height: 25px;
  }
}
.hitSign {
  position: absolute;
  top: 3%;
  left: 6%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  padding: 5px 10px;
  border-radius: 0 0 5px 5px;
}

// .product__description--2 {
//   display: inline-block !important;
// }
</style>
