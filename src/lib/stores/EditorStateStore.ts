// src/stores/editorStore.ts
import { writable } from "svelte/store";
import { EditorState } from "prosemirror-state";

export const editorState = writable<EditorState>();
