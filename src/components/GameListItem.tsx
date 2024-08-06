"use client";
import { formatTimestampToDate } from "@/utils/helpers";
import Link from "next/link";
import { urlForImage } from "../../sanity/lib/image";

export type GameListItemProps = {
	image: string;
	title: string;
	venue: string;
	atvs: "at" | "vs";
	date: string;
	link: string;
};

const GameListItem = ({
	image,
	title,
	date,
	venue,
	atvs,
	link,
}: GameListItemProps) => {
	return (
		<tr className="rounded-md border-b border-gray-800 text-gray-400">
			<td className="p-2">
				<img
					src={image ?? "/hforce_icon.svg"}
					alt={`${title} image`}
					className="w-10 h-10 min-w-10 min-h-10 bg-black rounded-lg p-1"
				/>
			</td>
			<td className="p-2 font-bold text-left">
				<Link
					className="text-white hover:text-primary font-bold transition-colors"
					href={link}
				>
					{atvs === "at" ? "@" : "vs"} {title}
					<span className="block md:hidden text-gray-300 font-normal">
						{formatTimestampToDate(date)}
					</span>
				</Link>
			</td>
			<td className="hidden md:table-cell p-2 font-bold text-left">{venue}</td>
			<td className="hidden md:table-cell p-2 font-bold text-left">
				{formatTimestampToDate(date)}
			</td>
			<td className="hidden md:table-cell p-2 text-right">
				<Link
					className="text-white hover:text-primary font-bold transition-colors"
					href={link}
				>
					Game Link
				</Link>
			</td>
		</tr>
	);
};

export default GameListItem;
