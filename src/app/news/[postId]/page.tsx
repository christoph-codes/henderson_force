import { SanityDocument } from "next-sanity";
import { Metadata } from "next";
import { PageTemplate } from "@/app/template/PageTemplate";
import { sanityFetch } from "../../../../sanity/lib/client";
import Post from "./Post";

export async function generateMetadata({
	params,
}: {
	params: { postId: string };
}): Promise<Metadata> {
	const [details]: SanityDocument[] = await fetchSanity(params.postId);

	return {
		title: `${details.title} | Henderson Force News`,
		description: details.description,
	};
}

export default async function Page({ params }: { params: { postId: string } }) {
	const details: SanityDocument[] = await fetchSanity(params.postId);

	return (
		<PageTemplate content={details[0].content}>
			<Post details={details[0]} />
		</PageTemplate>
	);
}

async function fetchSanity(postId: string): Promise<SanityDocument[]> {
	return await sanityFetch<SanityDocument[]>({
		query: `*[_type == "post" && slug.current == "${postId}"]`,
	});
}
