<template>
  <ContactsComponent :isContactsPage="isContactsPage"/>
</template>

<script setup>
import { ref } from "vue";
import ContactsComponent from "../components/ContactsComponent.vue";
import { useMeta } from "vue-meta";

useMeta({
  title: "Контакты",
  keywords: "котел-очаг, официальный сайт",
  htmlAttrs: { lang: "ru", amp: true },
});
const isContactsPage = ref(true)
</script>

<style lang="sass" scoped></style>
