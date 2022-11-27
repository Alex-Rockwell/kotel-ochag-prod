<template>
  <button class="main-btn">
    <slot></slot>
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
.main-btn {
  display: inline-block;
  margin-top: 15px;
  padding: 15px 40px 15px 50px;
  width: 264px;
  height: 50px;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  background-color: #007bc5;
  border: none;
  outline: none;

  &:hover {
    background-color: #19a0f3;
    color: #ffffff;
    cursor: pointer;
  }
  &:active {
    opacity: 0.7;
  }
}

</style>
