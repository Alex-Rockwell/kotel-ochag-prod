<template>
  <h2 class="title-main container" id="catalogTop">Каталог</h2>
  <section class="shop container">
    <div class="brands">
      <ul class="brands__list">
        <li
          class="filter__item"
          @click.stop.prevent="
            checkAll()
            // getProducts();
          "
        >
          <label for="all" class="filter__checkbox">
            <input
              class="filter__checkbox-real filter__checkbox-real_all"
              type="checkbox"
              name="all"
              id="all"
              v-model="filterCheckboxAllActive"
            />
            <span class="filter__checkbox-fake"></span>
            <span class="filter__checkbox-title">Все</span>
          </label>
        </li>
        <li class="filter__item">
          <label for="filter1" class="filter__checkbox">
            <input
              class="filter__checkbox-real filter__checkbox-real_all"
              type="checkbox"
              name="filter1"
              id="filter1"
              v-model="filterCheckbox1Active"
            />
            <span class="filter__checkbox-fake"></span>
            <span class="filter__checkbox-title">
              Стандарт: стальные газовые котлы
            </span>
          </label>
        </li>
        <li class="filter__item">
          <label for="filter2" class="filter__checkbox">
            <input
              class="filter__checkbox-real filter__checkbox-real_all"
              type="checkbox"
              name="filter2"
              id="filter2"
              v-model="filterCheckbox2Active"
            />
            <span class="filter__checkbox-fake"></span>
            <span class="filter__checkbox-title">
              Премиум: стальные газовые котлы
            </span>
          </label>
        </li>
        <li class="filter__item">
          <label for="filter3" class="filter__checkbox">
            <input
              class="filter__checkbox-real filter__checkbox-real_all"
              type="checkbox"
              name="filter3"
              id="filter3"
              v-model="filterCheckbox3Active"
            />
            <span class="filter__checkbox-fake"></span>
            <span class="filter__checkbox-title">
              Премиум EN: стальные газовые котлы
            </span>
          </label>
        </li>
        <li class="filter__item">
          <label for="filter4" class="filter__checkbox">
            <input
              class="filter__checkbox-real filter__checkbox-real_all"
              type="checkbox"
              name="filter4"
              id="filter4"
              v-model="filterCheckbox4Active"
            />
            <span class="filter__checkbox-fake"></span>
            <span class="filter__checkbox-title">
              КЧГ-EN: чугунные газовые котлы
            </span>
          </label>
        </li>
        <li class="filter__item">
          <label for="filter5" class="filter__checkbox">
            <input
              class="filter__checkbox-real filter__checkbox-real_all"
              type="checkbox"
              name="filter5"
              id="filter5"
              v-model="filterCheckbox5Active"
            />
            <span class="filter__checkbox-fake"></span>
            <span class="filter__checkbox-title">
              Compact: парапетные газовые котлы
            </span>
          </label>
        </li>
        <li class="filter__item">
          <button
            class="submit-btn"
            :class="{ 'submit-btn-notactive': btnNotActive }"
            @click="setFilters()"
          >
            Применить фильтр
          </button>
        </li>
      </ul>

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

      <div class="service__manual-item">
        <RouterLink to="/parts"   class="service__manual-link"
          >Запасные части
        </RouterLink>
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
      </div>
      <div class="service__manual-item service__manual-item--1">
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="download-svg"
          >
            <path
              d="M11.5236 0V15.1176L8.6539 12.2798L7.51562 13.4068L12.3288 18.1665L17.142 13.4068L16.0037 12.2798L13.1339 15.1176V0H11.5236Z"
              fill="#3c3f47"
            />
            <path
              d="M17.9145 6.1744H23.0473V22.4066H1.61029V6.1744H6.74311V4.58105H0V23.9999H24.6576V4.58105H17.9145V6.1744Z"
              fill="#3c3f47"
            />
          </svg>
        </span>
        <a
          href="../../assets/files/price.pdf"
          class="service__manual-link"
          download="Прайслист"
          >Скачать прайс
        </a>
      </div>
    </div>
    <div class="catalog">
      <div class="catalog__container">
        <ProductCard
          class="home-product"
          v-for="element in currentElts"
          :key="element.id"
          :product="element"
        />
      </div>

      <!-- /////////////////// pagination /////////////////// -->

      <div>
        <ul class="pagination">
          <li
            class="pagination__item pagination__item--left"
            :class="{
              'pagination__item--hoverable': isBeginActive,
              'pagination__item--disable': !isBeginActive,
            }"
            @click="navigateToStart()"
          >
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.71401 6.49988L7.80231 1.62545C8.16797 1.275 8.16797 0.706895 7.80231 0.356587C7.43665 0.00613754 6.84368 0.00613754 6.47787 0.356587L0.727266 5.86567C0.544436 6.04091 0.453125 6.27034 0.453125 6.49988C0.453125 6.72951 0.544614 6.9591 0.727266 7.13426L6.47787 12.6433C6.84368 12.9939 7.43668 12.9939 7.80231 12.6433C8.16797 12.293 8.16797 11.7248 7.80231 11.3745L2.71401 6.49988ZM13.632 11.3745C13.9977 11.7248 13.9977 12.293 13.632 12.6433C13.2663 12.9939 12.6735 12.9939 12.3075 12.6433L6.55693 7.13428C6.3741 6.95913 6.28293 6.72953 6.28293 6.49991C6.28293 6.27037 6.37427 6.04077 6.55693 5.8657L12.3075 0.356587C12.6735 0.00613754 13.2663 0.00613754 13.632 0.356587C13.9977 0.706895 13.9977 1.27498 13.632 1.62545L8.54358 6.49988L13.632 11.3745Z"
                fill="black"
              />
            </svg>
          </li>
          <li
            class="pagination__item"
            :class="{
              'pagination__item--hoverable': isBeginActive,
              'pagination__item--disable': !isBeginActive,
            }"
            @click="navigatePrev()"
          >
            <svg
              width="9"
              height="13"
              viewBox="0 0 9 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.932837 7.13428L6.73159 12.6433C7.10046 12.9939 7.69852 12.9939 8.06721 12.6433C8.43593 12.293 8.43593 11.7248 8.06721 11.3745L2.93621 6.49991L8.06706 1.62545C8.43578 1.275 8.43578 0.706895 8.06706 0.356587C7.69834 0.00613754 7.10031 0.00613754 6.73144 0.356587L0.932687 5.86567C0.748326 6.04091 0.65625 6.27034 0.65625 6.49988C0.65625 6.72953 0.748506 6.95913 0.932837 7.13428Z"
                fill="black"
              />
            </svg>
          </li>
          <li
            v-for="el in pageButtons"
            class="pagination__item"
            :class="{
              'pagination__item--active': el == currentPage,
              'pagination__item--hoverable': !(el == currentPage),
            }"
            :key="el"
            @click="navigateToPage(el)"
          >
            {{ el }}
          </li>
          <li
            class="pagination__item"
            :class="{
              'pagination__item--hoverable': isEndActive,
              'pagination__item--disable': !isEndActive,
            }"
            @click="navigateNext()"
          >
            <svg
              width="9"
              height="13"
              viewBox="0 0 9 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.06716 7.13428L2.26841 12.6433C1.89954 12.9939 1.30148 12.9939 0.932791 12.6433C0.56407 12.293 0.56407 11.7248 0.932791 11.3745L6.06379 6.49991L0.93294 1.62545C0.564219 1.275 0.564219 0.706895 0.93294 0.356587C1.30166 0.00613754 1.89969 0.00613754 2.26856 0.356587L8.06731 5.86567C8.25167 6.04091 8.34375 6.27034 8.34375 6.49988C8.34375 6.72953 8.25149 6.95913 8.06716 7.13428Z"
                fill="black"
              />
            </svg>
          </li>
          <li
            class="pagination__item pagination__item--right"
            :class="{
              'pagination__item--hoverable': isEndActive,
              'pagination__item--disable': !isEndActive,
            }"
            @click="navigateToEnd()"
          >
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.286 6.49988L6.19769 1.62545C5.83203 1.275 5.83203 0.706895 6.19769 0.356587C6.56335 0.00613754 7.15632 0.00613754 7.52213 0.356587L13.2727 5.86567C13.4556 6.04091 13.5469 6.27034 13.5469 6.49988C13.5469 6.72951 13.4554 6.9591 13.2727 7.13426L7.52213 12.6433C7.15632 12.9939 6.56332 12.9939 6.19769 12.6433C5.83203 12.293 5.83203 11.7248 6.19769 11.3745L11.286 6.49988ZM0.367995 11.3745C0.00233503 11.7248 0.00233503 12.293 0.367995 12.6433C0.733655 12.9939 1.32645 12.9939 1.69247 12.6433L7.44307 7.13428C7.6259 6.95913 7.71707 6.72953 7.71707 6.49991C7.71707 6.27037 7.62573 6.04077 7.44307 5.8657L1.69247 0.356587C1.32648 0.00613754 0.733655 0.00613754 0.367995 0.356587C0.00233503 0.706895 0.00233503 1.27498 0.367995 1.62545L5.45642 6.49988L0.367995 11.3745Z"
                fill="black"
              />
            </svg>
          </li>
        </ul>
      </div>

      <!-- ////////////////// pagination end ////////////////// -->
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch, watchEffect } from "vue";
import prodData from "../../assets/prodData";
import ProductCard from "../components/ProductCard.vue";

