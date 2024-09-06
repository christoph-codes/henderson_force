import { Hero } from "@/components/Hero";
import { SanityDocument } from "next-sanity";
import PlayerListItem from "@/components/PlayerListItem";
import { urlForImage } from "../../../../sanity/lib/image";

const Alumni = ({
	content,
	players,
}: {
	content: SanityDocument;
	players: SanityDocument[];
}) => {
	return (
		<>
			<Hero
				className="bg-[url('/default_bg.png')]"
				title={content.name}
				description={content.description}
				logo
			/>
			{players.length > 0 ? (
				<section className="container flex flex-col mb-6">
					<table className="table-auto">
						<thead>
							<tr className="text-left border-b">
								<th className="hidden md:table-cell p-2 w-10"></th>
								<th className="p-2 w-10">#</th>
								<th className="flex-grow p-2">Player</th>
								<th className="hidden md:table-cell p-2">Position</th>
								<th className="hidden md:table-cell p-2"></th>
							</tr>
						</thead>
						<tbody>
							{players?.map((player) => (
								<PlayerListItem
									key={player._id}
									image={player.image && urlForImage(player.image)}
									jerseyNumber={player.number}
									title={player.name}
									position={player.position}
									link={`/team/players/${player.slug.current}`}
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
		</>
	);
};

export default Alumni;
