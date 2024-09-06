import { SanityDocument } from "next-sanity";
import { Metadata } from "next";
import Alumni from "./Alumni";
import { querySanity, sanityFetch } from "../../../../sanity/lib/client";
import { PageTemplate } from "@/app/template/PageTemplate";

const PAGE_QUERY = `*[_type == "page" && slug.current == "alumni"]`;
const PLAYER_QUERY = `*[_type == "player" && alumni == true]`;

export async function generateMetadata(): Promise<Metadata> {
	const [content] = await querySanity<SanityDocument[]>(PAGE_QUERY);

	return {
		title: `${content.name} | Henderson Force`,
		description: content.description,
	};
}

export default async function Page() {
	const content: SanityDocument = await sanityFetch<SanityDocument>({
		query: PAGE_QUERY,
	});
	const players: SanityDocument[] = await sanityFetch<SanityDocument[]>({
		query: PLAYER_QUERY,
	});

	return (
		<PageTemplate content={content[0]?.page_content}>
			<Alumni content={content[0]} players={players} />
		</PageTemplate>
	);
}
