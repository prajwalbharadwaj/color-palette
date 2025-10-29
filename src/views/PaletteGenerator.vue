<script setup>
import { computed, onMounted, onUnmounted, reactive } from "vue";
import namer from "color-namer";
import { useCopy } from "~/common/util/util.js";
import { useModeStore } from "~/common/stores/mode.js";

const modeStore = useModeStore();
const state = reactive({
  colors: [],
  bodyHeight: 0,
  scrollBottom: 0,
});

const mode = computed(() => modeStore.mode);

function generateRandomColor() {
  return Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
}

function handleScroll() {
  const scrollY = window.scrollY;
  state.bodyHeight = document.body.scrollHeight;
  state.scrollBottom = scrollY + window.innerHeight;
  if ((state.scrollBottom / state.bodyHeight) * 100 > 95) {
    getData(25);
  }
}

const hexToRgb = (h, alpha = false, a = 1) => {
  if (h.length === 3)
    h = h
      .split("")
      .map((x) => x + x)
      .join("");
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  if (h.length === 8) a = parseInt(h.slice(6, 8), 16) / 255;
  return alpha ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
};

function getData(count) {
  for (let i = 0; i < count; i++) {
    const randomColor = generateRandomColor();
    state.colors.push({
      id: i,
      hex: randomColor,
      hexColor: `#${randomColor}`,
      rgba: hexToRgb(randomColor, true),
      rgb: hexToRgb(randomColor),
      name: namer(`#${randomColor}`).ntc[0]?.name,
    });
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  getData(25);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="grid palette-generator-columns gap-5">
    <div
      v-for="item in state.colors"
      :key="item.id"
      class="bg-white p-1 shadow rounded-2xl group"
    >
      <div class="h-20 rounded-t-xl relative" :style="{ backgroundColor: item.hexColor }">
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer invisible group-hover:visible"
          :style="`color:${
            parseInt(item.color, 16) > 0xffffff / 2 ? '#0a2d31' : '#fff'
          };border-color:${parseInt(item.color, 16) > 0xffffff / 2 ? '#0a2d31' : '#fff'}`"
          @click="useCopy(item?.[mode])"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z"
              />
              <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
            </g>
          </svg>
        </div>
      </div>

      <div class="text-center py-2">{{ item?.[mode] }}</div>
    </div>
  </div>
</template>

<style>
.palette-generator-columns {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
</style>
