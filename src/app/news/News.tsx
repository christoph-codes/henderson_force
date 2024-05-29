import FlexCard from "@/components/FlexCard";
import { Hero } from "@/components/Hero";
import { SanityDocument } from "next-sanity";
import { urlForImage } from "../../../sanity/lib/image";

const News = ({
	content,
	news,
}: {
	content: SanityDocument;
	news: SanityDocument[];
}) => {
	return (
		<>
			<Hero
				className="bg-[url('/default_bg.png')]"
				title={content.name}
				description={content.description}
				logo
			/>
			<div className="container text-center">
				<section className="grid grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-3 grid-flow-col auto-rows-auto gap-8 md:gap-6 container">
					{news.map((post) => (
						<FlexCard
							link={post.link ?? `/news/${post.slug.current}`}
							key={post._id}
							image={post.image && urlForImage(post.image)}
							title={post.title}
							description={post.description}
						/>
					))}
				</section>
			</div>
		</>
	);
};

export default News;
