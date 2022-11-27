<template>
  <div>
    <div class="overlay" @click="close" :class="{ overlayActive: isOpen }">
      <div class="modal" @click.stop :class="{ modalActive: isOpen }">
        <h3 class="modal__title">Сертификаты</h3>
        <ul class="service__manual-list">
          <li class="service__manual-item">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5236 0V15.1176L8.6539 12.2798L7.51562 13.4068L12.3288 18.1665L17.142 13.4068L16.0037 12.2798L13.1339 15.1176V0H11.5236Z"
                fill="#3c3f47"
              />
              <path
                d="M17.9145 6.1744H23.0473V22.4066H1.61029V6.1744H6.74311V4.58105H0V23.9999H24.6576V4.58105H17.9145V6.1744Z"
                fill="#3c3f47"
              />
            </svg>
            <a
              href="../../assets/files/docs/2.1-Сертификат на напольные котлы КСГ(В), КЧГ, КСГЗ(В).pdf"
              download="Сертификат на напольные котлы КСГ(В), КЧГ, КСГЗ(В)"
              class="service__manual-link"
               
              >Сертификат на напольные котлы КСГ(В), КЧГ, КСГЗ(В)</a
            >
          </li>
          <li class="service__manual-item">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5236 0V15.1176L8.6539 12.2798L7.51562 13.4068L12.3288 18.1665L17.142 13.4068L16.0037 12.2798L13.1339 15.1176V0H11.5236Z"
                fill="#3c3f47"
              />
              <path
                d="M17.9145 6.1744H23.0473V22.4066H1.61029V6.1744H6.74311V4.58105H0V23.9999H24.6576V4.58105H17.9145V6.1744Z"
                fill="#3c3f47"
              />
            </svg>
            <a
              href="../../assets/files/docs/2.2-Cертификат на аппараты отопительные АОГВ и АКГВ_2020.pdf"
              class="service__manual-link"
              download="Cертификат на аппараты отопительные АОГВ и АКГВ"
               
              >Cертификат на аппараты отопительные АОГВ и АКГВ</a
            >
          </li>
          <li class="service__manual-item">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5236 0V15.1176L8.6539 12.2798L7.51562 13.4068L12.3288 18.1665L17.142 13.4068L16.0037 12.2798L13.1339 15.1176V0H11.5236Z"
                fill="#3c3f47"
              />
              <path
                d="M17.9145 6.1744H23.0473V22.4066H1.61029V6.1744H6.74311V4.58105H0V23.9999H24.6576V4.58105H17.9145V6.1744Z"
                fill="#3c3f47"
              />
            </svg>
            <a
              href="../../assets/files/docs/2.3-Сертификат САБК.pdf"
              download="Сертификат САБК"
              class="service__manual-link"
               
              >Сертификат САБК</a
            >
          </li>
          <li class="service__manual-item">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5236 0V15.1176L8.6539 12.2798L7.51562 13.4068L12.3288 18.1665L17.142 13.4068L16.0037 12.2798L13.1339 15.1176V0H11.5236Z"
                fill="#3c3f47"
              />
              <path
                d="M17.9145 6.1744H23.0473V22.4066H1.61029V6.1744H6.74311V4.58105H0V23.9999H24.6576V4.58105H17.9145V6.1744Z"
                fill="#3c3f47"
              />
            </svg>
            <a
              href="../../assets/files/docs/2.4-Сертификат на устройства газогорелочные.pdf"
              download="Сертификат на устройства газогорелочные"
              class="service__manual-link"
               
              >Сертификат на устройства газогорелочные</a
            >
          </li>
          <li class="service__manual-item">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5236 0V15.1176L8.6539 12.2798L7.51562 13.4068L12.3288 18.1665L17.142 13.4068L16.0037 12.2798L13.1339 15.1176V0H11.5236Z"
                fill="#3c3f47"
              />
              <path
                d="M17.9145 6.1744H23.0473V22.4066H1.61029V6.1744H6.74311V4.58105H0V23.9999H24.6576V4.58105H17.9145V6.1744Z"
                fill="#3c3f47"
              />
            </svg>
            <a
              href="../../assets/files/docs/2.5-ИСОRU.pdf"
              download="Сертификаты ИСО (Рус)"
              class="service__manual-link"
               
              >Сертификаты ИСО (Рус)</a
            >
          </li>
          <li class="service__manual-item">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5236 0V15.1176L8.6539 12.2798L7.51562 13.4068L12.3288 18.1665L17.142 13.4068L16.0037 12.2798L13.1339 15.1176V0H11.5236Z"
                fill="#3c3f47"
              />
              <path
                d="M17.9145 6.1744H23.0473V22.4066H1.61029V6.1744H6.74311V4.58105H0V23.9999H24.6576V4.58105H17.9145V6.1744Z"
                fill="#3c3f47"
              />
            </svg>
            <a
              href="../../assets/files/docs/2.6-ИСОENG.pdf"
              download="Сертификаты ИСО (Eng)"
              class="service__manual-link"
               
              >Сертификаты ИСО (Eng)</a
            >
          </li>
        </ul>
        <div class="modal__close" @click="close">×</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["isOpen"]);

const emit = defineEmits(["closeModal"]);
function close() {
  emit("closeModal");
}
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
  display: none;
}
.overlayActive {
  display: block;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  max-width: 900px;
  height: 500px;
  max-height: 500px;
  padding: 30px;
  padding-bottom: 100px;
  border: 1px solid #ccc;
  background-color: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transform: translate(-50%, -50%) scale(0);
}

.modalActive {
  transform: translate(-50%, -50%) scale(1);
  animation-name: a1;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-direction: normal;
}
@keyframes a1 {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
.modal__title {
  font-weight: 700;
  font-size: 28px;
  line-height: 20px;
  text-align: center;
  color: #2e2e2e;
  padding-bottom: 40px;
  padding-top: 30px;
}

.modal__close {
  position: absolute;
  top: 20px;
  right: 15px;
  font-size: 50px;
  color: #007bc5;

  &:hover {
    cursor: pointer;
  }
}
.modal__link {
  font-size: 14px;
  color: #007bc5;
  display: block;
  width: 100%;
  text-align: left;
  text-decoration: none;
  margin-bottom: 5px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}

.service__manual-list {
  list-style: none;
}
.service__manual-item {
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: flex-end;

  @media (max-width: 450px) {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  & > svg {
    margin-right: 15px;
    align-self: center;
    flex-basis: 25px;
    flex-shrink: 0;
  }

  & > svg > * {
    transition: fill 0.3s ease;
  }
  &:hover > svg > * {
    fill: #00b2f6;
  }
  &:hover .service__manual-link {
    color: #00b2f6;
  }
}
.service__manual-link {
  color: inherit;
  text-decoration: none;
  transition: 0.3s ease;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  max-width: 700px;
  padding-right: 15px;

  @media (max-width: 450px) {
    font-size: 12px;
  }
}
</style>
