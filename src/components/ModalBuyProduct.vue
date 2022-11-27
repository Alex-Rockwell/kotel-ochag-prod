<template>
  <div>
    <div class="overlay" @click="close">
      <div class="modal" @click.stop>
        <h3 class="modal__title">Заказать котел</h3>
        <!-- <h2>props: {{shortTitle}}</h2> -->
        <form method="#" class="form" ref="formA" @submit.prevent="handleForm">
          <label for="modalBuy_name" class="label">Модель</label>
          <input
            type="text"
            placeholder=""
            class="modal__input mb-10"
            name="model"
            id="modalBuy_model"
            v-model="shortTitle"
          />
          <label for="modalBuy_name" class="label">Имя*</label>
          <input
            type="text"
            placeholder=""
            class="modal__input mb-10"
            name="username"
            id="modalBuy_name"
            required
          />
          <label for="modalBuy_phone" class="label">Телефон*</label>
          <input
            type="text"
            placeholder=""
            class="modal__input mb-10"
            name="phone"
            id="modalBuy_phone"
            ref="el"
            required
          />
          <p class="modal__text">
            Заполните данные поля и отправьте заявку. В ближайшее время с вами
            свяжется наш менеджер и уточнит подробности заказа или
            проконсультирует по другим интересующим вопросам о товаре,
            запчастях, услугах.
          </p>
          <button type="submit" class="modal__submit">Отправить</button>
        </form>

        <div class="modal__close" @click="close">×</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useIMask } from "vue-imask";
const props = defineProps({'product2': Object});
const shortTitle = props.product2.shortTitle;


const { el } = useIMask({
  mask: "{+}7{ (}000{) }000{-}00{-}00",
  lazy: false,
});

const emit = defineEmits(["update:show"]);
function close() {
  emit("update:show", false);
}

const formA = ref();

const message = {
  success: "Спасибо! Скоро мы с вами свяжемся",
  failure: "Что-то пошло не так...",
};

function handleForm(submitEvent) {
  const formElement = submitEvent.target;
  const formData = new FormData(formElement);

  console.log(formData);

  fetch("../../phpmailer/sendModalBuyProduct.php", {
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
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1400px;
  height: 630px;
  padding: 30px;
  border: 1px solid #ccc;
  background-color: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  animation-name: a1;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-direction: normal;

  @media (max-width: 450px) {
    width: 100vw;
    height: 100vh;
  }
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
  padding-bottom: 10px;
  padding-top: 30px;
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
  margin-bottom: 30px;
  color: #999;
  padding-left: 5px;
  padding-bottom: 5px;
  font-size: 16px;
}

.modal__input:focus {
  border: none;
  outline: none;
  border-bottom: 1px solid #000;
  color: #999;
}
.modal__input:active {
  color: #999;
}

.label {
  display: block;
  margin-bottom: 7px;
}

.modal__submit {
  display: block;
  padding: 10px 25px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 5px;
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
.form {
  width: 80%;
  display: block;
  margin: 30px auto 0;
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
</style>
