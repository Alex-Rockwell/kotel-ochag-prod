<template>
  <div>
    <div class="overlay" @click="close" :class="{ overlayActive: isOpen2 }">
      <div class="modal" @click.stop :class="{ modalActive: isOpen2 }">
        <h3 class="modal__title">Руководства по эксплуатации</h3>

        <div class="left-box">
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
                href="../../assets/files/docs/1.1-Аппарат отопительный газовый АОГВ (АКГВ) (на модели до 2021 года).pdf"
                download="Аппарат отопительный газовый АОГВ (АКГВ) (на модели до 2021
                года)"
                class="service__manual-link"
                >Аппарат отопительный газовый АОГВ (АКГВ) (на модели до 2021
                года)</a
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
                href="../../assets/files/docs/1.2-Аппарат отопительный газовый АОГВ (АКГВ).pdf"
                class="service__manual-link"
                download="Аппарат отопительный газовый АОГВ (АКГВ)"
                >Аппарат отопительный газовый АОГВ (АКГВ)</a
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
                href="../../assets/files/docs/1.3-Котел стальной газовый КСГ (КСГВ).pdf"
                class="service__manual-link"
                download="Котел стальной газовый КСГ (КСГВ)"
                >Котел стальной газовый КСГ (КСГВ)</a
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
                href="../../assets/files/docs/1.4-Аппарат отопительный газовый АОГВ 80 кВт и 98 кВт.pdf"
                class="service__manual-link"
                download="Аппарат отопительный газовый АОГВ 80 кВт и 98 кВт"
                >Аппарат отопительный газовый АОГВ 80 кВт и 98 кВт</a
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
                href="../../assets/files/docs/1.5-Котел парапетный газовый КСГЗ_2020.pdf"
                class="service__manual-link"
                download="Котел парапетный газовый КСГЗ"
                >Котел парапетный газовый КСГЗ</a
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
                href="../../assets/files/docs/1.6-Котел чугунный газовый.pdf"
                class="service__manual-link"
                download="Котел чугунный газовый"
                >Котел чугунный газовый</a
              >
            </li>
          </ul>
        </div>

        <div class="modal__close" @click="close">×</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["isOpen2"]);

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
  width: 730px;
  height: auto;
  padding: 50px 30px 100px;
  border: 1px solid #ccc;
  background-color: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transform: translate(-50%, -50%) scale(0);

  @media (max-width: 780px) {
    max-width: 100%;
    max-height: 100vh;
    padding: 50px 0 100px;
  }
  @media (max-width: 450px) {
    width: 100vw;
    height: 100vh;
  }  
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
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #2e2e2e;
  padding-bottom: 20px;
  padding-top: 30px;
  margin-bottom: 30px;

  @media (max-width: 780px) {
    font-size: 20px;
  }
  @media (max-width: 450px) {
    padding-bottom: 0;
  }
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

.modal__text {
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 40px;
}

.modal__input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #9f9f9f;
  margin-bottom: 40px;
}

.modal__input:focus {
  border: none;
  outline: none;
  border-bottom: 1px solid #000;
}

.modal__input::placeholder {
  font-family: "Roboto", sans-serif;
  font-style: italic;
  font-size: 14px;
  line-height: 20px;
  color: #2e2e2e;
}

.modal__input:focus::placeholder {
  font-family: "Roboto", sans-serif;
  font-style: italic;
  font-size: 14px;
  line-height: 20px;
  color: #2e2e2e;
}

.modal__submit {
  display: block;
  padding: 10px 25px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 14px;
  transition: 0.3s ease;
  background-color: #00b2f6;
  color: #fff;
  margin-bottom: 10px !important;
  margin-top: 10px;
  width: 260px;
  text-decoration: none;
  text-align: center;
  border: 1px solid #00b2f6 !important;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #00b2f6;
  }
}

.modal__submit:hover {
  cursor: pointer;
}
.btn {
  display: block;
  margin: auto;
}
.modal__form {
  width: 80%;
  display: block;
  margin: 30px auto 0;

  @media (max-width: 780px) {
    width: 100%;
    padding: 0 20px 0;
  }
  @media (max-width: 600px) {
    height: 100vh;
  }
}

.modal__close {
  position: absolute;
  top: 20px;
  right: 15px;
  font-size: 50px;
  color: #2cb0ff;

  &:hover {
    cursor: pointer;
  }
}
.label {
  font-family: "Roboto", sans-serif;
  font-style: italic;
  font-size: 14px;
  line-height: 20px;
  color: #2e2e2e;
  display: block;
  margin-bottom: 10px;
}
.textarea {
  margin-top: 2px;
  padding: 15px;
  min-height: 155px;
  font-style: normal;
  background-color: #e5f3fb;
  resize: none;
  border: 1px solid #b8cbdc;
  width: 100%;
  font-size: 16px;
  line-height: 20px;
}

.service__subtitle {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
  padding-right: 15px;  
}
.service__manual-list {
  list-style: none;
  @media (max-width: 450px) {
    padding: 0 20px;    
  }
}
.service__manual-item {
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: flex-end;

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
    fill: #00B2F6;
  }
  &:hover .service__manual-link {
    color: #00B2F6;
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
    font-size: 13px;
  }
}
</style>
