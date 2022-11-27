<!-- <img src="../../assets/images/img1.jpg" alt="">
<img src="../../assets/images/img2.jpg" alt=""> -->

<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="50"
    :loop="true"
    :navigation="true"
    :modules="modules"
  >
    <!-- :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }" -->
    <!-- :pagination="{
      clickable: true,
    }" -->
    <!-- <swiper-slide v-if="el in imagesInSlide" :key="el">
      <img
        :src="`../../assets/images/product-page/${el}`"
        alt="slide"
        class="slide-img"
      />
    </swiper-slide> -->
    <swiper-slide v-for="el in imagesInSlide" :key="0">
      <img
        :src="`../../assets/images/product-page/${el}`"
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

import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


export default {
  props: ["imagesInSlide"],
  components: {
    Swiper,
    SwiperSlide,
  },
  // data() {
  //   return {
  //     i: {}
  //   }
  // },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  /* width: 955px; */
  height: 100%;
  width: 700px;
}
@media (max-width: 1435px) {
  .swiper {
    max-width: 1000px;
  }
}
@media (max-width: 1140px) {
  .swiper {
    width: 900px;
  }
}
@media (max-width: 1020px) {
  .swiper {
    width: 700px;
  }
}
@media (max-width: 790px) {
  .swiper {
    width: 600px;
  }
}
@media (max-width: 680px) {
  .swiper {
    width: 500px;
  }
}
@media (max-width: 585px) {
  .swiper {
    width: 450px;
  }
}
@media (max-width: 515px) {
  .swiper {
    width: 400px;
  }
}
@media (max-width: 390px) {
  .swiper {
    width: 375px;
  }
}


.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  overflow: hidden;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: auto;
  width: 1100px;
  height: auto;

  user-select: none;
}

.swiper-slide img {
  display: block;
  width: auto;
  max-height: 70vh;
  margin: auto;
  user-select: none;
  // background-color: orange;
  /* height: auto; */
  /* object-fit: cover; */
  /* object-fit: scale-down; */
}

.swiper {
  margin-left: auto;
  margin-right: 0;
}
@media (max-width: 720px) {
  .swiper {
    margin-left: auto;
    margin-right: auto;
  }
}
/* .slide-img {
  width: 100%;
  height: auto;
} */
@media (max-width: 530px) {
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}
.swiper-button-prev::after,
.swiper-button-next::after {
  // color: #0d6efd;
}
/* .swiper-button-prev::after {
}
.swiper-button-next::after {
} */
</style>
