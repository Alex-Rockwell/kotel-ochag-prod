<template>
  <section class="promo container">
    <div class="promo__box">
      <HomeSlider />
    </div>
  </section>
</template>

<script setup>
import HomeSlider from "../components/HomeSlider.vue";
</script>

<style lang="scss" scoped>
.promo__box {
  max-width: 100%;
  max-height: 550px;
  position: relative;

  @media (max-width: 990px) {
    margin-top: -8px;
  }
  @media (max-width: 575px) {
    margin-top: -28px;
  }
  @media (max-width: 550px) {
    max-height: 100vh;
  }
}

</style>
