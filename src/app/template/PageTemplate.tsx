import { Header } from "@/components/Header";
import { SanityDocument } from "next-sanity";
import { PropsWithChildren } from "react";
import { sanityFetch } from "../../../sanity/lib/client";
import Footer from "@/components/Footer";

const GLOBAL_QUERY = `*[_type == "partner_logos"]`;

export async function PageTemplate({ children }: PropsWithChildren) {
	const sponsors: SanityDocument[] = await sanityFetch<SanityDocument[]>({
		query: GLOBAL_QUERY,
	});

	return (
		<>
			<Header sponsors={sponsors} />
			<main className="space-y-8">{children}</main>
			<Footer />
		</>
	);
}
