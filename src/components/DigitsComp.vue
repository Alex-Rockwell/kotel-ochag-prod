<template>
  <div>
    <section class="digits container">
      <div class="digits__box">
        <div class="digits__img-box">
          <img
            src="../../assets/images/digits/digit1.svg"
            alt="digits"
            class="digits__img"
          />
        </div>
        <p class="digits__text">городов России и СНГ</p>
        <p class="digits__text2">
          Благодаря развитой дилерской сети продукция ООО «СервисГаз» доступна в
          различных точках России и СНГ
        </p>
      </div>
      <div class="digits__box">
        <div class="digits__img-box">
          <img
            src="../../assets/images/digits/digit2.svg"
            alt="digits"
            class="digits__img"
          />
        </div>
        <p class="digits__text">лидера отрасли</p>
        <p class="digits__text2">
          <!-- Группа компаний Сервис Газ входит в 10 крупнейших производителей
          бытовых газовых напольных котлов -->
          СервисГаз входит в тройку крупнейших производителей бытовых газовых
          котлов в России
        </p>
      </div>
      <div class="digits__box">
        <div class="digits__img-box">
          <img
            src="../../assets/images/digits/digit3.svg"
            alt="digits"
            class="digits__img"
          />
        </div>
        <p class="digits__text">РАБОТАЕМ С 1992 Г.</p>
        <p class="digits__text2">
          СервисГаз более 30-ти лет является разработчиком газового оборудования и систем управления безопасности
        </p>
      </div>
      <div class="digits__box">
        <div class="digits__img-box">
          <img
            src="../../assets/images/digits/digit4.svg"
            alt="digits"
            class="digits__img"
          />
        </div>
        <p class="digits__text">ПАТЕНТОВ</p>
        <p class="digits__text2">
          СервисГаз имеет более 15 внедрённых объектов собственной разработки
        </p>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.digits {
  display: grid;
  grid-template: auto / repeat(4, 25%);
  height: 160px;
  margin-top: 105px;
  margin-bottom: 100px;

  @media (max-width: 1370px) {
    margin-top: 30px;
  }
  @media (max-width: 950px) {
    height: auto;
    grid-template: max-content / repeat(2, 50%);
    row-gap: 20px;
  }
  @media (max-width: 490px) {
    margin-bottom: 20px;
  }
}
.digits__box {
  height: 100px;
  width: auto;
  align-self: self-start;
  justify-self: center;
  @media (max-width: 950px) {
    height: auto;
  }
}
.digits__img-box {
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
}
.digits__img {
  height: 80px;
  width: auto;
  display: flex;

  @media (max-width: 1440px) {
    height: 50px;
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
  margin-top: 10px;
  width: 100%;

  @media (max-width: 1440px) {
    font-size: 10px;
  }
  @media (max-width: 560px) {
    font-size: 9px;
  }
  @media (max-width: 450px) {
    font-size: 9px;
  }
  @media (max-width: 450px) {
    font-size: 9px;
  }
}

.digits__text2 {
  font-size: 15px;
  line-height: 1.3;
  text-align: center;
  color: #3c3f47;
  margin-top: 20px;
  padding-right: 30px;
  padding-left: 30px;

  @media (max-width: 1370px) {
    margin-top: 10px;
    font-size: 12px;
    padding-right: 20px;
    padding-left: 20px;
  }
  @media (max-width: 490px) {
    font-size: 10px;
    line-height: 1.2;
    padding-right: 10px;
    padding-left: 10px;
  }
}
</style>
