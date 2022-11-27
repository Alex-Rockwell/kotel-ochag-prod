<template>
  <section class="toPartners" id="toPartners">
    <div class="container">
      <h2 class="toPartners__title titleH2">Партнёрам</h2>
      <ul class="toPartners__list">
        <li class="toPartners__item">
          <RouterLink to="/contacts" class="toPartners__link"  >
            <div class="toPartners__circle"></div>
            <span class="toPartners__descr">Как стать дилером?</span>
          </RouterLink>
        </li>
        <li class="toPartners__item">
          <RouterLink to="/contacts" class="toPartners__link"  >
            <div class="toPartners__circle"></div>
            <span class="toPartners__descr">Как стать сервисным центром?</span>
          </RouterLink>
        </li>
        <li class="toPartners__item">
          <RouterLink to="/contacts" class="toPartners__link"  >
            <div class="toPartners__circle">
              <div class="toPartners__fire"></div>
              <div class="toPartners__fire"></div>
              <div class="toPartners__fire"></div>
              <div class="toPartners__fire"></div>
              <div class="toPartners__fire"></div>
              <div class="toPartners__fire"></div>
            </div>
            <span class="toPartners__descr"
              >Научно-техническое взаимодействие</span>
          </RouterLink>
        </li>
        <li class="toPartners__item">
          <RouterLink to="/contacts" class="toPartners__link"  >
            <div class="toPartners__circle"></div>
            <span class="toPartners__descr">Рекламная поддержка</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup></script>

<style lang="sass" scoped>
.toPartners
    background-color: #fff

.arrow-box
  height: 50px
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  margin-top: 20px
  @media (max-width: 993px)
    display: none

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

.container2
    margin-left: 107px
    margin-right: 111px
    padding: 0
    max-width: 1702px
    width: auto
    &_pl23
        padding-left: 23px

.wrapper
    display: flex
    position: relative

.show
    display: flex !important

.hide
    display: none !important

.titleH1
    font-size: 24px
    line-height: 29px

.titleH2
    font-size: 36px
    line-height: 44px
    font-weight: bold

.titleH3
    font-size: 24px
    line-height: 29px
    font-weight: bold

.titleH4
    font-size: 16px
    line-height: 20px
    font-weight: bold

.arrowDown
    display: flex
    justify-content: center
    position: absolute
    left: 50%
    transform: translateX(-50%)
    bottom: 30px
    max-width: 36px
    width: 100%
    max-height: 18px
    height: 100%
    object-fit: cover
    cursor: pointer
    z-index: 200

.anchor
    position: absolute
$black: #3C3F47
$blue: #007BC5
$lightblueB: #E5F3FB
$lightblueC: #EFF7FC

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


///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

.toPartners
    position: relative
    padding: 76px 0 111px 0
    &__wrapper
        display: flex
        justify-content: center
    &__list
        display: grid
        grid-template: 170px / repeat(4, 335px)
        justify-content: space-between
        margin-top: 85px
        width: 100%
        list-style: none
    &__item
        text-align: center
        &:nth-child(1)
            .toPartners__circle
                &::before
                    content: ''
                    display: block
                    position: absolute
                    top: 26px
                    left: 21px
                    width: 79px
                    height: 79px
                    background-image: url('../assets/images/main/icons/dealer.svg')
                    animation: dealer 3s linear infinite
        &:nth-child(2)
            .toPartners__circle
                &::before
                    content: ''
                    display: block
                    position: absolute
                    top: 25.5px
                    left: 62px
                    width: 31px
                    height: 30px
                    background-image: url('../assets/images/main/icons/small-gearwheel.svg')
                    animation: rotateLeft 2s linear infinite
                &::after
                    content: ''
                    display: block
                    position: absolute
                    top: 43.3px
                    left: 31.5px
                    width: 43.56px
                    height: 42.58px
                    background-image: url('../assets/images/main/icons/big-gearwheel.svg')
                    animation: rotateRight 2s linear infinite
        &:nth-child(3)
            .toPartners__circle
                position: relative
                &::before
                    content: ''
                    display: block
                    position: absolute
                    top: 32.5px
                    left: 39.62px
                    width: 42px
                    height: 59.66px
                    background-image: url('../assets/images/main/icons/lamp.svg')
                    animation: scaleLamp 0.8s linear infinite
            .toPartners__fire
                &:nth-child(1)
                    position: absolute
                    top: 40px
                    left: 25px
                    width: 8px
                    height: 5px
                    background: url('../assets/images/main/icons/lamp-left1.svg') no-repeat
                    animation: scaleFire 0.8s linear infinite
                &:nth-child(2)
                    position: absolute
                    top: 60px
                    left: 22px
                    width: 8px
                    height: 2px
                    background: url('../assets/images/main/icons/lamp-left2.svg') no-repeat
                    animation: scaleFire 0.8s linear infinite
                &:nth-child(3)
                    position: absolute
                    top: 74px
                    left: 26px
                    width: 8px
                    height: 5px
                    background: url('../assets/images/main/icons/lamp-left3.svg') no-repeat
                    animation: scaleFire 0.8s linear infinite
                &:nth-child(4)
                    position: absolute
                    top: 40px
                    right: 25px
                    width: 8px
                    height: 5px
                    background: url('../assets/images/main/icons/lamp-right1.svg') no-repeat
                    animation: scaleFire 0.8s linear infinite
                &:nth-child(5)
                    position: absolute
                    top: 60px
                    right: 22px
                    width: 8px
                    height: 2px
                    background: url('../assets/images/main/icons/lamp-right2.svg') no-repeat
                    animation: scaleFire 0.8s linear infinite
                &:nth-child(6)
                    position: absolute
                    top: 74px
                    right: 26px
                    width: 8px
                    height: 5px
                    background: url('../assets/images/main/icons/lamp-right3.svg') no-repeat
                    animation: scaleFire 0.8s linear infinite
        &:nth-child(4)
            .toPartners__circle
                &::before
                    content: ''
                    display: block
                    position: absolute
                    top: 27px
                    left: 31.5px
                    width: 63px
                    height: 59.36px
                    background-image: url('../assets/images/main/icons/car.svg')
                    animation: car 2.5s linear infinite
    &__descr
        display: block
        margin-top: 20px
        font-size: 18px
        line-height: 22px
        @include underline
    &__circle
        display: block
        position: relative
        margin: 0 auto
        width: 120px
        height: 120px
        background-color: #00b2f6
        border-radius: 50%

@keyframes rotateLeft
    0%
        transform: rotate(0deg)
    100%
        transform: rotate(360deg)

