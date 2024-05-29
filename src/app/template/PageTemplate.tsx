import { Header } from "@/components/Header";
import { SanityDocument } from "next-sanity";
import { ReactNode } from "react";
import { sanityFetch } from "../../../sanity/lib/client";
import Footer from "@/components/Footer";
import Sidenav from "@/components/Sidenav";

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
					<section className="container rounded-md p-8 text-center text-2xl">
						{content?.map((block: any) => (
							<div key={block._key}>
								{block._type === "block" && (
									<p className="text-lg">{block.children[0].text}</p>
								)}
							</div>
						))}
					</section>
				)}
			</main>
			<Sidenav links={headerLinks} />
			<Footer />
		</>
	);
}
