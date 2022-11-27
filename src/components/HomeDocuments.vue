<template>
  <section class="documents container">
    <div class="documents__wrapper">
      <RouterLink
        class="documents__box1"
        to="/garanty#garantyVideo"
         
      >
        <div class="documents__title">
          <span>Видео</span>
          <span>инструкции</span>
        </div>
      </RouterLink>
      <RouterLink
        class="documents__box2"
        to="/garanty#garantyPhoto"
         
      >
        <div class="documents__title2">
          <span>Фото</span>
          <span>инструкции</span>
        </div>
        <div class="documets__foto-box">
          <img
            src="../../assets/images/home/lib-foto1.png"
            alt="foto"
            class="documets__foto documets__foto--1"
          />
        </div>
      </RouterLink>
      <RouterLink
        class="documents__box3"
        to="/garanty#garantyDocuments"
         
      >
        <div class="documents__title2">
          <span>Техническая</span>
          <span>документация</span>
        </div>
        <div class="documets__foto-box">
          <img
            src="../../assets/images/home/lib-foto2.png"
            alt="foto"
            class="documets__foto documets__foto--2"
          />
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.documents {
  margin-top: 40px;
}
.documents__wrapper {
  display: flex;
  justify-content: space-between;

  @media (max-width: 420px) {
    // flex-direction: column;
    flex-wrap: wrap;
  }

  & > * {
    height: 400px;
    color: inherit;
    text-decoration: none;
    background-color: #f9f9f9;

    @media (max-width: 1370px) {
      height: 350px;
    }
    @media (max-width: 1250px) {
      height: 340px;
    }
    @media (max-width: 1150px) {
      height: 300px;
    }
    @media (max-width: 1000px) {
      height: 250px;
    }
    @media (max-width: 870px) {
      height: 220px;
    }
    @media (max-width: 870px) {
      height: 200px;
    }
    @media (max-width: 730px) {
      height: 180px;
    }
    @media (max-width: 590px) {
      height: 150px;
    }
    @media (max-width: 450px) {
      height: 100px;
    }
    @media (max-width: 420px) {
      height: 180px;
    }
  }

  & > *:first-child {
    flex-basis: 48%;

    @media (max-width: 420px) {
      flex-basis: 100%;
    }
  }
  & > *:nth-child(2) {
    flex-basis: 24%;
    @media (max-width: 420px) {
      flex-basis: 50%;
    }
  }
  & > *:last-child {
    flex-basis: 24%;
    @media (max-width: 420px) {
      flex-basis: 50%;
    }
  }
}

.documents__box1 {
  background-image: url("../../assets/images/home/lib-video.png");
  background-size: cover;
  position: relative;
}
.documents__title {
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
  letter-spacing: 0.05em;
  text-align: left;
  color: #fff;
  position: absolute;
  top: 5%;
  left: 5%;
  text-transform: uppercase;

  span {
    display: block;
  }

  @media (max-width: 1150px) {
    font-size: 40px;
  }
  @media (max-width: 1070px) {
    font-size: 32px;
  }
  @media (max-width: 760px) {
    font-size: 24px;
    line-height: 1.5;
  }
  @media (max-width: 590px) {
    font-size: 18px;
    line-height: 1.5;
  }
  @media (max-width: 450px) {
    font-size: 16px;
    line-height: 1.5;
  }
}

.documents__box2,
.documents__box3 {
  position: relative;
}
.documents__title2 {
  padding: 20px 0 0 20px;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.04em;
  text-align: left;
  text-transform: uppercase;
  height: 20%;

  span {
    display: block;
  }

  @media (max-width: 1070px) {
    font-size: 16px;
  }
  @media (max-width: 730px) {
    font-size: 14px;
    line-height: 1.5;
  }
  @media (max-width: 630px) {
    padding-top: 10px;
    font-size: 10px;
    line-height: 1.5;
  }
}
.documets__foto-box {
  max-width: 100%;
  max-height: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  overflow: hidden;
  padding-top: 10px;

  @media (max-width: 1000px) {
    padding-top: 30px;
  }
  @media (max-width: 600px) {
    padding-top: 20px;
  }
  @media (max-width: 420px) {
    padding-right: 30px;
    // padding-bottom: 20px;
  }
}

.documets__foto {
  // max-width: 90%;
  max-height: auto;
}
.documets__foto--1 {
  max-width: 90%;
  @media (max-width: 1300px) {
    max-width: 75%;
  }
  @media (max-width: 1000px) {
    max-width: 60%;
  }
  @media (max-width: 450px) {
    max-width: 50%;
  }
  @media (max-width: 420px) {
    max-width: 65%;
  }
}
.documets__foto--2 {
  max-width: 70%;
  @media (max-width: 1370px) {
    max-width: 86%;
  }
  @media (max-width: 1000px) {
    max-width: 75%;
  }
  @media (max-width: 450px) {
    max-width: 50%;
  }
  @media (max-width: 420px) {
    max-width: 70%;
  }
}
</style>
