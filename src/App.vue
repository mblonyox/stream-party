<script setup lang="ts">
import { ref } from 'vue';
const themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"];
const selectedTheme = ref("light");
</script>

<template>
  <main class="min-h-screen h-screen flex flex-col p-4 bg-base-100" :data-theme="selectedTheme">
    <div class="navbar rounded-xl border bg-base-100">
      <a href="#" class="btn btn-ghost normal-case text-xl text-base-content">Stream Party</a>
      <div class="flex-1"></div>
      <select v-model="selectedTheme" class="select select-bordered text-base-content">
        <option :value="theme" v-for="theme in themes">{{ theme }}</option>
      </select>
    </div>
    <router-view />
  </main>
</template>

<style scoped>
main {
  background-image: url("/hexagons.svg");
}
</style>
