import type { Node } from "../components/Sidebar/SidebarTypes";
import { writable } from "svelte/store";

function deriveFlatData(nodes: Node[]) {
	const flatData: Node[] = [];

	function flatten(node: Node) {
		flatData.push(node);
		node.children.forEach(flatten);
	}

	nodes.forEach(flatten);

	return flatData;
}

type SidebarExpandStore = Record<string, boolean>;

function createInitialState(nodes: Node[]) {
	const flatNodes = deriveFlatData(nodes);

	const initialState: SidebarExpandStore = {};

	for (const node of flatNodes) {
		initialState[node.url] = false;
	}

	return initialState;
}

function createSidebarExpandStore() {
	const { subscribe, set, update } = writable<SidebarExpandStore>({});

	return {
		subscribe,
		init: (nodes: Node[]) => {
			set(createInitialState(nodes));
		},
		toggle: (url: string) => {
			update((store) => {
				store[url] = !store[url];
				return store;
			});
		},
	};
}

export const SidebarExpandStore = createSidebarExpandStore();
