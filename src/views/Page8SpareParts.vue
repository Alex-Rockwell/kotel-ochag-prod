<template>
  <h2 class="title-main container" id="sparePartsTitle">Продукция</h2>
  <section class="shop container">
    <div class="shop-wrapper">
      <div class="brands">
        <h3 class="subtitle">Запасные части</h3>
        <ul class="brands__list">
          <li
            class="brands__list-item"
            @click="setFilterBrand(2)"
            :class="{ listItemActive: filterBrand == 2 }"
          >
            Блоки запальника
          </li>
          <li
            class="brands__list-item"
            @click="setFilterBrand(1)"
            :class="{ listItemActive: filterBrand == 1 }"
          >
            Биметаллическая пластина
          </li>
          <li
            class="brands__list-item"
            @click="setFilterBrand(3)"
            :class="{ listItemActive: filterBrand == 3 }"
          >
            Блоки управления SIT
          </li>
          <li
            class="brands__list-item"
            @click="setFilterBrand(4)"
            :class="{ listItemActive: filterBrand == 4 }"
          >
            Блоки управления САБК
          </li>
          <li
            class="brands__list-item"
            @click="setFilterBrand(5)"
            :class="{ listItemActive: filterBrand == 5 }"
          >
            Генератор милливольтовый
          </li>
          <li
            class="brands__list-item"
            @click="setFilterBrand(6)"
            :class="{ listItemActive: filterBrand == 6 }"
          >
            Горелки
          </li>
          <li
            class="brands__list-item"
            @click="setFilterBrand(7)"
            :class="{ listItemActive: filterBrand == 7 }"
          >
            Датчик тяги и перегрева
          </li>
          <li
            class="brands__list-item"
            @click="setFilterBrand(8)"
            :class="{ listItemActive: filterBrand == 8 }"
          >
            Кабель пьезогенератора MINISit
          </li>
          <li
            class="brands__list-item"
            @click="setFilterBrand(9)"
            :class="{ listItemActive: filterBrand == 9 }"
          >
            Клапан пламени
          </li>
          <li
            class="brands__list-item"
            @click="setFilterBrand(10)"
            :class="{ listItemActive: filterBrand == 10 }"
          >
            Кнопка и кабель пьезорозжига
          </li>
          <li
            class="brands__list-item"
            @click="setFilterBrand(11)"
            :class="{ listItemActive: filterBrand == 11 }"
          >
            Комплект для сжиженного газа
          </li>
          <li
            class="brands__list-item"
            @click="setFilterBrand(12)"
            :class="{ listItemActive: filterBrand == 12 }"
          >
            Комплект терморегулятора
          </li>
          <li
            class="brands__list-item"
            @click="setFilterBrand(13)"
            :class="{ listItemActive: filterBrand == 13 }"
          >
            Подводка газовая
          </li>
          <li
            class="brands__list-item"
            @click="setFilterBrand(14)"
            :class="{ listItemActive: filterBrand == 14 }"
          >
            Предохранительный клапан
          </li>
          <li
            class="brands__list-item"
            @click="setFilterBrand(15)"
            :class="{ listItemActive: filterBrand == 15 }"
          >
            Провод
          </li>
          <li
            class="brands__list-item"
            @click="setFilterBrand(16)"
            :class="{ listItemActive: filterBrand == 16 }"
          >
            Прокладка импульсных трубок
          </li>
          <li
            class="brands__list-item"
            @click="setFilterBrand(17)"
            :class="{ listItemActive: filterBrand == 17 }"
          >
            Сопло
          </li>
          <li
            class="brands__list-item"
            @click="setFilterBrand(18)"
            :class="{ listItemActive: filterBrand == 18 }"
          >
            Термоманометр
          </li>
          <li
            class="brands__list-item"
            @click="setFilterBrand(19)"
            :class="{ listItemActive: filterBrand == 19 }"
          >
            Термопара
          </li>
          <li
            class="brands__list-item"
            @click="setFilterBrand(20)"
            :class="{ listItemActive: filterBrand == 20 }"
          >
            Термопрерыватель
          </li>
          <li
            class="brands__list-item"
            @click="setFilterBrand(21)"
            :class="{ listItemActive: filterBrand == 21 }"
          >
            Трубка запальника
          </li>
          <li
            class="brands__list-item"
            @click="setFilterBrand(22)"
            :class="{ listItemActive: filterBrand == 22 }"
          >
            Трубка импульсная
          </li>
          <li
            class="brands__list-item"
            @click="setFilterBrand(23)"
            :class="{ listItemActive: filterBrand == 23 }"
          >
            Устройство газогорелочное
          </li>
          <li
            class="brands__list-item"
            @click="setFilterBrand(24)"
            :class="{ listItemActive: filterBrand == 24 }"
          >
            Электрод пилотной горелки
          </li>
        </ul>

        <!-- ///////////////////////////// <1200 ///////////////////////////////// -->

        <div class="brands__list-md">
          <ul class="list-box">
            <li
              class="brands__list-item"
              @click="setFilterBrand(1)"
              :class="{ listItemActive: filterBrand == 1 }"
            >
              Биметаллическая пластина
            </li>
            <li
              class="brands__list-item"
              @click="setFilterBrand(4)"
              :class="{ listItemActive: filterBrand == 4 }"
            >
              Блоки управления САБК
            </li>
            <li
              class="brands__list-item"
              @click="setFilterBrand(7)"
              :class="{ listItemActive: filterBrand == 7 }"
            >
              Датчик тяги и перегрева
            </li>
            <li
              class="brands__list-item"
              @click="setFilterBrand(10)"
              :class="{ listItemActive: filterBrand == 10 }"
            >
              Кнопка и кабель пьезорозжига
            </li>
            <li
              class="brands__list-item"
              @click="setFilterBrand(13)"
              :class="{ listItemActive: filterBrand == 13 }"
            >
              Подводка газовая
            </li>
            <li
              class="brands__list-item"
              @click="setFilterBrand(16)"
              :class="{ listItemActive: filterBrand == 16 }"
            >
              Прокладка импульсных трубок
            </li>
            <li
              class="brands__list-item"
              @click="setFilterBrand(19)"
              :class="{ listItemActive: filterBrand == 19 }"
            >
              Термопара
            </li>
            <li
              class="brands__list-item"
              @click="setFilterBrand(22)"
              :class="{ listItemActive: filterBrand == 22 }"
            >
              Трубка импульсная
            </li>
          </ul>
          <ul class="list-box">
            <li
              class="brands__list-item"
              @click="setFilterBrand(2)"
              :class="{ listItemActive: filterBrand == 2 }"
            >
              Блоки запальника
            </li>
            <li
              class="brands__list-item"
              @click="setFilterBrand(5)"
              :class="{ listItemActive: filterBrand == 5 }"
            >
              Генератор милливольтовый
            </li>
            <li
              class="brands__list-item"
              @click="setFilterBrand(8)"
              :class="{ listItemActive: filterBrand == 8 }"
            >
              Кабель пьезогенератора MINISit
            </li>
            <li
              class="brands__list-item"
              @click="setFilterBrand(11)"
              :class="{ listItemActive: filterBrand == 11 }"
            >
              Комплект для сжиженного газа
            </li>
            <li
              class="brands__list-item"
              @click="setFilterBrand(14)"
              :class="{ listItemActive: filterBrand == 14 }"
            >
              Предохранительный клапан
            </li>
            <li
              class="brands__list-item"
              @click="setFilterBrand(17)"
              :class="{ listItemActive: filterBrand == 17 }"
            >
              Сопло
            </li>
            <li
              class="brands__list-item"
              @click="setFilterBrand(20)"
              :class="{ listItemActive: filterBrand == 20 }"
            >
              Термопрерыватель
            </li>
            <li
              class="brands__list-item"
              @click="setFilterBrand(23)"
              :class="{ listItemActive: filterBrand == 23 }"
            >
              Устройство газогорелочное
            </li>
          </ul>
          <ul class="list-box">
            <li
              class="brands__list-item"
              @click="setFilterBrand(3)"
              :class="{ listItemActive: filterBrand == 3 }"
            >
              Блоки управления SIT
            </li>
            <li
              class="brands__list-item"
              @click="setFilterBrand(6)"
              :class="{ listItemActive: filterBrand == 6 }"
            >
              Горелки
            </li>
            <li
              class="brands__list-item"
              @click="setFilterBrand(9)"
              :class="{ listItemActive: filterBrand == 9 }"
            >
              Клапан пламени
            </li>
            <li
              class="brands__list-item"
              @click="setFilterBrand(12)"
              :class="{ listItemActive: filterBrand == 12 }"
            >
              Комплект терморегулятора
            </li>
            <li
              class="brands__list-item"
              @click="setFilterBrand(15)"
              :class="{ listItemActive: filterBrand == 15 }"
            >
              Провод
            </li>
            <li
              class="brands__list-item"
              @click="setFilterBrand(18)"
              :class="{ listItemActive: filterBrand == 18 }"
            >
              Термоманометр
            </li>
            <li
              class="brands__list-item"
              @click="setFilterBrand(21)"
              :class="{ listItemActive: filterBrand == 21 }"
            >
              Трубка запальника
            </li>
            <li
              class="brands__list-item"
              @click="setFilterBrand(24)"
              :class="{ listItemActive: filterBrand == 24 }"
            >
              Электрод пилотной горелки
            </li>
          </ul>
        </div>
        <RouterLink class="subtitle subtitle--link" to="/catalog">
          Котлы
          <span>
            <svg
              width="16"
              height="8"
              viewBox="0 0 16 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 4.23143L13.6572 4.23143L11.4766 6.39273L12.3426 7.25L16 3.62504L12.3426 8.86917e-05L11.4766 0.857362L13.6572 3.01866L0 3.01866L0 4.23143Z"
                fill="#3C3F47"
              />
            </svg>
          </span>
        </RouterLink>
      </div>
      <div class="catalog">
        <div class="sparePartsItem-title">
          <div class="sparePartsItem__imgbox"></div>
          <div class="sparePartsItem__title">
            <p>Название</p>
          </div>
          <div class="sparePartsItem__artikul">
            <p>Артикул</p>
          </div>
          <div class="sparePartsItem__applicability">
            <p>Применяемость</p>
          </div>
        </div>
        <SparePartsItem
          v-for="element in elements"
          :key="element.id"
          :element="element"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import dataSpareParts from "../../assets/dataSpareParts";
