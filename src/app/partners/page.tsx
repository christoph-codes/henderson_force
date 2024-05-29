import { SanityDocument } from "next-sanity";
import { Metadata } from "next";
import Partners from "./Partners";
import { PageTemplate } from "@/app/template/PageTemplate";
import { querySanity, sanityFetch } from "../../../sanity/lib/client";

const PAGE_QUERY = `*[_type == "page" && slug.current == "partners"]`;
const PARTNERS_QUERY = `*[_type == "partner_logos"]`;

export async function generateMetadata(): Promise<Metadata> {
	const [content] = await querySanity<SanityDocument[]>(PAGE_QUERY);

	return {
		title: `${content.name} | Henderson Force`,
		description: content.description,
	};
}

export default async function Page() {
	const content = await sanityFetch<SanityDocument>({
		query: PAGE_QUERY,
	});
	const partners = await sanityFetch<SanityDocument[]>({
		query: PARTNERS_QUERY,
	});

	return (
		<PageTemplate content={content[0]?.page_content}>
			<Partners content={content[0]} partners={partners} />
		</PageTemplate>
	);
}
