import { SanityDocument } from "next-sanity";
import { Metadata } from "next";
import { PageTemplate } from "@/app/template/PageTemplate";
import { querySanity, sanityFetch } from "../../../sanity/lib/client";
import Media from "./Media";

export type InstagramPostData = {
	id: string;
	media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
	media_url: string;
	thumbnail_url: string;
	permalink: string;
	caption: string;
};

const PAGE_QUERY = `*[_type == "page" && slug.current == "media"]`;

const instagramUrl = `https://graph.instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_USERID}/media?fields=id,media_type,media_url,permalink,caption,thumbnail_url&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESSTOKEN_LONGLIVE}`;

async function getInstagramPosts() {
	const res = await fetch(instagramUrl, { method: "GET" });
	// The return value is *not* serialized
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch instagram posts");
	}
	return res.json() as Promise<{ data: InstagramPostData[] }>;
}

export async function generateMetadata(): Promise<Metadata> {
	const [content] = await querySanity<SanityDocument[]>(PAGE_QUERY);

	return {
		title: `${content.name} | Henderson Force`,
		description: content.description,
	};
}

export default async function Page() {
	const content = await sanityFetch<SanityDocument>({
		query: PAGE_QUERY,
	});
	const instagramPosts = await getInstagramPosts();
	// console.log("instagramPosts", instagramPosts);

	return (
		<PageTemplate content={content[0]?.page_content}>
			<Media
				content={content[0]}
				instagramPosts={instagramPosts.data.slice(0, 24)}
			/>
		</PageTemplate>
	);
}
