<template>
  <section class="container">
    <section class="lib">
      <div class="container container_pl23">
        <h2 class="lib__title titleH2" id="garantyDocuments">Библиотека</h2>
        <ul class="lib__list">
          <li class="lib__item manual" @click="() => (isOpen1 = true)">
            <img src="../../assets/images/garanty/sg-logo.png" class="lib__item-logo" alt="Руководства по эксплуатации">
            <p>Руководства по эксплуатации</p>
          </li>
          <li class="lib__item certificate" @click="() => (isOpen2 = true)">
            <img src="../../assets/images/garanty/sg-logo.png" class="lib__item-logo" alt="Сертификаты">
            <p>Сертификаты</p>
          </li>
        </ul>
      </div>
      <LibraryModal1 :isOpen="isOpen1" @closeModal="() => (isOpen1 = false)" />
      <LibraryModal2 :isOpen="isOpen2" @closeModal="() => (isOpen2 = false)" />
      <LibraryModal3 :isOpen="isOpen3" @closeModal="() => (isOpen3 = false)" />
      <LibraryModal4 :isOpen="isOpen4" @closeModal="() => (isOpen4 = false)" />
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";
import LibraryModal1 from "../components/LibraryModal1.vue";
import LibraryModal2 from "../components/LibraryModal2.vue";
import LibraryModal3 from "../components/LibraryModal3.vue";
import LibraryModal4 from "../components/LibraryModal4.vue";
const isOpen1 = ref(false);
const isOpen2 = ref(false);
const isOpen3 = ref(false);
const isOpen4 = ref(false);
</script>

<style lang="sass" scoped>


h1, h2, h3, h4, h5, h6
    margin: 0
    padding: 0
    font-size: inherit
    font-weight: normal
    line-height: inherit
    color: inherit

a
    display: inline-block
    text-decoration: none
    color: inherit
    &:hover
        color: inherit

ul
    margin-bottom: 0
    padding-left: 0

li
    list-style: none

p
    margin-bottom: 0

.titleH2
    font-size: 36px
    line-height: 44px
    font-weight: bold


@mixin underline
    @media (min-width: 991px)
        &:hover
            text-decoration: underline
        &:active
            opacity: 0.5

@mixin makeBlue
    @media (min-width: 991px)
        &:hover
            color: $blue
        &:active
            opacity: 0.5

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

.lib
    position: relative
    padding: 0 0 0 0
    margin-top: 80px
    margin-bottom: 80px

    &__list
        display: flex
        justify-content: flex-start
        margin-top: 46px
        list-style: none
    &__item
        width: 48%
        height: 360px
        font-size: 18px
        text-align: center
        cursor: pointer
        margin-right: 100px
        display: flex
        justify-content: center
        align-items: center
        position: relative
        box-shadow: 0px 4px 24px rgb(0 0 0 / 25%)
    &__link
        font-size: 18px
        line-height: 22px
    &__img
        margin: 0 auto
        max-width: 696px
        width: 100%
        max-height: 363px
        height: 100%
        object-fit: cover
    &__item.manual
        background: url(../../assets/images/garanty/manual.jpg) no-repeat
        background-size: 50% auto
        background-position: top right
        background-color: #c8e8fd
    &__item.certificate
        background: url(../../assets/images/garanty/cert.jpg) no-repeat
        background-size: 50% auto
        background-position: top right
        background-color: #f0e9d3
    &__item .lib__item-logo
        width: 100px
        height: auto
        position: absolute
        top: 30px
        left: 30px
    &__item p
        font-size: 26px
        font-weight: 700
        color: #007bbc
        background: #ffffff
        position: relative
        z-index: 1
        border-radius: 10px
        padding: 5px 5px
        box-shadow: 0px 4px 24px rgb(0 0 0 / 25%)
        


//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////



@media (max-width: 1599px)
    .lib
        &__list
            padding-left: 40px
            padding-right: 40px
        &__img
            display: block
            // max-width: 235px
            // max-height: 222px
        &__item
            height: 300px

@media (max-width: 1439px)
    .container_pl23
        padding-left: 0
        padding-right: 0

    .lib
        padding-top: 50px
        padding-bottom: 80px

@media (max-width: 1399px)
    .lib
        &__item
            height: 250px
            margin-right: 30px
        &__item p
            font-size: 22px

@media (max-width: 1199px)
    .lib
        padding-top: 50px
        padding-bottom: 100px
        &__list
            padding-right: 0
            padding-left: 0
            padding-inline-start: 0px

@media (max-width: 991px)
    .lib
        padding-top: 30px
        padding-bottom: 90px
        &__title
            text-align: center
        &__list
            display: flex
            justify-content: flex-start
            flex-wrap: wrap
            margin-top: 35px
        &__img
            margin: 0 auto
        &__item
            width: 100%
            margin-bottom: 35px

@media (max-width: 767px)

    .titleH2
        font-size: 24px
        line-height: 29px

    .lib
        padding-top: 30px
        padding-bottom: 50px
        &__list
            grid-template-columns: repeat(2, 260px)
            margin-top: 30px
            column-gap: 20px
            row-gap: 50px
            margin-top: 20px
        &__img
            margin: 0 auto
            max-width: 185px
        &__link
            font-size: 16px
            line-height: 20px

@media (max-width: 575px)
    .lib
        padding: 0
        &__title
            text-align: left
        &__list
            grid-template-columns: 1fr
            column-gap: 10px
            row-gap: 15px
            margin-top: 25px
        &__item
            font-size: 14px
            margin-right: 0
        &__link
            font-size: 13.1908px
            line-height: 16px
        &__img
            max-height: 130px
            max-width: 280px

@media (max-width: 449px)
    .lib
        &__item p
            font-size: 18px

@media (max-width: 399px)
    .lib
        &__item p
            max-width: 90%
            font-size: 16px
</style>
