<template>
  <section class="digits">
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
    <div class="digits__box">
      <img
        src="../../assets/images/digits/digit2.svg"
        alt="digits"
        class="digits__img"
      />
      <p class="digits__text">КРУПНЕЙШИХ ПРОИЗВОДИТЕЛЕЙ ГАЗОВЫХ КОТЛОВ В РОССИИ</p>
    </div>
    <div class="digits__box">
      <img
        src="../../assets/images/digits/digit3.svg"
        alt="digits"
        class="digits__img"
      />
      <p class="digits__text">ЛЕТ РАБОТАЕМ С 1992 Г.</p>
    </div>
    <div class="digits__box">
      <img
        src="../../assets/images/digits/digit4.svg"
        alt="digits"
        class="digits__img"
      />
      <p class="digits__text">ОБЪЕКТОВ СОБСТВЕННОЙ РАЗРАБОТКИ</p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.digits {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 50px 0 100px;
  max-width: 1100px;
  margin: auto;
  @media (max-width: 760px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  @media (max-width: 450px) {
    padding: 30px 30px 10px !important;
  }
}
.digits__box {
  flex-shrink: 1;
  text-align: center;
  max-width: 200px;
}
.digits__img {
  height: 80px;
  width: auto;

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
  color: #2CB0FF;
  max-width: 200px;
  margin-top: 10px;
  
  @media (max-width: 1440px) {
    font-size: 10px;
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
.digits__img-box {
  max-width: 100%;
}
</style>