////////////////////////////////// *************

const filterCheckboxAllActive = ref(true);
const filterCheckbox1Active = ref(true);
const filterCheckbox2Active = ref(true);
const filterCheckbox3Active = ref(true);
const filterCheckbox4Active = ref(true);
const filterCheckbox5Active = ref(true);

const checkAll = () => {
  filterCheckboxAllActive.value = !filterCheckboxAllActive.value;
  if (filterCheckboxAllActive.value == true) {
    if (filterCheckbox1Active.value == false) {
      filterCheckbox1Active.value = true;
    }
    if (filterCheckbox2Active.value == false) {
      filterCheckbox2Active.value = true;
    }
    if (filterCheckbox3Active.value == false) {
      filterCheckbox3Active.value = true;
    }
    if (filterCheckbox4Active.value == false) {
      filterCheckbox4Active.value = true;
    }
    if (filterCheckbox5Active.value == false) {
      filterCheckbox5Active.value = true;
    }
  } else if (filterCheckboxAllActive.value == false) {
    if (filterCheckbox1Active.value == true) {
      filterCheckbox1Active.value = false;
    }
    if (filterCheckbox2Active.value == true) {
      filterCheckbox2Active.value = false;
    }
    if (filterCheckbox3Active.value == true) {
      filterCheckbox3Active.value = false;
    }
    if (filterCheckbox4Active.value == true) {
      filterCheckbox4Active.value = false;
    }
    if (filterCheckbox5Active.value == true) {
      filterCheckbox5Active.value = false;
    }
  }
};
const checkCheckboxAll = () => {
  if (
    filterCheckbox1Active.value == true &&
    filterCheckbox2Active.value == true &&
    filterCheckbox3Active.value == true &&
    filterCheckbox4Active.value == true &&
    filterCheckbox5Active.value == true
  ) {
    filterCheckboxAllActive.value = true;
  }
  if (
    filterCheckbox1Active.value == false ||
    filterCheckbox2Active.value == false ||
    filterCheckbox3Active.value == false ||
    filterCheckbox4Active.value == false ||
    filterCheckbox5Active.value == false
  ) {
    filterCheckboxAllActive.value = false;
    btnNotActive.value = true;
  }
  if (
    filterCheckbox1Active.value == true ||
    filterCheckbox2Active.value == true ||
    filterCheckbox3Active.value == true ||
    filterCheckbox4Active.value == true ||
    filterCheckbox5Active.value == true
  ) {
    btnNotActive.value = false;
  }
};

