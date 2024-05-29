import { Header } from "@/components/Header";
import { SanityDocument } from "next-sanity";
import { Fragment, ReactNode } from "react";
import { sanityFetch } from "../../../sanity/lib/client";
import Footer from "@/components/Footer";
import Sidenav from "@/components/Sidenav";
import BlockParser from "@/components/BlockParser";

const GLOBAL_QUERY = `*[_type == "partner_logos"]`;
const HEADER_QUERY = `*[_type == "link" && "header" in category[]] | order(_createdAt asc)`;

export type PageTemplateProps = {
	children: ReactNode;
	content?: SanityDocument;
};

export async function PageTemplate({ children, content }: PageTemplateProps) {
	const sponsors: SanityDocument[] = await sanityFetch<SanityDocument[]>({
		query: GLOBAL_QUERY,
	});
	const headerLinks: SanityDocument[] = await sanityFetch<SanityDocument[]>({
		query: HEADER_QUERY,
	});

	return (
		<>
			<Header sponsors={sponsors} navLinks={headerLinks} />
			<main className="space-y-8 pb-8 min-h-screen">
				{children}
				{content && (
					<section className="max-w-full md:max-w-3xl md:mx-auto rounded-md p-8 space-y-4">
						<BlockParser data={content} />
					</section>
				)}
			</main>
			<Sidenav links={headerLinks} />
			<Footer />
		</>
	);
}
