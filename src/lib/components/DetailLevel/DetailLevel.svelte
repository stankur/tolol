<script lang="ts">
	import { Range } from "flowbite-svelte";
	export let level: number;
</script>

<div class="flex flex-col align-top gap-2 p-4 rounded-md bg-neutral-100  sticky top-2" on:click>
    <Range bind:value={level} min={0} max={100} step={50} on:click={(e) => e.stopPropagation()}/>
        <div></div>
	<div class="text-xs"> Detail Level </div>
</div>
