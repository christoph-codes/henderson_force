import { SanityDocument } from "next-sanity";
import { Metadata } from "next";
import { PageTemplate } from "../template/PageTemplate";
import { querySanity, sanityFetch } from "../../../sanity/lib/client";
import Team from "./Team";

const PAGE_QUERY = `*[_type == "page" && slug.current == "team"]`;

export async function generateMetadata(): Promise<Metadata> {
	const [content] = await querySanity<SanityDocument[]>(PAGE_QUERY);

	return {
		title: `${content.name} | Henderson Force`,
		description: content.description,
	};
}

export default async function Page() {
	const content: SanityDocument = await sanityFetch<SanityDocument>({
		query: PAGE_QUERY,
	});

	return (
		<PageTemplate content={content[0]?.page_content}>
			<Team content={content[0]} />
		</PageTemplate>
	);
}
