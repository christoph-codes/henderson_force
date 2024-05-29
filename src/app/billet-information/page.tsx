import { SanityDocument } from "next-sanity";
import { Metadata } from "next";
import { PageTemplate } from "@/app/template/PageTemplate";
import { sanityFetch } from "../../../sanity/lib/client";
import BilletInformation from "./BilletInformation";

const PAGE_QUERY = `*[_type == "page" && slug.current == "billet-information"]`;

export const metadata: Metadata = {
	title: "Billet Information | Henderson Force",
	description: "View our schedule for the Henderson Force.",
};

export default async function Page() {
	const content: SanityDocument = await sanityFetch<SanityDocument>({
		query: PAGE_QUERY,
	});

	return (
		<PageTemplate content={content[0]?.page_content}>
			<BilletInformation content={content[0]} />
		</PageTemplate>
	);
}
