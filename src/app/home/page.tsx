import { SanityDocument } from "next-sanity";
import { Home } from "./Home";
import { Metadata } from "next";
import { sanityFetch } from "../../../sanity/lib/client";

const HOME_QUERY = `*[_type == "page" && slug == "home"]`;

export const metadata: Metadata = {
	title: "Henderson Force",
	description: "The official Henderson Force website.",
};

export default async function Page() {
	const content: SanityDocument[] = await sanityFetch<SanityDocument[]>({
		query: HOME_QUERY,
	});

	return <Home content={content} />;
}
