import { SanityDocument } from "next-sanity";
import { Metadata } from "next";
import Schedule from "./Schedule";
import { PageTemplate } from "@/app/template/PageTemplate";
import { sanityFetch } from "../../../sanity/lib/client";

const PAGE_QUERY = `*[_type == "page" && slug.current == "schedule"]`;

export const metadata: Metadata = {
	title: "Schedule | Henderson Force",
	description: "View our schedule for the Henderson Force.",
};

export default async function Page() {
	const content: SanityDocument = await sanityFetch<SanityDocument>({
		query: PAGE_QUERY,
	});

	return (
		<PageTemplate content={content[0]?.page_content}>
			<Schedule content={content[0]} />
		</PageTemplate>
	);
}
