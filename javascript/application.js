import { createApp } from "vue";

createApp({
  data() {
    return {
      message: "Hello from Vue.JS",
      userInput: "",
    };
  },
}).mount("#app"); // The container where you want the Vue instance to be mounted.
