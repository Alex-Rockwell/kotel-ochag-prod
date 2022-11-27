<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <a href="/" class="footer__logo">
          <img
            class="footer__logo-img"
            alt="СервисГаз группа компаний"
            src="../../assets/images/logo-ochag.png"
          />
        </a>
        <ul class="footer__list footer__list_1920">
          <li class="footer__item">
            <RouterLink to="/about" class="footer__sublist-title titleH4"
              >О компании</RouterLink
            >
            <ul class="footer__sublist">
              <li class="footer__sublist-item">
                <RouterLink to="/about" class="footer__sublist-link"
                  >О нас</RouterLink
                >
              </li>
              <li class="footer__sublist-item">
                <RouterLink to="/about" class="footer__sublist-link"
                  >Новости</RouterLink
                >
              </li>
              <li class="footer__sublist-item">
                <RouterLink to="/about" class="footer__sublist-link"
                  >Партнеры</RouterLink
                >
              </li>
              <li class="footer__sublist-item">
                <RouterLink to="/about" class="footer__sublist-link"
                  >Команда</RouterLink
                >
              </li>
            </ul>
          </li>
          <li class="footer__item">
            <RouterLink to="/catalog" class="footer__sublist-title titleH4"
              >Продукция</RouterLink
            >
            <ul class="footer__sublist">
              <li class="footer__sublist-item">
                <RouterLink to="/catalog" class="footer__sublist-link"
                  >Стандарт</RouterLink
                >
              </li>
              <li class="footer__sublist-item">
                <RouterLink to="/catalog" class="footer__sublist-link"
                  >Премиум</RouterLink
                >
              </li>
              <li class="footer__sublist-item">
                <RouterLink to="/catalog" class="footer__sublist-link"
                  >Премиум-EN</RouterLink
                >
              </li>
              <li class="footer__sublist-item">
                <RouterLink to="/catalog" class="footer__sublist-link"
                  >КЧГ-EN</RouterLink
                >
              </li>
              <li class="footer__sublist-item">
                <RouterLink to="/catalog" class="footer__sublist-link"
                  >COMPACT</RouterLink
                >
              </li>
              <li class="footer__sublist-item">
                <RouterLink to="/catalog" class="footer__sublist-link"
                  >Каталог запчастей</RouterLink
                >
              </li>
            </ul>
          </li>
          <li class="footer__item">
            <RouterLink to="/clients" class="footer__sublist-title titleH4"
              >Покупателям</RouterLink
            >
            <ul class="footer__sublist">
              <li class="footer__sublist-item">
                <RouterLink to="/clients" class="footer__sublist-link"
                  >Где купить?</RouterLink
                >
              </li>
            </ul>
          </li>
          <li class="footer__item">
            <RouterLink to="/garanty" class="footer__sublist-title titleH4"
              >Гарантия и сервис</RouterLink
            >
            <ul class="footer__sublist">
              <li class="footer__sublist-item">
                <RouterLink to="/garanty" class="footer__sublist-link"
                  >Сервисные центры</RouterLink
                >
                <RouterLink to="/garanty" class="footer__sublist-link"
                  >Тех. документация</RouterLink
                >
                <RouterLink to="/garanty" class="footer__sublist-link"
                  >Видео инструкции</RouterLink
                >
                <RouterLink to="/garanty" class="footer__sublist-link"
                  >Фото инструкции</RouterLink
                >
              </li>
            </ul>
          </li>
          <li class="footer__item">
            <a href="/page/contacts.html" class="footer__sublist-title titleH4"
              >Контакты</a
            >
          </li>
        </ul>
        <a href="tel:88003335103" class="footer__call">8 800 333 51 03</a>
        <a href="tel:88003335103" class="footer__phone">
          <div class="footer__phone-inside"></div>
        </a>
      </div>

      <!-- ////////////////////////////////// <1600 ////////////////////////////////// -->

      <ul
        class="footer__list footer__list_1600"
        :class="{ footer__list_active: isActive }"
        @wheel.prevent
        @touchmove.prevent
        @scroll.prevent
      >
        <li class="footer__item" :class="{ activeLink: activeLink == 'about' }">
          <RouterLink
            to="/about"
            class="footer__sublist-title titleH4"
            @click="getActive()"
            >О компании</RouterLink
          >
          <ul class="footer__sublist">
            <li class="footer__sublist-item">
              <RouterLink
                to="/about#aboutCompany"
                class="footer__sublist-link"
                @click="getActive()"
                >О нас</RouterLink
              >
            </li>
            <li class="footer__sublist-item">
              <RouterLink
                to="/about#aboutNews"
                class="footer__sublist-link"
                @click="getActive()"
                >Новости</RouterLink
              >
            </li>
            <li class="footer__sublist-item">
              <RouterLink
                to="/about#aboutPartners"
                class="footer__sublist-link"
                @click="getActive()"
                >Партнеры</RouterLink
              >
            </li>
          </ul>
        </li>
        <li class="footer__item" :class="{ activeLink: activeLink == 'catalog' }">
          <RouterLink
            to="/catalog"
            class="footer__sublist-title titleH4"
            @click="getActive()"
            >Продукция</RouterLink
          >
          <ul class="footer__sublist">
            <li class="footer__sublist-item">
              <RouterLink
                to="/catalog"
                class="footer__sublist-link"
                @click="getActive()"
                >Стандарт</RouterLink
              >
            </li>
            <li class="footer__sublist-item">
              <RouterLink
                to="/catalog"
                class="footer__sublist-link"
                @click="getActive()"
                >Премиум</RouterLink
              >
            </li>
            <li class="footer__sublist-item">
              <RouterLink
                to="/catalog"
                class="footer__sublist-link"
                @click="getActive()"
                >Премиум-EN</RouterLink
              >
            </li>
            <li class="footer__sublist-item">
              <RouterLink
                to="/catalog"
                class="footer__sublist-link"
                @click="getActive()"
                >КЧГ-EN</RouterLink
              >
            </li>
            <li class="footer__sublist-item">
              <RouterLink
                to="/catalog"
                class="footer__sublist-link"
                @click="getActive()"
                >COMPACT</RouterLink
              >
            </li>
            <li class="footer__sublist-item">
              <RouterLink
                to="/catalog"
                class="footer__sublist-link"
                @click="getActive()"
                >Каталог запчастей</RouterLink
              >
            </li>
          </ul>
        </li>
        <li class="footer__item" :class="{ activeLink: activeLink == 'clients' }">
          <RouterLink
            to="/clients"
            class="footer__sublist-title titleH4"
            @click="getActive()"
            >Покупателям</RouterLink
          >
          <ul class="footer__sublist">
            <li class="footer__sublist-item">
              <RouterLink
                to="/clients"
                class="footer__sublist-link"
                @click="getActive()"
                >Где купить?</RouterLink
              >
            </li>
          </ul>
        </li>
        <li class="footer__item"  :class="{ activeLink: activeLink == 'garanty' }">
          <RouterLink
            to="/garanty"
            class="footer__sublist-title titleH4"
            @click="getActive()"
            >Гарантия и сервис</RouterLink
          >
          <ul class="footer__sublist">
            <li class="footer__sublist-item">
              <RouterLink
                to="/garanty#garantyMap"
                class="footer__sublist-link"
                @click="getActive()"
                >Сервисные центры</RouterLink
              >
            </li>
            <li class="footer__sublist-item">
              <RouterLink
                to="/garanty#garantyDocuments"
                class="footer__sublist-link"
                @click="getActive()"
                >Тех. документация</RouterLink
              >
            </li>
            <li class="footer__sublist-item">
              <RouterLink
                to="/garanty#garantyVideo"
                class="footer__sublist-link"
                @click="getActive()"
                >Видео инструкции</RouterLink
              >
            </li>
            <li class="footer__sublist-item">
              <RouterLink
                to="/garanty#garantyPhoto"
                class="footer__sublist-link"
                @click="getActive()"
                >Фото инструкции</RouterLink
              >
            </li>
          </ul>
        </li>
        <li class="footer__item" :class="{ activeLink: activeLink == 'contacts' }">
          <RouterLink
            to="/contacts"
            class="footer__sublist-title titleH4"
            @click="getActive()"
            >Контакты</RouterLink
          >
          <span class="footer__address"
            >432072, г. Ульяновск, 10-й проезд Инженерный, д. 14</span
          >
          <a href="tel:88003335103" class="footer__call_burger"
            >8 800 333 51 03</a
          >
          <a href="mailto:kotel@sgaz.ru" class="footer__mail"
            >kotel@sgaz.ru</a
          >
        </li>
      </ul>
    </div>
    <div class="footer__hamburger-wrapper">
      <div
        class="footer__hamburger"
        :class="{ footer__hamburger_active: isActive }"
        @click="() => (isActive = !isActive)"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const isActive = ref(false);

