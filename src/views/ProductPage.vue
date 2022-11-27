<template>
  <div>
    <section class="boiler">
      <div class="container">
        <div class="boiler__top">
          <div class="image__container">
            <img
              :src="`../../assets/images/product-page/${currImg}`"
              alt="Котел Очаг"
              class="boiler__img boiler__img_extralong"
              @click="() => (isOpenLibrarySlider = true)"
            />
            <div class="more-images-box" v-if="imgArrayLength > 1">
              <div
                v-if="im1"
                class="image-secondary-box"
                :class="{ 'image-secondary-box--active': currImg == im1 }"
              >
                <img
                  :src="`../../assets/images/product-page/${im1}`"
                  alt="Котел Очаг"
                  class="image-secondary"
                  @click="() => (currImg = im1)"
                />
              </div>
              <div
                v-if="im2"
                class="image-secondary-box"
                :class="{ 'image-secondary-box--active': currImg == im2 }"
              >
                <img
                  :src="`../../assets/images/product-page/${im2}`"
                  alt="Котел Очаг"
                  class="image-secondary"
                  @click="() => (currImg = im2)"
                />
              </div>
              <div
                v-if="im3"
                class="image-secondary-box"
                :class="{ 'image-secondary-box--active': currImg == im3 }"
              >
                <img
                  :src="`../../assets/images/product-page/${im3}`"
                  alt="Котел Очаг"
                  class="image-secondary"
                  @click="() => (currImg = im3)"
                />
              </div>
              <div
                v-if="im4"
                class="image-secondary-box"
                :class="{ 'image-secondary-box--active': currImg == im4 }"
              >
                <img
                  :src="`../../assets/images/product-page/${im4}`"
                  alt="Котел Очаг"
                  class="image-secondary"
                  @click="() => (currImg = im4)"
                />
              </div>
            </div>
          </div>
          <div class="boiler__main">
            <ul class="boiler__path">
              <li class="boiler__path-item">
                <RouterLink to="/catalog" class="boiler__path-link"
                  >Каталог</RouterLink
                >
              </li>
              <li class="boiler__path-item">
                <span class="boiler__path-divider">/</span>
                <a href="#" class="boiler__path-link">{{ element.typeName }}</a>
              </li>
            </ul>
            <h2 class="boiler__title titleH2">{{ element.title }}</h2>
            <h3 class="boiler__chars-title">Характеристики</h3>
            <ul class="boiler__chars">
              <li class="boiler__chars-item">
                <span>Номинальная мощность</span>
                <b>{{ element.power }} кВт</b>
              </li>
              <li class="boiler__chars-item">
                <span>Отапливаемая площадь</span>
                <b>{{ element.space }} м<sup>2</sup></b>
              </li>
              <li class="boiler__chars-item">
                <span>Тип установки</span>
                <b>{{ element.tipUstanovki }}</b>
              </li>
              <li class="boiler__chars-item">
                <span>Количество контуров</span>
                <b>{{ element.kolichestvoKonturov }}</b>
              </li>
              <li class="boiler__chars-item">
                <span>Тип топлива</span>
                <b>{{ element.tipTopliva }}</b>
              </li>
              <li class="boiler__chars-item">
                <span>Материал</span>
                <b>{{ element.material }}</b>
              </li>
            </ul>
            <span class="boiler__chars-footnote"
              >*Работа на сжиженном газе возможна при установке соответствующего
              комплекта</span
            >

            <ul class="boiler__documents">
              <li class="">
                <RouterLink to="/garanty#garantyDocuments" class="service__btn">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path
                      d="M8.67873 0V11.3856L6.51743 9.24833L5.66016 10.0971L9.28511 13.6818L12.9101 10.0971L12.0528 9.24833L9.89149 11.3856V0H8.67873Z"
                      fill="#3C3F47"
                    />
                    <path
                      d="M13.492 4.6502H17.3577V16.8752H1.21277V4.6502H5.07846V3.4502H0V18.0752H18.5705V3.4502H13.492V4.6502Z"
                      fill="#3C3F47"
                    />
                  </svg>

                  <span class="service__span service__span--1"
                    >Руководство пользователя</span
                  >
                </RouterLink>
              </li>
              <li class="">
                <a
                  href="../../assets/images/garanty/servisnaya-politika.pdf"
                  class="service__btn"
                >
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path
                      d="M8.67873 0V11.3856L6.51743 9.24833L5.66016 10.0971L9.28511 13.6818L12.9101 10.0971L12.0528 9.24833L9.89149 11.3856V0H8.67873Z"
                      fill="#3C3F47"
                    />
                    <path
                      d="M13.492 4.6502H17.3577V16.8752H1.21277V4.6502H5.07846V3.4502H0V18.0752H18.5705V3.4502H13.492V4.6502Z"
                      fill="#3C3F47"
                    />
                  </svg>

                  <span class="service__span service__span--1"
                    >Гарантийный талон</span
                  >
                </a>
              </li>
              <li class="">
                <RouterLink to="/garanty#garantyDocuments" class="service__btn">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path
                      d="M8.67873 0V11.3856L6.51743 9.24833L5.66016 10.0971L9.28511 13.6818L12.9101 10.0971L12.0528 9.24833L9.89149 11.3856V0H8.67873Z"
                      fill="#3C3F47"
                    />
                    <path
                      d="M13.492 4.6502H17.3577V16.8752H1.21277V4.6502H5.07846V3.4502H0V18.0752H18.5705V3.4502H13.492V4.6502Z"
                      fill="#3C3F47"
                    />
                  </svg>

                  <span class="service__span service__span--1">Сертификат</span>
                </RouterLink>
              </li>
              <li class="">
                <RouterLink to="/parts" class="service__btn">
                  <span class="service__span service__span--1"
                    >Каталог запчастей</span
                  >

                  <svg
                    width="18"
                    height="8"
                    viewBox="0 0 18 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style="margin-left: 10px"
                  >
                    <path
                      d="M0 4.64402L15.3856 4.64402L13.2483 6.80532L14.0971 7.6626L17.6818 4.03764L14.0971 0.412686L13.2483 1.26996L15.3856 3.43126L0 3.43126L0 4.64402Z"
                      fill="#3C3F47"
                    />
                  </svg>
                </RouterLink>
              </li>
            </ul>
          </div>
          <ul class="boiler__price">
            <li class="boiler__price-item">
              <span class="boiler__price-type">Розничная цена</span>
              <span class="boiler__price-value"
                >от {{ element.price }} &#8381;</span
              >
              <button @click="openModal" class="boiler__price-link">
                Заказать
              </button>
            </li>
            <li class="boiler__price-item">
              <RouterLink class="boiler__price-link" to="/clients"
                >Где купить?</RouterLink
              >
            </li>
          </ul>
        </div>

        <div class="boiler__top boiler__top_1200">
          <img
            :src="`../../${element.image}`"
            alt="Котел Буран"
            class="boiler__img boiler__img_extralong"
          />
          <div class="boiler__main">
            <ul class="boiler__path">
              <li class="boiler__path-item">
                <RouterLink to="/catalog" class="boiler__path-link"
                  >Каталог</RouterLink
                >
              </li>
              <li class="boiler__path-item">
                <span class="boiler__path-divider"> </span>
                <a href="#" class="boiler__path-link">{{ element.typeName }}</a>
              </li>
            </ul>
            <h2 class="boiler__title titleH2">{{ element.title }}</h2>
            <h3 class="boiler__chars-title">Характеристики</h3>
            <ul class="boiler__chars">
              <li class="boiler__chars-item">
                <span>Номинальная мощность</span>
                <b>{{ element.power }} кВт</b>
              </li>
              <li class="boiler__chars-item">
                <span>Отапливаемая площадь</span>
                <b>{{ element.space }} м<sup>2</sup></b>
              </li>
              <li class="boiler__chars-item">
                <span>Тип установки</span>
                <b>{{ element.tipUstanovki }}</b>
              </li>
              <li class="boiler__chars-item">
                <span>Количество контуров</span>
                <b>{{ element.kolichestvoKonturov }}</b>
              </li>
              <li class="boiler__chars-item">
                <span>Тип топлива</span>
                <b>{{ element.tipTopliva }}</b>
              </li>
              <li class="boiler__chars-item">
                <span>Материал</span>
                <b>{{ element.material }}</b>
              </li>
            </ul>
            <span class="boiler__chars-footnote"
              >*Работа на сжиженном газе возможна при установке соответствующего
              комплекта</span
            >
          </div>
          <ul class="boiler__price">
            <li class="boiler__price-item">
              <span class="boiler__price-type">Розничная цена</span>
              <span class="boiler__price-value">от {{ element.price }}</span>
              <button @click="openModal" class="boiler__price-link">
                Заказать
              </button>
            </li>
            <li class="boiler__price-item">
              <RouterLink class="boiler__price-link" to="/clients"
                >Где купить?</RouterLink
              >
            </li>
          </ul>

          <ul class="boiler__documents">
            <li class="">
              <RouterLink to="/garanty#garantyDocuments" class="service__btn">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                  <path
                    d="M8.67873 0V11.3856L6.51743 9.24833L5.66016 10.0971L9.28511 13.6818L12.9101 10.0971L12.0528 9.24833L9.89149 11.3856V0H8.67873Z"
                    fill="#3C3F47"
                  />
                  <path
                    d="M13.492 4.6502H17.3577V16.8752H1.21277V4.6502H5.07846V3.4502H0V18.0752H18.5705V3.4502H13.492V4.6502Z"
                    fill="#3C3F47"
                  />
                </svg>

                <span class="service__span service__span--1"
                  >Руководство пользователя</span
                >
              </RouterLink>
            </li>
            <li class="">
              <a
                href="../../assets/images/garanty/servisnaya-politika.pdf"
                class="service__btn"
              >
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                  <path
                    d="M8.67873 0V11.3856L6.51743 9.24833L5.66016 10.0971L9.28511 13.6818L12.9101 10.0971L12.0528 9.24833L9.89149 11.3856V0H8.67873Z"
                    fill="#3C3F47"
                  />
                  <path
                    d="M13.492 4.6502H17.3577V16.8752H1.21277V4.6502H5.07846V3.4502H0V18.0752H18.5705V3.4502H13.492V4.6502Z"
                    fill="#3C3F47"
                  />
                </svg>

                <span class="service__span service__span--1"
                  >Гарантийный талон</span
                >
              </a>
            </li>
            <li class="">
              <RouterLink to="/garanty#garantyDocuments" class="service__btn">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                  <path
                    d="M8.67873 0V11.3856L6.51743 9.24833L5.66016 10.0971L9.28511 13.6818L12.9101 10.0971L12.0528 9.24833L9.89149 11.3856V0H8.67873Z"
                    fill="#3C3F47"
                  />
                  <path
                    d="M13.492 4.6502H17.3577V16.8752H1.21277V4.6502H5.07846V3.4502H0V18.0752H18.5705V3.4502H13.492V4.6502Z"
                    fill="#3C3F47"
                  />
                </svg>

                <span class="service__span service__span--1">Сертификат</span>
              </RouterLink>
            </li>
            <li class="">
              <RouterLink to="/parts" class="service__btn">
                <span class="service__span service__span--1"
                  >Каталог запчастей</span
                >

                <svg
                  width="18"
                  height="8"
                  viewBox="0 0 18 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style="margin-left: 10px"
                >
                  <path
                    d="M0 4.64402L15.3856 4.64402L13.2483 6.80532L14.0971 7.6626L17.6818 4.03764L14.0971 0.412686L13.2483 1.26996L15.3856 3.43126L0 3.43126L0 4.64402Z"
                    fill="#3C3F47"
                  />
                </svg>
              </RouterLink>
            </li>
          </ul>
        </div>
        <ModalBuyProduct
          v-if="isOpen"
          v-model:show="isOpen"
          :product2="element"
        />
      </div>

      <!-- ////////////////////////////////////////////////////////////////////////////////////////// -->
      <div class="boiler__body container">
        <div class="container">
          <div class="boiler__body-box">
            <div class="boiler__description-box">
              <h4 class="boiler__description-title">Описание</h4>
              <div class="boiler__description">
                <p>
                  {{ element.description }}
                </p>
              </div>
            </div>
            <div class="boiler__moreInfo-box">
              <h4 class="boiler__moreChars-title">Подробные характеристики</h4>
              <table class="boiler__table" width="100%">
                <tr>
                  <td>
                  <span>Теплопризводительность</span>
                  <b>{{ element.teploproizvoditelnost }} кВт</b>
                  </td>
                  <td>
                  <span>Отапливаемая площадь (при высоте 2,7 м)</span>
                  <b>{{ element.ploshad }} м<sup>2</sup></b>
                  </td>
                </tr>
                <tr>
                  <td>
                  <span>КПД</span>
                  <b>{{ element.kpd }} %</b>
                  </td>
                  <td>
                  <span>Расход природного газа (базовая поставка)</span>
                  <b>{{ element.raschod1 }} м<sup>3</sup>/час</b>
                  </td>
                </tr>
                <tr>
                  <td>
                  <span
                    >Расход сжиженного газа (при замене жиклеров горелки)</span
                  >
                  <b>{{ element.raschod2 }} кг/час</b>
                  </td>
                  <td>
                  <span
                    >Максимальное рабочее давление теплоносителя в системе
                    отопления</span
                  >
                  <b
                    >{{ element.maksimalnoeDavlenie }} МПа
                    (кГс/см<sup>2</sup>)</b
                  >
                  </td>
                </tr>
                <tr>
                  <td>
                  <span
                    >Габаритные размеры по корпусу котла , ± 5мм (ширина ×
                    глубина × высота)</span
                  >
                  <b>{{ element.shirinaGlubinaVisota }}</b>
                  </td>
                  <td>
                  <span>Площадь поперечного сечения</span>
                  <b
                    >{{ element.ploshadPoperechnogoSecheniya }} см<sup
                      >2</sup
                    ></b
                  >
                  </td>
                </tr>
                <tr>
                  <td>
                  <span
                    >Присоединительные размеры подвода и отвода теплоносителя,
                    дюйм</span
                  >
                  <b
                    >G {{ podvodTeplonositelyaPart1 }}
                    <sup>{{ podvodTeplonositelyaPart2 }}</sup
                    >&frasl;<sub>{{ podvodTeplonositelyaPart3 }}</sub
                    >{{ podvodTeplonositelyaPart4 }}</b
                  >
                  </td>
                  <td>
                  <span>Диаметр</span>
                  <b>{{ element.diameter }} мм</b>
                  </td>
                </tr>
                <tr>
                  <td>
                  <span>Масса</span>
                  <b>{{ element.massa }} кг</b>
                  </td>
                  <td>
                  <span>Высота</span>
                  <b>{{ element.visota }} м</b>
                  </td>
                </tr>
                <tr>
                  <td>
                  <span>Объем теплоносителя в котле</span>
                  <b>{{ element.obiomVTeplonositelya }} л</b>
                  </td>
                  <td>
                  
                  </td>
                </tr>
              </table>


              <ul v-if="element.type != 5" class="boiler__moreInfo" style="display:none">
                <li class="boiler__moreChars-item">
                  <span>Теплопризводительность</span>
                  <b>{{ element.teploproizvoditelnost }} кВт</b>
                </li>
                <li class="boiler__moreChars-item">
                  <span>Отапливаемая площадь (при высоте 2,7 м)</span>
                  <b>{{ element.ploshad }} м<sup>2</sup></b>
                </li>
                <li class="boiler__moreChars-item">
                  <span>КПД</span>
                  <b>{{ element.kpd }} %</b>
                </li>
                <li class="boiler__moreChars-item">
                  <span>Расход природного газа (базовая поставка)</span>
                  <b>{{ element.raschod1 }} м<sup>3</sup>/час</b>
                </li>
                <li class="boiler__moreChars-item">
                  <span
                    >Расход сжиженного газа (при замене жиклеров горелки)</span
                  >
                  <b>{{ element.raschod2 }} кг/час</b>
                </li>
                <li class="boiler__moreChars-item">
                  <span
                    >Максимальное рабочее давление теплоносителя в системе
                    отопления</span
                  >
                  <b
                    >{{ element.maksimalnoeDavlenie }} МПа
                    (кГс/см<sup>2</sup>)</b
                  >
                </li>
                <li class="boiler__moreChars-item">
                  <span
                    >Габаритные размеры по корпусу котла , ± 5мм (ширина ×
                    глубина × высота)</span
                  >
                  <b>{{ element.shirinaGlubinaVisota }}</b>
                </li>
                <li class="boiler__moreChars-item">
                  <span>Масса</span>
                  <b>{{ element.massa }} кг</b>
                </li>
                <li class="boiler__moreChars-item">
                  <span
                    >Присоединительные размеры подвода и отвода теплоносителя,
                    дюйм</span
                  >
                  <b
                    >G {{ podvodTeplonositelyaPart1 }}
                    <sup>{{ podvodTeplonositelyaPart2 }}</sup
                    >&frasl;<sub>{{ podvodTeplonositelyaPart3 }}</sub
                    >{{ podvodTeplonositelyaPart4 }}</b
                  >
                </li>
                <li class="boiler__moreChars-item">
                  <span>Площадь поперечного сечения</span>
                  <b
                    >{{ element.ploshadPoperechnogoSecheniya }} см<sup
                      >2</sup
                    ></b
                  >
                </li>
                <li class="boiler__moreChars-item">
                  <span>Площадь поперечного сечения111</span>
                  <b
                    >{{ element.ploshadPoperechnogoSecheniya }} см<sup
                      >2</sup
                    ></b
                  >
                </li>
                <li class="boiler__moreChars-item">
                  <span>Диаметр</span>
                  <b>{{ element.diameter }} мм</b>
                </li>
                <li class="boiler__moreChars-item">
                  <span>Объем теплоносителя в котле</span>
                  <b>{{ element.obiomVTeplonositelya }} л</b>
                </li>
                <li class="boiler__moreChars-item">
                  <span>Высота</span>
                  <b>{{ element.visota }} м</b>
                </li>
              </ul>

              <ul v-if="element.type == 5" class="boiler__moreInfo">
                <li class="boiler__moreChars-item">
                  <span>Теплопризводительность</span>
                  <b>{{ element.teploproizvoditelnost }} кВт</b>
                </li>
                <li class="boiler__moreChars-item">
                  <span>Отапливаемая площадь (при высоте 2,7 м)</span>
                  <b>{{ element.ploshad }} м<sup>2</sup></b>
                </li>
                <li class="boiler__moreChars-item">
                  <span>КПД</span>
                  <b>{{ element.kpd }} %</b>
                </li>
                <li class="boiler__moreChars-item">
                  <span>Давление природного газа: nom/ min/ max/</span>
                  <b>{{ element.davlenie }} Па</b>
                </li>
                <li class="boiler__moreChars-item">
                  <span>Расход природного газа (среднесуточный)</span>
                  <b>{{ element.raschodGaza }} м<sup>3</sup>/час</b>
                </li>
                <li class="boiler__moreChars-item">
                  <span>Диапазон регулирования температуры теплоносителя,</span>
                  <b>{{ element.diapazonTemperaturi }} °С</b>
                </li>
                <li class="boiler__moreChars-item">
                  <span
                    >Максимальная температура теплоносителя на выходе из котла
                    не более</span
                  >
                  <b>{{ element.maksimalnayaTemperatura }} °С</b>
                </li>
                <li class="boiler__moreChars-item">
                  <span
                    >Время отключение подачи газа при погасании запальной
                    горелки, не более</span
                  >
                  <b>{{ element.vremyaOtklucheniya }} сек</b>
                </li>
                <li class="boiler__moreChars-item">
                  <span
                    >Максимальное давление теплоносителя в системе отопления,
                    МПа (кГс/см<sup>2</sup>)</span
                  >
                  <b>{{ element.maksimalnoeDavlenie }}</b>
                </li>
                <li class="boiler__moreChars-item">
                  <span>Объём теплоносителя в котле</span>
                  <b>{{ element.obiomVTeplonositelya }} л</b>
                </li>
                <li class="boiler__moreChars-item">
                  <span>Ширина</span>
                  <b>{{ element.shirina }} мм</b>
                </li>
                <li class="boiler__moreChars-item">
                  <span>Глубина</span>
                  <b>{{ element.glubina }} мм</b>
                </li>
                <li class="boiler__moreChars-item">
                  <span>Высота</span>
                  <b>{{ element.visota }} мм</b>
                </li>
                <li class="boiler__moreChars-item">
                  <span
                    >Присоединительная резьба (с обеих сторон) штуцеров подвода
                    и выхода теплоносителя, дюймы, (Ду)</span
                  >
                  <b
                    >G {{ podvodTeplonositelyaPart1 }}
                    <sup>{{ podvodTeplonositelyaPart2 }}</sup
                    >&frasl;<sub>{{ podvodTeplonositelyaPart3 }}</sub
                    >{{ podvodTeplonositelyaPart4 }}</b
                  >
                </li>
                <li class="boiler__moreChars-item">
                  <span>Наружный диаметр коаксиального дымохода</span>
                  <b>{{ element.diameter }} мм</b>
                </li>
                <li class="boiler__moreChars-item">
                  <span>Масса котла без дымохода, +3 кг</span>
                  <b>{{ element.massaKotla }} кг</b>
                </li>
                <li class="boiler__moreChars-item">
                  <span>Масса комплекта дымохода, + 0,5кг</span>
                  <b>{{ element.massaDimochoda }} кг</b>
                </li>
                <li class="boiler__moreChars-item">
                  <span
                    >Присоединительная резьба штуцеров подвода газа, дюймы,
                    (Ду)</span
                  >
                  <b
                    >G {{ podvodGazaPart1 }} <sup>{{ podvodGazaPart2 }}</sup
                    >&frasl;<sub>{{ podvodGazaPart3 }}</sub
                    >{{ podvodGazaPart4 }}</b
                  >
                </li>
              </ul>
            </div>

            <div v-if="listOfSparePartsDisplay" class="boiler__moreInfo-box">
              <h4 class="boiler__moreChars-title">Запчасти</h4>
              <ul class="boiler__spareparts">
                <li
                  v-for="el in element.listOfSpareParts"
                  :key="1"
                  class="boiler__spareparts-item"
                >
                  <span><span class="dot">&#8226;</span> {{ el }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ProductModalWSlider
        :isOpen="isOpenLibrarySlider"
        :imagesInSlide="imagesInSlide"
        @closeModal="() => (isOpenLibrarySlider = false)"
      />
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { RouterLink } from "vue-router";
import prodData from "../../assets/prodData";
import ModalBuyProduct from "../components/ModalBuyProduct.vue";
import ProductModalWSlider from "../components/ProductModalWSlider.vue";
import { useMeta } from "vue-meta";

