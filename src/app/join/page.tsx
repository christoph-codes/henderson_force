import { Metadata } from "next";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "../../../sanity/lib/client";
import { JoinTheForce } from ".";

const UNDER_CONSTRUCTION_QUERY = `*[_type == "page" && slug.current == "join" ]`;

export const metadata: Metadata = {
	title: "Join the Henderson Force",
	description: "Join the Henderson Force by filling out the.",
};

export default async function Page() {
	const content: SanityDocument[] = await sanityFetch<SanityDocument[]>({
		query: UNDER_CONSTRUCTION_QUERY,
	});

	return (
		<main className="min-h-screen w-full">
			<JoinTheForce content={content[0]} />
		</main>
	);
}
