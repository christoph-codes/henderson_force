import { SanityDocument } from "next-sanity";
import { Staff } from "./Staff";
import { Metadata } from "next";
import { sanityFetch } from "../../../../sanity/lib/client";
import { PageTemplate } from "@/app/template/PageTemplate";

const PAGE_QUERY = `*[_type == "page" && slug.current == "staff"]`;
const STAFF_QUERY = `*[_type == "staff"]`;

export const metadata: Metadata = {
	title: "Henderson Force",
	description: "The official Henderson Force website.",
};

export default async function Page() {
	const content: SanityDocument = await sanityFetch<SanityDocument>({
		query: PAGE_QUERY,
	});
	const staff: SanityDocument[] = await sanityFetch<SanityDocument[]>({
		query: STAFF_QUERY,
	});

	return (
		<PageTemplate content={content[0]?.page_content}>
			<Staff content={content[0]} staff={staff} />
		</PageTemplate>
	);
}
