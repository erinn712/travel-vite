import "./plugins/axios";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import i18n from "./i18n/index.js";
import "@/mock/mockServer";

loadFonts();

createApp(App).use(i18n).use(router).use(vuetify).mount("#app");
