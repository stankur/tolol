import { get } from "$lib/content-sync/getter";

export function load() {
	return {
		content: get("demo/darwins_cathederal/chapter_1"),
		url: "demo/darwins_cathederal/chapter_1",
	};
}
