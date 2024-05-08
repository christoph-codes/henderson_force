import { SanityDocument } from "next-sanity";

export function Home({ events }: { events: SanityDocument[] }) {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Home</h1>
			{events.map((event) => (
				<div key={event._id} className="bg-purple">
					<h2>{event.name}</h2>
					<p>{event.description}</p>
				</div>
			))}
		</main>
	);
}