const isOpenLibrarySlider = ref(false);

const products = ref([]);
const elements = ref([]);

const route = useRoute();
const element = ref({});
const routeId = route.params.seoTitle;

const isOpen = ref(false);
const listOfSparePartsDisplay = ref(true);
const imagesInSlide = ref();
let currImg = ref();
let arrImg = ref();
let im1 = ref();
let im2 = ref();
let im3 = ref();
let im4 = ref();
let imgArrayLength = ref(4);

let podvodTeplonositelyaPart1 = ref();
let podvodTeplonositelyaPart2 = ref();
let podvodTeplonositelyaPart3 = ref();
let podvodTeplonositelyaPart4 = ref();
let podvodGazaPart1 = ref();
let podvodGazaPart2 = ref();
let podvodGazaPart3 = ref();
let podvodGazaPart4 = ref();

const openModal = () => {
  isOpen.value = true;
};

const getElement = () => {
  products.value = prodData;
  elements.value = prodData;
  element.value = elements.value.filter((el) => el.seoTitle == routeId)[0];
  listOfSparePartsDisplay.value =
    element.value.listOfSpareParts.length > 0 ? true : false;
  imgArrayLength.value = element.value.productPageImages.length;
};

const getImagesArray = () => {
  let temp = element.value.productPageImages;
  let first = temp.shift();
  temp.push(first);
  imagesInSlide.value = element.value.productPageImages;
};

