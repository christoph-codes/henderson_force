import { SanityDocument } from "next-sanity";
import { Home } from "./Home";
import { Metadata } from "next";
import { querySanity } from "../../../sanity/lib/client";
import { PageTemplate } from "../template/PageTemplate";

const PAGE_QUERY = `*[_type == "page" && slug.current == "home"]`;
const FLEX_CARDS_QUERY = `*[_type == "siteConfig"]`;

export async function generateMetadata(): Promise<Metadata> {
	const [content] = await querySanity<SanityDocument[]>(PAGE_QUERY);

	return {
		title: `${content.name} | Henderson Force`,
		description: content.description,
	};
}

export default async function Page() {
	const content = await querySanity<SanityDocument>(PAGE_QUERY);
	const news = await querySanity<SanityDocument>(FLEX_CARDS_QUERY);

	return (
		<PageTemplate content={content[0]?.page_content}>
			<Home content={content[0]} homeCards={news[0].homeCards} />
		</PageTemplate>
	);
}