const route = useRoute();

const activeLink = ref("home");
const getActive = () => {
  const path = window.location.href;
  if (path.includes("about")) activeLink.value = "about";
  if (path.includes("catalog")) activeLink.value = "catalog";
  if (path.includes("clients")) activeLink.value = "clients";
  if (path.includes("partners")) activeLink.value = "partners";
  if (path.includes("garanty")) activeLink.value = "garanty";
  if (path.includes("library")) activeLink.value = "library";
  if (path.includes("contacts")) activeLink.value = "contacts";
  isActive.value = false;
  return activeLink;
};
watch(route, () => {
  getActive();
});
</script>

<style lang="sass" scoped>

// .activeLink
//   background-color: #f64237
//   & > *
//     color: #fff !important

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

.container
    margin-left: 107px
    margin-right: 111px
    padding: 0
    max-width: 1702px
    width: auto
    &_pl23
        padding-left: 23px

.titleH4
    font-size: 16px
    line-height: 20px
    font-weight: bold

$black: #3C3F47
$blue: #E8E8E8
$lightblueB: #f9f9f9
$lightblueC: #EFF7FC
@mixin underline
    @media (min-width: 991px)
        &:hover
            text-decoration: underline
        &:active
            opacity: 0.5


///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

.footer
    z-index: 0
    padding-bottom: 44px
    background-color: $lightblueB
    &__wrapper
        display: flex
        width: 100%
    &__logo
        margin-top: 9px
        width: 170px
        height: 68px
        cursor: pointer
        &-img2
            margin-top: 22px
            margin-left: 12px
    &__list
        margin-top: 34px
        margin-left: 40px
        list-style: none
        display: flex
        justify-content: center
        margin-right: auto
        margin-left: auto

        &_1600
            display: none
    &__item
        &:not(:first-child)
            margin-left: 25px
    &__sublist
        margin-top: 22px
        list-style: none
        &-title
            font-size: 14px
            line-height: 17px
            @include underline
        &-item

            &:not(:first-child)
                margin-top: 10px
        &-link
            font-size: 12px
            line-height: 1.5
            display: block
            margin-bottom: 10px
            @include underline
    &__call
        position: relative
        margin-top: 34px
        margin-left: 60px
        font-size: 16px
        font-weight: bold
        @include underline
        &::before
            content: ''
            display: block
            position: absolute
            left: -25px
            width: 20px
            height: 20px
            background: url('../../assets/images/icon-phone.svg') center no-repeat
    &__address
        display: none
    &__call_burger
        display: none
    &__mail
        display: none
    &__phone
        display: none
    &__hamburger
        &-wrapper
            z-index: 10
