import { SanityDocument } from "next-sanity";
import { Metadata } from "next";
import Schedule from "./Schedule";
import { PageTemplate } from "@/app/template/PageTemplate";
import { querySanity, sanityFetch } from "../../../sanity/lib/client";

const PAGE_QUERY = `*[_type == "page" && slug.current == "schedule"]`;

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
			<Schedule content={content[0]} />
		</PageTemplate>
	);
}
