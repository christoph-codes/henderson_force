import { SanityDocument } from "next-sanity";
import { Metadata } from "next";
import { PageTemplate } from "@/app/template/PageTemplate";
import { sanityFetch } from "../../../sanity/lib/client";
import News from "./News";

const PAGE_QUERY = `*[_type == "page" && slug.current == "news"]`;
const POST_QUERY = `*[_type == "post"]`;

export const metadata: Metadata = {
	title: "News | Henderson Force",
	description: "View our schedule for the Henderson Force.",
};

export default async function Page() {
	const content = await sanityFetch<SanityDocument>({
		query: PAGE_QUERY,
	});
	const posts = await sanityFetch<SanityDocument[]>({
		query: POST_QUERY,
	});

	return (
		<PageTemplate content={content[0]?.page_content}>
			<News content={content[0]} news={posts} />
		</PageTemplate>
	);
}
