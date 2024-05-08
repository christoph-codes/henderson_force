import { HForceVerticalLogo } from "@/components/HForceVerticalLogo";
import { SanityDocument } from "next-sanity";

export function UnderConstruction({ content }: { content: SanityDocument }) {
	console.log("content", content);
	return (
		<div className="min-h-screen flex flex-col justify-center items-center bg-bolts bg-cover bg-no-repeat bg-center">
			<div className="text-center flex flex-col items-center gap-8">
				<HForceVerticalLogo className="max-h-72 md:max-h-100 mb-8" />
				<h1 className="text-4xl md:text-6xl">{content.name}</h1>
				<p>{content.description}</p>
			</div>
		</div>
	);
}