@keyframes rotateRight
    0%
        transform: rotate(0deg)
    100%
        transform: rotate(-360deg)

@keyframes scaleFire
    0%
        transform: scale(1)
    100%
        transform: scale(1.7)

@keyframes scaleLamp
    0%
        transform: scale(1)
    100%
        transform: scale(1.1)

@keyframes dealer
    0%
        transform: rotate(0deg)
    40%
        transform: rotate(400deg)
    60%
        transform: rotate(320deg)
    80%
        transform: rotate(360deg)
    100%
        transform: rotate(360deg)

@keyframes car
    0%
        left: -100%
    100%
        left: 100%





////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@media (max-width: 2500px)
    .container2
        margin-left: 80px
        margin-right: 80px

    .header
        &__wrapper
            justify-content: space-between
        &__nav
            margin-left: 0
            margin: 0 auto
        &__list
            justify-self: center
        &__item
            &:not(:first-child)
                margin-left: 15px
            &:last-child
                margin-left: 0
                padding: 0
        &__link
            font-size: 13px
            line-height: 16px
        &__instagram
            &-link
                margin-left: 0
                margin-right: 10px
        &__call
            margin-left: 0
            marquee
                font-size: 20px
                line-height: 24px
        &__phone
            margin-left: 0

    .promo
        .promoSlider
            &__item
                &-img
                    margin-top: 40px
                    max-width: 340px
                &-descr
                    font-size: 26px
                    line-height: 33px
                &_new
                    .promoSlider
                        &__item
                            &-img
                                max-width: 225px
                            &-descr
                                &:nth-child(1)
                                    margin-top: 75px
                            &-logo
                                margin-left: 220px

    .sorts
        .heat
            padding-left: 0
            padding-right: 0
            &__wrapper
                padding-left: 160px
                padding-right: 0
            &__img
                margin-left: 0px
            &__list
                margin-left: 130px

    .company
        &__wrapper
            padding: 45px 0 100px 0
        &__descr
            max-width: 1150px

    .partners
        &__list
            grid-template: repeat(1, 150px) / repeat(8, 150px)
            gap: 34px
            max-height: 155px
        &__all
            &-wrapper
                margin-top: 20px
                margin-right: 35px

    .catalogue
        &__list
            grid-template: repeat(1,465px)/repeat(4,23.7%)
            grid-auto-rows: 465px
            grid-auto-columns: 23.7%
        &__item
            &-link
                max-width: 250px
                max-height: 250px
        .slider
            &__item
                &:not(:first-child)
                    margin-left: 0

    .service
        &__map
            max-width: 900px
        &__centres
            &-title
                display: block
            &-show
                margin-top: 10px
                margin-left: 0
            &-website
                &::before
                    height: 17px

    .contacts
        &__map
            max-width: 900px

    .footer
        &__wrapper
            justify-content: space-between
        &__list
            margin-left: 0
            &_1920
                display: none
            &_1600
                display: flex
        &__item
            &:not(:first-child)
                // margin-left: 50px
                margin-left: 48px
            .titleH4
                font-size: 14px
                line-height: 17px

@media (max-width: 1599px)
    .container2
        margin-left: 25px
        margin-right: 25px

    .wrapper
        flex-wrap: wrap

    .header
        &__item
            &:not(:first-child)
                margin-left: 16px
        &__link
            font-size: 13px
            line-height: 16px
        &__instagram
            &-link
                margin-top: 35px
                margin-right: 30px
        &__call
            padding-top: 6px
            font-size: 18px
            line-height: 22px
        &__phone
            width: 62px
            &:hover
                .header__phone-inside
                    &::after,
                    &::before
                        left: 1px

    .promo
        .promoSlider
            &__item
                &_new
                    .promoSlider
                        &__rightpart
                            margin-left: 30px

    .company
        // &__wrapper
        //     padding-right: 15px
        //     padding-bottom: 75px
        //     width: 52%
        //     max-width: none
        // &__insideWrapper
        //     padding-right: 0
        //     padding-bottom: 35px
        // &__info
        //     max-width: 460px

    .partners
        &__wrapper
            width: 48%
        &__list
            grid-template: repeat(1, 140px) / repeat(8, 140px)
            gap: 36px

    .sorts
        .heat
            padding-left: 40px
            padding-right: 30px
            &__wrapper
                padding-left: 80px
        .arrowDown
            left: 52%

    .catalogue
        &__list
            grid-template: repeat(1,450px)/repeat(4,23.5%)
            grid-auto-columns: 23.5%
            grid-auto-rows: 450px
        &__item
            &-link
                max-width: 230px
                max-height: 230px

    .toPartners
        &__list
            grid-template-columns: repeat(4, 275px)
            margin-top: 55px

    .service
        &__centres
            &-call
                display: block
            &-mail
                margin-left: 27px
            &-website
                margin-left: 25px
        .serviceCities
            &__list
                margin-top: 15px
        &__select
            margin-top: 20px
            margin-left: 0
        &__subtitle
            &_secondary
                display: block
        &__map
            margin-left: 30px

    .lib
        &__list
            padding-left: 40px
            padding-right: 40px
        &__img
            display: block
            max-width: 235px
            max-height: 222px
    .modal
        &_lib
            &:nth-of-type(4)
                .modal__container
                    max-width: 1200px


    .contacts__list
        &-rightpart
            // margin-left: 20px

    .footer
        &__list
            &_1600
                justify-content: space-between
        &__item
            &:not(:first-child)
                margin-left: 18px

