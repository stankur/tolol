import { getSidebar } from "$compiler/Sidebar";

export function load() {
	return {
		nodes: getSidebar(),
	};
}
