<script lang="ts">
	import "../../app.css";
	import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";
	import type { Node } from "$lib/components/Sidebar/SidebarTypes";
	import { SidebarExpandStore } from "$lib/stores/SidebarExpandStore";

	export let data: { nodes: Node[] };
	SidebarExpandStore.init(data.nodes);
</script>

<svelte:head>
	<style>
		@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");

		* {
			font-family: Inter, sans-serif;
			line-height: 1.5;
			box-sizing: border-box;
		}
	</style>
</svelte:head>

<div class="flex">
	<Sidebar {...data} />
	<div class="content-container">
		<div class="content">
			<slot />
		</div>
	</div>
</div>

<style lang="postcss">

	.content {
		width: 50vw;
	}

	.content-container {
		flex-grow: 1;
		display: flex;
		justify-content: center;
	}
</style>
