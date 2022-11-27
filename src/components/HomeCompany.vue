<template>
  <section class="company">
    <div class="container">
      <div class="company__box">
        <div class="left-box">
          <div class="company__info">
            <h2 class="title-main company__title">О компании СервисГаз</h2>
            <div class="company__descr">
              <p>
                Предприятие «СервисГаз» входит в тройку крупнейших российских
                производителей бытовых отопительных котлов и систем безопасности
                газового оборудования. Основные направления деятельности —
                производство отопительных котлов, газовых горелок, блоков
                управления и газогорелочных устройств САБК.
              </p>
              <p>
                Компания имеет развитую дилерскую сеть во многих регионах России
                и странах СНГ, где оборудование хорошо известно и пользуется
                доверием пользователей.
              </p>
              <p>
                Наличие современного высокотехнологичного оборудования,
                квалифицированных сотрудников позволяет предприятию производить
                газовое отопительное оборудование высокого качества и занимать
                лидирующие позиции на рынке уже 30 лет.
              </p>
            </div>
          </div>
        </div>

        <div class="right-box">
          <div class="img-box">
            <img
              src="../../assets/images/company/company-home2.svg"
              alt="logo"
            />
          </div>
          <div class="info__video-wrapper info__video-wrapper--1">
            <video
              class="info__video"
              src="../../assets/images/company/company_video-2.mp4"
              poster="../../assets/images/company/video-preview.jpg"
              data-video
              muted
              controls="controls"
              width="680px"
            ></video>
          </div>
          <div class="info__video-wrapper info__video-wrapper--2">
            <video
              class="info__video"
              src="../../assets/images/company/company_video-2.mp4"
              poster="../../assets/images/company/video-preview.jpg"
              data-video
              muted
              controls="controls"
              width="640px"
            ></video>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.company {
  padding-top: 0;
  padding-bottom: 30px;
  background-color: #f9f9f9;

  @media (max-width: 720px) {
    margin-top: 160px;
    padding-top: 50px;
  }
  @media (max-width: 720px) {
    margin-top: 120px;
  }
  @media (max-width: 630px) {
    padding-top: 20px;
  }
  @media (max-width: 530px) {
    margin-top: 80px;
  }
  @media (max-width: 500px) {
    margin-top: 0px;
  }
}
.company__box {
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 720px) {
    flex-direction: column;
  }
}
.left-box {
  flex-basis: 45%;
  padding: 80px 0 80px 0;
  @media (max-width: 1440px) {
    flex-basis: 50%;
    padding-right: 20px;
  }
  @media (max-width: 1230px) {
    // display: none;;
    flex-basis: 100%;
  }
  @media (max-width: 610px) {
    // display: none;;
    // flex-basis: 100%;
    padding: 80px 10px 80px 0;
  }
  @media (max-width: 610px) {
    // display: none;;
    // flex-basis: 100%;
    padding: 20px 10px 10px 0;
  }
}
.right-box {
  flex-basis: 60%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 1440px) {
    flex-basis: 50%;
  }
  @media (max-width: 1230px) {
    display: none;
    flex-basis: 0;
  }
}
.img-box {
  height: 360px;
  // margin-right: auto;
  flex-basis: 100%;
  text-align: center;
  img {
    height: 100%;
    width: auto;
    overflow: hidden;
  }

  @media (max-width: 1440px) {
    display: none;
  }
}
.info__video-wrapper {
  max-width: 720px;
  flex-shrink: 0;

  &--1 {
    @media (max-width: 1920px) {
      display: none;
    }
  }
  &--2 {
    display: none;
    @media (max-width: 1920px) {
      display: block;
    }
  }
}
.company__logo {
  width: 50%;
  height: auto;

  @media (max-width: 1150px) {
    width: 60%;
  }
  @media (max-width: 1030px) {
    width: 70%;
  }
  @media (max-width: 860px) {
    width: 80%;
  }
  @media (max-width: 720px) {
    width: 100px;
  }
}
.company__title {
  color: #3c3f47;
  margin-bottom: 20px;
}
.company__descr > * {
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 20px;

  @media (max-width: 1400px) {
    font-size: 13px;
  }
  @media (max-width: 1230px) {
    width: 80%;
  }
  @media (max-width: 1080px) {
    width: 100%;
  }
  @media (max-width: 720px) {
    font-size: 14px;
  }
}

// .arrow-box {
//   height: 50px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   margin-top: 20px;

//   @media (max-width: 993px) {
//     display: none;
//   }
// }
// .arrowDown {
//   cursor: pointer;
// }
</style>
