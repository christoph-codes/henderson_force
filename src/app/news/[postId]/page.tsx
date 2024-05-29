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
	const [details]: SanityDocument[] = await sanityFetch<SanityDocument[]>({
		query: `*[_type == "post" && slug.current == "${params.postId}"]`,
	});

	return {
		title: `${details.title} | Henderson Force News`,
		description: details.description,
	};
}

export default async function Page({ params }: { params: { postId: string } }) {
	const details: SanityDocument[] = await sanityFetch<SanityDocument[]>({
		query: `*[_type == "post" && slug.current == "${params.postId}"]`,
	});

	return (
		<PageTemplate>
			<Post details={details[0]} />
		</PageTemplate>
	);
}
