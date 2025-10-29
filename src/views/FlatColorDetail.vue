<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { palettes } from "~/common/util/constants.js";
import { useCopy,hexToRgb } from "~/common/util/util.js";

const route = useRoute();

const getData = computed(() => {
  return palettes[route.params.id].colors.map(i=>{
    return {
      ...i, rgb: hexToRgb(i.hex), rgba: hexToRgb(i.hex, true)
    }
  });
});
</script>

<template>
  <div class="grid grid-cols-5 bg-white p-3 h-[calc(100vh-48px)]">
    <div
      v-for="item in getData"
      :key="item"
      class="w-full relative group"
      :style="{ backgroundColor: item.hex }"
      @click="useCopy(item.hex)"
    >
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer invisible group-hover:visible"
      >
      <!-- :style="`color:${parseInt(item.hex, 16) > 0xffffff / 2 ? '#0a2d31' : '#fff'};border-color:${parseInt(item.hex, 16) > 0xffffff / 2 ? '#0a2d31' : '#fff'}`" -->
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></g></svg>
      </div>
    </div>
  </div>
</template>
