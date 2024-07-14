import { get } from "$lib/content-sync/getter";

export function load() {
	return { content: get(""), url: "" };
}