@media (max-width: 1439px)
    .container2
        margin-left: 50px
        margin-right: 50px

    .container_pl23
        padding-left: 0

    .spinner
        width: 40px
        height: 40px
        border: 6px solid $blue
        &::before
            top: -6px

    .header
        &__logo
            width: 168px
        &__item
            padding: 0 9px
            &:not(:first-child)
                margin-left: 0
        &__link
            font-size: 12px
            line-height: 15px
        &__instagram
            &-link
                margin-top: 33px
                margin-right: 8px
        &__call
            margin-left: 0
            padding-top: 6px
            font-size: 18px
            line-height: 22px
            marquee
                font-size: 18px
                line-height: 22px

    .promo
        height: auto
        &__logo
            margin: 0
            max-width: 271.6px
            max-height: 99.65px
            &-wrapper
                width: 31.7%
                height: auto
            &-title
                margin-top: 44px
                font-size: 18px
                line-height: 24px
        .promoSlider
            &__outerWrapper
                width: 68.3%
            &__wrapper
                height: auto
            &__item
                padding: 10.86px 29px 38px 19px
                &-img
                    margin-top: 0
                    max-width: 326px
                &-logo
                    max-width: 116.11px
                    max-height: 187.41px
                &-descr
                    font-size: 18px
                    line-height: 24px
                &_new
                    .promoSlider
                        &__item
                            &-img
                                max-width: 200px
                            &-descr
                                &:nth-child(1)
                                    font-size: 24px
                                    line-height: 30px
                            &-logo
                                margin-left: 220px
                                max-width: 170px
                                max-height: 60px

    .company
        height: auto
        &__wrapper
            display: block
            position: relative
            padding-top: 50px
            padding-left: 374px
            height: auto
        &__numbers
            display: block
        &__imglogo
            position: absolute
            top: -25px
            left: 100px
            max-width: 165px
            max-height: 265px
        &__info
            max-width: 542px

    .partners
        padding-top: 50px
        &__list
            grid-template: repeat(1, 150px) / repeat(6, 150px)
            gap: 39px
        &__all
            &-wrapper
                margin-right: 40px
        // &__all
        //     position: relative
        //     font-weight: bold
        //     font-size: 16px
        //     line-height: 20px
        //     &-wrapper
        //         margin-right: 65px
        //     &::after
        //         content: ''
        //         display: block
        //         position: absolute
        //         top: 2px
        //         right: -34px
        //         width: 27px
        //         height: 15px
        //         background: url('../assets/images/main/icons/partners-all.svg') center no-repeat

    .sorts
        .tabheader
            &__item
                &:nth-child(1)
                    border-left: none
                &:last-child
                    border-right: none
        .tabcontent
            &__list
                min-height: 603px
            &__item
                &:nth-child(5)
                    .heat__img
                        max-width: 350px
                        max-height: 365px
                        &-link
                            max-width: 375px
        .heat
            display: grid
            grid-template-columns: 380px 327px 372px
            padding-top: 24px
            padding-left: 0
            padding-right: 0
            &__wrapper
                padding-top: 15px
                padding-left: 45px
            &__left
                max-width: none
                min-width: 400px
            &__img
                margin-left: 0px
                max-width: 305px
                max-height: 285px
                &_long
                    max-width: 250px
                    max-height: 360px
                &_extralong
                    max-width: 265px
                    max-height: 435px
                &_ksgz
                    max-width: 355px
                    max-height: 375px
                &-link
                    max-width: 327px
                    width: 100%
                    max-height: 475px
                    height: 100%
            &__list
                margin-left: 80px
                max-width: none

    .catalogue
        &__list
            grid-template: repeat(1, 311.54px)/repeat(4, 23.5%)
            grid-auto-columns: 23.5%
            grid-auto-rows: 311.54px
            column-gap: 17.58px
            row-gap: 24.92px
        &__item
            padding: 20.56px 22.62px 24px 21.18px
            &-link
                max-width: 250px
                max-height: 180px
            &-title
                margin-top: 20px
                font-size: 22.4308px
                line-height: 27px
            &-descr
                margin-top: 5px
                font-size: 8.72308px
                line-height: 11px
                span
                    margin-top: 2px
                    font-size: 8.72308px
                    line-height: 11px
            &-area
                margin-top: 4px
                font-size: 14.9539px
                line-height: 18px
        .slider
            &__wrapper
                margin-left: 50px
            &__nav
                margin-top: 20px

    .shops
        padding-top: 50px
        max-height: 600px
        &__title
            margin-top: 0
        &__list
            max-height: 340px
            height: 100%
        &__item
            &:not(:first-child)
                margin-top: 41px
        &__map
            max-height: 460px

    .toPartners
        padding-top: 50px
        padding-bottom: 100px
        &__list
            margin-top: 40px

    .service
        padding-top: 50px
        &__subtitle
            &_main
                margin-top: 40px
        &__call
            margin-top: 25px
            &-descr
                font-size: 16px
                line-height: 20px
        &__item
            &:not(:first-child)
                margin-left: 40px
            &:last-child
                .service__link
                    margin-left: 0
                    padding-left: 61px
                    max-width: 334px
                &::before
                    left: 15px
                    width: 33px
                    height: 32.5px
                    background: url('../assets/images/main/icons/support-1200.svg') center no-repeat
            &::before
                width: 33px
                height: 41px
                background: url('../assets/images/main/icons/download-1200.svg') center no-repeat
        &__link
            padding-right: 35px
            padding-left: 50.5px
            max-width: 356px
            font-size: 13.9359px
            line-height: 17px
            &_question
                padding-left: 60px
        &__map
            max-width: 675px
            max-height: 459px

    .lib
        padding-top: 50px
        padding-bottom: 80px

    .contacts
        padding-top: 50px
        &__subtitle
            margin-top: 30px
        &__sublist
            &-item
                margin-top: 16px
        &__map
            max-width: 535px
            max-height: 704px

    .footer
        &__call
            margin-top: 45px
        &__list
            justify-content: flex-start
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
    .container2
        &_pl23
            padding-left: 0

    .header
        &__wrapper
            height: 80px
        &__logo
            display: flex
            flex-direction: column
            align-items: center
            margin-top: 3px
            margin-left: -30px
            &-img
                margin-top: 10px
            &-img2
                margin-top: 5px
                margin-left: 0
        &__nav
            margin-top: 0px
        &__item
            padding: 0px 7px
            &:not(:first-child)
                margin-left: 5px
        &__link
            margin-top: 35px
            font-size: 11px
            line-height: 14px
        &__instagram
            &-link
                margin-top: 30px
                margin-right: 10px
        &__call
            display: none
        &__phone
            height: 100%

    .promo
        &__logo
            max-width: 240.6px
            max-height: 88.65px
            &-title
                margin-top: 30px
        .promoSlider
            &__arrow
                &-left
                    left: 25px
                &-right
                    right: 20px
            &__item
                padding-bottom: 20px
                &-img
                    max-width: 265px
                &-logo
                    margin-top: 20px
                    max-width: 90.11px
                    max-height: 144.41px
                &-descr
                    font-size: 16px
                    line-height: 22px
                &_new
                    padding-left: 50px
                    .promoSlider
                        &__item
                            &-img
                                max-width: 160px
                            &-descr
                                &:nth-child(1)
                                    font-size: 24px
                                    line-height: 30px
                            &-logo
                                margin-left: 140px
                                max-width: 180px
                                max-height: 60px
            &__rightpart
                margin-left: 0

    .company
        &__wrapper
            padding-left: 320px
        &__imglogo
            left: 60px
            max-width: 150px

    .partners
        padding-left: 50px
        padding-right: 50px
        width: 100%
        .container2
            margin: 0
        &__wrapper
            padding-bottom: 30px
        &__list
            grid-template: repeat(1, 145px)/repeat(5, 145px)
            justify-content: space-between
        &__item
            &:nth-child(6)
                display: none
        &__all
            &-wrapper
                margin-right: 35px

    .sorts
        padding-top: 40px
        .tabheader
            &__list
                margin-top: 30px
            &__item
                padding: 0 3px
                &-title
                    font-size: 14px
                    line-height: 17px
                &-descr
                    font-size: 12px
                    line-height: 15px
        .tabcontent
            &__list
                min-height: 700px
        .heat
            &__wrapper
                display: none
                padding: 0
                padding-bottom: 130px
                &_992
                    display: block
                    width: 100%
            &__top
                display: flex
                justify-content: space-between
                width: 100%
            &__left
                max-width: 400px
            &__list
                visibility: visible
                margin-top: 20px
                margin-left: 23px
                top: 0
                max-width: none
            &__item
                &:not(:first-child)
                    margin-top: 15px
            &__img
                margin-right: 40px
                max-width: 320px
                max-height: 345px
                &_long
                    max-width: 235px
                    height: auto
                &_extralong
                    max-width: 245px
                    max-height: 465px
            &__bottom
                visibility: visible
                position: relative
                top: 0
                margin-top: 60px
                width: 100%
                transition: 0.6s all 2.0s
                &_animated
                    visibility: hidden
                    top: 70vh
                    &-active
                        visibility: visible
                        top: 0
                &-top
                    display: flex
                    justify-content: space-between
            &__area
                margin-top: 0
            &__model
                margin-top: 0
                margin-right: 185px
            .rangeContainer
                width: 100%
                .range
                    width: 100%

    .catalogue
        &__filter
            width: 120%
        &__list
            grid-template: repeat(1, 311.54px) / repeat(3, 31%)
            grid-auto-columns: 31%
            grid-auto-rows: 311.54px
            gap: 25px
        &__item
            padding-right: 20px
        .slider
            &__wrapper
                margin-left: 35px

    .shops
        padding-top: 50px
        max-height: none
        &__title
            display: block
        &__select
            margin-top: 30px
            margin-left: -10px
        &__info
            // overflow: auto
        &__item
            &-title
                display: block
            &-show
                display: inline-block
                margin-top: 5px
                margin-left: 0
        &__map
            margin-top: 20px
            width: 100%

    .toPartners
        padding-top: 50px
        padding-bottom: 100px
        &__list
            margin-top: 30px
            grid-template-columns: repeat(4, 225px)

    .service
        padding-top: 50px
        &__subtitle
            &_main
                margin-top: 25px
        &__link
            width: auto
        &__wrapper
            margin-top: 45px
        &__select
            margin-left: 0
        &__item
            &-call
                &::before
                    top: -2px
                    left: -25px

    .lib
        padding-top: 50px
        padding-bottom: 100px
        &__list
            padding-right: 0
            padding-left: 0

    .contacts
        padding: 50px 0 80px 0
        &__wrapper
            flex-direction: column
        &__info
            display: flex
            justify-content: space-between
            max-width: none
        &__address
            max-width: 300px
        &__list
            margin-top: 75px
            width: auto
        &__map
            margin-top: 20px
            max-width: none
            width: 100%

    .footer
        &__list
            &_1600
                display: grid
                grid-template-columns: repeat(4, 200px)
                justify-content: space-between
                gap: 20px
        &__item
            &:not(:first-child)
                margin-left: 0

