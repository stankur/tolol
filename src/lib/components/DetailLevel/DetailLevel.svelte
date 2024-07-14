<script lang="ts">
	import { Range } from "flowbite-svelte";
	export let level: number;
</script>

<div class="flex flex-col align-top gap-3 p-2 w-1/3 rounded-md bg-neutral-100  sticky top-2" on:click>
    <div>
    <Range bind:value={level} min={0} max={100} step={50} on:click={(e) => e.stopPropagation()}/>
    
    <div class="flex justify-between text-xs pl-2 pr-2"><span>1</span> <span>2</span> <span>3</span></div>
    </div>
	<div class="text-xs"> Detail Level </div>
</div>
