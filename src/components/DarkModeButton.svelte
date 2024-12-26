<script lang="ts">
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("prefers-color-scheme: dark").matches),
  );

  let darkMode = $state(false);

  function setDarkMode() {
    darkMode ? "" : (darkMode = false);
  }
</script>

<div class="flex items-center">
  <button onclick={setDarkMode} class="dark:bg-neutral-100 px-3 py-1">
    Dark mode
  </button>
</div>
