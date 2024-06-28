"use client";

import { useRouter } from "next/navigation";
import { Button } from "./Button";

export type PartnerCardProps = {
	logoSrc: string;
	name: string;
	description: string;
	link: string;
};

const PartnerCard = ({
	logoSrc,
	name,
	description,
	link,
}: PartnerCardProps) => {
	const router = useRouter();
	return (
		<article className="flex flex-col sm:flex-row items-start justify-center sm:items-center w-full pb-20 border-b gap-8 border-b-gray-600">
			<div className="w-full sm:w-1/4">
				<img
					src={logoSrc}
					alt={`${name} Logo`}
					className="max-h-20 max-content w-full"
				/>
			</div>
			<div className="w-full sm:w-3/4 text-center sm:text-left">
				<h2>{name}</h2>
				<p>{description}</p>
				<Button onClick={() => router.push(link)}>Learn More</Button>
			</div>
		</article>
	);
};

export default PartnerCard;
