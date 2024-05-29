import { Hero } from "@/components/Hero";
import { SanityDocument } from "next-sanity";
import { urlForImage } from "../../../sanity/lib/image";

const Media = ({
	content,
	media,
}: {
	content: SanityDocument;
	media: SanityDocument[];
}) => {
	return (
		<>
			<Hero
				className="bg-[url('/default_bg.png')]"
				title={content.name}
				description={content.description}
				logo
			/>
			<section className="container text-center">
				<div className="grid grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-3 grid-flow-col auto-rows-auto gap-8 md:gap-6 container">
					{media.map((post) => (
						<img
							src={post.image && urlForImage(post.image)}
							alt={post.title}
							key={post._id}
						/>
					))}
				</div>
			</section>
		</>
	);
};

export default Media;
