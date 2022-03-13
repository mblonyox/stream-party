<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Plyr from 'plyr';


const player = ref<HTMLDivElement>()

onMounted(() => {
  const plyr = new Plyr(player.value!);
  console.log(plyr)
})

</script>

<template>
  <div class="flex-1 rounded-xl border bg-base-100 flex flex-col justify-center">
    <video src="" ref="player"></video>
  </div>
</template>

<style>
@import url("plyr/dist/plyr.css");
</style>