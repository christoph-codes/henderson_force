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
		defineField({
			title: "Countdowns",
			name: "countdowns",
			type: "array",
			of: [
				{
					type: "object",
					name: "countdown_date_item",
					title: "Countdown Date Item",
					fields: [
						defineField({
							name: "countdown_name",
							type: "string",
							title: "Label",
						}),
						defineField({
							type: "datetime",
							name: "date",
							title: "Date",
							options: { dateFormat: "YYYY-MM-DD" },
						}),
					],
				},
			],
		}),
		// {
		// 	title: "Main Navigation",
		// 	name: "mainNav",
		// 	description: "Select pages for the top menu",
		// 	type: "array",
		// 	of: [
		// 		{
		// 			type: "reference",
		// 			to: [{ type: "page" }],
		// 		},
		// 	],
		// },
		{
			title: "Home Flex Cards",
			name: "homeCards",
			type: "array",
			of: [
				{
					type: "flexCard",
				},
			],
		},
	],
};
