<script>
  export let extraText = "test";
  export let onClick = () => {};
</script>

<div class="text-3xl font-bole" on:click={onClick}>
  Hellow svelte {extraText}
</div>