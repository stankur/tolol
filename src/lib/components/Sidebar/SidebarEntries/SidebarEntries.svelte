<script lang="ts">
    import type { Node } from '../SidebarTypes';
	import SidebarEntry from './SidebarEntry.svelte';

    export let nodes: Node[];
</script>

<div class="flex flex-col">
    {#each nodes as node (node.url)}
        <SidebarEntry node={node} />
    {/each}
</div>
