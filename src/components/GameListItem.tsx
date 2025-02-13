"use client";
import { formatTimestampToDate } from "@/utils/helpers";
import Link from "next/link";

export type GameListItemProps = {
	image: string;
	title: string;
	venue: string;
	atvs: "at" | "vs";
	date: string;
	link: string;
	opponent_score?: number;
	team_score?: number;
};

const GameListItem = ({
	image,
	title,
	date,
	venue,
	atvs,
	link,
	opponent_score,
	team_score,
}: GameListItemProps) => {
	const score =
		opponent_score !== undefined && team_score !== undefined
			? opponent_score > team_score
				? `L (${team_score}-${opponent_score})`
				: `W (${team_score}-${opponent_score})`
			: "";
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
					{atvs === "at" ? "@" : "vs"} {title} {score && score}
					<span className="block md:hidden text-gray-400 font-normal">
						{formatTimestampToDate(date, true)}
					</span>
				</Link>
			</td>
			<td className="hidden md:table-cell p-2 font-bold text-left">{venue}</td>
			<td className="hidden md:table-cell p-2 font-bold text-left">
				{formatTimestampToDate(date, true)}
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
