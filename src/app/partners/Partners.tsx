import { Hero } from "@/components/Hero";
import { SanityDocument } from "next-sanity";
import { urlForImage } from "../../../sanity/lib/image";
import PartnerCard from "@/components/PartnerCard";

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
			<div className="container text-center py-12">
				<div className="flex flex-col items-center gap-y-12 space-y-8">
					{partners?.map((logo) => {
						return (
							<PartnerCard
								key={logo._id}
								name={logo.name}
								link={logo.link}
								logoSrc={urlForImage(logo.logo_image).toString()}
								description={logo.description}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Partners;
