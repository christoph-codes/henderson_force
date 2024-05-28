import { Header } from "@/components/Header";
import { SanityDocument } from "next-sanity";
import { PropsWithChildren } from "react";
import { sanityFetch } from "../../../sanity/lib/client";
import Footer from "@/components/Footer";
import Sidenav from "@/components/Sidenav";

const GLOBAL_QUERY = `*[_type == "partner_logos"]`;
const HEADER_QUERY = `*[_type == "link" && "header" in category[]] | order(_createdAt asc)`;

export async function PageTemplate({ children }: PropsWithChildren) {
	const sponsors: SanityDocument[] = await sanityFetch<SanityDocument[]>({
		query: GLOBAL_QUERY,
	});
	const headerLinks: SanityDocument[] = await sanityFetch<SanityDocument[]>({
		query: HEADER_QUERY,
	});

	return (
		<>
			<Header sponsors={sponsors} navLinks={headerLinks} />
			<main className="space-y-8">{children}</main>
			<Sidenav links={headerLinks} />
			<Footer />
		</>
	);
}
