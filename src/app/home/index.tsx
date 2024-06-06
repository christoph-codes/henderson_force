import { Hero } from "@/components/Hero";
import { SanityDocument } from "next-sanity";
import { urlForImage } from "../../../sanity/lib/image";
import FlexCard from "@/components/FlexCard";
import JoinTheForceBanner from "@/components/JoinTheForceBanner";

export function Home({
	content,
	homeCards,
}: {
	content: SanityDocument;
	homeCards: SanityDocument[];
}) {
	return (
		<>
			<Hero className="bg-[url('/default_bg.png')]" title={content.name} logo />
			<section className="grid grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-3 grid-flow-col auto-rows-auto gap-8 md:gap-6 container">
				{homeCards.map((post) => (
					<FlexCard
						link={post.link}
						key={post._key}
						image={post.image && urlForImage(post.image)}
						title={post.title}
						description={post.description}
					/>
				))}
			</section>
			<JoinTheForceBanner />
		</>
	);
}
