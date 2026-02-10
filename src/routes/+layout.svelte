<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import { IntorProvider } from "intor/svelte";

  let { children, data } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<IntorProvider value={data.intorValue}>
  {@render children()}
</IntorProvider>
