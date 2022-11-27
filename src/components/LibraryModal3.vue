<template>
  <div>
    <div class="overlay" @click="close" :class="{ overlayActive: isOpen }">
      <div class="modal" @click.stop :class="{ modalActive: isOpen }">
        <h3 class="modal__title">Скачать сертификаты</h3>
        <a href="#"   class="modal__link"
          >Сертификат на напольные котлы 1-контурные, 2-контурные и на парапетные котлы</a
        >
        <a href="#"   class="modal__link"
          >Сертификат на аппараты газовые 1-контурные, 2-контурные</a
        >
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
  width: 700px;
  min-height: 500px;
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
</style>