.footer__logo-img
  height: 55px
  width: auto


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@media (max-width: 1919px)
    .container
        margin-left: 80px
        margin-right: 80px

    .footer
        &__wrapper
            justify-content: space-between
        &__list
            margin-left: 0
            &_1920
                display: none
            &_1600
                display: flex
                justify-content: center
        &__item
            &:not(:first-child)
                margin-left: 48px
            .titleH4
                font-size: 14px
                line-height: 17px

@media (max-width: 1599px)
    .container
        margin-left: 25px
        margin-right: 25px

    .footer
        &__list
            &_1600
                justify-content: center

        &__item
            margin-right: 40px
            &:not(:first-child)
                margin-left: 18px

@media (max-width: 1439px)
    .container
        margin-left: 50px
        margin-right: 50px

    .footer
        &__call
            margin-top: 45px
        &__list
            justify-content: center
        &__item
            &:not(:first-child)
                margin-left: 17px
            .titleH4
                font-size: 11.5px
                line-height: 15px
        &__sublist
            &-title
                font-size: 12.5px
                line-height: 16px
            &-link
                font-size: 10.5px
                line-height: 14px

@media (max-width: 1199px)
    .container
        &_pl23
            padding-left: 0

    .footer
        &__list
            &_1600
                display: flex
                justify-content: center
        &__item
            &:not(:first-child)
                margin-left: 0

