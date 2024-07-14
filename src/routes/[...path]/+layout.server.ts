import { getSidebar } from "$compiler/Sidebar";

export function load() {
    console.log("in layout server")
    console.log(getSidebar());
	return {
		nodes: getSidebar(),
	};
}
