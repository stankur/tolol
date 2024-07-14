import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";

export function get(url: string) {
	console.log("get: ", url);

	const __dirname = path.dirname(fileURLToPath(import.meta.url));
	const directoryPath = path.join(__dirname, "../../content");

	console.log(path.join(directoryPath, url));

	const index = fs.readFileSync(
		path.join(directoryPath, url, "index.md"),
		"utf-8"
	);
	const half = fs.readFileSync(
		path.join(directoryPath, url, "half.md"),
		"utf-8"
	);
	const quarter = fs.readFileSync(
		path.join(directoryPath, url, "quarter.md"),
		"utf-8"
	);

	return { index, half, quarter };
}
