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
