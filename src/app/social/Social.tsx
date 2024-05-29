import { Hero } from "@/components/Hero";
import SocialLinks from "@/components/SocialLinks";
import { SanityDocument } from "next-sanity";

const Social = ({ content }: { content: SanityDocument }) => {
	return (
		<>
			<Hero
				className="bg-[url('/default_bg.png')]"
				title={content.name}
				description={content.description}
				logo
			/>
			<div className="container text-center">
				<SocialLinks size={12} />
			</div>
		</>
	);
};

export default Social;
