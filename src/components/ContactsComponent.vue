<template>
  <!-- /////////////////////////// >1300 /////////////////////////////////-->
  <section
    v-if="variant1"
    class="contacts"
    :class="{ contactsPageClass: isContactsPage }"
  >
    <div class="container">
      <div class="contacts__wrapper">
        <div class="contacts__info">
          <div class="contacts__info1">
            <h2 class="contacts__title">Контакты</h2>
            <h3 class="contacts__subtitle1">ООО ГК «СервисГаз»</h3>
            <span class="contacts__address"
              >432072, г. Ульяновск, 10-й проезд Инженерный, д. 14</span
            >
            <h3 class="contacts__subtitle2">Горячая линия</h3>
            <a href="tel:88003335103" class="contacts__call">8 800 333 51 03</a>
            <span class="contacts__call-descr"
              >Междугороднее соединение бесплатно</span
            >
            <a href="mailto:kotel@sgaz.ru" class="contacts__post"
              >kotel@sgaz.ru</a
            >
          </div>
          <div class="contacts__info2">
            <div class="contacts__inn-box">
              <h3 class="info2__title info2__title--2">Реквизиты</h3>
              <p class="contacts__item2">
                <span class="info2__title info2__title--2">ИНН:</span>
                <span class="info2__content info2__content--2">7328066855</span>
              </p>
              <p class="contacts__item2">
                <span class="info2__title info2__title--2">КПП:</span>
                <span class="info2__content info2__content--2">732801001</span>
              </p>
              <p class="contacts__item2">
                <span class="info2__title info2__title--2">ОГРН:</span>
                <span class="info2__content info2__content--2"
                  >1127328000447</span
                >
              </p>
              <p class="contacts__item2">
                <span class="info2__title info2__title--2">р/с:</span>
                <span class="info2__content info2__content--2"
                  >40702810990080000762</span
                >
              </p>
              <p class="contacts__item2">
                <span class="info2__title info2__title--2">к/с:</span>
                <span class="info2__content info2__content--2"
                  >30101810300000000881</span
                >
              </p>
              <p class="contacts__item2">
                <span class="info2__title info2__title--2">БИК:</span>
                <span class="info2__content info2__content--2">042282881</span>
              </p>
              <p class="contacts__item2">
                <span class="info2__title info2__title--2"
                  >ФИЛИАЛ Приволжский</span
                >
                <span class="info2__content info2__content--2"
                  >ПАО Банк «ФК Открытие»</span
                >
              </p>
              <p class="contacts__item2">
                <span class="info2__title info2__title--2"
                  >Генеральный директор:
                </span>
                <span class="info2__content info2__content--2"
                  >Цыганцов Андрей Валерьевич</span
                >
              </p>
              <div class="news__link-box">
                <a
                  class="news__link-all"
                  href="../../assets/files/Blank-rekvizity.pdf"
                   
                >
                  <span>Скачать реквизиты</span>
                </a>
              </div>
            </div>

            <div class="contacts__phones-box">
              <p class="contacts__item">
                <span class="info2__title">Отдел продаж:</span>
                <span class="info2__content">8 (8422) 25-03-48</span>
                <span class="info2__content">8 (8422) 25-03-49</span>
              </p>
            </div>
          </div>
        </div>
        <div v-if="width > 1400" class="map-container">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A1f4ffcffa9f016bcc365a3cbb9fa4e150d21d54089e2108d1f05d14e88bcc8da&amp;source=constructor"
            width="900"
            height="650"
            frameborder="0"
          ></iframe>
        </div>
        <div v-if="width < 1400" class="map-container">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A1f4ffcffa9f016bcc365a3cbb9fa4e150d21d54089e2108d1f05d14e88bcc8da&amp;source=constructor"
            width="620"
            height="550"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  </section>

  <!-- /////////////////////////// <1300 /////////////////////////////////-->
  <section
    v-if="variant2"
    class="contacts-md"
    :class="{ contactsPageClass: isContactsPage }"
  >
    <div class="container">
      <div class="contacts__wrapper-md">
        <div class="contacts__info-md">
          <div class="box1md">
            <div class="contacts__info1-md">
              <h2 class="contacts__title-md">Контакты</h2>
              <h3 class="contacts__subtitle1-md">ООО ГК «СервисГаз»</h3>
              <span class="contacts__address-md"
                >432072, г. Ульяновск, 10-й проезд Инженерный, д. 14</span
              >
              <h3 class="contacts__subtitle2-md">Горячая линия</h3>
              <a href="tel:88003335103" class="contacts__call-md"
                >8 800 333 51 03</a
              >
              <span class="contacts__call-descr-md"
                >Междугороднее соединение бесплатно</span
              >
              <a href="mailto:kotel@sgaz.ru" class="contacts__post-md"
                >kotel@sgaz.ru</a
              >
            </div>
            <div class="contacts__inn-box-md">
              <h3 class="info2__title info2__title--2-md">Реквизиты</h3>
              <p class="contacts__item2-md">
                <span class="info2__title info2__title--2-md">ИНН:</span>
                <span class="info2__content info2__content--2-md"
                  >7328066855</span
                >
              </p>
              <p class="contacts__item2-md">
                <span class="info2__title info2__title--2-md">КПП:</span>
                <span class="info2__content info2__content--2-md"
                  >732801001</span
                >
              </p>
              <p class="contacts__item2-md">
                <span class="info2__title info2__title--2-md">ОГРН:</span>
                <span class="info2__content info2__content--2-md"
                  >1127328000447</span
                >
              </p>
              <p class="contacts__item2-md">
                <span class="info2__title info2__title--2-md">р/с:</span>
                <span class="info2__content info2__content--2-md"
                  >40702810990080000762</span
                >
              </p>
              <p class="contacts__item2-md">
                <span class="info2__title info2__title--2-md">к/с:</span>
                <span class="info2__content info2__content--2-md"
                  >30101810300000000881</span
                >
              </p>
              <p class="contacts__item2-md">
                <span class="info2__title info2__title--2-md">БИК:</span>
                <span class="info2__content info2__content--2-md"
                  >042282881</span
                >
              </p>
              <p class="contacts__item2-md">
                <span class="info2__title info2__title--2-md"
                  >ФИЛИАЛ Приволжский</span
                >
                <span class="info2__content info2__content--2-md"
                  >ПАО Банк «ФК Открытие»</span
                >
              </p>
              <p class="contacts__item2-md">
                <span class="info2__title info2__title--2-md"
                  >Генеральный директор:
                </span>
                <span class="info2__content info2__content--2-md"
                  >Цыганцов Андрей Валерьевич</span
                >
              </p>
            </div>
          </div>

          <div class="contacts__info2-md">
            <div class="contacts__phones-box-md">
              <p class="contacts__item-md">
                <span class="info2__title-md">Отдел продаж:</span>
                <span class="info2__content-md">8 (8422) 25-03-48</span>
                <span class="info2__content-md">8 (8422) 25-03-49</span>
              </p>
            </div>
          </div>
        </div>
        <div class="map-container-md">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A1f4ffcffa9f016bcc365a3cbb9fa4e150d21d54089e2108d1f05d14e88bcc8da&amp;source=constructor"
            width="100%"
            height="600"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  </section>

  <!-- /////////////////////////// <770 /////////////////////////////////-->
  <section
    v-if="variant3"
    class="contacts-sm"
    :class="{ contactsPageClass: isContactsPage }"
  >
    <div class="container">
      <div class="contacts__wrapper-sm">
        <div class="contacts__info-sm">
          <div class="box2sm">
            <div class="contacts__info1-sm">
              <h2 class="contacts__title-sm">Контакты</h2>
              <h3 class="contacts__subtitle1-sm">ООО ГК «СервисГаз»</h3>
              <span class="contacts__address-sm"
                >432072, г. Ульяновск, 10-й проезд Инженерный, д. 14</span
              >
              <h3 class="contacts__subtitle2-sm">Горячая линия</h3>
              <a href="tel:88003335103" class="contacts__call-sm"
                >8 800 333 51 03</a
              >
              <span class="contacts__call-descr-sm"
                >Междугороднее соединение бесплатно</span
              >
              <a href="mailto:kotel@sgaz.ru" class="contacts__post-sm"
                >kotel@sgaz.ru</a
              >
            </div>
            <div class="contacts__info2-sm">
              <div class="contacts__phones-box-sm">
                <p class="contacts__item-sm info2__title-sm">
                  Отдел продаж:
                  <span class="info2__content-sm"
                    >8 (8422) 25-03-48, 8 (8422) 25-03-49</span
                  >
                </p>
              </div>
            </div>
            <div class="contacts__inn-box-sm">
              <h3 class="info2__title info2__title--2-sm">Реквизиты</h3>
              <p class="contacts__item2-sm">
                <span class="info2__title info2__title--2-sm">ИНН:</span>
                <span class="info2__content info2__content--2-sm"
                  >7328066855</span
                >
              </p>
              <p class="contacts__item2-sm">
                <span class="info2__title info2__title--2-sm">КПП:</span>
                <span class="info2__content info2__content--2-sm"
                  >732801001</span
                >
              </p>
              <p class="contacts__item2-sm">
                <span class="info2__title info2__title--2-sm">ОГРН:</span>
                <span class="info2__content info2__content--2-sm"
                  >1127328000447</span
                >
              </p>
              <p class="contacts__item2-sm">
                <span class="info2__title info2__title--2-sm">р/с:</span>
                <span class="info2__content info2__content--2-sm"
                  >40702810990080000762</span
                >
              </p>
              <p class="contacts__item2-sm">
                <span class="info2__title info2__title--2-sm">к/с:</span>
                <span class="info2__content info2__content--2-sm"
                  >30101810300000000881</span
                >
              </p>
              <p class="contacts__item2-sm">
                <span class="info2__title info2__title--2-sm">БИК:</span>
                <span class="info2__content info2__content--2-sm"
                  >042282881</span
                >
              </p>
              <p class="contacts__item2-sm">
                <span class="info2__title info2__title--2-sm"
                  >ФИЛИАЛ Приволжский</span
                >
                <span class="info2__content info2__content--2-sm"
                  >ПАО Банк «ФК Открытие»</span
                >
              </p>
              <p class="contacts__item2-sm">
                <span class="info2__title info2__title--2-sm"
                  >Генеральный директор:
                </span>
                <span class="info2__content info2__content--2-sm"
                  >Цыганцов Андрей Валерьевич</span
                >
              </p>
            </div>
          </div>
        </div>
        <div class="map-container-sm">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A1f4ffcffa9f016bcc365a3cbb9fa4e150d21d54089e2108d1f05d14e88bcc8da&amp;source=constructor"
            width="100%"
            height="300"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, watch, onUnmounted } from "vue";
