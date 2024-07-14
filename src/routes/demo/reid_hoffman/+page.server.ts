import { get } from "$lib/content-sync/getter";

export function load() {
	return {
		content: get("demo/reid_hoffman"),
		url: "demo/reid_hoffman",
	};
}
