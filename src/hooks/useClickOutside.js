import { onMounted } from "vue"

function useClickOutside(ref, handler) {
  function handleClickOutside(e) {
    if (!ref.value.contains(e.target)) {
      handler()
    }
  }
  onMounted(() => {
    window.addEventListener("click", handleClickOutside);
  });
}

export default useClickOutside