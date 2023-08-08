import { createApp } from "vue";

createApp({
  data() {
    return {
      message: "Hello from Vue.JS",
      name: "",
    };
  },
}).mount("#results"); // The container where you want the Vue instance to be mounted.
