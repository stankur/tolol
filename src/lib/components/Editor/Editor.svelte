<script lang="ts">
	import { EditorView } from "prosemirror-view";
	import { EditorState } from "prosemirror-state";
	import { onDestroy, onMount } from "svelte";

    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher()

	export let state: EditorState;

	let editorContainer: Element;
	let view: EditorView;

	onMount(() => {
		view = new EditorView(editorContainer, {
			state,
			dispatchTransaction() {
			},
		});
	});

	onDestroy(() => {
		if (view) {
			view.destroy();
		}
	});
</script>

<div bind:this={editorContainer} class="prose"></div>
