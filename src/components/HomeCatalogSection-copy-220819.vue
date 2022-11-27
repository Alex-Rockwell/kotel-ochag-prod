<template>
  <h2 class="title-main container" id="homeCatalog">Продукция</h2>
  <section class="shop container">
    <div class="brands">
      <ul class="brands__list">
        <li>
          <div
            class="brands__list-item"
            @click="setFilterBrand(1)"
            :class="{ listItemActive: filterBrand == 1 }"
          >
            Стандарт
          </div>
          <div
            class="brands__list-item-sub"
            @click="
              setFilterBrand(1);
              setSubFilter(1);
            "
            :class="{ listItemActive: filterBrand == 1 && subFilter == 1 }"
          >
            Одноконтурные
          </div>
          <div
            class="brands__list-item-sub"
            @click="
              setFilterBrand(1);
              setSubFilter(2);
            "
            :class="{ listItemActive: filterBrand == 1 && subFilter == 2 }"
          >
            Двухконтурные
          </div>
        </li>

        <li>
          <div
            class="brands__list-item"
            @click="setFilterBrand(2)"
            :class="{ listItemActive: filterBrand == 2 }"
          >
            Премиум
          </div>
          <div
            class="brands__list-item-sub"
            @click="
              setFilterBrand(2);
              setSubFilter(1);
            "
            :class="{ listItemActive: filterBrand == 2 && subFilter == 1 }"
          >
            Одноконтурные
          </div>
          <div
            class="brands__list-item-sub"
            @click="
              setFilterBrand(2);
              setSubFilter(2);
            "
            :class="{ listItemActive: filterBrand == 2 && subFilter == 2 }"
          >
            Двухконтурные
          </div>
        </li>
        <li
          class="brands__list-item"
          @click="setFilterBrand(3)"
          :class="{ listItemActive: filterBrand == 3 }"
        >
          Премиум EN
        </li>
        <li
          class="brands__list-item"
          @click="setFilterBrand(4)"
          :class="{ listItemActive: filterBrand == 4 }"
        >
          КЧГ-EN
        </li>
        <li
          class="brands__list-item"
          @click="setFilterBrand(5)"
          :class="{ listItemActive: filterBrand == 5 }"
        >
          Compact
        </li>
      </ul>

      <!-- //////////////////////////////////// < 450 select /////////////////////////////////////////////////// -->

      <div class="custom-select">
        <div
          class="product-title"
          :class="{ 'product-title--active': isOpen }"
          @click="isOpen = !isOpen"
        >
          {{ currentItem }}
        </div>
        <ul class="product-list" :class="{ isOpen: isOpen }">
          <li
            class="product-item"
            :class="{ 'product-item--active': filterBrand == 1 }"
            @click="
              handleClick('Cтандарт');
              setFilterBrand(1);
            "
          >
            Стандарт
          </li>
          <li
            class="product-item product-item--sub"
            :class="{
              'product-item--active-sub': filterBrand == 1 && subFilter == 1,
            }"
            @click="
              handleClick('Cтандарт (одноконтурные)');
              setFilterBrand(1);
              setSubFilter(1);
            "
          >
            Одноконтурные
          </li>
          <li
            class="product-item product-item--sub"
            :class="{
              'product-item--active-sub': filterBrand == 1 && subFilter == 2,
            }"
            @click="
              handleClick('Cтандарт (двухконтурные)');
              setFilterBrand(1);
              setSubFilter(2);
            "
          >
            Двухконтурные
          </li>
          <li
            class="product-item"
            :class="{ 'product-item--active': filterBrand == 2 }"
            @click="
              handleClick('Премиум');
              setFilterBrand(2);
            "
          >
            Премиум
          </li>
          <li
            class="product-item product-item--sub"
            :class="{
              'product-item--active-sub': filterBrand == 2 && subFilter == 1,
            }"
            @click="
              handleClick('Премиум (одноконтурные)');
              setFilterBrand(2);
              setSubFilter(1);
            "
          >
            Одноконтурные
          </li>
          <li
            class="product-item product-item--sub"
            :class="{
              'product-item--active-sub': filterBrand == 2 && subFilter == 2,
            }"
            @click="
              handleClick('Премиум (двухконтурные)');
              setFilterBrand(2);
              setSubFilter(2);
            "
          >
            Двухконтурные
          </li>
          <li
            class="product-item"
            :class="{ 'product-item--active': filterBrand == 3 }"
            @click="
              handleClick('Премиум EN');
              setFilterBrand(3);
            "
          >
            Премиум EN
          </li>
          <li
            class="product-item"
            :class="{ 'product-item--active': filterBrand == 4 }"
            @click="
              handleClick('КЧГ-EN');
              setFilterBrand(4);
            "
          >
            КЧГ-EN
          </li>
          <li
            class="product-item"
            :class="{ 'product-item--active': filterBrand == 5 }"
            @click="
              handleClick('Compact');
              setFilterBrand(5);
            "
          >
            Compact
          </li>
        </ul>
      </div>
    </div>
    <div class="catalog">
      <div class="catalog__container">
        <ProductCard
          class="home-product"
          v-for="element in elements"
          :key="element.id"
          :product="element"
        />
        <h4 v-if="filterBrand.length <= 0" class="blue-subtitle">
          Популярные модели
        </h4>
      </div>
      <div class="catalog__linkbox">
        <RouterLink class="catalog__linkall" to="/catalog"  
          >Посмотреть все</RouterLink
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import prodData from "../../assets/prodData";
import ProductCard from "../components/ProductCard.vue";