defineProps(["isContactsPage"]);

const width = ref(window.innerWidth);

function setWidth() {
  width.value = window.innerWidth;
}
onMounted(() => {
  window.addEventListener("resize", setWidth);
});
onUnmounted(() => {
  window.removeEventListener("resize", setWidth);
});
const variant1 = ref(width.value >= 1300);
watch(width, () => {
  variant1.value = width.value >= 1300;
});
const variant2 = ref(width.value < 1300 && width.value >= 770);
watch(width, () => {
  variant2.value = width.value < 1300 && width.value >= 770;
});
const variant3 = ref(width.value < 770);
watch(width, () => {
  variant3.value = width.value < 770;
});
</script>

<style lang="scss" scoped>
.contactsPageClass {
  background-color: #fff !important;
  margin-top: 0 !important;
  padding-top: 20px !important;
}


/////////////////////////////////////////////////////////////////////
/////////////////////////////// >1500 ///////////////////////////////
/////////////////////////////////////////////////////////////////////

.contacts {
  margin-top: 70px;
  padding-top: 65px;
  padding-bottom: 65px;
  background-color: #f9f9f9;
}
.contacts__wrapper {
  display: flex;

  & > *:first-child {
    flex-basis: 46%;
    @media (max-width: 1370px) {
      flex-basis: 50%;
    }
  }
  & > *:last-child {
    flex-basis: 50%;
  }
}

