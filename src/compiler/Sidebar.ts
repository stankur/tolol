import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { getBasePath } from "./utils";
import type { Node } from "$lib/components/Sidebar/SidebarTypes";

export function getSidebar(): Node[] {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
	const directoryPath = path.join(__dirname, "../content");
	const url = getBasePath();

	function buildSidebar(currentPath: string, currentUrl: string): Node[] {
		const nodes: Node[] = [];
		const items = fs.readdirSync(currentPath, { withFileTypes: true });

		for (const item of items) {
			if (item.isDirectory()) {
				const node: Node = {
					url: path.join(currentUrl, item.name),
					title: item.name,
					children: buildSidebar(
						path.join(currentPath, item.name),
						path.join(currentUrl, item.name)
					),
				};
				nodes.push(node);
			}
		}

		return nodes;
	}

    return buildSidebar(directoryPath, url);
}
