import type { Node } from "$lib/components/Sidebar/SidebarTypes";

export function getSidebar(): Node[] {
    return [
		{
			url: "demo",
			title: "demo",
			children: [
                {
                    url: "demo/darwins_cathederal",
                    title: "darwins_cathederal",
                    children: [
                        {
                            url: "demo/darwins_cathederal/chapter_1",
                            title: "chapter_1",
                            children: [],
                        },
                        {
                            url: "demo/darwins_cathederal/chapter_2",
                            title: "chapter_2",
                            children: [],
                        },
                    ],
                },
				{
					url: "demo/paul_graham",
					title: "paul_graham",
					children: [
						{
							url: "demo/paul_graham/great_work",
							title: "great_work",
							children: [],
						},
					],
				},
				{
					url: "demo/reid_hoffman",
					title: "reid_hoffman",
					children: [
						{
							url: "demo/reid_hoffman/blitzscaling",
							title: "blitzscaling",
							children: [
								{
									url: "demo/reid_hoffman/blitzscaling/1.what_is_blitscaling",
									title: "1.what_is_blitscaling",
									children: [],
								},
								{
									url: "demo/reid_hoffman/blitzscaling/2.business_model_innovation",
									title: "2.business_model_innovation",
									children: [],
								},
							],
						},
					],
				},
			],
		}
	];

}
