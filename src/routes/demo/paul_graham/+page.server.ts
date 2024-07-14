import { get } from "$lib/content-sync/getter";

export function load() {
	return { content: get("demo/paul_graham"), url: "demo/paul_graham" };
}
