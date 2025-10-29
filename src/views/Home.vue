<script setup>
import PaletteGenerator from "~/views/PaletteGenerator.vue";
import { reactive } from "vue";

const props = defineProps({
  mode: {type: String,},
});
const state = reactive({});
</script>

<template>
  <!-- <div class="max-w-4xl mx-auto">
    Home
  </div> -->
  <div class="p-5">
  <PaletteGenerator :mode="mode" />
  </div>
</template>