onMounted(() => {
  getElement();
  getImagesArray();
  currImg.value =
    element.value.productPageImages[element.value.productPageImages.length - 1];

  arrImg.value = element.value.productPageImages;
  im1.value =
    element.value.productPageImages[element.value.productPageImages.length - 1];
  im2.value =
    element.value.productPageImages[element.value.productPageImages.length - 4];
  im3.value =
    element.value.productPageImages[element.value.productPageImages.length - 3];
  im4.value =
    element.value.productPageImages[element.value.productPageImages.length - 2];

  let ind1 = element.value.podvodTeplonositelya.indexOf("*");
  let ind2 = element.value.podvodTeplonositelya.indexOf("/");
  podvodTeplonositelyaPart1.value = element.value.podvodTeplonositelya.slice(
    ind1 - 1,
    ind1
  );
  podvodTeplonositelyaPart2.value = element.value.podvodTeplonositelya.slice(
    ind1 + 1,
    ind2
  );
  podvodTeplonositelyaPart3.value = element.value.podvodTeplonositelya.slice(
    ind2 + 1,
    ind2 + 2
  );
  podvodTeplonositelyaPart4.value = element.value.podvodTeplonositelya.slice(
    ind2 + 2,
    element.value.podvodTeplonositelya.length
  );
  let ind3 = element.value.podvodGaza.indexOf("*");
  let ind4 = element.value.podvodGaza.indexOf("/");
  podvodGazaPart1.value = element.value.podvodGaza.slice(ind3 - 1, ind3);
  podvodGazaPart2.value = element.value.podvodGaza.slice(ind3 + 1, ind4);
  podvodGazaPart3.value = element.value.podvodGaza.slice(ind4 + 1, ind4 + 2);
  podvodGazaPart4.value = element.value.podvodGaza.slice(
    ind4 + 2,
    element.value.podvodTeplonositelya.length
  );
  useMeta({
    title: element.value.title,
    keywords: "котел-очаг, официальный сайт",
    htmlAttrs: { lang: "ru", amp: true },
  });
});