const btnNotActive = ref(false);

watch(
  [
    filterCheckbox1Active,
    filterCheckbox2Active,
    filterCheckbox3Active,
    filterCheckbox4Active,
    filterCheckbox5Active,
  ],
  () => {
    checkCheckboxAll();
  }
);

/////////////////////////////////// ****************

const products = ref([]);
const elements = ref([]);

const setFilters = () => {
  getProducts();
  let filteredElements = [];
  if (filterCheckbox1Active.value == true) {
    let temp1 = products.value.filter((el) => {
      return el.type == 1;
    });
    filteredElements = filteredElements.concat(temp1);
  }
  if (filterCheckbox2Active.value == true) {
    let temp2 = products.value.filter((el) => {
      return el.type == 2;
    });
    filteredElements = filteredElements.concat(temp2);
  }
  if (filterCheckbox3Active.value == true) {
    let temp3 = products.value.filter((el) => {
      return el.type == 3;
    });
    filteredElements = filteredElements.concat(temp3);
  }
  if (filterCheckbox4Active.value == true) {
    let temp4 = products.value.filter((el) => {
      return el.type == 4;
    });
    filteredElements = filteredElements.concat(temp4);
  }
  if (filterCheckbox5Active.value == true) {
    let temp5 = products.value.filter((el) => {
      return el.type == 5;
    });
    filteredElements = filteredElements.concat(temp5);
  }
  elements.value = filteredElements;
  totalElements.value = elements.value.length;
  currentPage.value = 1;
};

