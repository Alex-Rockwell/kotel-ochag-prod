<template>
  <div class="sparePartsItem">
    <div class="sparePartsItem__imgbox">
      <a :href="element.image"  >
        <img
          :src="element.image"
          alt="spare part foto"
          class="sparePartsItem__img"
        />
      </a>
    </div>
    <div class="sparePartsItem__title">
      <p>
        {{ element.title }}
      </p>
    </div>
    <div class="sparePartsItem__artikul">
      <p>
        {{ element.artikul }}
      </p>
    </div>
    <div class="sparePartsItem__applicability">
      <p>
        {{ element.applicability }}
      </p>
    </div>
  </div>

  <div class="sparePartsItem-sm">
    <div class="top-box">
      <div class="sparePartsItem__imgbox">
        <a :href="element.image"  >
          <img
            :src="element.image"
            alt="spare part foto"
            class="sparePartsItem__img"
          />
        </a>
      </div>
      <div class="sparePartsItem__title">
        <p>
          {{ element.title }}
        </p>
      </div>
    </div>
    <div class="sparePartsItem__artikul">
      <p class="subtitle">Артикул</p>
      <p>
        {{ element.artikul }}
      </p>
    </div>
    <div class="sparePartsItem__applicability">
      <p class="subtitle">Применяемость</p>
      <p>
        {{ element.applicability }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps(["element"]);
</script>

<style lang="scss" scoped>
.sparePartsItem {
  width: 100%;
  min-height: 100px;
  height: auto;
  background-color: #f8f8f8;
  display: flex;
  margin-bottom: 12px;

  @media (max-width: 700px) {
    display: none;
  }
}
.sparePartsItem__imgbox {
  flex-basis: 10%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sparePartsItem__img {
  width: 100%;
  max-height: 100%;
}
.sparePartsItem__title {
  flex-basis: 30%;
  padding: 20px;
  @media (max-width: 950px) {
    font-size: 14px;
  }
}
.sparePartsItem__artikul {
  flex-basis: 20%;
  padding: 20px;
  @media (max-width: 950px) {
    font-size: 14px;
  }
}
.sparePartsItem__applicability {
  flex-basis: 40%;
  padding: 20px;
  @media (max-width: 950px) {
    font-size: 14px;
  }
  @media (max-width: 950px) {
    font-size: 13px;
  }
  @media (max-width: 550px) {
    font-size: 12px;
  }
}

////////////////////////// <700 //////////////////////////////////

.sparePartsItem-sm {
  display: none;
  width: 100%;
  height: auto;
  background-color: #f8f8f8;
  margin-bottom: 12px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }

  .top-box {
    display: flex;
  }

  .sparePartsItem__imgbox {
    flex-basis: 120px;
    flex-shrink: 0;
    margin-left: 20px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sparePartsItem__img {
    width: 100%;
    max-height: 100%;
  }
  .sparePartsItem__title {
    flex-basis: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 950px) {
      font-size: 14px;
    }
    @media (max-width: 420px) {
      font-size: 12px;
    }
  }
  .sparePartsItem__artikul {
    flex-basis: 20%;
    padding: 0;
    padding-left: 20px;
    @media (max-width: 950px) {
      font-size: 14px;
    }
    @media (max-width: 420px) {
      font-size: 12px;
    }
  }
  .sparePartsItem__applicability {
    flex-basis: 40%;
    padding: 0;
    padding-left: 20px;
    @media (max-width: 950px) {
      font-size: 14px;
    }
    @media (max-width: 950px) {
      font-size: 13px;
    }
    @media (max-width: 550px) {
      font-size: 12px;
    }
  }
}
.subtitle {
  color: #adafb5;
  font-size: 12px;
}
</style>