</script>

<style lang="scss" scoped>
.bold {
  font-weight: 700 !important;
  font-size: 14px !important;
}
body {
  overflow-x: hidden !important;
}
.boiler__top {
  display: grid;
  grid-template-columns: 530px 680px 285px;
  padding-left: 0;
  padding-bottom: 63px;
}
.image__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
    max-width: 350px !important;
  }
  @media (max-width: 399px) {
    max-width: max-content !important;
  }
}

.boiler__img {
  cursor: pointer;
  max-width: 404px;
  max-height: 393px;
  height: 100%;
  object-fit: cover;
  margin-bottom: 30px;

  @media (max-width: 450px) {
    order: 1 !important;
  }
}

.more-images-box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 450px) {
    order: 1 !important;
    gap: 0;
  }
}

.image-secondary-box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    border: 2px solid #ddd;
  }
  &--active {
    border: 2px solid #ddd;
  }
}

.image-secondary {
  width: 100px;
  height: auto;
  object-fit: contain;

  @media (max-width: 450px) {
    width: 70px;
  }
}

.dot {
  font-size: 20px;
  font-weight: 700;
  margin-right: 10px;
}

.boiler__body-box {
}
.boiler__description-box {
  max-width: 1000px;
  margin-bottom: 30px;
}
.boiler__moreInfo-box {
  width: 100%;
  //max-width: 1100px;
  margin-top: 30px;
}
.boiler__moreInfo {
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
}
.boiler__spareparts {
  width: 100%;
  display: grid;
  max-width: 1100px;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 30px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
}
.boiler__spareparts-item {
  display: grid;
  width: 700px;
  padding-right: 10px;
  font-size: 14px !important;
  @media (max-width: 1370px) {
    width: 500px;
  }
  @media (max-width: 450px) {
    width: 300px;
  }
}

