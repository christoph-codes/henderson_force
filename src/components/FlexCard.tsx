import Link from "next/link";

export type FlexCardProps = {
	link: string;
	image?: string;
	title: string;
	description: string;
};

const FlexCard = ({ link, image, title, description }: FlexCardProps) => {
	return (
		<Link href={link} className="group">
			<div
				className="bg-cover shadow-lg hover:shadow-2xl transition-all hover:scale-110 mb-3 justify-center h-40 items-center bg-black bg-center p-8 flex flex-col gap-4 text-white text-center font-sans text-xl"
				style={
					image
						? {
								backgroundImage: `url(${image ?? ""})`,
							}
						: {}
				}
			>
				<h2>{title}</h2>
			</div>
			<p className="text-center md:text-left font-mono group-hover:text-white text-gray-400">
				{description}
			</p>
		</Link>
	);
};

export default FlexCard;
