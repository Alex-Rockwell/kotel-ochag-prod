<template>
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
        @click="
          handleClick('стандарт');
          setFilterBrand(1);
        "
      >
        Стандарт
      </li>
      <li
        class="product-item"
        @click="
          handleClick('стандарт');
          setFilterBrand(1);
          setSubFilter(1);
        "
      >
        Одноконтурные
      </li>
      <li
        class="product-item"
        @click="
          handleClick('стандарт');
          setFilterBrand(1);
          setSubFilter(1);
        "
      >
        Двухконтурные
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentItem = ref("Выберите модель");
const isOpen = ref(false);
function handleClick(val) {
  currentItem.value = val;
  isOpen.value = false;
}
</script>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  display: inline-block;
}
.product-title {
  user-select: none;
  cursor: pointer;
  font-size: 16px;
  color: #007bc5;
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
</style>
