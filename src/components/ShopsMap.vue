<template>
  <section class="shops-section">
    <div class="shops container" id="homeMap">
      <div class="shops__text-box" :class="{ OneItem: isOneItem }">
        <div class="select">
          <h1 class="title-main">Где купить</h1>
          <CustomSelectMap
            @selected="
              (current) =>
                (selectedRegion = placesData.find(
                  (el) => el.regionId == current.regionId
                ))
            "
          />
        </div>
        <div class="shops__text-container">
          <div
            class="shops__text"
            v-for="el in selectedRegion.shops"
            :key="el.shopId"
          >
            <h3 class="shopName">{{ el.shopName }}</h3>
            <button class="shop__btn-show" @click="handleClick(el)">
              Показать на карте
            </button>
            <h3 class="shopAdress">{{ el.cityName }}, {{ el.shopAdress }}</h3>
            <h3 v-if="el.shopTime" class="shopTime">Режим работы: {{ el.shopTime }}</h3>
            <div class="adress-box">
              <div class="phone-box">
                <a
                  v-if="el.shopPhone"
                  class="shopPhone"
                  :href="`tel:${el.shopPhone}`"
                  >{{ el.shopPhone }}</a
                >
                <a
                  v-if="el.shopPhone2"
                  class="shopPhone"
                  :href="`tel:${el.shopPhone}`"
                >
                  {{ el.shopPhone2 }}</a
                >
              </div>
              <div class="site-box">
                <a
                  v-if="el.shopSite"
                  class="shopSite"
                  :href="el.shopSite"
                  target="_blank"
                >
                  {{ el.shopSite }}
                </a>
                <br v-if="el.shopSite" />
                <a
                  v-if="el.shopMail"
                  class="shopMail"
                  :href="`mailto:${el.shopMail}`"
                >
                  {{ el.shopMail }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shops__map-box">
        <MapTest :coords="coords" :markerText="markerText" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
import CustomSelectMap from "./CustomSelectMapShops.vue";
import placesData from "../../assets/placesShops";
import MapTest from "./MapTest.vue";

const initial = placesData.find((el) => el.regionId == 73);

const selectedRegion = ref(initial);

const coords = ref([54.338229, 48.549288]);

const markerText = ref('Газовик73');

const handleClick = (el) => {
  coords.value = el.shopCoords;
  markerText.value = el.shopName;
};

const isOneItem = ref(selectedRegion.value.shops.length < 2)
watch(selectedRegion, () => {
  isOneItem.value = selectedRegion.value.shops.length < 2;
})

</script>

<style lang="scss" scoped>
.title-main {
  display: inline-block;
  margin-right: 40px;
}
.shops-section {
  // background-color: #f9f9f9;;
}
.select-title {
  font-size: 24px;
  line-height: 29px;
  display: inline-block;
  margin-right: 30px;

  @media (max-width: 820px) {
    margin-bottom: 10px;
  }
}
.shops {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  padding-top: 65px;

  @media (max-width: 880px) {
    flex-direction: column;
  }
}
.shops__text-box {
  // background-color: rgb(255, 255, 255);
  padding: 20px;
  flex-basis: 40%;
  max-height: 500px;

  @media (max-width: 1440px) {
    flex-basis: 50%;
    max-height: 460px;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
}
.shops__text-container {
  height: 590px;
  overflow: auto;

  @media (max-width: 1440px) {
    flex-basis: 50%;
    max-height: 420px;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #cccccc;
    border-radius: 2vw;
  }
  &::-webkit-scrollbar-track {
    background-color: #ffffff;
    border-radius: 0 0 8px 0;
    margin-block: 6px;
    border: solid 1px #e2e2e2;
    border-radius: 2vw;
  }  
}
.shops__map-box {
  // background-color: rgb(255, 255, 255);
  flex-basis: 60%;
  padding-top: 50px;
  padding-bottom: 50px;

  @media (max-width: 1600px) {
    flex-basis: 50%;
  }
}

.shops__map {
  @media (max-width: 750px) {
  }
}
.shops__text {
  padding: 10px;
  padding-bottom: 0;
  color: rgb(60, 63, 71);
}
.shopName {
  font-size: 16px;
  font-weight: 700;
  margin-top: 22px;
  display: inline-block;
}
.shop__btn-show {
  margin-left: 15px;
  background-color: transparent;
  color: #007bc5;
  border: none;
  outline: 0;
}
.shop__btn-show:hover {
  cursor: pointer;
}
.shopAdress {
  font-size: 14px;
  font-weight: 400;
  padding-left: 25px;
  position: relative;
  margin-top: 15px;
  margin-bottom: 0;
}
.shopAdress::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 14px;
  height: 22px;
  background: url(../../assets/images/address.svg) center no-repeat;
}
.shopTime {
  font-size: 14px;
  font-weight: 400;
  // margin-bottom: 15px;
  margin-top: 10px;
}
.shopPhone {
  font-size: 14px;
  font-weight: 400;
  padding-left: 25px;
  position: relative;
  color: rgb(60, 63, 71);
  text-decoration: none;
  margin-top: 10px;
  // margin-bottom: 10px;
  margin-right: 40px;
  display: block;

  @media (max-width: 900px) {
  }
}
.shopPhone::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 19px;
  height: 19px;
  background: url(../../assets/images/icon-phone.svg) center no-repeat;
}
.shopSite {
  font-size: 14px;
  font-weight: 400;
  padding-left: 25px;
  position: relative;
  margin-top: 10px;
  color: rgb(60, 63, 71);
  text-decoration: none;
  display: inline-block;
  // margin-right: 10px;
}
.shopSite::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  background: url(../../assets/images/icon-website.svg) center no-repeat;
}
.shopMail {
  font-size: 14px;
  font-weight: 400;
  padding-left: 25px;
  position: relative;
  margin-top: 10px;
  color: rgb(60, 63, 71);
  text-decoration: none;
  display: inline-block;
}
.shopMail::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  background: url(../../assets/images/main/icons/mail.svg) center no-repeat;
}
.shops__map {
  width: 100%;
  height: 100%;
}
.adress-box {
  display: flex;
  justify-content: space-between;

  @media (max-width: 1445px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
}
.phone-box {
}
.site-box {
  padding-right: 50px;
}

.OneItem {
  @media (max-width: 880px) {
    max-height: 280px;
  }
}

</style>
