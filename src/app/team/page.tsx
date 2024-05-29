import { SanityDocument } from "next-sanity";
import { Metadata } from "next";
import { PageTemplate } from "../template/PageTemplate";
import { sanityFetch } from "../../../sanity/lib/client";
import Team from "./Team";

const PAGE_QUERY = `*[_type == "page" && slug.current == "team"]`;

export const metadata: Metadata = {
	title: "Henderson Force",
	description: "The official Henderson Force website.",
};

export default async function Page() {
	const content: SanityDocument = await sanityFetch<SanityDocument>({
		query: PAGE_QUERY,
	});

	return (
		<PageTemplate content={content?.page_content}>
			<Team content={content[0]} />
		</PageTemplate>
	);
}
