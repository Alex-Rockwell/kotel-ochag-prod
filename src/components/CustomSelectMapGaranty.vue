<template>
  <div class="custom-select" ref="customSelect">
    <div
      class="region-title"
      :class="{ 'region-title--active': isOpen }"
      @click="isOpen = !isOpen"
    >
      {{ currentItem.regionName }}
    </div>
    <ul class="region-list" :class="{ isOpen: isOpen }">
      <li
        v-for="el in placesData"
        class="region-item"
        :key="el.regionId"
        @click="handleClick(el.regionId)"
      >
        {{ el.regionName }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import placesData from "../../assets/placesService";
import useClickOutside from "../hooks/useClickOutside";

function SortArray(x, y) {
  if (x.regionName < y.regionName) {
    return -1;
  }
  if (x.regionName > y.regionName) {
    return 1;
  }
  return 0;
}

onMounted(() => {
  placesData.sort(SortArray);
});

const emit = defineEmits(["selected"]);

const currentItem = ref();
const isOpen = ref(false);
currentItem.value = placesData.find((el) => el.regionId == 73);
function handleClick(regionId) {
  currentItem.value = placesData.find((el) => el.regionId == regionId);
  isOpen.value = false;
  emit("selected", currentItem.value);
}

const customSelect = ref();
useClickOutside(customSelect, () => (isOpen.value = false));

</script>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  display: inline-block;
}
.region-title {
  user-select: none;
  cursor: pointer;
  font-size: 16px;
  color: #007bc5;
  position: relative;
  display: inline-block;
}
.region-title::after {
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
.region-title--active::after {
  transform: rotate(180deg);
}
.region-list {
  list-style: none;
  border: 1px solid #bbb;
  border-radius: 5px;
  display: none;
  user-select: none;
  position: absolute;
  top: 40px;
  left: 0;
  background-color: #fff;
  width: 315px;
  z-index: 5;
  height: 45vh;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #c0c0c0;
    border-radius: 2vw;
  }
  &::-webkit-scrollbar-track {
    background-color: #ffffff;
    border-radius: 0 0 8px 0;
    margin-block: 6px;
  }
}

.isOpen {
  display: block;
}
.region-item {
  padding: 10px;

  &:hover {
    background-color: #ccc;
    cursor: pointer;
  }
}
</style>
