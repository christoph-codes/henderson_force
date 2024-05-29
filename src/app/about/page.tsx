import { SanityDocument } from "next-sanity";
import { Metadata } from "next";
import { PageTemplate } from "@/app/template/PageTemplate";
import { sanityFetch } from "../../../sanity/lib/client";
import About from "./About";

const PAGE_QUERY = `*[_type == "page" && slug.current == "about"]`;

export const metadata: Metadata = {
	title: "About | Henderson Force",
	description: "Learn more about the Henderson Force.",
};

export default async function Page() {
	const content: SanityDocument = await sanityFetch<SanityDocument>({
		query: PAGE_QUERY,
	});

	return (
		<PageTemplate content={content[0]?.page_content}>
			<About content={content[0]} />
		</PageTemplate>
	);
}