@media (max-width: 991px)
    .container
        margin-left: 30px
        margin-right: 30px

    .footer
        position: relative
        padding-bottom: 0
        &__hamburger
            display: block
            position: absolute
            right: 20px
            top: 35px
            width: 24px
            height: 23px
            z-index: 10
            span
                display: block
                margin-bottom: 5px
                width: 100%
                height: 5px
                background-color: F64237
                transition: 0.5s all
            &_active
                span
                    margin-bottom: -5px
                    &:nth-child(1)
                        margin-top: 8px
                        transform: rotate(-45deg)
                    &:nth-child(2)
                        display: none
                    &:nth-child(3)
                        transform: rotate(45deg)
        &__call
            margin-top: 40px
            margin-right: 40px
        &__list
            position: fixed
            flex-direction: column
            justify-content: center
            align-items: left
            flex-wrap: nowrap
            top: 0
            left: -100%
            margin-top: 0
            width: 100%
            height: 100vh
            padding: 30px 24px 36px 19px
            background-color: $lightblueB
            transition: 0.6s all
            z-index: 10
            &_active
                left: 0
            &_1600
                display: flex
                justify-content: center
                margin-right: 40px
            &-wrapper
                display: flex
                align-items: center
        &__item
            margin-top: 0
        &__sublist
            &-item
                &:not(:first-child)
                    margin-top: 20px
            &-title
                font-size: 14px
                line-height: 17px
            &-link
                font-size: 12px
                line-height: 15px
        &__address
            display: block
            position: relative
            margin-top: 15px
            margin-left: 30px
            font-size: 13px
            &::before
                content: ''
                display: block
                position: absolute
                top: -4px
                left: -28px
                width: 14px
                height: 21.5px
                background: url('../../assets/images/address.svg') center no-repeat
        &__call_burger
            display: block
            margin-top: 10px
            font-size: 24px
            line-height: 29px
            color: #3c3f47
            @media (max-width: 600)
                font-size: 22px
        &__mail
            display: block
            position: relative
            margin-top: 5px
            margin-left: 35px
            color: #3c3f47
            font-size: 13px
            &::before
                content: ''
                display: block
                position: absolute
                top: 1px
                left: -33px
                width: 19px
                height: 13px
                background: url('../../assets/images/icon-mail-blue.svg') center no-repeat

@media (max-width: 767px)
    .container
        margin-left: 20px
        margin-right: 20px
        &_pl23
            padding-left: 0

    .footer
        position: relative
        &__list
            display: flex
            flex-direction: column
            padding-top: 25px
            padding-left: 32px
            padding-right: 39px
        &__item
            &:not(:first-child)
                margin-top: -20px !important
            &:nth-child(4)
                display: block
            &:not(:last-child)
                border-bottom: 1px solid #D1DFEC
        &__sublist
            display: none
            &-title
                display: inline-block
                padding: 25px 5px
                font-weight: normal
                font-size: 14px
                line-height: 17px

@media (max-width: 575px)
    .container
        margin-left: 20px
        margin-right: 20px

    .footer
        padding: 0
        height: 50px
        &__item
            padding-left: 20px
            width: 100%
        &__logo
            margin-top: 4px
            height: 46px
            &-img
                width: 107px
            &-img2
                margin-top: 15px
                margin-left: 10px
        &__call
            display: none
        &__list
            margin-top: 0
            &_1600
                display: flex
                flex-direction: column
                padding-left: 10px
                padding-right: 10px
                width: 100%
                padding: 30px 20px
        &__phone
            display: block
            position: relative
            margin-right: 36px
            width: 43px
            height: 50px
            background-color: $blue
            &::after
                content: ''
                display: block
                position: absolute
                top: 50%
                left: 50%
                transform: translateX(-50%) translateY(-50%)
                width: 17px
                height: 17px
                background: url("../../assets/images/icon-header-call-320.svg") center no-repeat
        &__address
            &::before
                height: 22.5px
        &__hamburger
            top: 17px
            right: 18px
            width: 16.65px
            height: 15.95px
            &-wrapper
                position: absolute
                top: 0
                right: 0
                width: 54px
                height: 50px
                background-color: $blue
            span
                margin-bottom: 2.78px
                height: 4px
                background-color: #F64237

            &_active
                span
                    margin-bottom: -5px
                    &:nth-child(1)
                        margin-top: 8px
                        transform: rotate(-45deg)
                    &:nth-child(2)
                        display: none
                    &:nth-child(3)
                        margin-top: 1px
                        transform: rotate(45deg)
</style>