const products = ref([]);
const elements = ref([]);
const filterBrand = ref("");
const setFilterBrand = (id) => {
  filterBrand.value = id;
  subFilter.value = 0;
};
const subFilter = ref(0);
const setSubFilter = (param) => {
  subFilter.value = param;
};

const setQuantity = () => {
  if (width.value >= 1250) {
    elements.value = elements.value.slice(0, 8);
  }
  if (width.value < 1250 && width.value > 1080) {
    elements.value = elements.value.slice(0, 6);
  }
  if (width.value <= 1080) {
    elements.value = elements.value.slice(0, 8);
  }
};

const getProducts = () => {
  products.value = prodData;
  elements.value = prodData;
  if (elements.value.length > 8) {
    setQuantity()
  }
};

onMounted(() => {
  getProducts();
});

watch(filterBrand, () => {
  if (filterBrand.value > 0) {
    elements.value = products.value.filter((el) => {
      return el.type == filterBrand.value;
    });
    setQuantity()
  } else {
    getProducts();
  }
});
watch(subFilter, () => {
  elements.value = products.value.filter((el) => {
    return el.type == filterBrand.value;
  });
  if (subFilter.value < 1) {
    elements.value = products.value.filter((el) => {
      return el.type == filterBrand.value;
    });
    setQuantity()
    return;
  } else {
    if (subFilter.value == 1) {
      elements.value = elements.value.filter((el) => {
        return el.kolichestvoKonturov == "одноконтурный";
      });
      setQuantity()
    }
    if (subFilter.value == 2) {
      elements.value = elements.value.filter((el) => {
        return el.kolichestvoKonturov == "двухконтурный";
      });
      setQuantity()
    }
  }
});

const currentItem = ref("Выберите модель");
const isOpen = ref(false);
function handleClick(val) {
  currentItem.value = val;
  isOpen.value = false;
}

const width = ref(window.innerWidth);

function setWidth() {
  width.value = window.innerWidth;
}
onMounted(() => {
  window.addEventListener("resize", setWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", setWidth);
});
</script>

<style lang="scss" scoped>
.title-main {
  padding-top: 50px;
  margin-bottom: 0;
  @media (max-width: 1080px) {
    margin-bottom: 0;
  }

  @media (max-width: 615px) and (min-width: 570px) {
    padding-top: 100px;
  }
}
.shop {
  display: flex;
  align-items: flex-start;
  justify-content: stretch;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
}
.brands {
  padding: 10px 20px 0 0;
  flex-basis: 250px;
  flex-shrink: 0;
  @media (max-width: 1080px) {
    width: 100%;
    flex-basis: auto;
  }
}
.brands__title {
  width: 150px;
  font-size: 18px;
  margin-bottom: 30px;

  &:hover {
    cursor: pointer;
  }
}
.brands__list {
  list-style: none;

  @media (max-width: 1080px) {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
  }
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
  @media (max-width: 580px) {
    margin-bottom: 20px;
    display: block;
    width: 100%;
    padding-left: 20px;
  }
  @media (max-width: 450px) {
    display: none;
  }
}
.brands__list-item {
  font-size: 18px;
  line-height: 22px;
  padding: 10px 0;
  margin-left: 10px;
  border-radius: 3px;
  transition: 0.2s ease;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1430px) {
    font-size: 16px;
  }
  @media (max-width: 680px) {
    font-size: 14px;
  }
  @media (max-width: 580px) {
    font-size: 16px;
  }
}
.brands__list-item-sub {
  font-size: 14px;
  line-height: 17px;
  padding: 5px 0;
  border-radius: 3px;
  margin-left: 20px;
  width: fit-content;
  transition: 0.2s ease;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1430px) {
    font-size: 16px;
  }
  @media (max-width: 680px) {
    font-size: 14px;
  }
  @media (max-width: 580px) {
    font-size: 16px;
  }
}

