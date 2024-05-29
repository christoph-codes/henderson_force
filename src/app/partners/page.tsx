import { SanityDocument } from "next-sanity";
import { Metadata } from "next";
import Partners from "./Partners";
import { PageTemplate } from "@/app/template/PageTemplate";
import { sanityFetch } from "../../../sanity/lib/client";

const PAGE_QUERY = `*[_type == "page" && slug.current == "partners"]`;
const PARTNERS_QUERY = `*[_type == "partner_logos"]`;

export const metadata: Metadata = {
	title: "Partners | Henderson Force",
	description: "View our schedule for the Henderson Force.",
};

export default async function Page() {
	const content = await sanityFetch<SanityDocument>({
		query: PAGE_QUERY,
	});
	const partners = await sanityFetch<SanityDocument[]>({
		query: PARTNERS_QUERY,
	});

	return (
		<PageTemplate content={content[0]?.page_content}>
			<Partners content={content[0]} partners={partners} />
		</PageTemplate>
	);
}