@media (max-width: 991px)
    .container2
        margin-left: 30px
        margin-right: 30px

    .arrowDown
        display: none

    .header
        &__hamburger
            display: block
            position: absolute
            right: 25px
            top: 25px
            width: 24px
            height: 23px
            z-index: 10
            span
                display: block
                margin-bottom: 5px
                width: 100%
                height: 5px
                background-color: #FFFFFF
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
            &-wrapper
                display: block
                position: absolute
                top: 0
                right: 0
                width: 78px
                height: 70px
                background-color: $blue
        &__list
            position: fixed
            flex-direction: column
            justify-content: center
            align-items: left
            flex-wrap: nowrap
            top: 0
            left: -100%
            width: 50%
            height: 100vh
            padding: 30px 24px 36px 19px
            background-color: $blue
            transition: 0.6s all
            opacity: 0.95
            z-index: 11
            &_active
                left: 0
        &__item
            &:not(:first-child)
                margin-top: 0
                margin-left: 0
            &:not(:nth-child(7))
                border-bottom: 1px solid #0897ED
            &:last-child
                border-bottom: none
        &__link
            margin-top: 0
            padding: 30px 5px
            font-size: 14px
            line-height: 17px
            color: #ffffff
        &__wrapper
            justify-content: center
            height: 70px
        &__logo
            flex-direction: row
            justify-content: space-between
            margin: 0
            &-img
                margin-top: 0
            &-img2
                margin-top: 22px
        &__call
            margin-top: 25px
            margin-right: 20px
            &_basic
                display: block
        &__phone
            margin-right: 49px
        //     &_hamburger
        //         display: block
        //         position: relative
        //         margin-top: 0
        //         padding-top: 0
        //         padding-left: 21px
        //         font-size: 20px
        //         line-height: 26px
        //         &::before
        //             content: ''
        //             display: block;
        //             position: absolute
        //             top: 2px
        //             left: -7px
        //             width: 19px
        //             height: 19.2px
        //             background: url(../assets/images/icons/call.svg) center no-repeat

    .main
        position: relative
        z-index: 1

    .promo
        .container2
            margin-right: 0
        &__logo
            max-width: 171.01px
            max-height: 62.74px
            &-title
                margin-top: 15px
                font-size: 16px
                line-height: 20px
        .promoSlider
            &__arrow
                width: 15px
                height: 26px
                &-left
                    background: url('../assets/images/promo/icons/arrow-left_768.svg') center no-repeat
                &-right
                    right: 30px
                    background: url('../assets/images/promo/icons/arrow-right_768.svg') center no-repeat
            &__item
                &-img
                    max-width: 206px
                    font-size: 16px
                    line-height: 20px
                &-logo
                    margin-top: 15px
                    max-width: 73.11px
                    max-height: 118px
                &-descr
                    font-size: 14px
                    line-height: 18px
                &_new
                    .promoSlider
                        &__rightpart
                            margin-left: 15px
                            max-width: 250px
                        &__item
                            &-img
                                margin-top: 40px
                                max-width: 130px
                            &-descr
                                &:nth-child(1)
                                    font-size: 20px
                                    line-height: 24px
                            &-logo
                                margin-left: 120px
                                max-width: 130px
                                max-height: 45px

    .company
        &__wrapper
            padding-top: 25px
            padding-left: 250px
            padding-bottom: 35px
        &__imglogo
            left: 35px
            max-width: 127px
            max-height: 204px
        &__title
            font-size: 24px
            line-height: 29px

    .partners
        padding: 30px
        &__wrapper
            padding-left: 0
        &__list
            grid-template: repeat(1, 120px) / repeat(5, 120px)
            gap: 20px
            max-height: 125px
        &__link
            &-wrapper
                justify-content: center

    .sorts
        &__title
            text-align: center
        .tabheader
            &__list
                display: flex
                justify-content: center
                row-gap: 20px
                margin-top: 15px
            &__item
                display: flex
                justify-content: flex-start
                margin-top: 0 !important
                padding: 10px 15px
                width: auto
                min-height: 48px
                // min-height: 80px !important
                border-bottom: 10px solid transparent
                &_active
                    border-bottom: 10px solid $blue
                &-title
                    display: none
                &-descr
                    font-size: 13px
                    line-height: 18px
                    font-weight: bold
        .tabcontent
            &__list
                min-height: 625px
        .heat
            flex-direction: column
            align-items: center
            padding-bottom: 70px
            &__wrapper
                padding-bottom: 0
            &__left
                display: flex
                flex-direction: column
                align-items: center
                max-width: none
            &__img
                margin-top: 30px
                margin-left: 0
                margin-right: 0
                max-width: 310px
                max-height: 305px
                &_long
                    max-width: 240px
                    max-height: 350px
                &_extralong
                    margin-left: 60px
                    max-width: 180px
            &__list
                margin-top: 25px
                margin-left: 45px
                padding-right: 40px
                max-width: none
            &__bottom
                margin-top: 40px

    .catalogue
        padding: 30px 0 30px 0
        &__wrapper
            // display: block
        .slider
            &__wrapper
                width: 100%
        .filter
            width: 120%
            // display: flex
            // max-width: none
            &__item
                &:not(:first-child)
                    // margin-top: 0
                .filter__checkbox
                    // display: none
                .filter__item
                    &-title
                        // display: none
                .subfilter
                    // display: flex
                    // margin-top: 0
                    // margin-left: 60px
                    &__item
                        &:not(:first-child)
                            // margin-top: 0
                            // margin-left: 20px
                    &__checkbox
                        &-fake
                            // width: 20px
                            // height: 20px
                        &-title
                            // font-size: 18px
                            // line-height: 22px
                            // color: #3C3F47
                &:nth-child(4),
                &:nth-child(5)
                    // display: none
        &__list
            grid-template: repeat(1, 255px) / repeat(3, 32%)
            grid-auto-columns: 32%
            grid-auto-rows:  255px
            gap: 10px
        &__item
            padding: 15.6px 11px 16px 11px
            &-link
                max-width: 190px
                max-height: 120px
            &-title
                margin-top: 5px
                font-size: 24px
                line-height: 29px
            &-descr
                font-size: 11px
                line-height: 13px
                span
                    font-size: 11px
                    line-height: 13px
            &-area
                font-size: 14px
                line-height: 17px

    .shops
        padding-top: 30px
        padding-bottom: 0
        &__title
            display: block
        &__select
            margin-top: 20px
            margin-left: 0
            &-header
                margin-left: -10px
            &-body
                margin-left: 0
        &__list
            margin-top: 0
            max-height: 330px
            overflow: auto
        &__item
            &-website
                display: block
                margin-left: 25px
        &__map
            margin-top: 0px

    .toPartners
        padding: 30px 0 110px 0
        &__title
            text-align: center
        &__list
            grid-template: repeat(1, 150px) / repeat(4, 150px)
            justify-content: center
            margin-top: 40px
            column-gap: 30px
            row-gap: 15px
        &__item
            &:nth-child(4)
                .toPartners__circle
                    &::before
                        animation: car768 2.5s linear infinite
                @keyframes car768
                    0%
                        left: -50%
                    100%
                        left: 85%
        &__descr
            font-size: 16px
            line-height: 20px

    .service
        padding-top: 30px
        padding-bottom: 0
        &__item
            &:nth-child(2)
                margin-left: 0
            &:not(:first-child)
                margin-top: 15px
        &__info
            display: flex
            flex-direction: column
            align-items: center
            max-height: 455px
        &__select
            margin-left: 0
        &__list
            flex-wrap: wrap
            max-height: 375px
        &__info
            align-items: flex-start
        &__item
            &:not(:first-child)
                margin-top: 0
            &:nth-child(2)
                margin-top: 0
                margin-left: 10px
            &:nth-child(3)
                margin-top: 20px
                margin-left: 0px
                &::before
                    left: 5px
                .service__link
                    max-width: 340px
                    margin-left: 0px
                    padding-right: 52px
        &__link
            max-width: 340px
            &__question
                margin-left: 0
        &__centres
            &-title
                display: block
            &-show
                display: block
                margin-top: 10px
                margin-left: 0
            &-address
                margin-top: 10px
        &__map
            margin-left: 0
            max-width: 400px
            width: 100%

    .lib
        padding-top: 30px
        padding-bottom: 90px
        &__title
            text-align: center
        &__list
            display: grid
            grid-template-columns: repeat(4, 160px)
            justify-content: center
            gap: 20px
            margin-top: 35px
        &__img
            margin: 0 auto

    .modal
        &_lib
            &:nth-of-type(4)
                .modal__container
                    max-width: 800px
                    max-height: 600px

    .slider__wrapper_lib
        .slider__img
            max-height: 400px

    .contacts
        padding-top: 30px
        padding-bottom: 0
        &__list
            margin-top: 75px
            max-width: 300px
            &-rightpart
                max-width: 300px
        &__map
            max-height: 329px

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
                background-color: #3C3F47
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
            // left: 0
            left: -100%
            margin-top: 0
            width: 100%
            height: 100vh
            padding: 30px 24px 36px 19px
            background-color: $lightblueB
            transition: 0.6s all
            opacity: 0.95
            z-index: 10
            &_active
                left: 0
            &_1600
                grid-template: repeat(3, minmax(150px, auto))/repeat(3, 200px)
                padding-top: 30px
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
            &::before
                content: ''
                display: block
                position: absolute
                top: -4px
                left: -28px
                width: 14px
                height: 21.5px
                background: url('.../../assets/images/address.svg') center no-repeat
        &__call_burger
            display: block
            margin-top: 10px
            font-size: 24px
            line-height: 29px
            color: $blue
        &__mail
            display: block
            position: relative
            margin-top: 5px
            margin-left: 35px
            color: $blue
            &::before
                content: ''
                display: block
                position: absolute
                top: 1px
                left: -33px
                width: 19px
                height: 13px
                background: url('.../../assets/images/icon-mail-blue.svg') center no-repeat

