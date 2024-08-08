import GameListItem from "@/components/GameListItem";
import { Hero } from "@/components/Hero";
import { SanityDocument } from "next-sanity";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";
import CountdownTimer from "@/components/CountdownTimer";

const Schedule = ({
	siteConfig,
	content,
	games,
}: {
	content: SanityDocument;
	games: SanityDocument[];
	siteConfig: SanityDocument;
}) => {
	const firstGameCountdown = siteConfig.countdowns.find(
		(countdown: any) => countdown.countdown_name === "First game of the year"
	);
	return (
		<>
			<Hero
				className="bg-[url('/default_bg.png')]"
				title={content.name}
				description={content.description}
				logo
			/>
			{firstGameCountdown && (
				<div className="container text-center">
					<CountdownTimer
						label={firstGameCountdown.countdown_name}
						expirationDateInSeconds={firstGameCountdown.date}
					/>
				</div>
			)}
			<div className="md:container text-center">
				{siteConfig.watch_live_url && siteConfig.watch_live_image && (
					<div className="flex justify-center">
						<Link href={siteConfig.watch_live_url} target="_blank">
							<img
								className="mb-3"
								alt="Watch Live on FloHockey"
								src={
									siteConfig.watch_live_image &&
									urlForImage(siteConfig.watch_live_image).toString()
								}
							/>
						</Link>
					</div>
				)}
				{games.length > 0 ? (
					<section className="container flex flex-col mb-6">
						<table className="table-auto">
							<thead className="hidden md:table-header-group">
								<tr className="text-left border-b">
									<th className="p-2 w-10">Opponent</th>
									<th className="flex-grow p-2"></th>
									<th className="p-2">Venue</th>
									<th className="p-2">Date</th>
									<th className="p-2"></th>
								</tr>
							</thead>
							<tbody>
								{games?.map((game) => (
									<GameListItem
										key={game._id}
										image={urlForImage(game.opponent.logo).toString()}
										atvs={game.at_vs}
										title={game.opponent.name}
										venue={
											game.at_vs === "at"
												? game.opponent.venue
												: "America First Center Rink 1"
										}
										date={game.date}
										link={game.game_link}
									/>
								))}
							</tbody>
						</table>
					</section>
				) : (
					<section className="text-center">
						<h3>Coming Soon</h3>
					</section>
				)}
			</div>
		</>
	);
};

export default Schedule;
