import { get } from "$lib/content-sync/getter";

export function load() {
	return {
		content: get("demo/paul_graham/great_work"),
		url: "demo/paul_graham/great_work",
	};
}