@media (max-width: 767px)
    .container2
        margin-left: 20px
        margin-right: 20px
        &_pl23
            padding-left: 0

    .titleH2
        font-size: 24px
        line-height: 29px

    .header
        &__phone
            margin-right: 59px

    .promo
        &__logo
            &-title
                font-size: 14px
                line-height: 18px
        .promoSlider
            &__item
                flex-wrap: wrap
                &-img
                    margin: 0 auto
                &-descr
                    margin-top: 55px
                    margin-left: 30px
                &_new
                    padding-left: 20px
                    .promoSlider
                        &__rightpart
                            margin-left: 0
                            max-width: 320px
                        &__item
                            &-img
                                margin-top: 0
                                max-width: 130px
                            &-descr
                                margin-left: 0
                                max-width: 220px
                                &:nth-child(1)
                                    font-size: 16px
                                    line-height: 20px
                            &-logo
                                margin-top: 100px
                                margin-left: 10px
                                max-width: 105px
                                max-height: 35px
            &__rightpart
                margin-top: -45px
                flex-direction: row

    .company
        .container2
            margin-right: 20px
        &__wrapper
            padding-left: 170px
        &__imglogo
            left: 0

    .partners
        padding-top: 30px
        padding-bottom: 30px
        &__wrapper
            padding: 0
        &__list
            grid-template: repeat(1, 110px) / repeat(4, 110px)
            gap: 12px
            max-height: 120px
        &__item
            &:nth-child(5)
                display: none

    .sorts
        padding-top: 23px
        .tabheader
            &__list
                margin-top: 10px
            &__item
                justify-content: center
                padding-left: 10px
                padding-right: 10px
                &-title
                    font-size: 12px
        .tabcontent
            &__list
                min-height: 679px
            &__item
                &:nth-child(5) .heat__img
                    max-width: 220px
                    max-height: 300px
        .heat
            padding-top: 23px
            padding-bottom: 74px
            &__left
                min-width: 300px
                max-width: 300px
            &__img
                max-width: 220px
                max-height: 300px
                margin-left: 20px
                margin-right: 0
                &_long
                    max-width: 205px
                &_extralong
                    max-height: 400px
                &_ksgz
                    max-width: 230px
                    max-height: 250px
            &__item
                &:not(:first-child)
                    margin-top: 20px
            &__model
                margin-right: 60px

    .catalogue
        padding-top: 30px
        padding-bottom: 30px
        &__popular
            margin-left: 20px
        .filter
            width: 140%
            &__checkbox
                &-title
                    font-size: 14px
                    line-height: 17px
        .subfilter
            margin-left: 20px !important
            &__checkbox
                &-title
                    font-size: 14px !important
                    line-height: 17px !important
        &__list
            grid-template: repeat(1, 240px)/repeat(2, 49%)
            grid-auto-rows: 240px
            grid-auto-columns: 49%
        &__item
            &-link
                max-width: 215px
            &-title
                font-size: 22px
                line-height: 27px

    .shops
        padding-top: 30px
        &__title
            margin-top: 0
        &__select
            margin-left: 0
        &__item
            &:not(:first-child)
                margin-top: 35px
            &-call
                display: block
            &-website
                margin-left: 26px
        &__info
            margin-right: 0

    .toPartners
        padding-top: 30px
        padding-bottom: 30px
        &__list
            grid-template: repeat(2, 180px) / repeat(2, 180px)
            justify-content: space-around
            column-gap: 30px
            row-gap: 25px
            margin-top: 30px

    .service
        padding-top: 40px
        &__wrapper
            margin-top: 20px
        &__subtitle
            font-size: 18px
            line-height: 24px
            &_main
                margin-top: 15px
        &__call
            margin-top: 10px
            font-size: 24px
            line-height: 29px
            &-descr
                margin-top: 10px
        &__link
            max-width: 254px !important
            font-size: 12px
            line-height: 15px

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

    .contacts
        padding-top: 30px
        padding-bottom: 0
        &__subtitle
            margin-top: 15px
            font-size: 18px
            line-height: 24px
        &__info
            flex-direction: column
        &__address
            max-width: none
        &__list
            margin-top: 25px
            max-width: none
            &-rightpart
                max-width: none
        &__item
            &:not(:first-child)
                margin-top: 28px
        &__call
            margin-top: 10px
            font-size: 24px
            line-height: 29px
            &-descr
                margin-top: 10px
        &__mail
            margin-top: 10px

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
    .container2
        margin-left: 20px
        margin-right: 20px

    .header
        &__wrapper
            height: 50px
        &__logo
            width: 106px
            &-img
                width: 106px
            &-img2
                margin-top: 15px
                margin-left: 10px
        &__instagram
            &-link
                margin-top: 15px
            &-img
                width: 20px
        &__call
            display: none
        &__phone
            margin-right: 36px
            width: 43px
            &::after
                width: 17px
                height: 17px
                background: url("../../assets/images/icon-header-call-320.svg") center no-repeat
        &__list
            width: 100%
            z-index: 10
        &__hamburger
            top: 17px
            right: 18px
            width: 16.65px
            height: 15.95px
            &-wrapper
                width: 54px
                height: 50px
                z-index: 10
            span
                margin-bottom: 2.78px
                height: 4px
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

    .logo
        &__img
            max-width: 171.01px
            max-height: 62.74px
        &__title
            max-width: 100%
            font-size: 16px
            line-height: 20px
            text-align: center
            font-weight: bold

    .promo
        position: relative
        .container2
            flex-wrap: wrap
            margin: 0
            width: auto
        &__logo
            margin: 0 auto
            &-wrapper
                padding-top: 22px
                padding-bottom: 25px
                width: 100%
            &-title
                max-width: 210px
                font-size: 16px
                line-height: 20px
                text-align: center
        .promoSlider
            &__outerWrapper
                width: 100%
            &__wrapper
                position: static
            &__item
                margin: auto
                padding-left: 0
                padding-right: 0
                &-logo
                    margin: 0 auto
                &-descr
                    margin-top: 20px
                    margin-left: 0
                    text-align: center
                &_new
                    padding-left: 0
                    .promoSlider
                        &__rightpart
                            margin-left: 15px
                            max-width: 95%
                            div
                                order: 2
                                margin-top: 20px
                        &__item
                            &-img
                                max-width: 180px
                            &-descr
                                max-width: 290px
                                &:nth-child(1)
                                    margin-top: 0
                            &-logo
                                order: 1
                                margin: 0 auto
                                max-width: 155px
                                max-height: 60px
            &__arrow
                top: 425px
                &-left
                    left: 20px
                &-right
                    right: 20px
            &__rightpart
                justify-content: center
                flex-wrap: wrap
                margin-top: 0
                max-width: 90%

    .company
        z-index: 0
        &__wrapper
            padding-top: 13px
            padding-left: 0
        &__numbers
            display: flex
            justify-content: center
        &__imglogo
            position: static
        &__title
            margin-top: 35px
            font-size: 18px
            line-height: 24px
        &__descr
            margin-top: 15px

    .partners
        padding: 20px
        &__list
            grid-template: repeat(1, 80px) / repeat(3, 80px)
            gap: 9.67px
            margin-top: 18px
            max-height: 80px
        &__item
            justify-self: center
            &:nth-child(4)
                display: none

    .sorts
        background-color: $lightblueB
        .container2
            margin: 0
            padding: 0 20px
        .tabheader
            &__list
                flex-wrap: wrap
                row-gap: 10px
                margin-top: 20px
            &__item
                margin-top: 0 !important
                min-height: 70px !important
                max-width: none !important
                width: 50%
                border: none
                &:last-child
                    width: 100%
                &_active
                    background-color: $blue
                    .tabheader
                        &__item
                            &-title
                                color: #ffffff
        .tabcontent
            &__item
                &:nth-child(3),
                &:nth-child(4)
                    .heat__bottom-right
                        margin-right: 20px
        .heat
            padding: 30px 0 15px 0
            flex-direction: row
            &__top
                flex-wrap: wrap
                &_320
                    margin: -30px -20px 0 -25px
                    padding: 30px 20px 60px 25px
                    background-color: $lightblueC
            &__title
                max-width: 300px
            &__wrapper
                &_992
                    display: none
                &_320
                    display: block
                    width: 100%
            &__img
                display: block
                margin: 20px auto 0 auto
                max-width: 255px
                position: static
                visibility: visible
                &_long
                    max-width: 173px
                &_extralong
                    max-width: 145px
                    max-height: 250px
            &__bottom
                position: static
                visibility: visible
                margin-top: 20px
                &-left
                    max-width: 110px
                &-right
                    max-width: 120px
                    text-align: right
            &__area,
            &__area-value,
            &__model,
            &__model-value
                font-size: 24px
                line-height: 29px
            &__model
                margin-top: 17px
                margin-right: 0
            &__list
                margin-left: 20px
                width: 100%

    .catalogue
        padding: 20px 0
        &__title
            display: block
        // &__popular
        //     display: block
        //     margin: 20px 0 0 0
        //     font-size: 14px
        //     line-height: 17px
        //     &_hamburger
        //         display: none
        &__wrapper
            display: block
            margin-top: 10px
        .filter
            max-width: none
            width: auto
        &__filter
            flex-wrap: wrap
            margin: -40px -20px 0 -20px !important
            padding: 20px
            max-height: 0
            background-color: $lightblueC
            overflow: hidden
            transition: all 0.4s linear
            &_active
                margin-top: 0 !important
                max-height: 260px
            &-title
                display: block
                position: relative
                margin: 15px -20px 0 -20px
                padding: 15px 20px
                background-color: $lightblueB
                font-weight: bold
                color: #3C3F47
                z-index: 2
                &::after
                    content: ''
                    position: absolute
                    display: block
                    top: 17px
                    right: 20px
                    width: 22px
                    height: 15px
                    background: url('../assets/images/catalogue/icons/filter-arrow.svg') center no-repeat
                    transition: 0.6s all
                &_active
                    &::after
                        transform: rotate(180deg)
            &__item
                display: block !important
                &:not(:nth-child(2))
                    margin-top: 10px
                &-title
                    display: block !important
                    margin-left: 0
            &__checkbox
                display: block !important
        .subfilter
            display: flex
            margin-top: 10px !important
            margin-left: 10px !important
            &__item
                &:not(:first-child)
                    margin-top: 0
                    margin-left: 10px !important
            &__checkbox
                &-fake
                    width: 20px
                    height: 20px
        &__list
            margin-top: 20px
            grid-template: repeat(1, 240px)/repeat(2, 49%)
            grid-auto-rows: 240px
            grid-auto-columns: 49%
            gap: 8px
        &__item
            padding: 13.32px 12px 16px 7px
            &-link
                justify-content: center
                max-width: 245px
            &-img
                max-width: 117px
                max-height: 117px
            &-title
                margin-top: 0
                font-size: 20px
                line-height: 25px
            &-descr
                margin-top: 5px
                span
                    margin-top: 5px
        .slider
            &__wrapper
                margin-left: 0
                // СКРЫТЬ СЛАЙДЕР
                // display: none
            &__nav
                // display: none
                // margin-top: 20px
        &__all
            position: relative
            font-size: 16px
            line-height: 20px
            font-weight: bold
            color: $blue
            &::after
                content: ''
                display: block
                position: absolute
                top: 4px
                right: -33px
                width: 26px
                height: 13px
                background: url('../assets/images/main/icons/catalogue-all.svg') center no-repeat
            &-wrapper
                display: flex
                justify-content: flex-end
                margin-top: 10px
                margin-right: 35px

    .shops
        padding-top: 20px
        .container2
            margin-left: 0
            margin-right: 0
        &__info
            padding-left: 20px
            padding-right: 20px
        &__title
            // display: inline-block
        &__select
            margin-top: 0
            margin-left: 7px
            &-header
                margin-top: 20px
                margin-left: -15px
            &-body
                margin-left: -5px
        &__wrapper
            flex-direction: column
        &__list
            margin-top: 0
            // margin-right: -10px
            padding-right: 10px
            max-height: 315px
            margin-bottom: 15px
        &__item
            &-title
                display: block
            &-show
                display: block
                margin-top: 5px
                margin-left: 0
            &-address
                margin-top: 10px
                &::before
                    top: -2px
                    height: 22.5px
            &-call
                display: block
            &-website
                margin-left: 26px
        &__map
            max-height: 547px
            width: 115%

    .toPartners
        padding: 30px 0
        &__title
            text-align: left
        &__list
            grid-template: repeat(2, 115px) / repeat(2, 140px)
            column-gap: normal
            margin-top: 20px
            row-gap: 10px
        &__item
            &:nth-child(1)
                .toPartners__circle
                    &::before
                        top: 15px
                        left: 13px
                        width: 46.1px
                        height: 46.1px
                        background-image: url('../assets/images/main/icons/dealer-320.svg')
            &:nth-child(2)
                .toPartners__circle
                    &::before
                        top: 19.5px
                        left: 36px
                        width: 19.02px
                        height: 20.42px
                        background-image: url('../assets/images/main/icons/small-gearwheel-320.svg')
                    &::after
                        content: ''
                        display: block
                        position: absolute
                        top: 30.3px
                        left: 17.5px
                        width: 25.41px
                        height: 24.84px
                        background-image: url('../assets/images/main/icons/big-gearwheel-320.svg')
            &:nth-child(4)
                .toPartners__circle
                    &::before
                        top: 17px
                        left: 31.5px
                        width: 37.01px
                        height: 35.63px
                        background-image: url('../assets/images/main/icons/car-320.svg')
            &:nth-child(3)
                .toPartners__circle
                    &::before
                        top: 19.5px
                        left: 23.62px
                        width: 23.86px
                        height: 35.8px
                        background-image: url('../assets/images/main/icons/lamp-320.svg')
                .toPartners__fire
                    &:nth-child(1)
                        position: absolute
                        top: 22px
                        left: 14px
                        width: 8px
                        height: 5px
                        background: url('../assets/images/main/icons/lamp-left1-320.svg') no-repeat
                    &:nth-child(2)
                        position: absolute
                        top: 35px
                        left: 11px
                        width: 8px
                        height: 2px
                        background: url('../assets/images/main/icons/lamp-left2-320.svg') no-repeat
                    &:nth-child(3)
                        position: absolute
                        top: 46px
                        left: 14px
                        width: 8px
                        height: 5px
                        background: url('../assets/images/main/icons/lamp-left3-320.svg') no-repeat
                    &:nth-child(4)
                        position: absolute
                        top: 22px
                        right: 8px
                        width: 8px
                        height: 5px
                        background: url('../assets/images/main/icons/lamp-right1-320.svg') no-repeat
                    &:nth-child(5)
                        position: absolute
                        top: 35px
                        right: 6px
                        width: 8px
                        height: 2px
                        background: url('../assets/images/main/icons/lamp-right2-320.svg') no-repeat
                    &:nth-child(6)
                        position: absolute
                        top: 47px
                        right: 8px
                        width: 8px
                        height: 5px
                        background: url('../assets/images/main/icons/lamp-right3-320.svg') no-repeat
                    @keyframes scaleFire
                        0%
                            transform: scale(1)
                        100%
                            transform: scale(1.5)
        &__circle
            width: 70px
            height: 70px
        &__descr
            margin-top: 5px
            font-size: 12px
            line-height: 15px

    .service
        padding-top: 30px
        .container2
            margin-left: 0
            margin-right: 0
        &__title
            padding: 0 20px
        &__subtitle
            max-width: 300px
            font-size: 18px
            line-height: 24px
            &_main
                margin-top: 15px
                padding: 0 20px
        &__call
            margin-top: 10px
            &-wrapper
                padding: 0 20px
            &-descr
                font-size: 14px
                line-height: 17px
        &__list
            padding: 0 20px
        &__wrapper
            flex-wrap: wrap
        &__link
            max-width: none !important
            width: 100%
            padding-right: 10px
            font-size: 14px
            line-height: 18px
        &__item
            max-width: none !important
            width: 100%
            &:not(:first-child)
                margin-top: 17px
            &:nth-child(2)
                margin-left: 0
            &:last-child
                .service__link
                    margin-left: 0
                &::before
                    left: 8px
                    height: 33.5px
        &__info
            margin-bottom: 15px
            padding: 0 20px
        &__select
            margin-top: 10px
        &__centres
            margin-top: 15px
            &-show
                font-size: 14px
                line-height: 17px
            &-address
                margin-top: 10px
                &::before
                    top: -2px
                    height: 22.5px
            &-call
                margin-top: 10px
            &-mail
                margin-top: 10px
        &__map
            max-height: 547px
            width: 115%

    .modal
        &__container2
            padding: 70px 20px
            height: 100vh
        &_lib
            &:not(:nth-of-type(4))
                .modal__container
                    display: flex
                    flex-direction: column
                    justify-content: center

    .lib
        padding: 30px 0
        &__title
            text-align: left
        &__list
            grid-template-columns: repeat(2, 135px)
            column-gap: 10px
            row-gap: 15px
            margin-top: 25px
        &__item
            font-size: 14px
        &__link
            font-size: 13.1908px
            line-height: 16px
        &__img
            max-height: 130px

    .modal
        &_lib
            &:nth-of-type(4)
                .modal__container
                    max-height: none
                    height: 100vh

    .slider__wrapper_lib
        .slider__prev
            top: 350px
            left: 30px
        .slider__next
            top: 350px
            right: 30px

    .contacts
        padding-top: 25px
        .container2
            margin-left: 0
            margin-right: 0
        &__info
            padding-left: 20px
            padding-right: 20px
        &__subtitle
            margin-top: 20px
        &__address
            margin-top: 10px
            margin-left: 25px
            &::before
                top: -2px
                left: -23px
                height: 22.5px
        &__call
            margin-top: 5px
            &-descr
                font-size: 14px
                line-height: 17px
        &__list
            margin-top: 15px
            margin-left: 0
            padding: 0
            flex-direction: column
            width: 100%
            &-leftpart
                display: grid
                grid-auto-flow: column
                grid-template: repeat(2, minmax(60px, auto)) / repeat(2, 130px)
                column-gap: 10px
            &-rightpart
                margin-top: 0
                margin-left: 0
        &__item
            &:not(:first-child)
                margin-top: 0
            &-title
                font-size: 12px
                line-height: 15px
            &-descr
                margin-top: 7px
        &__sublist
            &-item
                margin-top: 10px
                b
                    font-size: 12px
                    line-height: 15px
                span
                    font-size: 12px
                    line-height: 15px
        &__map
            max-height: 549px
            width: 115%

    .footer
        padding: 0
        height: 50px
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
                background: url("../../assets/images/header-call-320.svg") center no-repeat
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
                background-color: #ffffff
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
