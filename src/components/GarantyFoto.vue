<template>
  <section class="garanty-video">
    <div class="container">
      <h2 class="title-main service__title" id="garantyPhoto">Фото инструкции</h2>
      <div class="service__wrapper">
        <a
          class="foto-item"
          href="../../assets/images/garanty/foto-1-2.jpg"
          download="АОГВ Премиум"
        >
          <img src="../../assets/images/garanty/foto-1.png" alt="" />
          <p class="foto-description">АОГВ Премиум</p>
        </a>
        <a
          class="foto-item"
          href="../../assets/images/garanty/foto-2-2.jpg"
          download="КСГ Стандарт"
        >
          <img src="../../assets/images/garanty/foto-2.png" alt="" />
          <p class="foto-description">КСГ Стандарт</p>
        </a>
        <a
          class="foto-item"
          href="../../assets/images/garanty/foto-3-2.jpg"
          download="КСГЗ парапетный Компакт"
        >
          <img src="../../assets/images/garanty/foto-3.png" alt="" />
          <p class="foto-description">КСГЗ парапетный Компакт</p>
        </a>
        <a
          class="foto-item"
          href="../../assets/images/garanty/foto-4-2.jpg"
          download="КЧГ Очаг"
        >
          <img src="../../assets/images/garanty/foto-4.png" alt="" />
          <p class="foto-description">КЧГ Очаг</p>
        </a>
      </div>
    </div>
    <GarantyModal :isOpen="isOpen" @closeModal="() => (isOpen = false)" />
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.garanty-video {
  margin-top: 80px;

  @media (max-width: 450px) {
    margin-top: 20px;
  }
}
.service__title {
  margin-bottom: 30px;
}
.service__wrapper {
  display: grid;
  grid-template-columns: repeat(4, minmax(23%, 264px));
  grid-template-rows: auto;
  column-gap: 20px;
  row-gap: 20px;
  align-content: center;
  justify-content: center;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(23%, 264px));
    grid-template-rows: auto;
  }
}
.foto-item {
  text-decoration: none;
  margin-bottom: 10px;
  max-width: 264px;

  img {
    display: block;
    width: 100%;
    max-height: 360px;
  }
}

.foto-description {
  color: #3c3f47;
  text-decoration: none;
  margin-top: 15px;
  font-weight: 700;
  text-align: center;

  @media (max-width: 1080px) {
    font-size: 14px;
  }
  @media (max-width: 1080px) {
    font-size: 13px;
  }
}
</style>
