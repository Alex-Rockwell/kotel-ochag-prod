<template>
  <div>
    <div class="overlay" @click="close" :class="{ overlayActive: isOpen }">
      <div class="modal" @click.stop :class="{ modalActive: isOpen }">
        <h3 class="modal__title">Запрос на сотрудничество</h3>

        <form
          method="#"
          class="modal__form"
          ref="formA"
          @submit.prevent="handleForm"
        >
          <input
            type="text"
            placeholder="Ф.И.О."
            class="modal__input mb-10"
            name="fio"
            required
          />
          <input
            type="text"
            placeholder="Номер телефона*"
            class="modal__input mb-10"
            name="phone"
            required
          />
          <input
            type="text"
            placeholder="Модель котла"
            class="modal__input mb-10"
            name="modelKotla"
            required
          />

          <label for="question" class="label">Ваш вопрос:</label>
          <textarea
            id="question"
            name="question"
            class="textarea"
            rows="5"

          ></textarea>
          <button type="submit" class="modal__submit">Отправить</button>
        </form>

        <div class="modal__close" @click="close">×</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps(["isOpen"]);

const emit = defineEmits(["closeModal"]);
function close() {
  emit("closeModal");
}


const formA = ref();

const message = {
  success: "Спасибо! Скоро мы с вами свяжемся",
  failure: "Что-то пошло не так...",
};

function handleForm(submitEvent) {
  const formElement = submitEvent.target;
  const formData = new FormData(formElement);

  // console.log(formData);

  fetch("../../phpmailer/send.php", {
    method: "POST",
    body: formData,
  })
    .then((data) => {
      console.log(data);
      alert(message.success);
    })
    .catch(() => {
      alert(message.failure);
    })
    .finally(() => {
      formElement.reset();
      close();
    });
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

  @media (max-width: 780px) {
    font-size: 20px;
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
  margin: auto;
  margin-top: 30px;
  padding: 15px 40px 15px 50px;
  width: 264px;
  height: 50px;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  background-color: #007bc5;
  border: none;
  outline: none;

  &:hover {
    background-color: #19a0f3;
    color: #ffffff;
    cursor: pointer;
  }
  &:active {
    opacity: 0.7;
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
  color: #007bc5;

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
</style>
