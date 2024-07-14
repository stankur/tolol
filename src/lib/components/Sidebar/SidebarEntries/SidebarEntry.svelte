<script lang="ts">
    import type { Node } from '../SidebarTypes';

    import { SidebarExpandStore } from '../../../stores/SidebarExpandStore';

    import SidebarEntry from './SidebarEntry.svelte';
	import Label from './Label.svelte';
	import Symbol from './Symbol.svelte';

    export let node: Node;
</script>

<div>
    <div class="flex">
        {#if node.children.length}
            <Symbol symbol={($SidebarExpandStore)[node.url]? "collapse": "expand"} url={node.url} />
        {:else}
            <Symbol symbol="none" url={`/${node.url}`} />
        {/if}

        <Label label={node.title} url={`/${node.url}`}  />
    </div>


    {#if ($SidebarExpandStore)[node.url] && node.children.length}
        <div class="pl-8">
            {#each node.children as child (child.url)}
                <SidebarEntry node={child} />
            {/each}
        </div>
    {/if}
</div>