.catalog {
  padding: 0 30px 0;
  margin-bottom: 37px;

  @media (max-width: 1080px) {
    padding: 0 0 0;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
}
.catalog__container {
  display: grid;
  grid-template: minmax(350px, auto) / repeat(4, 25%);
  column-gap: 20px;
  row-gap: 10px;

  max-width: 100%;
  min-width: 65vw;
  position: relative;
  @media (max-width: 1080px) {
    margin-top: 60px;
  }

  @media (max-width: 1400px) {
    grid-template: minmax(255px, auto) / repeat(4, 25%);
  }
  @media (max-width: 1250px) {
    grid-template: minmax(300px, auto) / repeat(3, 33%);
    gap: 8px;
  }
  @media (max-width: 1080px) {
    grid-template: minmax(300px, auto) / repeat(4, 25%);
  }
  @media (max-width: 750px) {
    grid-template: minmax(270px, auto) / repeat(4, 25%);
  }
  @media (max-width: 720px) {
    grid-template: minmax(300px, auto) / repeat(3, 33%);
  }
  @media (max-width: 550px) {
    grid-template: minmax(290px, auto) / repeat(3, 33%);
  }
  @media (max-width: 520px) {
    grid-template: minmax(270px, auto) / repeat(3, 33%);
  }

  @media (max-width: 490px) {
    grid-template: minmax(250px, auto) / repeat(2, 50%);
  }
  @media (max-width: 450px) {
    margin-top: 5px;
  }
  @media (max-width: 415px) {
    grid-template: minmax(200px, auto) / repeat(2, 50%);
  }
}

.blue-subtitle {
  position: absolute;
  top: -50px;
  left: 0;
  color: #00d2f6;
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 1400px) {
    top: -30px;
  }
  @media (max-width: 450px) {
    display: none;
  }
}

.home-product {
  max-width: 350px;
  max-height: 500px;

  @media (max-width: 480px) {
    padding: 15px 10px 0px;
  }
}

.catalog__linkbox {
  margin-top: 30px;
  text-align: center;
  // @media (max-width: 1400px) {
  //   margin-top: -10px;
  // }
}
.catalog__linkall {
  display: inline-block;
  padding: 5px 20px;
  background-color: transparent;
  border: 1px solid #00b2f6;
  border-radius: 50px;
  color: #00b2f6;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 5px;
  transition: 0.3s ease;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: #00b2f6;
    color: #fff;
  }
  @media (max-width: 520px) {
    font-size: 12px;
  }
}

.brands__list-item {
  position: relative;
}
.brands__list-item-sub {
  position: relative;
}

.brands__list-item {
  // display: inline-flex;
  padding-top: 10px;
  padding-bottom: 5px;
  overflow: hidden;
  width: fit-content;

  @media (max-width: 450px) {
    padding-top: 1px;
    font-size: 13px;
  }
}
.brands__list-item::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 200%;
  height: 2px;
  background: #f64237;
  transition: transform 0.3s ease;
  transform: translateX(-100%);
}
.brands__list-item:hover:before {
  transform: translateX(0);
}
.brands__list-item-sub {
  padding-top: 10px;
  padding-bottom: 5px;
  overflow: hidden;
  width: fit-content;
  @media (max-width: 450px) {
    padding-top: 1px;
    font-size: 13px;
  }
}
.brands__list-item-sub::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 200%;
  height: 2px;
  background: #f64237;
  transition: transform 0.3s ease;
  transform: translateX(-100%);
}
.brands__list-item-sub:hover:before {
  transform: translateX(0);
}

.listItemActive::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: red;
}

/////////////////////////////////////////////////////
////////////////// custom select ////////////////////
/////////////////////////////////////////////////////
.custom-select {
  position: relative;
  display: inline-block;
  margin-left: 20px;
  margin-top: 10px;

  @media (min-width: 450px) {
    display: none;
  }
}
.product-title {
  user-select: none;
  cursor: pointer;
  font-size: 16px;
  position: relative;
  display: inline-block;
}
.product-title::after {
  content: "";
  display: block;
  position: absolute;
  top: 1px;
  right: -25px;
  width: 17px;
  height: 17px;
  background: url(../../assets/images/select-arrow.svg) center no-repeat;
  transition: 0.3s all ease-in-out;
}
.product-title--active::after {
  transform: rotate(180deg);
}
.product-list {
  list-style: none;
  border: 1px solid #bbb;
  border-radius: 5px;
  display: none;
  user-select: none;
  position: absolute;
  top: 40px;
  left: 0;
  background-color: #fff;
  width: 300px;
  z-index: 5;
}
.isOpen {
  display: block;
}
.product-item {
  padding: 10px;

  &:hover {
    background-color: #ccc;
    cursor: pointer;
  }
}
.product-item--sub {
  padding-left: 25px;
}

.product-item--active {
  position: relative;
}
.product-item--active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 10px;
  width: 50%;
  height: 2px;
  background-color: red;
}
.product-item--active-sub {
  position: relative;
}
.product-item--active-sub::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 25px;
  width: 50%;
  height: 2px;
  background-color: red;
}
</style>
