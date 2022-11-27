<template>
  <section class="boiler container" id="homeBoiler">
    <h1 v-if="width > 575" class="title-main mb centered">
      Бытовые отопительные котлы Очаг
    </h1>
    <h1 v-if="width < 575" class="title-main mb centered">
      Бытовые отопительные котлы
    </h1>
    <ul class="tabheader">
      <li
        class="tabheader__item"
        :class="{ activeType: activeType == 1 }"
        @click="activeType = 1"
      >
        <span class="tabheader__title">Стандарт</span>
        <span class="tabheader__description">стальные газовые котлы</span>
      </li>
      <li
        class="tabheader__item"
        :class="{ activeType: activeType == 2 }"
        @click="activeType = 2"
      >
        <span class="tabheader__title">Премиум</span>
        <span class="tabheader__description">стальные газовые котлы</span>
      </li>
      <li
        class="tabheader__item"
        :class="{ activeType: activeType == 3 }"
        @click="activeType = 3"
      >
        <span class="tabheader__title">Премиум EN</span>
        <span class="tabheader__description">стальные газовые котлы</span>
      </li>
      <li
        class="tabheader__item"
        :class="{ activeType: activeType == 4 }"
        @click="activeType = 4"
      >
        <span class="tabheader__title">КЧГ EN</span>
        <span class="tabheader__description">чугунные газовые котлы</span>
      </li>
      <li
        class="tabheader__item"
        :class="{ activeType: activeType == 5 }"
        @click="activeType = 5"
      >
        <span class="tabheader__title">Парапетные</span>
        <span class="tabheader__description">стальные газовые котлы</span>
      </li>
    </ul>

    <!-- ////////////////////////// > 1200 ///////////////////////////////// -->

    <div class="boiler-container">
      <div class="boiler-container-part1">
        <h2 class="boiler__title">{{ filteredElement.shortTypeName }}</h2>
        <p class="text-main">
          {{ filteredElement.description }}
        </p>
        <span class="boiler__filter-text">{{ filterRange }} м&sup2;</span>
        <span class="boiler__filter-text2"
          >Площадь отапливаемого помещения</span
        >
        <div class="range-container">
          <input
            type="range"
            :min="minRange"
            :max="maxRange"
            v-model="filterRange"
          />
          <div class="range-values">
            <span class="min-range">{{ minRange }} м2</span>
            <span class="max-range">{{ maxRange }} м2</span>
          </div>
        </div>
        <div class="boiler__name-box">
          <div class="boiler__name-box-l">
            <h3 class="boiler__filter-text3">
              {{ filteredElement.shortTitle }}
            </h3>
            <span class="boiler__filter-text2">Рекомендуемая модель котла</span>
          </div>
          <div class="boiler__name-box-r">
            <p class="product__price">{{ filteredElement.price }} &#8381;</p>
            <button class="product__btn-order" @click="openModal">
              Заказать
            </button>
            <RouterLink class="product__link" to="/clients"
              >Где купить?</RouterLink
            >
          </div>
        </div>
      </div>
      <div class="boiler-container-part2">
        <RouterLink :to="`/catalog/${filteredElement.seoTitle}`" class="link">
          <img
            :src="`../../${filteredElement.image2}`"
            alt="Котел Буран"
            class="boiler__img"
          />
        </RouterLink>
      </div>
      <div class="boiler-container-part3">
        <ul v-for="el in fuatures" class="heat__list" :key="1">
          <li class="heat__item">
            <span class="heat__t1">{{ el }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- ////////////////////////// < 1200 ///////////////////////////////// -->

    <div class="boiler-container-2">
      <div class="boiler-container-part1-2">
        <h2 class="boiler__title">{{ filteredElement.shortTypeName }}</h2>
        <ul v-for="el in fuatures" class="heat__list" :key="1">
          <li class="heat__item">
            <span class="heat__t1">{{ el }}</span>
          </li>
        </ul>
      </div>
      <div class="boiler-container-part2-2">
        <RouterLink :to="`/catalog/${filteredElement.seoTitle}`" class="link">
          <img
            :src="`../../${filteredElement.image}`"
            alt="Котел Буран"
            class="boiler__img"
          />
        </RouterLink>
      </div>
      <div class="boiler-container-part3-2">
        <div class="text-container-2">
          <div class="text-left-2">
            <span class="boiler__filter-text">{{ filterRange }} м&sup2;</span>
            <span class="boiler__filter-text2"
              >Площадь отапливаемого помещения</span
            >
          </div>
          <div class="boiler__name-box">
            <div class="boiler__name-box-l">
              <h3 class="boiler__filter-text3">
                {{ filteredElement.shortTitle }}
              </h3>
              <span class="boiler__filter-text2"
                >Рекомендуемая модель котла</span
              >
            </div>
            <div class="boiler__name-box-r">
              <p class="product__price">{{ filteredElement.price }} &#8381;</p>
              <button class="product__btn-order" @click="openModal">
                Заказать
              </button>
              <RouterLink class="product__link" to="/clients"
                >Где купить?</RouterLink
              >
            </div>
          </div>
        </div>
        <div class="range-container-2">
          <input
            type="range"
            :min="minRange"
            :max="maxRange"
            v-model="filterRange"
          />
          <div class="range-values">
            <span class="min-range">{{ minRange }} м2</span>
            <span class="max-range">{{ maxRange }} м2</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ////////////////////////// < 575 ///////////////////////////////// -->

    <div class="boiler-container-3">
      <div class="boiler-container-part2-2 boiler-container-part2-3">
        <RouterLink :to="`/catalog/${filteredElement.seoTitle}`" class="link">
          <img
            :src="`../../${filteredElement.image}`"
            alt="Котел Буран"
            class="boiler__img"
          />
        </RouterLink>
      </div>
      <div class="boiler-container-part3-2 boiler-container-part3-3">
        <div class="text-container-2">
          <div class="text-left-2">
            <span class="boiler__filter-text">{{ filterRange }} м&sup2;</span>
            <span class="boiler__filter-text2"
              >Площадь отапливаемого помещения</span
            >
          </div>
          <div class="text-right-2">
            <h3 class="boiler__filter-text3-2">
              {{ filteredElement.shortTitle }}
            </h3>
            <span class="boiler__filter-text2">Рекомендуемая модель котла</span>
          </div>
        </div>
        <div class="boiler__name-box-3">
          <p class="product__price">{{ filteredElement.price }} &#8381;</p>
          <div class="product__boxbtns">
            <button class="product__btn-order" @click="openModal">
              Заказать
            </button>
            <RouterLink class="product__link" to="/clients"
              >Где купить?</RouterLink
            >
          </div>
        </div>
        <div class="range-container-2">
          <input
            type="range"
            :min="minRange"
            :max="maxRange"
            v-model="filterRange"
          />
          <div class="range-values">
            <span class="min-range">{{ minRange }} м2</span>
            <span class="max-range">{{ maxRange }} м2</span>
          </div>
        </div>
      </div>
      <div class="boiler-container-part1-2 boiler-container-part1-3">
        <ul v-for="el in fuatures" class="heat__list" :key="1">
          <li class="heat__item">
            <span class="heat__t1">{{ el }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <ModalBuyProduct
    v-if="isOpen"
    v-model:show="isOpen"
    :product2="filteredElement"
  />
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import prodData from "../../assets/prodData";
import { RouterLink } from "vue-router";
import ModalBuyProduct from "./ModalBuyProduct.vue";
import fuaturesData from "../../assets/fuaturesData";

const isOpen = ref(false);

const openModal = () => {
  isOpen.value = true;
};

const activeType = ref(1);
const filterRange = ref(5);

const products = ref([]);
const elements = ref([]);
const getProducts = () => {
  products.value = prodData;
  elements.value = prodData;
};
const minRange = ref(5);
const maxRange = ref(200);

const fuatures = ref([]);

onMounted(() => {
  getProducts();
  getFilteredElement();
});

const filteredElement = ref({});
const getFilteredElement = () => {
  let temp = products.value.filter((el) => el.type == activeType.value);
  let spaceValues = temp.map((el) => el.space);
  maxRange.value = Math.max(...spaceValues);

  let temp2 = temp.filter((el) => el.space >= filterRange.value);
  if (temp2.length > 0) {
    filteredElement.value = temp2[0];
  } else {
    filteredElement.value = temp[temp.length - 1];
  }
  fuatures.value = fuaturesData[filteredElement.value.type - 1].fuatures;
};
watch([elements, activeType, filterRange], () => {
  getFilteredElement();
});

const width = ref(window.innerWidth);
</script>

<style lang="scss" scoped>
.centered {
  text-align: center;
}
.mb {
  margin-bottom: 60px !important;
  @media (max-width: 1400px) {
    margin-bottom: 20px !important;
  }
}
.boiler {
  padding-top: 40px;
  height: auto;
  @media (max-width: 1400px) {
    padding-top: 10px;
  }

  h2 {
    // margin-bottom: 40px;

    @media (max-width: 450px) {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 450px) {
    padding-top: 20px;
  }
}
.boiler__title {
  font-size: 36px;
  font-weight: 700;
  line-height: 43px;
  margin-bottom: 10px;

  @media (max-width: 575px) {
    font-size: 28px;
  }
  @media (max-width: 450px) {
    font-size: 18px;
  }
}
.range-container {
  max-width: 400px;
  padding-top: 20px;
  @media (max-width: 1400px) {
    padding-top: 10px;
  }

  input {
    display: block;
  }
}

.tabheader {
  display: grid;
  grid-template-columns: repeat(5, auto);
  height: auto;
  list-style: none;
  margin: auto;

  @media (max-width: 1175px) {
    grid-template-columns: repeat(3, auto);
  }
  @media (max-width: 850px) {
    grid-template-columns: repeat(2, auto);
  }
  @media (max-width: 570px) {
    grid-template-columns: repeat(1, auto);
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(2, auto);
  }
}
.tabheader__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #f9f9f9;
  border-left: #d8d8d8 solid 1px;
  border-right: #d8d8d8 solid 1px;
  border-bottom: #e8e8e8 solid 5px;
  transition: 0.5s ease;

  &:hover {
    cursor: pointer;
    border-bottom: #f64237 solid 5px;
  }

  @media (max-width: 450px) {
    padding-bottom: 0;
  }
}
.tabheader__title {
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0.03em;

  @media (max-width: 450px) {
    font-size: 12px;
    line-height: 5px;
  }
}
.tabheader__description {
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;

  @media (max-width: 450px) {
    font-size: 10px;
  }
}
.activeType {
  border-bottom: #f64237 solid 5px;
}

.test {
}
.boiler-container {
  max-width: 1580px;
  margin: auto;
  height: auto;
  padding-top: 20px;
  padding-bottom: 70px;
  justify-content: flex-start;
  align-items: stretch;
  display: flex;

  @media (max-width: 1400px) {
    padding-top: 15px;
    padding-bottom: 50px;
  }
  @media (max-width: 1200px) {
    display: none;
  }
}
.text-main {
  font-size: 14px;
  max-width: 453px;
  margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;
  @media (max-width: 1400px) {
    margin-bottom: 5px;
  }
}
.boiler-container-part1 {
  flex-basis: 35%;
}
.boiler-container-part2 {
  flex-basis: 30%;
}
.boiler-container-part3 {
  flex-basis: 35%;
  padding: 30px;
}
.boiler__filter-text {
  font-size: 36px;
  font-weight: 400;
  line-height: 43px;
  display: block;

  @media (max-width: 420px) {
    font-size: 24px;
  }
}
.boiler__filter-text2 {
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 400px) {
    font-size: 12px;
  }
}
.boiler__filter-text3 {
  font-size: 36px;
  font-weight: 400;
  line-height: 43px;
  color: #f12115;
  // margin-top: 50px;
}
.boiler__img {
  max-width: 80%;
  max-height: 100%;
  display: block;
  margin: auto;
}
.heat__list {
  list-style: none;
  height: fit-content;
}
.heat__item {
  margin-bottom: 25px;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    width: 8px;
    height: 8px;
    left: -20px;
    top: 3px;
    background-color: #f64237;
  }

  @media (max-width: 450px) {
    margin-bottom: 15px;
  }
}
.heat__t1 {
  display: block;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  margin-bottom: 5px;
}
.heat__t2 {
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;

  @media (max-width: 450px) {
    font-size: 12px;
  }
}

