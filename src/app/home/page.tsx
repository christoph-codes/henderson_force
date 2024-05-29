import { SanityDocument } from "next-sanity";
import { Home } from "./Home";
import { Metadata } from "next";
import { sanityFetch } from "../../../sanity/lib/client";
import { PageTemplate } from "../template/PageTemplate";

const HOME_QUERY = `*[_type == "page" && slug.current == "home"]`;
const FEATURED_NEWS_QUERY = `*[_type == "post" && featured == true]`;

export const metadata: Metadata = {
	title: "Henderson Force",
	description: "The official Henderson Force website.",
};

export default async function Page() {
	const content: SanityDocument = await sanityFetch<SanityDocument>({
		query: HOME_QUERY,
	});
	const news: SanityDocument[] = await sanityFetch<SanityDocument[]>({
		query: FEATURED_NEWS_QUERY,
	});

	return (
		<PageTemplate content={content}>
			<Home content={content[0]} news={news} />
		</PageTemplate>
	);
}
