<script>
  import { getContext, setContext } from 'svelte';

  setContext('teste', "teste")

  export const testContext = getContext("teste")
</script>