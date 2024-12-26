<script>
  import Clock from "./components/Clock.svelte";
  import Header from "./components/+layout.svelte";

  const darkMode = $state(localStorage);
</script>

<main class="dark:bg-neutral-900">
  <Header />
  <div class="px-5">
    <Clock />
  </div>
</main>