@media (max-width: 895px) and (min-width: 768px) {
  .boiler__documents {
    grid-template: repeat(2, 50px) / repeat(2, 210px) !important;
  }
}

@media (max-width: 450px) {
  .boiler__documents > * > * {
    margin: 0 auto 10px;
  }
}
.boiler__documents li {
  @media (max-width: 450px) {
    width: 90vw !important;
  }
}

.service__btn {
  padding: 10px 0;
  text-align: center;
  width: 280px;
  background-color: transparent;
  border: 1px solid #f12115;
  border-radius: 100px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  position: relative;
  margin-right: 25px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;

  @media (max-width: 450px) {
    max-width: 100vw !important;
  }
}
.service__btn:link,
.service__btn:visited {
  color: inherit;
  text-decoration: none;
}
.service__btn svg > * {
  transition: 0.3s ease;
}
.service__btn:hover {
  background-color: #f12115;
  color: #fff;
}
.service__btn:hover svg > * {
  fill: #fff;
}
@media (max-width: 895px) {
  .service__btn {
    font-size: 12px;
    max-width: 200px;
  }
}
@media (max-width: 420px) {
  .service__btn {
    font-size: 12px;
  }
}
@media (max-width: 350px) {
  .service__btn {
    font-size: 10px;
  }
}

