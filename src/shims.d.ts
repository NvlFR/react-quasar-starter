// Untuk .vue file
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// Untuk React .tsx import (optional, kalau errornya masih muncul)
declare module "*.tsx";