const getProducts = () => {
  products.value = prodData;
  elements.value = prodData;
};

const filterBrand = ref("");
const subFilter = ref(0);

const setFilterBrand = (id) => {
  filterBrand.value = id;
  if (filterBrand.value.length > 0) {
    subFilter.value = 0;
  }
};
const setSubFilter = (param) => {
  subFilter.value = param;
};

watch(filterBrand, () => {
  getProducts();
  if (filterBrand.value > 0) {
    elements.value = products.value.filter((el) => {
      return el.type == filterBrand.value;
    });
  }
  totalElements.value = elements.value.length;
  currentPage.value = 1;
});
watch(subFilter, () => {
  elements.value = products.value.filter((el) => {
    return el.type == filterBrand.value;
  });
  if (subFilter.value < 1) {
    return;
  } else {
    if (subFilter.value == 1) {
      elements.value = elements.value.filter((el) => {
        return el.kolichestvoKonturov == "одноконтурный";
      });
    }
    if (subFilter.value == 2) {
      elements.value = elements.value.filter((el) => {
        return el.kolichestvoKonturov == "двухконтурный";
      });
    }
  }
  totalElements.value = elements.value.length;
  currentPage.value = 1;
});

////////////////// dropdown menu /////////////////////

const currentItem = ref("Выберите модель");
const isOpen = ref(false);
function handleClick(val) {
  currentItem.value = val;
  isOpen.value = false;
}

//////////////// pagination start ////////////////////

const setQuantity = () => {
  if (width.value >= 1250) {
    elementsPerPage.value = 8;
  }
  if (width.value < 1250 && width.value > 1080) {
    elementsPerPage.value = 6;
  }
  if (width.value <= 1080) {
    elementsPerPage.value = 8;
  }
};

const elementsPerPage = ref(8);
const totalElements = ref(68);
const pageNumbers = ref([1]);
const currentPage = ref(1);

const indexOfLastElt = ref(1);
const indexOfFirstElt = ref(8);
const currentElts = ref();
const maxPages = ref(8);
const pageButtons = ref([]);

watchEffect(() => {
  pageNumbers.value = [1];
  for (
    let i = 2;
    i <= Math.ceil(totalElements.value / elementsPerPage.value);
    i++
  ) {
    pageNumbers.value.push(i);
  }
  pageButtons.value = pageNumbers.value;
});

const isBeginActive = ref();

watchEffect(() => {
  isBeginActive.value =
    currentPage.value == pageNumbers.value[0] ? false : true;
});

const isEndActive = ref();
watchEffect(() => {
  isEndActive.value =
    pageNumbers.value.length < 2 ||
    currentPage.value == pageNumbers.value[pageNumbers.value.length - 1]
      ? false
      : true;
});

onMounted(() => {
  setQuantity();
  getProducts();
  currentElts.value = elements.value.slice(indexOfFirstElt, indexOfLastElt);
});

watch([elements, currentPage], () => {
  indexOfLastElt.value = currentPage.value * elementsPerPage.value;
  indexOfFirstElt.value = indexOfLastElt.value - elementsPerPage.value;
  currentElts.value = elements.value.slice(
    indexOfFirstElt.value,
    indexOfLastElt.value
  );
  setMaxPages();
});