import SparePartsItem from "../components/SparePartsItem.vue";

const spareParts = ref([]);
const elements = ref([]);
const filterBrand = ref(2);
const setFilterBrand = (id) => {
  filterBrand.value = id;
  document
    .getElementById("sparePartsTitle")
    .scrollIntoView({ behavior: "smooth" });
};

const getSpareParts = () => {
  spareParts.value = dataSpareParts;
  elements.value = dataSpareParts;
  // console.log("get spareParts", "elements: ", elements.value);
};

onMounted(() => {
  getSpareParts();
  if (filterBrand.value > 0) {
    elements.value = spareParts.value.filter((el) => {
      return el.type == filterBrand.value;
    });
  }
});

watch(filterBrand, () => {
  getSpareParts();
  if (filterBrand.value > 0) {
    elements.value = spareParts.value.filter((el) => {
      return el.type == filterBrand.value;
    });
  }
});
</script>

<style lang="scss" scoped>
.shop {
  padding-bottom: 100px;
}
.sparePartsItem {
  width: 100%;
  height: 100px;
  background-color: #f8f8f8;
  display: flex;
  margin-bottom: 12px;
}
.sparePartsItem__imgbox {
  flex-basis: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.sparePartsItem__img {
  max-width: 100%;
  max-height: 100%;
}
.sparePartsItem__title {
  flex-basis: 30%;
  padding: 20px;
}
.sparePartsItem__artikul {
  flex-basis: 20%;
  padding: 20px;
}
.sparePartsItem__applicability {
  flex-basis: 40%;
  padding: 20px;
}

.title-main {
  padding-top: 50px;
  margin-bottom: 20px;
  @media (max-width: 1080px) {
    margin-bottom: 0;
  }
}
.subtitle {
  font-size: 20px;
  font-weight: 700;
  display: block;

  &--link {
    margin-top: 20px;
    color: inherit;
    text-decoration: none;
    transition: 0.3s ease;
  }
  &--link:hover {
    text-decoration: underline;
  }
}
.subtitle--link {
  @media (max-width: 1200px) {
    display: none;
  }
}
.shop-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: stretch;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 76vh;
  }
}
.brands {
  padding: 10px 20px 0 0;
  flex-basis: 25%;
  flex-shrink: 0;
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

  @media (max-width: 1200px) {
    display: none;
  }
  @media (max-width: 1080px) {
    margin-bottom: 20px;
  }
  @media (max-width: 650px) {
    display: flex;
    flex-wrap: wrap;
    & > * {
      flex-basis: 46%;
    }
  }
  @media (max-width: 390px) {
    // display: block;
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
  @media (max-width: 900px) {
    font-size: 14px;
  }
  @media (max-width: 730px) {
    font-size: 12px;
  }
  @media (max-width: 650px) {
    font-size: 10px;
  }
  @media (max-width: 650px) {
    line-height: 8px;
  }
}

.catalog {
  flex-basis: 100%;

  @media (max-width: 1080px) {
    padding: 0 0 0;
  }
}

li {
  position: relative;
}

.brands__list-item {
  padding-top: 10px;
  padding-bottom: 5px;
  overflow: hidden;
  width: fit-content;
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

.listItemActive::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: red;
}

.sparePartsItem-title {
  width: 100%;
  height: 100px;
  background-color: #f8f8f8;
  display: flex;
  margin-bottom: 12px;

  background-color: transparent;
  height: auto;
  color: #adafb5;
  font-size: 14px;

  & > * {
    padding: 5px;
    padding-left: 20px;
  }

  @media (max-width: 700px) {
    display: none;
  }
}

.brands {
  @media (max-width: 1200px) {
    padding: 10px 20px 0 0;
    width: 100%;
    background-color: transparent !important;
  }
}
.brands__list-md {
  display: none;
  width: 100%;
  margin-bottom: 12px;

  @media (max-width: 1200px) and (min-width: 650px) {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 650px) {
    display: none;
  }
}
.list-box {
  list-style: none;
  flex-basis: 30%;
  @media (max-width: 1030px) {
    flex-basis: 33%;
  }
}
</style>
