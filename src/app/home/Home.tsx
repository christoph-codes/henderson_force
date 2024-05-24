import { PageTemplate } from "@/template/PageTemplate";
import { SanityDocument } from "next-sanity";

export function Home({ content }: { content: SanityDocument[] }) {
	console.log("content", content);
	return (
		<PageTemplate>
			<h1>Home</h1>
		</PageTemplate>
	);
}
