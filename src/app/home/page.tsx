import { SanityDocument } from "next-sanity";
import { Home } from "./Home";
import { Metadata } from "next";
import { querySanity, sanityFetch } from "../../../sanity/lib/client";
import { PageTemplate } from "../template/PageTemplate";

const PAGE_QUERY = `*[_type == "page" && slug.current == "home"]`;
const FEATURED_NEWS_QUERY = `*[_type == "post" && featured == true] | order(order asc)`;

export async function generateMetadata(): Promise<Metadata> {
	const [content] = await querySanity<SanityDocument[]>(PAGE_QUERY);

	return {
		title: `${content.name} | Henderson Force`,
		description: content.description,
	};
}

export default async function Page() {
	const content = await querySanity<SanityDocument>(PAGE_QUERY);
	const news = await querySanity<SanityDocument[]>(FEATURED_NEWS_QUERY);

	return (
		<PageTemplate content={content[0]?.page_content}>
			<Home content={content[0]} news={news} />
		</PageTemplate>
	);
}
