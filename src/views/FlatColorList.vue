<script setup>
import { palettes } from "~/common/util/constants.js";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="max-w-5xl mx-auto mt-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      <div
        v-for="(color, id) in palettes"
        :key="color"
        @click="router.push({ name: 'details', params: { id: id } })"
      >
        <div class="grid grid-cols-5 bg-white p-3 rounded-xl">
          <div
            v-for="item in color.colors"
            :key="item"
            class="h-10 w-full"
            :style="{ backgroundColor: item.hex }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
