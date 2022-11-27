<!-- <img src="../../assets/images/img1.jpg" alt="">
<img src="../../assets/images/img2.jpg" alt=""> -->

<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    :modules="modules"
  >
    <!-- :navigation="true" -->
    <swiper-slide>
      <img
        src="../../assets/images/about/about-sllider-1.png"
        alt="slide"
        class="slide-img"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="../../assets/images/about/about-sllider-2.png"
        alt="slide"
        class="slide-img"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="../../assets/images/about/about-sllider-3.png"
        alt="slide"
        class="slide-img"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="../../assets/images/about/about-sllider-4.png"
        alt="slide"
        class="slide-img"
      />
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// import { ref } from "vue";

// const width1 = ref(window.innerWidth)

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
.swiper {
  max-width: 1450px;
  max-height: 750px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  /* margin-left: auto;
  margin-right: 0; */
}
@media (max-width: 720px) {
  .swiper {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 530px) {
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}
.swiper-pagination {
  max-width: 100% !important;
}
.swiper-pagination-bullet-active {
  color: #fff !important;
}

</style>
