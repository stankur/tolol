<script lang="ts">
	import Editor from "$lib/components/Editor/Editor.svelte";
	import { EditorState } from "prosemirror-state";
	import {
		defaultMarkdownParser,
		schema,
	} from "prosemirror-markdown";
	import { exampleSetup } from "prosemirror-example-setup";
	import SummarizationLevel from "$lib/components/DetailLevel/DetailLevel.svelte";

	export let data;
	let state: EditorState;

	let level = 100;

	$: {
		if (level === 0) {
			state = EditorState.create({
				schema,
				doc: defaultMarkdownParser.parse(data.content.quarter),
				plugins: exampleSetup({ schema, menuBar: false }),
			});
		} else if (level === 50) {
			state = EditorState.create({
				schema,
				doc: defaultMarkdownParser.parse(data.content.half),
				plugins: exampleSetup({ schema, menuBar: false }),
			});
		} else if (level === 100) {
			state = EditorState.create({
				schema,
				doc: defaultMarkdownParser.parse(data.content.index),
				plugins: exampleSetup({ schema, menuBar: false }),
			});
		}
	}

	function handleStateChange(event: any) {
		state = event.detail.state;
	}


</script>

{#key data.content.index.toString() + level}
	<SummarizationLevel bind:level />
	<Editor {state} on:statechange={handleStateChange} />
{/key}
