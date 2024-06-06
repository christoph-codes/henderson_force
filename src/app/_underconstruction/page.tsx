import { SanityDocument } from "next-sanity";
import { sanityFetch } from "../../../sanity/lib/client";
// import { Home } from "./Home";
import { UnderConstruction } from "./UnderConstruction";
import { Metadata } from "next";

const UNDER_CONSTRUCTION_QUERY = `*[_type == "page" && slug.current == "under-construction" && home_page == true ]`;
const SOCIAL_LINKS_QUERY = `*[_type == "link" && "social" in category[]]`;
// const HOME_QUERY = `*[_type == "page" && slug == "home"]`;

export const metadata: Metadata = {
	title: "Henderson Force",
	description:
		"The official Henderson Force website is under construction. Please check back soon for updates.",
};

export default async function Page() {
	const content: SanityDocument[] = await sanityFetch<SanityDocument[]>({
		query: UNDER_CONSTRUCTION_QUERY,
	});
	const socialLinks: SanityDocument[] = await sanityFetch<SanityDocument[]>({
		query: SOCIAL_LINKS_QUERY,
	});

	// return <Home content={events} />;
	return (
		<main>
			<UnderConstruction content={{ pageContent: content[0], socialLinks }} />
		</main>
	);
}