@media (max-width: 450px) {
  .boiler__documents > * > * {
    margin: 0 auto 10px;
  }
}

.service__span {
  position: relative;
}

svg {
  margin-right: 10px;
}

.boiler__price-type {
  display: block;
}

.boiler {
  padding-top: 20px;
}

.boiler__top_1200 {
  display: none;
}

.boiler__img_long {
  max-width: 269px;
}
.boiler__img_extralong {
  max-width: 240px;
}
.boiler__img_ksgz {
  max-width: 370px;
}
.boiler__main {
  margin-left: 96px;
  @media (max-width: 450px) {
    max-width: 94vw;
  }
}
.boiler__path {
  display: flex;
  list-style: none;
}
.boiler__path-link,
.boiler__path-divider {
  display: inline-block;
  font-size: 13px;
  line-height: 16px;
  color: #007bc5;
  text-decoration: none;
}
.boiler__path-link:hover,
.boiler__path-divider:hover {
  color: #007bc5;
  text-decoration: underline;
}
@media (min-width: 991px) {
  .boiler__path-link:hover {
    text-decoration: underline;
  }
  .boiler__path-link:active {
    opacity: 0.5;
  }
}
.boiler__path-divider {
  margin-left: 5px;
  margin-right: 5px;
}
.boiler__title {
  margin-top: 10px;
  line-height: 50px;
}
@media (max-width: 450px) {
  .boiler__title {
    font-size: 28px;
  }
}
.boiler__chars {
  margin-top: 35px;
  list-style: none;
}
.boiler__chars-title {
  margin-top: 36px;
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
}
.boiler__chars-item:not(:first-child) {
  margin-top: 10px;
}
.boiler__chars-item span {
  display: inline-block;
  max-width: 200px;
  width: 100%;
}
.boiler__chars-item b {
  display: inline-block;
  max-width: 300px;
  margin-left: 90px;
  font-weight: bold;
}
.boiler__chars-footnote {
  display: inline-block;
  margin-top: 22px;
  font-size: 12px;
  line-height: 20px;
  max-width: 90vw;
}
.boiler__documents {
  display: grid;
  list-style: none;
  grid-template: repeat(2, 50px) / repeat(2, 300px);
  margin-top: 45px;
  gap: 20px;
}

