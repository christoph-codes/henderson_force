import GameListItem from "@/components/GameListItem";
import { Hero } from "@/components/Hero";
import { SanityDocument } from "next-sanity";
import { urlForImage } from "../../../sanity/lib/image";

const Schedule = ({
	content,
	games,
}: {
	content: SanityDocument;
	games: SanityDocument[];
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
				{games.length > 0 ? (
					<section className="container flex flex-col mb-6">
						<table className="table-auto">
							<thead>
								<tr className="text-left border-b">
									<th className="hidden md:table-cell p-2 w-10">Opponent</th>
									<th className="flex-grow p-2"></th>
									<th className="hidden md:table-cell p-2">Venue</th>
									<th className="hidden md:table-cell p-2">Date</th>
									<th className="hidden md:table-cell p-2"></th>
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