.contacts__title {
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  color: #3c3f47;
  margin-bottom: 35px;
  padding-bottom: 20px;

  @media (max-width: 1400px) {
    margin-bottom: 0;
    padding-bottom: 10px;
  }
  @media (max-width: 720px) {
    font-size: 28px;
  }
}
.contacts__subtitle1 {
  font-size: 24px;
  font-weight: 700;
  margin-top: 5px;
  @media (max-width: 1400px) {
    font-size: 18px;
  }
}
.contacts__address {
  display: block;
  font-size: 14px;
  margin-bottom: 20px;
  padding-left: 25px;
  position: relative;
  @media (max-width: 1400px) {
    margin-bottom: 0;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 15px;
    height: 22px;
    background-image: url("../../assets/images/icon-marker.svg");
  }
}
.contacts__subtitle2 {
  font-size: 24px;
  font-weight: 700;
  margin-top: 10px;
}
.contacts__call {
  display: block;
  font-size: 36px;
  color: #00b2f6;
  text-decoration: none;
  transition: 0.2s ease;
  @media (max-width: 1400px) {
    font-size: 28px;
  }

  &:hover {
    color: #3c3f47;
    text-decoration: underline;
  }
}
.contacts__call-descr {
  display: block;
  line-height: 1.25;
  font-size: 16px;
  margin-bottom: 15px;
}
.contacts__post {
  display: block;
  color: #00b2f6;
  text-decoration: none;
  padding-left: 30px;
  position: relative;

  &::after {
    position: absolute;
    top: 4px;
    left: 0;
    content: "";
    width: 19px;
    height: 14px;
    background-image: url("../../assets/images/icon-mail.svg");
  }
}

