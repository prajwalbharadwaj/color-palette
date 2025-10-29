<script setup>
import { onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useModeStore } from "~/common/stores/mode.js";

const router = useRouter();
const route = useRoute();
const modeStore = useModeStore();

const state = reactive({
  selected: "hex",
});

function handleChange(e) {
  state.selected = e.target.value;
  modeStore.setMode(state.selected);
}

onMounted(() => {
  if (!modeStore.mode) {
    modeStore.setMode("hex");
  }
  state.selected = modeStore.mode;
});
</script>

<template>
  <div class="bg-black text-white min-h-12 px-5 py-5 md:py-2 grid md:flex justify-between items-center gap-3 sticky top-0 z-1">
    <div class="flex gap-4 items-center">
      <div class="text-2xl font-medium">Color - Palette</div>
      <div
        v-if="route.name === 'details'"
        class="cursor-pointer py-1.5 px-4 rounded-md bg-gray-800 hover:bg-gray-700 flex gap-2 items-center"
        @click="router.push({ name: 'list' })"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h14M5 12l4 4m-4-4l4-4"
          />
        </svg>
        Go Back
      </div>
    </div>
    <div class="flex gap-4 items-center">
      <div
        class="cursor-pointer py-1.5 px-4 rounded-md bg-gray-800 hover:bg-gray-700"
        @click="
          route.name === 'home'
            ? router.push({ name: 'list' })
            : router.push({ name: 'home' })
        "
      >
        {{ route.name === "home" ? "Flat Color" : "Random Color" }}
      </div>
      <div class="grid grid-cols-1">
        <select
          id="mode"
          name="mode"
          v-model="state.selected"
          class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6"
          @change="handleChange"
        >
          <option value="hex">HEX (AA1122)</option>
          <option value="hexColor">HEX (#AA1122)</option>
          <option value="rgb">RGB (1, 2, 3)</option>
          <option value="rgba">RGBA (1, 2, 3, 0.5)</option>
        </select>
      </div>
    </div>
  </div>
</template>