.range-values {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.min-range {
  padding-top: 10px;
}
.max-range {
  padding-top: 10px;
}

.boiler__name-box {
  display: flex;
  align-items: flex-start;
  margin-top: 15px;

  @media (max-width: 1400px) {
    margin-top: 6px;
  }
  @media (max-width: 1200px) {
    margin-top: 0;
    flex-basis: 70%;
  }
}
.boiler__name-box-l {
  margin-right: auto;
}

.boiler__name-box-r {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.product__price {
  font-size: 24px;
  color: #00b2f6;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
  @media (max-width: 510px) {
    font-size: 16px;
  }
  @media (max-width: 460px) {
    font-size: 24px;
    // margin-left: 15px;
  }
  @media (max-width: 420px) {
    font-size: 17px;
    // margin-left: 15px;
  }
}
.product__boxbtns {
  padding-right: 20px;
}
.product__btn-order {
  display: block;
  padding: 5px 25px;
  border: 1px solid #00b2f6;
  border-radius: 50px;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 5px;
  transition: 0.3s ease;
  background-color: #00b2f6;
  color: #fff;
  margin-bottom: 10px !important;
  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #00b2f6;
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
  align-self: center;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 520px) {
    font-size: 12px;
  }
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////// <1200 ///////////////////////////////
/////////////////////////////////////////////////////////////////////

.boiler-container-2 {
  max-width: 1200px;
  margin: auto;
  height: 700px;
  // background-color: lavenderblush;
  padding-top: 64px;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  display: none;

  @media (max-width: 1200px) {
    display: flex;
  }
  @media (max-width: 575px) {
    display: none;
  }

  p {
    // max-width: 453px;
    // margin-bottom: 30px;
  }

  .boiler__title {
    margin-left: -20px;
  }
}
.boiler-container-part1-2 {
  flex-basis: 45%;
  padding-left: 30px;

  @media (max-width: 920px) {
    flex-basis: 55%;
  }
}

.boiler-container-part2-2 {
  flex-basis: 45%;
  display: flex;
  justify-content: center;
  align-items: center;

  .boiler__img {
    max-width: 75%;
    max-height: auto;

    @media (max-width: 920px) {
      max-width: 98%;
    }
  }
}
.boiler-container-part3-2 {
  // flex-basis: 100%;
  // background-color: #f9f9f9;
  flex-basis: 100%;
  padding: 30px;

  .range-container-2 {
    max-width: auto;
    margin-top: 20px;
    height: auto;

    @media (max-width: 450px) {
      margin-top: 10px;
    }
  }

  @media (max-width: 550px) {
    padding-top: 0;
  }
}

.text-container-2 {
  display: flex;
  justify-content: space-between;

  @media (max-width: 550px) {
    line-height: 0.2;
  }
}
.text-left-2 {
  flex-basis: 45%;
  @media (max-width: 1200px) {
    flex-basis: 30%;
  }
}
.text-right-2 {
  flex-basis: 55%;
}

.boiler__filter-text3-2 {
  font-size: 36px;
  font-weight: 400;
  line-height: 43px;
  color: #f12115;
  margin-top: 0;

  @media (max-width: 420px) {
    font-size: 24px;
  }
}
///////////////////////////////////////////////////////////////////
/////////////////////////////// <550 ////////////////////////////
///////////////////////////////////////////////////////////////////
.boiler-container-3 {
  display: none;

  @media (max-width: 575px) {
    display: block;
  }
}
.heat__list-3 {
  padding-left: 20px;
}
.boiler-container-part1-3 {
  display: block;
  width: 100%;
  height: auto;
  // padding-left: 400px;
}
.boiler-container-part2-3 {
  display: block;
  width: 100%;
  height: auto;

  .boiler__img {
    max-width: auto;
    max-height: 300px;

    @media (max-width: 920px) {
      // max-width: 98%;
    }
    @media (max-width: 450px) {
      max-height: 190px;
      // max-width: 98%;
    }
  }
}
.boiler-container-part3-3 {
  // flex-basis: 100%;
}

/////////////////////////////////////////////////////////////////////
///////////////////////////////// input /////////////////////////////
/////////////////////////////////////////////////////////////////////

input[type="range"] {
  height: 10px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  // animate: 0.2s;
  transition: 0.2s;
  box-shadow: 0px 0px 1px #353535;
  background: #f1f1f1;
  border-radius: 5px;
  border: 1px solid #bbbbbb;
}
input[type="range"]::-webkit-slider-thumb {
  box-shadow: 1px 1px 1px #353535;
  border: 1px solid #e3e2e0;
  height: 42px;
  width: 30px;
  border-radius: 10px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -16px;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #f1f1f1;
}
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  // animate: 0.2s;
  transition: 0.2s;
  box-shadow: 0px 0px 1px #353535;
  background: #f1f1f1;
  border-radius: 5px;
  border: 1px solid #bbbbbb;
}
input[type="range"]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #353535;
  border: 1px solid #e3e2e0;
  height: 42px;
  width: 30px;
  border-radius: 10px;
  background: #ffffff;
  cursor: pointer;
}
input[type="range"]::-ms-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  // animate: 0.2s;
  transition: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"]::-ms-fill-lower {
  background: #f1f1f1;
  border: 1px solid #bbbbbb;
  border-radius: 10px;
  box-shadow: 0px 0px 1px #353535;
}
input[type="range"]::-ms-fill-upper {
  background: #f1f1f1;
  border: 1px solid #bbbbbb;
  border-radius: 10px;
  box-shadow: 0px 0px 1px #353535;
}
input[type="range"]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 1px 1px 1px #353535;
  border: 1px solid #e3e2e0;
  height: 42px;
  width: 30px;
  border-radius: 10px;
  background: #ffffff;
  cursor: pointer;
}
input[type="range"]:focus::-ms-fill-lower {
  background: #f1f1f1;
}
input[type="range"]:focus::-ms-fill-upper {
  background: #f1f1f1;
}

.boiler__name-box-3 {
  display: flex;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 400px) {
    margin-top: 7px;
    justify-content: space-between;
    align-items: flex-start;
  }

  & > * {
    margin-right: 30px;

    @media (max-width: 460px) {
      margin-right: 10px;
    }
  }
}
.product__link {
  @media (max-width: 460px) {
    align-self: flex-start;
  }
}
.product__price-3 {
}
.product__btn-order-3 {
}
</style>
