import { get } from "$lib/content-sync/getter";

export function load({ params }) {
	return  { content: get(params.path), url: params.path};
}
