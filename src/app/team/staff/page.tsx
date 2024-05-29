import { SanityDocument } from "next-sanity";
import { Staff } from "./Staff";
import { Metadata } from "next";
import { querySanity } from "../../../../sanity/lib/client";
import { PageTemplate } from "@/app/template/PageTemplate";

const PAGE_QUERY = `*[_type == "page" && slug.current == "staff"]`;
const STAFF_QUERY = `*[_type == "staff"]`;

export async function generateMetadata(): Promise<Metadata> {
	const [content] = await querySanity<SanityDocument[]>(PAGE_QUERY);

	return {
		title: `${content.name} | Henderson Force`,
		description: content.description,
	};
}

export default async function Page() {
	const content = await querySanity<SanityDocument>(PAGE_QUERY);
	const staff = await querySanity<SanityDocument[]>(STAFF_QUERY);

	return (
		<PageTemplate content={content[0]?.page_content}>
			<Staff content={content[0]} staff={staff} />
		</PageTemplate>
	);
}