.contacts__info2 {
  display: flex;
  margin-top: 30px;
  @media (max-width: 1400px) {
    margin-top: 10px;
  }

  & .contacts__phones-box {
    flex-basis: 30%;
  }
  & .contacts__inn-box {
    flex-basis: 55%;

    @media (max-width: 1400px) {
      flex-basis: 60%;
    }
  }
}

.contacts__item {
  margin-bottom: 25px;
}
.info2__title {
  display: block;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 5px;
  @media (max-width: 1400px) {
    font-size: 14px;
    // line-height: 1.5;
  }

  &--2 {
    display: inline-block;
  }
}
.info2__content {
  display: block;

  &--2 {
    display: inline-block;
  }
}
.contacts__item2 {
  @media (max-width: 1400px) {
    line-height: 1.5;
  }
  & > *:first-child {
    margin-right: 5px;
  }
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////// <1500 ///////////////////////////////
/////////////////////////////////////////////////////////////////////

.box1md {
  display: flex;

  & > *:first-child {
    flex-basis: 50%;
  }
  & > *:last-child {
    flex-basis: 50%;
  }
}

.contacts-md {
  margin-top: 70px;
  padding-top: 65px;
  padding-bottom: 65px;
  background-color: #f9f9f9;
}
.contacts__wrapper-md {
  display: block;

  & > *:first-child {
    width: 100%;
  }
  & > *:last-child {
    width: 100%;
  }
}

.contacts__title-md {
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  color: #3c3f47;
  //   margin-bottom: 35px;
  padding-bottom: 20px;

  @media (max-width: 720px) {
    font-size: 28px;
  }
}
.contacts__subtitle1-md {
  font-size: 24px;
  font-weight: 700;
  margin-top: 5px;
}
.contacts__address-md {
  display: block;
  font-size: 14px;
  margin-bottom: 20px;
  padding-left: 25px;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 15px;
    height: 22px;
    background-image: url("../../assets/images/icon-marker.svg");
  }
}
.contacts__subtitle2-md {
  font-size: 24px;
  font-weight: 700;
  margin-top: 10px;
}
.contacts__call-md {
  display: block;
  font-size: 36px;
  color: #00b2f6;
  text-decoration: none;
  transition: 0.2s ease;

  &:hover {
    color: #3c3f47;
    text-decoration: underline;
  }
}
.contacts__call-descr-md {
  display: block;
  line-height: 1.25;
  font-size: 16px;
  margin-bottom: 15px;
}
.contacts__post-md {
  display: block;
  color: #00b2f6;
  text-decoration: none;
  padding-left: 30px;
  position: relative;

  &::after {
    position: absolute;
    top: 4px;
    left: 0;
    content: "";
    width: 19px;
    height: 14px;
    background-image: url("../../assets/images/icon-mail.svg");
  }
}

