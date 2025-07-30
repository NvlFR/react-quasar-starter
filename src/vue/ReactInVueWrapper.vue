<template>
  <div ref="reactRoot" />
</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from "vue";
import * as React from "react";
import { createRoot } from "react-dom/client";
import ReactComponent from "@react/ReactComponent";

const reactRoot = ref<HTMLElement | null>(null);
let root: ReturnType<typeof createRoot> | null = null;

onMounted(() => {
  if (reactRoot.value) {
    root = createRoot(reactRoot.value);
    root.render(React.createElement(ReactComponent));
  }
});

onBeforeUnmount(() => {
  root?.unmount();
});
</script>
