<template>
  <div class="">
    <HomePromo />
    <DigitsComp /> 
    <BoilerFilter />
    <HomeCatalogSection />
    <HomeCompany />
    <HomeNews />
    <HomeShopsMap />
    <HomeToPartners />
    <div class="home-garanty" id="homeGarantyHeader">
      <GarantyHeader />
      <GarantyMap />
    </div>
    <HomeDocuments />
    <ContactsComponent id="homeContacts" />
  </div>
</template>

<script setup>
import BoilerFilter from "../components/BoilerFilter.vue";
import HomeCatalogSection from "../components/HomeCatalogSection.vue";
import HomeCompany from "../components/HomeCompany.vue";
import HomePromo from "../components/HomePromo.vue";
import HomeToPartners from "../components/HomeToPartners.vue";
import GarantyHeader from "../components/GarantyHeader.vue";
import GarantyMap from "../components/GarantyMap.vue";
import HomeShopsMap from "../components/HomeShopsMap.vue";
import ContactsComponent from "../components/ContactsComponent.vue";
import HomeNews from "../components/HomeNews.vue";
import HomeDocuments from "../components/HomeDocuments.vue";
import DigitsComp from "../components/DigitsComp.vue";
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
.arrow-box {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 993px) {
    display: none;
  }
}
.home-garanty {
  background-color: #F9F9F9;
  margin-bottom: 150px;

  @media (max-width: 450px) {
    margin-bottom: 80px;
  }
}
</style>
