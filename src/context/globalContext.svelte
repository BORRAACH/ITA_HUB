<script lang="ts">
    import { getContext, setContext } from 'svelte';

  setContext("globalContext", {
    darkMode: false
  })

  export const globalContext = getContext("globalContext")
</script>
