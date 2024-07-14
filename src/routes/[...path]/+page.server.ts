import { get } from "$lib/content-sync/getter";

export function load({ params }) {
    console.log("in page server")
    console.log(params.path);

    console.log(get(params.path));
    console.log(params.path);

	return  { content: get(params.path), url: params.path};
}
