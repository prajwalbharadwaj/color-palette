import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const copied = ref(false);

export async function useCopy(text) {
  if (text) {
    await navigator.clipboard.writeText(text);
    copied.value = true;
    toast("Copied: " + text, {
      autoClose: 1000
    });
    setTimeout(() => (copied.value = false), 1500);
  }
}

export const hexToRgb = (h, alpha = false, a = 1) => {
  h = h.replace(/^#/, '');
  if (h.length === 3)
    h = h
      .split("")
      .map((x) => x + x)
      .join("");
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  if (h.length === 8) a = parseInt(h.slice(6, 8), 16) / 255;
  return alpha ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
};
