<script lang="ts">   
    import type { Node } from './SidebarTypes';
	import SidebarEntries from './SidebarEntries/SidebarEntries.svelte';

    export let nodes: Node[];
</script>

<div class="w-64 p-4 flex flex-col gap- bg-neutral-100 rounded-lg">
    <SidebarEntries nodes={nodes} />
</div>


