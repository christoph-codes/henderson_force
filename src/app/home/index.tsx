import { Hero } from "@/components/Hero";
import { SanityDocument } from "next-sanity";
import { urlForImage } from "../../../sanity/lib/image";
import FlexCard from "@/components/FlexCard";
import CountdownTimer from "@/components/CountdownTimer";
import { Fragment } from "react";
import Link from "next/link";
// import JoinTheForceBanner from "@/components/JoinTheForceBanner";

export function Home({
	content,
	siteConfig,
}: {
	content: SanityDocument;
	siteConfig: SanityDocument;
}) {
	const firstGameCountdown = siteConfig.countdowns.find(
		(countdown: any) => countdown.countdown_name === "First game of the year"
	);

	return (
		<>
			<Hero className="bg-[url('/default_bg.png')]" title={content.name} logo />
			{firstGameCountdown && (
				<div className="container text-center">
					<CountdownTimer
						label={firstGameCountdown.countdown_name}
						expirationDateInSeconds={firstGameCountdown.date}
					/>
				</div>
			)}
			<section className="grid grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-3 grid-flow-col auto-rows-auto gap-8 md:gap-6 container">
				{homeCards.map((post) => (
					<FlexCard
						link={post.link}
						key={post._key}
						image={post.image && urlForImage(post.image)}
						title={post.title.map((block: { children: { text: string }[] }) => {
							return (
								<>
									<span key={block.children[0].text}>
										{block.children[0].text}
									</span>
									<br />
								</>
							);
						})}
						description={post.description}
					/>
				))}
			</section>
			{/* <JoinTheForceBanner /> */}
		</>
	);
}
