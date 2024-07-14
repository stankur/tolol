<script lang="ts">
    import { base } from '$app/paths';
    export let label: string;
    export let url: string;

</script>

<a href={base + url} class="flex grow justify-left items-center pl-4 pr-4 hover:bg-neutral-200 rounded-lg overflow-hidden">
    <span class="inline-block whitespace-nowrap overflow-ellipsis overflow-hidden" >{label}</span>
</a>
