import { SanityDocument } from "next-sanity";
import { Metadata } from "next";
import { sanityFetch } from "../../../../../sanity/lib/client";
import { PageTemplate } from "@/app/template/PageTemplate";
import PlayerProfile from "./PlayerProfile";

export async function generateMetadata({
	params,
}: {
	params: { profile: string };
}): Promise<Metadata> {
	const profileId = params.profile;

	const [details]: SanityDocument[] = await sanityFetch<SanityDocument[]>({
		query: `*[_type == "player" && slug.current == "${profileId}"]`,
	});

	return {
		title: `${details.name} | Henderson Force`,
		description:
			details.bio ||
			`${details.name} » Player Profile for the Henderson Force.`,
	};
}

export default async function Page({
	params,
}: {
	params: { profile: string };
}) {
	const details: SanityDocument[] = await sanityFetch<SanityDocument[]>({
		query: `*[_type == "player" && slug.current == "${params.profile}"]`,
	});

	return (
		<PageTemplate>
			<PlayerProfile profile={details[0]} />
		</PageTemplate>
	);
}
