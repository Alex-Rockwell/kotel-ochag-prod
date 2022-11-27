<template>
  <section class="garanty-video">
    <div class="container">
      <h2 class="title-main service__title" id="garantyVideo">Видео инструкции</h2>
      <div class="service__wrapper">
        <a
          class="video-item"
          href="https://www.youtube.com/watch?v=GQwfeJal-AE"
          target="_blank"
        >
          <img src="../../assets/images/garanty/video-1.png" alt="">
          <p class="video-description">Обзорное видео котла АОГВ (АКГВ) серии "Премиум"</p>
        </a>
        <a
          class="video-item"
          href="https://www.youtube.com/watch?v=nxm_jsprozM"
          target="_blank"
        >
          <img src="../../assets/images/garanty/video-2.png" alt="">
          <p class="video-description">Обзорное видео котла КСГ серии "Стандарт"</p>
        </a>
        <a
          class="video-item"
          href="https://www.youtube.com/watch?v=m3xMYxMnVD0"
          target="_blank"
        >
          <img src="../../assets/images/garanty/video-3.png" alt="">
          <p class="video-description">Обзорное видео котла КСГЗ ТМ "Очаг" серии "Compact"</p>
        </a>
      </div>
    </div>
    <GarantyModal :isOpen="isOpen" @closeModal="() => (isOpen = false)" />
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.garanty-video {
  // margin-top: 80px;

  @media (max-width: 450px) {
    margin-top: 40px;
  }
}
.service__title {
  margin-bottom: 30px;
}
.service__wrapper {
  display: flex;
  justify-content: space-between;

  & > * {
    flex-basis: 32%;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
}
.video-item {
  text-decoration: none;
  margin-bottom: 10px;

  img {
    display: block;
    width: 100%;
    max-height: 320px;

    @media (max-width: 900px) {
      width: auto;
      max-height: 400px;
    }
    @media (max-width: 605px) {
      width: 100%;
      max-height: 400px;
    }
  }
}

.video-description {
  color: #3c3f47;
  text-decoration: none;
  margin-top: 15px;

  @media (max-width: 450px) {
    margin-top: 5px;
    font-size: 12px;
  }
}
</style>