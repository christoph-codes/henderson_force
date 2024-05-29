import { Hero } from "@/components/Hero";
import { SanityDocument } from "next-sanity";

const Alumni = ({ content }: { content: SanityDocument }) => {
	return (
		<>
			<Hero
				className="bg-[url('/default_bg.png')]"
				title={content.name}
				description={content.description}
				logo
			/>
			<div className="container text-center">
				<h3>Coming Soon</h3>
			</div>
		</>
	);
};

export default Alumni;
