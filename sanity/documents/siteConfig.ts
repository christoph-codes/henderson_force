export default {
	name: "siteConfig",
	type: "document",
	title: "Site Settings",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Site title",
		},
		{
			title: "URL",
			name: "url",
			type: "url",
			description: "The main site url.",
		},
		{
			title: "Main Navigation",
			name: "mainNav",
			description: "Select pages for the top menu",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "page" }],
				},
			],
		},
	],
};