const setMaxPages = () => {
  if (maxPages.value == 3) {
    if (pageNumbers.value.length > 3) {
      if (currentPage.value == pageNumbers.value[0]) {
        pageButtons.value = pageNumbers.value.slice(0, 3);
      }
      if (
        currentPage.value == pageNumbers.value[pageNumbers.value.length - 1]
      ) {
        pageButtons.value = pageNumbers.value.slice(-3);
      }
      if (
        currentPage.value != pageNumbers.value[0] &&
        currentPage.value != pageNumbers.value[pageNumbers.value.length - 1]
      ) {
        pageButtons.value = [
          currentPage.value - 1,
          currentPage.value,
          currentPage.value + 1,
        ];
      }
    }
  }
  if (maxPages.value == 8) {
    pageButtons.value = pageNumbers.value;
  }
};

const width = ref(window.innerWidth);

function setWidth() {
  width.value = window.innerWidth;
  if (width.value < 1185) {
    maxPages.value = 3;
  } else {
    maxPages.value = 8;
  }
}
onMounted(() => {
  window.addEventListener("resize", setWidth);
  if (window.innerWidth < 900) {
    maxPages.value = 3;
    setMaxPages();
  }
  if (window.innerWidth > 900) {
    maxPages.value = 8;
    setMaxPages();
  }
});

onUnmounted(() => {
  window.removeEventListener("resize", setWidth);
});

watch(maxPages, () => {
  setMaxPages();
});
onMounted(() => {
  setMaxPages();
});

//////////////// pagination end ////////////////////

const scrollIntoView = () => {
  document.getElementById("catalogTop").scrollIntoView({ behavior: "smooth" });
};
const navigateToStart = (el) => {
  currentPage.value = 1;
  scrollIntoView();
};
const navigatePrev = () => {
  currentPage.value -= 1;
  scrollIntoView();
};
const navigateToPage = (el) => {
  currentPage.value = el;
  scrollIntoView();
};
const navigateNext = () => {
  currentPage.value += 1;
  scrollIntoView();
};
const navigateToEnd = () => {
  currentPage.value = pageNumbers.value.length;
  scrollIntoView();
};
</script>

<style lang="scss" scoped>
.filter__item {
  margin-bottom: 20px;
}
.submit-btn {
  display: block;
  padding: 7px 25px;
  border: 1px solid #00b2f6;
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 5px;
  transition: 0.3s ease;
  background-color: #00b2f6;
  color: #fff;
  margin-bottom: 10px !important;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #00b2f6;
  }
  @media (max-width: 520px) {
    font-size: 12px;
  }
}
.submit-btn-notactive {
  pointer-events: none;
}

.filter__checkbox {
  display: block;
  cursor: pointer;
}
.filter__checkbox-real {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  appearance: none;
  &:checked + .filter__checkbox-fake {
    background-color: #f5f5f5;
  }
  &:checked + .filter__checkbox-fake::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15px;
    height: 15px;
    background: url("../../assets/images/main/icons/filter-check.svg") center
      no-repeat;
  }
}
.filter__checkbox-fake {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  border: 1px solid #c2d9e7;
  @media (min-width: 991px) {
    &:hover {
      border: 2px solid #007bc5;
    }
    &:active {
      opacity: 0.5;
    }
  }
}
.filter__checkbox-title {
  margin-left: 5px;
  font-size: 18px;
  line-height: 22px;
  vertical-align: top;
  // @include makeBlue;
}

///////////////////// pagination ////////////////////////////

.pagination {
  padding: 40px 0 100px;
  color: #000;
  display: flex;
  justify-content: flex-end;
  list-style: none;
  column-gap: 5px;
  flex-wrap: wrap;

  @media (max-width: 1400px) {
    padding: 10px 0 100px;
  }
  @media (max-width: 450px) {
    padding-top: 0;
    margin-top: 20px;
  }
}

.pagination__item {
  width: 30px;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  user-select: none;
  // border: 1px solid rgb(217, 217, 217);

  @media (max-width: 375px) {
    width: 35px;
    height: 35px;
  }
  @media (max-width: 335px) {
    width: 33px;
    height: 33px;
  }
}
.pagination__item:hover {
  cursor: pointer;
}

.pagination__item--active {
  color: #fff;
  background-color: #00b2f6;
}
.pagination__item--hoverable:hover {
  background-color: #ededed;
}

