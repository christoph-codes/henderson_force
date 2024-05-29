import { Hero } from "@/components/Hero";
import { SanityDocument } from "next-sanity";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";

const Partners = ({
	content,
	partners,
}: {
	content: SanityDocument;
	partners: SanityDocument[];
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
				<div className="grid md:grid-cols-4 grid-cols-1 items-center gap-8">
					{partners?.map((logo: any) => {
						return (
							<Link
								key={logo._id}
								href={logo.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={urlForImage(logo.logo_image).toString()}
									alt={`${logo.name} Logo`}
									className="w-full max-h-16"
								/>
							</Link>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Partners;
