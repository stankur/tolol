import { get } from "$lib/content-sync/getter";

export function load() {
	return {
		content: get("demo/reid_hoffman/blitzscaling"),
		url: "demo/reid_hoffman/blitzscaling",
	};
}
