<template>
  <section class="company">
    <div class="container">
      <h1 class="company__main-title">О компании СервисГаз</h1>
      <div class="company__wrapper">
        <div class="company__left-box">
          <ul class="company__fuatures-list">
            <li class="company__fuatures-item">
              <div class="digits__box">
                <div class="digits__img-box">
                  <img
                    src="../../assets/images/digits/digit1.svg"
                    alt="digits"
                    class="digits__img"
                  />
                </div>
                <p class="digits__text">Патентов на изобретение</p>
              </div>
              <div class="text-box">
                СервисГаз – предприятие полного цикла производства (более 20
                производственных участков, более 200 единиц оборудования). Имеет
                12 патентов на изобретения.
              </div>
            </li>
            <li class="company__fuatures-item">
              <div class="digits__box">
                <img
                  src="../../assets/images/digits/digit2.svg"
                  alt="digits"
                  class="digits__img"
                />
                <p class="digits__text">лидера отрасли</p>
              </div>
              <div class="text-box">
                СервисГаз входит в тройку крупнейших российских производителей
                бытовых отопительных котлов и аппаратов, а также систем
                безопасности газового оборудования.
              </div>
            </li>
            <li class="company__fuatures-item">
              <div class="digits__box">
                <img
                  src="../../assets/images/digits/digit3.svg"
                  alt="digits"
                  class="digits__img"
                />
                <p class="digits__text">ЛЕТ РАБОТАЕМ С 1992 Г.</p>
              </div>
              <div class="text-box">
                Наличие современного высокотехнологичного оборудования и
                квалифицированных сотрудников позволяет предприятию производить
                газовое отопительное оборудование высокого качества и занимать
                лидирующие позиции на рынке уже более 30 лет.
              </div>
            </li>
            <li class="company__fuatures-item">
              <div class="digits__box">
                <img
                  src="../../assets/images/digits/digit4.svg"
                  alt="digits"
                  class="digits__img"
                />
                <p class="digits__text">ОБЪЕКТОВ СОБСТВЕННОЙ РАЗРАБОТКИ</p>
              </div>
              <div class="text-box">
                ООО "НПП Гидросистема", входящая в группу компаний "СервисГаз",
                специализируется на новых разработках продукции, производимой на
                головном предприятии "СервисГаз", а также отвечает за реализацию
                оборудования одного из направлений предприятия — торговой марки
                "BURAN"*.
              </div>
            </li>
          </ul>
        </div>
        <div class="company__right-box">
          <div class="slider-box">
            <AboutSlider />
          </div>
        </div>
      </div>
      <div class="company__wrapper-md">
        <div class="company__left-box">
          <ul class="company__fuatures-list">
            <li class="company__fuatures-item">
              <div class="img-box">
                <img
                  src="../../assets/images/about/about-li-1.svg"
                  alt="fuature image"
                />
              </div>
              <div class="text-box">
                СервисГаз – предприятие полного цикла производства (более 20
                производственных участков, более 200 единиц оборудования). Имеет
                12 патентов на изобретения.
              </div>
            </li>
            <li class="company__fuatures-item">
              <div class="img-box">
                <img
                  src="../../assets/images/about/about-li-2.svg"
                  alt="fuature image"
                />
              </div>
              <div class="text-box">
                Предприятие «СервисГаз» входит в десятку крупнейших российских
                производителей бытовых отопительных котлов и аппаратов, а также
                систем безопасности газового оборудования.
              </div>
            </li>
            <li class="company__fuatures-item">
              <div class="img-box">
                <img
                  src="../../assets/images/about/about-li-3.svg"
                  alt="fuature image"
                />
              </div>
              <div class="text-box">
                Наличие современного высокотехнологичного оборудования и
                квалифицированных сотрудников позволяет предприятию производить
                газовое отопительное оборудование высокого качества и занимать
                лидирующие позиции на рынке уже более 25 лет.
              </div>
            </li>
            <li class="company__fuatures-item">
              <div class="img-box">
                <img
                  src="../../assets/images/about/about-li-4.svg"
                  alt="fuature image"
                />
              </div>
              <div class="text-box">
                ООО "НПП Гидросистема", входящая в группу компаний "СервисГаз",
                специализируется на новых разработках продукции, производимой на
                головном предприятии "СервисГаз", а также отвечает за реализацию
                оборудования одного из направлений предприятия — торговой марки
                "BURAN"*.
              </div>
            </li>
          </ul>
        </div>
        <div class="company__right-box">
          <div class="slider-box">
            <AboutSliderMd />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AboutSlider from "./AboutSlider.vue";
