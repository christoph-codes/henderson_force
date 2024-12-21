import { SanityDocument } from "next-sanity";
import { Metadata } from "next";
import { PageTemplate } from "@/app/template/PageTemplate";
import { querySanity, sanityFetch } from "../../../sanity/lib/client";
import Media from "./Media";

export type InstagramPostData = {
	id: string;
	media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
	media_url: string;
	thumbnail_url: string;
	permalink: string;
	caption: string;
};

const PAGE_QUERY = `*[_type == "page" && slug.current == "media"]`;

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

	return (
		<PageTemplate content={content[0]?.page_content}>
			<Media content={content[0]} />
		</PageTemplate>
	);
}
