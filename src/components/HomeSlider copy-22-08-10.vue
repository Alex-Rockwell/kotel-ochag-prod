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
      <picture class="slide-img">
        <source
          srcset="../../assets/images/home/promoSlide1-sm.webp"
          media="(max-width: 768px)"
        />
        <img srcset="../../assets/images/home/promoSlide1.jpg" alt="slide" />
      </picture>
      <!-- class="slide-img" -->
    </swiper-slide>
    <swiper-slide>
      <picture class="slide-img">
        <source
          srcset="../../assets/images/home/promoSlide2-sm.webp"
          media="(max-width: 768px)"
        />
        <img srcset="../../assets/images/home/promoSlide2.jpg" alt="slide" />
      </picture>
    </swiper-slide>
    <swiper-slide>
      <picture class="slide-img">
        <source
          srcset="../../assets/images/home/promoSlide3-sm.webp"
          media="(max-width: 768px)"
        />
        <img srcset="../../assets/images/home/promoSlide3.jpg" alt="slide" />
      </picture>
    </swiper-slide>
    <swiper-slide>
      <picture class="slide-img">
        <source
          srcset="../../assets/images/home/promoSlide4-sm.webp"
          media="(max-width: 768px)"
        />
        <img srcset="../../assets/images/home/promoSlide4.jpg" alt="slide" />
      </picture>
    </swiper-slide>
    <swiper-slide>
      <div class="oldslide">
        <div class="oldslide__leftbox">

        </div>
        <div class="oldslide__rightbox">
          
        </div>
      </div>
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
  max-width: 100%;
  height: 100%;
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
  height: auto;
  height: 100%;
  object-fit: cover;
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

@media (max-width: 530px) {
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}
.swiper-pagination-bullet-active {
  color: #fff !important;
}
</style>
