import { SanityDocument } from "next-sanity";
import { Metadata } from "next";
import { PageTemplate } from "@/app/template/PageTemplate";
import { sanityFetch } from "../../../sanity/lib/client";
import Media from "./Media";

const PAGE_QUERY = `*[_type == "page" && slug.current == "media"]`;
const POST_QUERY = `*[_type == "media"]`;

export const metadata: Metadata = {
	title: "Media | Henderson Force",
	description: "View our schedule for the Henderson Force.",
};

export default async function Page() {
	const content = await sanityFetch<SanityDocument>({
		query: PAGE_QUERY,
	});
	const media = await sanityFetch<SanityDocument[]>({
		query: POST_QUERY,
	});

	return (
		<PageTemplate content={content[0]?.page_content}>
			<Media content={content[0]} media={media} />
		</PageTemplate>
	);
}
