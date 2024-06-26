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
		<article className="flex items w-full pb-12 border-b gap-8 border-b-gray-900">
			<div className="w-1/4">
				<img
					src={logoSrc}
					alt={`${name} Logo`}
					className="max-h-20 max-content w-full"
				/>
			</div>
			<div className="w-3/4 text-left">
				<h2>{name}</h2>
				<p>{description}</p>
				<Button onClick={() => router.push(link)}>Learn More</Button>
			</div>
		</article>
	);
};

export default PartnerCard;
