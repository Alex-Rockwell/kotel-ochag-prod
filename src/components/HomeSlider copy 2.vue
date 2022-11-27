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
    class="slider1"
  >
    <!-- :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }" -->

    <div class="img-box">
      <img src="../../assets/images/home/Group1559.svg" alt="" class="image2" />
    </div>

    <swiper-slide>
      <picture class="slide-img">
        <source
          srcset="../../assets/images/home/old10.jpg"
          media="(max-width: 768px)"
        />
        <img srcset="../../assets/images/home/old10.jpg" alt="slide" />
      </picture>
      <div class="product__text-box">
        <div class="product__wrapper">
          <p class="product__text">
            расширяем <br />
            ассортимент <br />
            котел скгз compact <br />
            с автоматикой сабк <br />
          </p>
          <RouterLink
            to="/news/rasshirayem_assortiment"
            class="product__btn-order"
             
          >
            Узнать подробнее...
          </RouterLink>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <picture class="slide-img">
        <source
          srcset="../../assets/images/home/old9.jpg"
          media="(max-width: 768px)"
        />
        <img srcset="../../assets/images/home/old9.jpg" alt="slide" />
      </picture>
      <div class="product__text-box">
        <div class="product__wrapper">
          <p class="product__text">
            компании <br />
            «СервисГаз» <br />
            исполнилось <br />
            26 лет
          </p>
          <RouterLink
            to="/news/rasshirayem_assortiment"
            class="product__btn-order"
             
          >
            Узнать подробнее...
          </RouterLink>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <picture class="slide-img">
        <source
          srcset="../../assets/images/home/old8.jpg"
          media="(max-width: 768px)"
        />
        <img srcset="../../assets/images/home/old8.jpg" alt="slide" />
      </picture>
      <div class="product__text-box">
        <div class="product__wrapper">
          <p class="product__text">
            котел-очаг — <br />
            сердце вашего <br />
            дома
          </p>
          <RouterLink
            to="/news/rasshirayem_assortiment"
            class="product__btn-order"
             
          >
            Узнать подробнее...
          </RouterLink>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <picture class="slide-img">
        <source
          srcset="../../assets/images/home/old7.jpg"
          media="(max-width: 768px)"
        />
        <img srcset="../../assets/images/home/old7.jpg" alt="slide" />
      </picture>
      <div class="product__text-box">
        <div class="product__wrapper">
          <p class="product__text">
            семинары в <br />
            ставропольском крае и <br />
            северокавказском <br />
            регионе
          </p>
          <RouterLink
            to="/news/rasshirayem_assortiment"
            class="product__btn-order"
             
          >
            Узнать подробнее...
          </RouterLink>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <picture class="slide-img">
        <source
          srcset="../../assets/images/home/old6.jpg"
          media="(max-width: 768px)"
        />
        <img srcset="../../assets/images/home/old6.jpg" alt="slide" />
      </picture>
      <div class="product__text-box">
        <div class="product__wrapper">
          <p class="product__text">
            семинар в рамках <br />
            программы <br />
            «обучение <br />
            специалистов»
          </p>
          <RouterLink
            to="/news/rasshirayem_assortiment"
            class="product__btn-order"
             
          >
            Узнать подробнее...
          </RouterLink>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <picture class="slide-img">
        <source
          srcset="../../assets/images/home/old5.jpg"
          media="(max-width: 768px)"
        />
        <img srcset="../../assets/images/home/old5.jpg" alt="slide" />
      </picture>
      <div class="product__text-box">
        <div class="product__wrapper">
          <p class="product__text">
            стань участником <br />
            наших семинаров <br />
            оставив заявку <br />
            на сайте
          </p>
          <RouterLink
            to="/news/rasshirayem_assortiment"
            class="product__btn-order"
             
          >
            Узнать подробнее...
          </RouterLink>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <picture class="slide-img">
        <source
          srcset="../../assets/images/home/old4.jpg"
          media="(max-width: 768px)"
        />
        <img srcset="../../assets/images/home/old4.jpg" alt="slide" />
      </picture>
      <div class="product__text-box">
        <div class="product__wrapper">
          <p class="product__text">
            смк «СервисГаз» <br />
            соответствует <br />
            стандарту iso <br />
            9001:2015
          </p>
          <RouterLink
            to="/news/rasshirayem_assortiment"
            class="product__btn-order"
             
          >
            Узнать подробнее...
          </RouterLink>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <picture class="slide-img">
        <source
          srcset="../../assets/images/home/old3.jpg"
          media="(max-width: 768px)"
        />
        <img srcset="../../assets/images/home/old3.jpg" alt="slide" />
      </picture>
      <div class="product__text-box">
        <div class="product__wrapper">
          <p class="product__text">
            увеличенная гарантия <br />
            на продукцию <br />
            СервисГаз до 5 лет!
          </p>
          <RouterLink
            to="/news/rasshirayem_assortiment"
            class="product__btn-order"
             
          >
            Узнать подробнее...
          </RouterLink>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <picture class="slide-img">
        <source
          srcset="../../assets/images/home/old2.jpg"
          media="(max-width: 768px)"
        />
        <img srcset="../../assets/images/home/old2.jpg" alt="slide" />
      </picture>
      <div class="product__text-box">
        <div class="product__wrapper">
          <p class="product__text">
            СервисГаз <br />
            производитель <br />
            напольного газового <br />
            оборудования <br />
            тм «очаг»
          </p>
          <RouterLink
            to="/news/rasshirayem_assortiment"
            class="product__btn-order"
             
          >
            Узнать подробнее...
          </RouterLink>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <picture class="slide-img">
        <source
          srcset="../../assets/images/home/old1.jpg"
          media="(max-width: 768px)"
        />
        <img srcset="../../assets/images/home/old1.jpg" alt="slide" />
      </picture>
      <div class="product__text-box">
        <div class="product__wrapper">
          <p class="product__text">
            Присоединяйся, <br />
            чтобы знать <br />
            больше <br />
            о котлах «Очаг»
          </p>
          <RouterLink
            to="/news/rasshirayem_assortiment"
            class="product__btn-order"
             
          >
            Узнать подробнее...
          </RouterLink>
        </div>
      </div>
    </swiper-slide>
  </swiper>

  <!-- //////////////////////// < 550px ///////////////////////// -->

  <div class="slider2">
    <div class="slider__logo-box">
      <img
        src="../../assets/images/home/slider-logo.svg"
        alt="logo"
        class="slider__logo"
      />
    </div>
    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="true"
      :modules="modules"
      :effect="'fade'"
      :navigation="true"
      class=""
    >
      <!-- :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }" -->
      <swiper-slide>
        <div class="slide-img">
          <img srcset="../../assets/images/home/foto-10.jpg" alt="slide" />
          <div class="text-box2">
            <p class="slider-text">
              расширяем <br />
              ассортимент <br />
              котел скгз compact <br />
              с автоматикой сабк <br />
            </p>
            <RouterLink
              to="/news/rasshirayem_assortiment"
              class="product__btn-order"
               
            >
              Узнать подробнее...
            </RouterLink>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
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
.slider2 {
  display: none !important;
  @media (max-width: 550px) {
    display: block !important;
  }
  .slider-text {
    font-size: 18px;
  }
  .text-box2 {
    display: block;
    padding: 5px 15px;    
    background: linear-gradient(180deg, #00b2f6 5.92%, #0e83cd 100%);
    border: none;
    color: #e9e9e9;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .slide-img {
    display: block;
  }
  .slider__logo-box {
    padding: 10px;
    // background: linear-gradient(180deg, #00b2f6 5.92%, #0e83cd 50%);
  }
  .slider__logo {
    max-height: 70px;
    width: auto;
    display: block;
    margin: 0 auto;
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
    flex-direction: column !important;
    justify-content: center;
    align-items: center;
    position: relative;
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
  .swiper-pagination-bullet-active {
    color: #fff !important;
  }
  .product__btn-order {
    display: block;
    padding: 5px 0;
    background-color: transparent;
    border: none;
    border-radius: 50px;
    color: #e9e9e9;
    font-weight: 500;
    font-size: 10px;
    margin-bottom: 5px;
    transition: 0.3s ease;

    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  .product__text {
    font-size: 30px;
    font-weight: 500;
    line-height: 1.5;
    font-family: "Lato", sans-serif;
    letter-spacing: 1px;
    margin-bottom: 20px;

    @media (max-width: 550px) {
      font-size: 6px;
    }
  }
}

.slider1 {
  @media (max-width: 550px) {
    display: none !important;
  }
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

.product__text-box {
  display: block;
  padding: 5px 15px;
  border: none;
  color: #e9e9e9;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 5px;
  transition: 0.3s ease;

  text-transform: uppercase;
  text-decoration: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 39%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: linear-gradient(180deg, #00b2f6 5.92%, #0e83cd 100%);
  padding-right: 60px;

  @media (max-width: 1380px) {
    padding-right: 40px;
  }
  @media (max-width: 1000px) {
    padding-right: 20px;
  }
}
.product__wrapper {
  text-align: end;
}
.product__btn-order {
  display: block;
  padding: 5px 0;
  background-color: transparent;
  border: none;
  border-radius: 50px;
  color: #e9e9e9;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
  transition: 0.3s ease;

  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  @media (max-width: 1380px) {
    font-size: 13px;
  }
  @media (max-width: 1150px) {
    font-size: 12px;
  }
  @media (max-width: 920px) {
    font-size: 10px;
  }
  @media (max-width: 840px) {
    font-size: 9px;
  }
  @media (max-width: 670px) {
    font-size: 8px;
  }
  @media (max-width: 450px) {
    font-size: 5px;
  }
}
.product__text {
  font-size: 30px;
  font-weight: 500;
  line-height: 1.5;
  font-family: "Lato", sans-serif;
  letter-spacing: 1px;
  margin-bottom: 20px;

  @media (max-width: 1500px) {
    font-size: 28px;
  }
  @media (max-width: 1450px) {
    font-size: 26px;
  }
  @media (max-width: 1290px) {
    font-size: 24px;
  }
  @media (max-width: 1290px) {
    font-size: 22px;
  }
  @media (max-width: 1290px) {
    font-size: 20px;
  }
  @media (max-width: 1060px) {
    font-size: 18px;
  }
  @media (max-width: 920px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
  @media (max-width: 850px) {
    font-size: 14px;
  }
  @media (max-width: 780px) {
    font-size: 12px;
    margin-bottom: 0;
  }
  @media (max-width: 700px) {
    font-size: 10px;
  }
  @media (max-width: 550px) {
    font-size: 6px;
  }
}
</style>