.contacts__info2-md {
  display: flex;
  margin-top: 30px;

  & .contacts__phones-box-md {
    // flex-basis: 30%;
  }
  & .contacts__inn-box-md {
    // flex-basis: 70%;
  }
}
.contacts__phones-box-md {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.contacts__inn-box-md {
  padding-top: 40px;
}

.contacts__item-md {
  margin-bottom: 25px;
}
.info2__title-md {
  display: block;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 5px;
}
.info2__title--2-md {
  display: inline-block;
}
.info2__content-md {
  display: block;
}
.info2__content--2-md {
  display: inline-block;
}
.contacts__item2-md {
  & > *:first-child {
    margin-right: 5px;
  }
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////// <770 ///////////////////////////////
/////////////////////////////////////////////////////////////////////

.contacts__info-sm {
  margin-bottom: 30px;
}

.box2sm {
  display: flex;
  flex-direction: column;

  & > *:first-child {
    flex-basis: auto;
  }
  & > *:last-child {
    flex-basis: auto;
  }
}

.contacts-sm {
  margin-top: 70px;
  padding-top: 65px;
  padding-bottom: 65px;
  background-color: #f9f9f9;

  @media (max-width: 500px) {
    margin-top: 0;
  }
}
.contacts__wrapper-sm {
  display: block;

  & > *:first-child {
    width: 100%;
  }
  & > *:last-child {
    width: 100%;
  }
}
.contacts__title-sm {
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  color: #3c3f47;
  padding-bottom: 20px;

  @media (max-width: 720px) {
    font-size: 28px;
  }
  @media (max-width: 470px) {
    font-size: 24px;
    padding-bottom: 0;
  }
}
.contacts__subtitle1-sm {
  font-size: 24px;
  font-weight: 700;
  margin-top: 5px;

  @media (max-width: 470px) {
    font-size: 20px;
  }
  @media (max-width: 340px) {
    font-size: 18px;
  }
}
.contacts__address-sm {
  display: block;
  font-size: 14px;
  margin-bottom: 20px;
  padding-left: 25px;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 15px;
    height: 22px;
    background-image: url("../../assets/images/icon-marker.svg");
  }

  @media (max-width: 500px) {
    max-width: 345px;
  }
}
.contacts__subtitle2-sm {
  font-size: 24px;
  font-weight: 700;
  margin-top: 10px;

  @media (max-width: 470px) {
    font-size: 20px;
  }
}
.contacts__call-sm {
  display: block;
  font-size: 36px;
  color: #00b2f6;
  text-decoration: none;
  transition: 0.2s ease;

  &:hover {
    color: #3c3f47;
    text-decoration: underline;
  }

  @media (max-width: 470px) {
    font-size: 28px;
  }
}
.contacts__call-descr-sm {
  display: block;
  line-height: 1.25;
  font-size: 16px;
  margin-bottom: 15px;

  @media (max-width: 470px) {
    font-size: 14px;
  }
}
.contacts__post-sm {
  display: block;
  color: #00b2f6;
  text-decoration: none;
  padding-left: 30px;
  position: relative;

  &::after {
    position: absolute;
    top: 4px;
    left: 0;
    content: "";
    width: 19px;
    height: 14px;
    background-image: url("../../assets/images/icon-mail.svg");
  }
}

.contacts__info2-sm {
  display: flex;
  margin-top: 10px;
}
.contacts__phones-box-sm {
  width: 100%;
  margin-top: 15px;
}
.contacts__inn-box-sm {
  padding-top: 15px;
}

.contacts__item-sm {
  margin-bottom: 25px;
}
.info2__title-sm {
  display: block;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 5px;

  @media (max-width: 470px) {
    font-size: 14px;
  }
}
.info2__title--2-sm {
  display: inline-block;

  @media (max-width: 470px) {
    font-size: 14px;
  }
}
.info2__content-sm {
  display: inline-block;
  font-weight: 400;
  font-size: 16px;

  @media (max-width: 470px) {
    font-size: 14px;
  }
}
.info2__content--2-sm {
  display: inline-block;

  @media (max-width: 470px) {
    font-size: 14px;
  }
}
.contacts__item2-sm {
  & > *:first-child {
    margin-right: 5px;
  }
}

.news__link-box {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  // margin-bottom: 37px;
}
.news__link-all:active,
.news__link-all:link,
.news__link-all:visited {
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  color: #2cb0ff;
  text-decoration: none;
  position: relative;

  &:hover {
    text-decoration: underline;
  }
}
</style>
