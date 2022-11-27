import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// import VueMeta from "/vue-meta";
// import VueMeta from "vue-meta";
import { createMetaManager } from 'vue-meta';

const app = createApp(App);

app.use(createPinia());

app.use(router);
app.use(createMetaManager())
// app.use(VueMeta);

app.mount("#app");
