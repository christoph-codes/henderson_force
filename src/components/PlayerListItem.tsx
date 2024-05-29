"use client";
import Link from "next/link";

export type PlayerListItemProps = {
	image: string;
	jerseyNumber: number;
	title: string;
	position: string;
	link: string;
};

const PlayerListItem = ({
	image,
	jerseyNumber,
	title,
	position,
	link,
}: PlayerListItemProps) => {
	return (
		<tr className="rounded-md border-b border-gray-800 text-gray-400">
			<td className="hidden md:table-cell p-2">
				<img
					src={image ?? "/hforce_icon.svg"}
					alt={`${title} image`}
					className="w-10 h-10 min-w-10 min-h-10 bg-black rounded-lg p-1"
				/>
			</td>
			<td className="p-2 font-bold">{jerseyNumber}</td>
			<td className="p-2">
				<Link
					className="text-white hover:text-primary font-bold transition-colors"
					href={link}
				>
					{title}
				</Link>
			</td>
			<td className="hidden md:table-cell p-2">{position}</td>
		</tr>
	);
};

export default PlayerListItem;