import AboutSliderMd from "./AboutSliderMd.vue";
</script>

<style lang="scss" scoped>
.digits__box {
  // flex-shrink: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // width: 200px !important;
  max-width: 130px;
  min-width: 130px;
  // background-color: #c3e9ff;
  margin-right: 30px;
}
.digits__img {
  height: 80px;
  width: auto;

  @media (max-width: 1440px) {
    height: 40px;
  }
  @media (max-width: 820px) {
    height: 40px;
  }
}
.digits__text {
  font-size: 12px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.04em;
  text-align: center;
  text-transform: uppercase;
  color: #2cb0ff;
  max-width: 200px;
  margin-top: 10px;

  @media (max-width: 1440px) {
    font-size: 8px;
  }
  @media (max-width: 560px) {
    font-size: 9px;
  }
  @media (max-width: 450px) {
    font-size: 8px;
  }
  @media (max-width: 450px) {
    font-size: 7px;
  }
}
// .digits__img-box {
//   max-width: 100%;
//   align-self: stretch;
// }

.swiper {
  @media (max-width: 1400px) {
    max-width: 670px !important;
  }
}

.company {
  margin-top: 100px;
  margin-bottom: 90px;

  @media (max-width: 450px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
.company__main-title {
  font-size: 36px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 45px;

  @media (max-width: 450px) {
    margin-bottom: 10px;
    font-size: 24px;
  }
}
.company__wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 1300px) {
    display: none;
  }
}
.company__left-box {
  flex-basis: 50%;
}
.company__right-box {
  flex-basis: 50%;
  flex-shrink: 1;
}

.slider-box {
  max-width: 100%;
  max-height: 550px;
}
.company__fuatures-list {
  list-style: none;
}
.company__fuatures-item {
  padding: 0 30px 0 0;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 1440px) {
    margin-top: 20px;
  }
  // .img-box {
  //   min-width: 110px;
  //   height: auto;
  //   margin-right: 20px;
  //   img {
  //     height: auto;
  //   }
  // }
  .text-box {
    flex-basis: auto;
    font-size: 16px;
    line-height: 1.5;
    position: relative;

    @media (max-width: 1510px) {
      font-size: 14px;
    }
    @media (max-width: 1450px) {
      font-size: 12px;
    }
  }

  @media (max-width: 450px) {
    // height: 115px;
  }
}

////////////////////////////////////////////////////////
/////////////////////// < 1430 /////////////////////////
////////////////////////////////////////////////////////

.company__wrapper-md {
  display: none;

  @media (max-width: 1300px) {
    display: block;
  }

  .company__left-box {
    width: 100%;
  }
  .company__right-box {
    width: 100%;
  }

  .slider-box {
    max-width: 100%;
    max-height: 550px;
  }
  .company__fuatures-list {
    list-style: none;
    display: grid;
    grid-template: minmax(10px, auto) / repeat(2, 49%);
    gap: 20px;
    margin-bottom: 20px;

    @media (max-width: 680px) {
      grid-template: minmax(10px, auto) / repeat(1, 100%);
      gap: 0;
    }
    @media (max-width: 680px) {
      grid-template: auto / repeat(1, 100%);
      gap: 0;
    }
  }
  .company__fuatures-item {
    padding: 0 0px 0 0;
    display: flex;
    margin-bottom: 10px;
    @media (max-width: 440px) {
      margin-bottom: -5px;
      margin-top: 15px;
    }
    @media (max-width: 340px) {
      margin-bottom: 0;
    }
    .img-box {
      min-width: 110px;
      height: auto;
      margin-right: 20px;
      img {
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      @media (max-width: 930px) {
        min-width: 70px;
        transform: scale(0.8);
        padding: 0 0px 0 0;
      }
      @media (max-width: 370px) {
        min-width: 60px;
        transform: scale(0.6);
        padding: 0 0px 0 0;
      }
      @media (max-width: 370px) {
        min-width: 40px;
        transform: scale(0.6);
        padding: 0 0px 0 0;
      }
    }
    .text-box {
      flex-basis: auto;
      font-size: 16px;
      line-height: 1.5;
      position: relative;

      @media (max-width: 1510px) {
        font-size: 14px;
      }
      @media (max-width: 1450px) {
        font-size: 12px;
      }
      @media (max-width: 930px) {
        font-size: 12px;
        padding-left: 10px;
      }
      @media (max-width: 490px) {
        font-size: 10px;
      }
      @media (max-width: 350px) {
        padding-top: 10px;
      }
    }
  }
}
</style>
