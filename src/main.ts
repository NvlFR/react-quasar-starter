import { createApp } from "vue";
import App from "./vue/App.vue";
import "./style.css";

// ⬇️ Import Quasar dan CSS-nya
import { Quasar } from "quasar";
import "quasar/dist/quasar.css";

const app = createApp(App);

app.use(Quasar, {
  plugins: {}, // Tambahkan plugin Quasar jika dibutuhkan (optional)
});

app.mount("#app");