.pagination .pagination__item--disable {
  color: #ccc;
  cursor: default;
  pointer-events: none;
}
.pagination__item--disable > * > * {
  fill: #ccc;
}

.pagination__item--left {
  border-radius: 8px 0 0 8px;
}

.pagination__item--right {
  border-radius: 0 8px 8px 0;
}

///////////////////// pagination end ////////////////////////

/// /////////////////////////////////////////

.title-main {
  padding-top: 50px;
  margin-bottom: 20px;
  @media (max-width: 1400px) {
    padding-top: 15px;
    margin-bottom: 20px;
  }
  @media (max-width: 1080px) {
    margin-bottom: 0;
  }
}
.subtitle {
  font-size: 20px;
  font-weight: 700;
  display: block;

  &--link {
    margin-top: 30px;
    font-weight: 400;
    color: inherit;
    text-decoration: none;
    transition: 0.3s ease;

    @media (max-width: 450px) {
      display: none;
    }
  }
  &--link:hover {
    // color: #00B2F6;
    text-decoration: underline;
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
  flex-basis: 280px;
  flex-shrink: 0;

  @media (max-width: 450px) {
    flex-basis: 60px;
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
  }
  @media (max-width: 450px) {
    display: none;
  }
}
.brands__list-item {
  font-size: 18px;
  line-height: 22px;
  // padding: 15px 0;
  // margin-left: 10px;
  border-radius: 3px;
  transition: 0.2s ease;
  padding-bottom: 10px !important;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1430px) {
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
}

.catalog {
  margin-left: 30px;
  padding-left: 30px;
  flex-basis: 100%;

  @media (max-width: 1370px) {
    padding-left: 10px;
    margin-left: 0;
  }
  @media (max-width: 1080px) {
    padding: 0;
  }
}

.catalog__container {
  display: grid;
  grid-template: minmax(350px, auto) / repeat(4, minmax(auto, 25%));
  column-gap: 20px;
  row-gap: 10px;
  max-width: 100%;
  position: relative;

  @media (max-width: 1930px) and (min-width: 1910px) {
    height: 700px;
  }
  @media (max-width: 1370px) and (min-width: 1350px) {
    height: 510px;
  }
  @media (max-width: 1370px) {
    grid-template: minmax(245px, auto) / repeat(4, minmax(auto, 25%));
  }
  @media (max-width: 1250px) {
    grid-template: minmax(300px, auto) / repeat(3, 33%);
    gap: 8px;
  }
  @media (max-width: 1080px) {
    margin-top: 60px;
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
.home-product {
  max-width: 350px;
  max-height: 500px;

  @media (max-width: 480px) {
    padding: 15px 10px 0px;
  }
}

li {
  position: relative;
}
.all {
  display: inline-flex;
  padding-top: 10px;
  padding-bottom: 5px;
  overflow: hidden;
  width: 25% !important;
}
.all::before {
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
.all:hover:before {
  transform: translateX(0);
}
.brands__list-item {
  // display: inline-flex;
  padding-top: 10px;
  padding-bottom: 5px;
  overflow: hidden;
  width: fit-content;

  @media (max-width: 1370px) {
    padding-top: 7px;
  }
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
// .activeAll::after {
//   content: "";
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 2px;
//   background-color: red;
// }

/////////////////////////////////////////////////////
////////////////// custom select ////////////////////
/////////////////////////////////////////////////////

.custom-select {
  position: relative;
  display: inline-block;

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

.service__manual-item {
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: flex-end;

  & > svg {
    margin-right: 15px;
    align-self: center;
    flex-basis: 25px;
    flex-shrink: 0;
  }

  & > svg > * {
    transition: fill 0.3s ease;
  }
  &:hover > svg > * {
    fill: #00b2f6;
  }
  &:hover .service__manual-link {
    color: #00b2f6;
  }
  &:hover .download-svg > * {
    fill: #00b2f6;
  }
  @media (max-width: 450px) {
    display: none;
  }
}
.service__manual-item--1 {
  
}
.download-svg {
  position: relative;
  top: 7px;
  margin-right: 6px;
}
.service__manual-link {
  color: inherit;
  text-decoration: none;
  transition: 0.3s ease;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  max-width: 700px;
  padding-right: 5px;

  @media (max-width: 450px) {
    font-size: 13px;
  }
}

</style>
