import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faHouse,
  faUserPlus,
  faCircleQuestion,
  faRightToBracket,
  faVideo,
  faList,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faBars,
  faHouse,
  faUserPlus,
  faCircleQuestion,
  faRightToBracket,
  faVideo,
  faList,
  faRightFromBracket,
  faUser
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(store)
  .mount("#app");