.boiler__price {
  display: block;
  margin-top: 108px;
  margin-left: 140px;
  list-style: none;

  @media (max-width: 450px) {
    display: block;
    width: 90vw !important;
  }
}
.boiler__price-item {
  min-width: 264px;
}
.boiler__price-item:not(:first-child) {
  margin-top: 0px;
}
.boiler__price-type {
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
}
.boiler__price-value {
  display: inline-block;
  margin-top: 5px;
  font-size: 36px;
  line-height: 44px;
}
.boiler__price-link {
  display: inline-block;
  padding: 10px 25px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 5px;
  transition: 0.3s ease;
  background-color: #00b2f6;
  color: #fff;
  margin-bottom: 10px !important;
  margin-top: 10px;
  width: 260px;
  text-decoration: none;
  text-align: center;
  border: 1px solid #00b2f6 !important;
}
.boiler__price-link:hover {
  cursor: pointer;
  background-color: #fff;
  color: #00b2f6;
}
.boiler__body {
  padding-top: 30px;
  padding-bottom: 85px;
  // background-color: #f9f9f9;
  margin-bottom: 50px;
}
.boiler__description {
  margin-top: 25px;
}
.boiler__description p {
  font-size: 16px;
  line-height: 32px;
  text-indent: 25px;
}
@media (max-width: 450px) {
  .boiler__description p {
    font-size: 14px;
    line-height: 1.5;
    text-indent: 0 !important;
  }
}
.boiler__description p + p {
  margin-top: 10px;
}
.boiler__description-title {
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
}
.boiler__moreChars {
  margin-top: 25px;
  list-style: none;
}
.boiler__moreChars-title {
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
}
.boiler__moreChars-item {
  display: grid;
  grid-template-columns: repeat(2, 400px);
}
.boiler__moreChars-item {
  margin-top: 25px;
  //width: 700px;
  //max-width: 700px;
  //@media (max-width: 1370px) {
    //width: 500px;
  //}
}
.boiler__moreChars-item span {
  display: inline-block;
  max-width: 400px;
}
.boiler__moreChars-item b {
  display: inline-block;
  margin-left: 30px;
  max-width: 400px;
  font-weight: bold;
}

.not-active {
  cursor: pointer;
  user-select: none;
}

button.boiler__price-link {
  border: none;
  outline: none;
  cursor: pointer;
}

.boiler__table {
  width: 100%;
}
.boiler__table tr {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 25px;
}
.boiler__table tr td {
  width: 48%;
  margin-right: 100px;
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 1499px) {
  .boiler__table tr td {
    margin-right:50px
  }
}

.boiler__table tr td span {
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
  width: 450px;
}
@media (max-width: 1299px) {
  .boiler__table tr td span {
    width:350px;
    margin-right: 10px;
  }
}
.boiler__table tr td b {
  width: 200px;
  text-align:left;
}
@media (max-width: 1299px) {
  .boiler__table tr td b {
    width:160px;
  }
}
@media (max-width: 1919px) {
  // .boiler__top {
  //   grid-template-columns: 350px 680px 285px;
  //   padding-left: 0;
  // }
  .boiler__img {
    max-width: 350px;
    max-height: 340px;
  }
  .boiler__img_long {
    max-width: 235px;
  }
  .boiler__img_extralong {
    margin-left: auto;
    margin-right: auto;
    max-width: 205px;
  }
  .boiler__img_ksgz {
    max-width: 320px;
  }
  .boiler__body-wrapper {
    grid-template-columns: 515px 850px;
  }
}

@media (max-width: 1599px) {
  .boiler__main {
    margin-left: 50px;
  }
  .boiler__price {
    margin-left: 77px;
  }
  .boiler__moreChars-item {
    grid-template-columns: repeat(2, 350px);
  }
  .boiler__body-wrapper {
    grid-template-columns: 575px 740px;
  }
}

@media (max-width: 1439px) {
  .boiler__top {
    grid-template-columns: 456px 480px 285px;
    padding-bottom: 0;
  }
  .boiler__img {
    margin-top: 30px;
  }
  .boiler__chars-item b {
    margin-left: 65px;
  }
  .boiler__price {
    margin-top: 140px;
    margin-left: 40px;
  }
  .boiler__price-item:not(:first-child) {
    margin-top: 5px;
  }
  .boiler__documents {
    grid-template: repeat(2, 50px) / repeat(2, 300px);
    margin-top: 45px;
    margin-left: 0;
    row-gap: 20px;
    column-gap: 10px;
  }
  .boiler__documents-link {
    max-width: 235px;
  }
  .boiler__price {
    margin-left: 50px;
  }
  .boiler__body {
    padding-bottom: 40px;
  }
  .boiler__body-wrapper {
    display: block;
  }
  .boiler__description {
    margin-top: 10px;
  }
  .boiler__moreChars {
    display: grid;
    grid-template-columns: repeat(2, 550px);
    justify-content: start;
    margin-top: 15px;
  }
  .boiler__moreChars-wrapper {
    margin-top: 20px;
  }
  .boiler__moreChars-item {
    margin-top: 15px;
    grid-template-columns: repeat(2, 275px);
  }
  .boiler__moreChars-item:not(:first-child) {
    margin-top: 15px;
  }
}

@media (max-width: 1000px) {
  .boiler__documents {
    grid-template: repeat(2, 50px) / repeat(2, 300px);
    margin-top: 45px;
    margin-left: 40px;
    gap: 10px;
  }
}

@media (max-width: 1199px) {
  .boiler__top_1200 {
    grid-template-columns: 290px 600px;
  }
  .boiler__img {
    max-width: 290px;
    max-height: 290px;
  }
  .boiler__img_long {
    max-width: 200px;
  }
  .boiler__img_extralong {
    max-width: 175px;
  }
  .boiler__img_ksgz {
    max-width: 275px;
  }
  .boiler__price {
    margin-top: 15px;
    margin-left: 20px;
  }
  .boiler__documents {
    margin-top: 20px;
  }
  .boiler__moreChars {
    grid-template-columns: repeat(2, 445px);
  }
  .boiler__moreChars-item {
    grid-template-columns: repeat(2, 222px);
    margin-top: 10px;
  }
  .boiler__moreChars-item:not(:first-child) {
    margin-top: 20px;
  }
}

