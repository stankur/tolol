import { get } from "$lib/content-sync/getter";

export function load() {
	return {
		content: get("demo/reid_hoffman/blitzscaling/1.what_is_blitscaling"),
		url: "demo/reid_hoffman/blitzscaling/1.what_is_blitscaling",
	};
}
