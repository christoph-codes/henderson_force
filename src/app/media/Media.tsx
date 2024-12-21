import { Hero } from "@/components/Hero";
import { SanityDocument } from "next-sanity";
import InstagramEmbed from "@/components/InstagramEmbed";

const Media = ({ content }: { content: SanityDocument }) => {
	return (
		<>
			<Hero
				className="bg-[url('/default_bg.png')]"
				title={content.name}
				description={content.description}
				logo
			/>
			{/* <InstagramFeed posts={instagramPosts} /> */}
			<div className="container text-center py-12">
				<InstagramEmbed />
			</div>
		</>
	);
};

export default Media;
