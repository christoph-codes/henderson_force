import { SanityDocument } from "next-sanity";
import { Metadata } from "next";
import { sanityFetch } from "../../../../../sanity/lib/client";
import StaffProfile from "./StaffProfile";
import { PageTemplate } from "@/app/template/PageTemplate";

export async function generateMetadata({
	params,
}: {
	params: { profile: string };
}): Promise<Metadata> {
	const [details]: SanityDocument[] = await fetchSanity(params.profile);

	return {
		title: `${details.name} | Henderson Force`,
		description:
			details.bio || `${details.name} » Staff Profile for the Henderson Force.`,
	};
}

export default async function Page({
	params,
}: {
	params: { profile: string };
}) {
	const details: SanityDocument[] = await fetchSanity(params.profile);

	return (
		<PageTemplate>
			<StaffProfile profile={details[0]} />
		</PageTemplate>
	);
}

async function fetchSanity(profileId: string): Promise<SanityDocument[]> {
	return await sanityFetch<SanityDocument[]>({
		query: `*[_type == "staff" && slug.current == "${profileId}"]`,
	});
}
