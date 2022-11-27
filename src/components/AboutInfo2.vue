<template>
  <section class="info">
    <div class="container">
      <div class="info__wrapper">
        <div class="info-img-box">
          <img src="../../assets/images/about/about-img-2.svg" alt="">
        </div>
        <div class="info__video-box">
          <video
            class="info__video"
            src="../../assets/images/company/company_video-2.mp4"
            poster="../../assets/images/company/video-preview.jpg"
            data-video
            autoplay
            muted
            controls="controls"
          ></video>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.info {

}
.info__wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.info-img-box {
  flex-basis: 30%;
  & > * {
    width: 100%;
    max-height: 700px;
  }
}
.info__video-box {
  flex-basis: 70%;
}
.info__video {
  width: 100%;
  max-height: 700px;
}


</style>