@media (max-width: 991px) {
  .boiler__top_1200 {
    grid-template-columns: 230px 475px;
  }
  .boiler__img {
    max-width: 230px;
    max-height: 230px;
  }
  .boiler__img_long {
    max-width: 160px;
  }
  .boiler__img_extralong {
    max-width: 140px;
  }
  .boiler__img_ksgz {
    max-width: 220px;
  }
  .boiler__main {
    margin-left: 20px;
  }
  .boiler__chars {
    margin-top: 20px;
  }
  .boiler__chars-item b {
    margin-left: 15px;
    max-width: 225px;
  }
  .boiler__chars-title {
    margin-top: 15px;
  }
  .boiler__price {
    margin-left: 0px;
  }
  .boiler__price-item {
    min-width: 215px;
  }
  .boiler__price-link {
    padding: 15px 0;
    width: 215px;
  }
  .boiler__documents {
    grid-template: repeat(2, 50px) / repeat(2, 280px);
    column-gap: 10px;
  }
  .boiler__documents-link {
    max-width: 200px;
  }
  .boiler__moreChars {
    display: block;
  }
  .boiler__moreChars-item {
    grid-template-columns: repeat(2, 354px);
    margin-top: 13px;
  }
  .boiler__moreChars-item:not(:first-child) {
    margin-top: 13px;
  }
}

@media (max-width: 767px) {
  .boiler__top {
    padding-bottom: 30px;
  }
  .boiler__top_1200 {
    grid-template-columns: 250px 267px;
  }
  .boiler__img {
    order: 1;
    margin: 35px auto 0 auto;
  }
  .boiler__main {
    grid-column: 1 / 3;
    order: 3;
    margin-top: 15px;
    margin-left: 0;
  }
  .boiler__price {
    display: flex;
    grid-column: 1 / 3;
    order: 4;
  }
  .boiler__price-item:nth-child(2) {
    margin-top: 75px;
  }
  .boiler__documents {
    grid-template: repeat(2, 50px) / repeat(1, 200px);
    justify-content: flex-end;
    order: 2;
  }
  .boiler__moreChars-item {
    grid-template-columns: repeat(2, 268px);
  }
}

@media (max-width: 575px) {
  .boiler__top_1200 {
    grid-template-columns: 1fr;
  }
  .boiler__img {
    margin-top: 0;
    max-width: 250px;
    max-height: 250px;
  }
  .boiler__img_long {
    max-width: 160px;
  }
  .boiler__img_extralong {
    max-width: 150px;
  }
  .boiler__img_ksgz {
    max-width: 235px;
  }
  .boiler__main {
    grid-column: 1 / 2;
    order: 2;
  }
  .boiler__path {
    flex-wrap: wrap;
  }
  .boiler__chars-title {
    margin-top: 10px;
  }
  .boiler__chars-item {
    display: grid;
    grid-template-columns: repeat(2, 121px);
  }
  .boiler__chars-item span {
    max-width: none;
  }
  .boiler__chars-item b {
    max-width: none;
  }
  .boiler__price {
    grid-column: 1 / 2;
    order: 4;
    flex-wrap: wrap;
  }
  .boiler__price-item {
    width: 100%;
    text-align: center;
  }
  .boiler__price-item:nth-child(2) {
    margin-top: 0px;
  }
  .boiler__price-link {
    width: 100%;
  }
  .boiler__documents {
    grid-column: 1 / 2;
    order: 3;
    display: block;
    margin-left: 0;
  }
  .boiler__documents-item:not(:first-child) {
    margin-top: 10px;
  }
  .boiler__documents-link {
    max-width: none;
    font-size: 13px;
    line-height: 15px;
  }
  .boiler__moreChars-item {
    grid-template-columns: 70% 30%;
    max-width: 70vw;
  }
  .boiler__moreChars-item span {
    word-break: break-word;
  }
  .boiler__moreChars-item b {
    margin-left: 15px;
  }
}

.titleH2 {
  font-size: 36px;
  margin-top: 30px;
}

.boiler__chars-item {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #3c3f47;
}

.boiler__documents-link {
  font-size: 11px;
  font-weight: 700;
  text-decoration: none;
  color: #000;
}

.boiler__moreChars-item span {
  font-size: 16px;
  font-weight: 400;
}
@media (max-width: 450px) {
  .boiler__moreChars-item span {
    font-size: 14px;
  }
}

.boiler__moreChars-item b {
  font-size: 14px;
  font-weight: 700;
}
@media (max-width: 450px) {
  .boiler__moreChars-item b {
    font-size: 12px;
    padding-top: 2px;
    display: inline-block;
    width: 20vw;
  }
}

@media (max-width: 450px) {
  .boiler__title {
    margin-top: 5px;
    font-size: 28px;
  }
}

@media (max-width: 1199px) {
  .boiler__table tr td {
    margin-right: 20px;
  }
  .boiler__table tr td:nth-child(2n) {
    margin-right: 0px;
  }
}
@media (max-width: 767px) {
  .boiler__table tr {
    flex-wrap:wrap;
  }
  .boiler__table tr td {
    width: 100%;
    margin-right: 0px;
  }

}
@media (max-width: 577px) {
  .boiler__table tr td span {
    width:70%;
  }
  .boiler__table tr td b {
    width:30%;
  }
}
@media (max-width: 399px) {
  .container {
      padding-left: 5px;
      padding-right: 5px;
  }
  .boiler__table tr td span {
    font-size: 14px;
  }
  .boiler__table tr td b {
    font-size: 14px;
  }
}



</style>
