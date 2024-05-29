import { SanityDocument } from "next-sanity";
import { Metadata } from "next";
import Alumni from "./Alumni";
import { sanityFetch } from "../../../../sanity/lib/client";
import { PageTemplate } from "@/app/template/PageTemplate";

const PAGE_QUERY = `*[_type == "page" && slug.current == "alumni"]`;

export const metadata: Metadata = {
	title: "Henderson Force",
	description: "The official Henderson Force website.",
};

export default async function Page() {
	const content: SanityDocument = await sanityFetch<SanityDocument>({
		query: PAGE_QUERY,
	});

	return (
		<PageTemplate content={content[0]?.page_content}>
			<Alumni content={content[0]} />
		</PageTemplate>
	);
}
