export interface Node {
	url: string;
	title: string;
	children: Node[];
}

export type Symbol = "expand" | "collapse" | "none";
