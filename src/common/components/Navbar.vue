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
  <div class="bg-black text-white h-12 px-5 flex justify-between items-center">
    <div class="text-2xl font-medium">Color - Palette</div>
    <div class="flex gap-4 items-center">
      <div
        class="cursor-pointer"
        @click="
          route.name === 'home'
            ? router.push({ name: 'list' })
            : router.push({ name: 'home' })
        "
      >
        {{ route.name === "home" ? "Flat Color" : "Home" }}
      </div>
      <div class="grid grid-cols-1">
        <select
          id="location"
          name="location"
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
