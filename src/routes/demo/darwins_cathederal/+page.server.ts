import { get } from "$lib/content-sync/getter";

export function load() {
	return {
		content: get("demo/darwins_cathederal"),
		url: "demo/darwins_cathederal",
	};
}
