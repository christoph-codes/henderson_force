import { SanityDocument } from "next-sanity";
import { Players } from "./Players";
import { Metadata } from "next";
import { sanityFetch } from "../../../../sanity/lib/client";
import { PageTemplate } from "@/app/template/PageTemplate";

const PAGE_QUERY = `*[_type == "page" && slug.current == "players"]`;
const STAFF_QUERY = `*[_type == "player"]`;

export const metadata: Metadata = {
	title: "Players | Henderson Force",
	description: "Meet the Henderson Force players.",
};

export default async function Page() {
	const content: SanityDocument = await sanityFetch<SanityDocument>({
		query: PAGE_QUERY,
	});
	const players: SanityDocument[] = await sanityFetch<SanityDocument[]>({
		query: STAFF_QUERY,
	});

	return (
		<PageTemplate content={content?.page_content}>
			<Players content={content[0]} players={players} />
		</PageTemplate>
	);
}
