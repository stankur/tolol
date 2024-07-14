<script lang="ts">
	import type { Symbol } from "../SidebarTypes";
    import { SidebarExpandStore } from '../../../stores/SidebarExpandStore';

	export let symbol: Symbol;
    export let url: string;

    const symbolMap: Record<Symbol, string> = {
        "collapse": "-",
        "expand": "+",
        "none": ""
    }

</script>

{#if symbol === "none"}
    <div class="w-8 h-8 flex justify-center items-center cursor-pointer rounded-lg select-none shrink-0" on:click={() => SidebarExpandStore.toggle(url)} role="none">
        {symbolMap[symbol]}
    </div>

{:else}
    <div class="w-8 h-8 flex justify-center items-center hover:bg-neutral-200 cursor-pointer rounded-lg select-none shrink-0" on:click={() => SidebarExpandStore.toggle(url)} role="none">
        {symbolMap[symbol]}
    </div>
{/if}
