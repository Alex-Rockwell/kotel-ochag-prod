<!-- <img src="../../assets/images/img1.jpg" alt="">
<img src="../../assets/images/img2.jpg" alt=""> -->

<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :modules="modules"
    :effect="'fade'"
    :navigation="true"
  >
    <!-- :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }" -->

    <div class="img-box">
      <img src="../../assets/images/home/Group1559.svg" alt="" class="image2" />
    </div>

    <swiper-slide>
      <div class="box">
        <div class="box-1"></div>
        <div class="box-2"></div>
        <div class="box-3">
          <img src="../../assets/images/home/foto-10.png" alt="" class="box-3-img">
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="box">
        <div class="box-1"></div>
        <div class="box-2"></div>
        <div class="box-3">
          <img src="../../assets/images/home/foto-9.jpg" alt="" class="box-3-img">
        </div>
      </div>
    </swiper-slide>
    <!-- <RouterLink
      to="/news/rasshirayem_assortiment"
      class="product__btn-order"
       
    >
      Узнать подробнее...
    </RouterLink> -->

    
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
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectFade, Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style scoped lang="scss">
.box {
  display: flex;
  max-height: 445px;
  width: 100%;
  height: 100%;
  max-width: 1700px;
}
.box-1 {
  flex-basis: 40%;
  background-color: green;
}
.box-2 {
  flex-basis: 20%;
  background-color: blue;
}
.box-3 {
  flex-basis: 40%;
  background-color: orange;
}
.box-3-img {
  height: 445px !important;
  max-height: 445px;
  width: auto;
  object-fit: cover;
}

.img-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  height: 100%;
}
.image2 {
  display: block;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  height: auto;
  height: 100%;
  object-fit: cover;
}
.swiper {
  max-width: 100%;
  height: 100%;
  position: relative;
  z-index: 4;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

}

.swiper-slide img {
  display: block;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
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

.product__btn-order {
  display: block;
  padding: 5px 15px;
  background-color: transparent;
  border: none;
  border-radius: 50px;
  color: #e9e9e9;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 5px;
  transition: 0.3s ease;

  position: absolute;
  bottom: 12%;
  right: 65%;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  @media (max-width: 1340px) {
    font-size: 13px;
  }
  @media (max-width: 1120px) {
    font-size: 12px;
  }
  @media (max-width: 1000px) {
    font-size: 12px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
  @media (max-width: 670px) {
    font-size: 8px;
  }
  @media (max-width: 450px) {
    font-size: 5px;
    bottom: 0%;
    right: 59%;
  }
}
</style>
