import { Hero } from "@/components/Hero";
import { PageTemplate } from "@/app/template/PageTemplate";
import { SanityDocument } from "next-sanity";

export function Home({ content }: { content: SanityDocument[] }) {
	console.log("content", content);
	return (
		<PageTemplate>
			<Hero title="Home" description="Description of the home page" />
		</PageTemplate>
	);
}
