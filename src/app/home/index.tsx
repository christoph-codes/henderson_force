import { Hero } from "@/components/Hero";
import { SanityDocument } from "next-sanity";
import { urlForImage } from "../../../sanity/lib/image";
import FlexCard from "@/components/FlexCard";
import CountdownTimer from "@/components/CountdownTimer";
import { Fragment, Key } from "react";
import Link from "next/link";
import { Image } from "sanity";
// import JoinTheForceBanner from "@/components/JoinTheForceBanner";

export function Home({
	content,
	siteConfig,
}: {
	content: SanityDocument;
	siteConfig: SanityDocument;
}) {
	const firstGameCountdown = siteConfig.countdowns?.find(
		(countdown: { countdown_name: string }) =>
			countdown.countdown_name === "First game of the year"
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
				{siteConfig.homeCards.map(
					(post: {
						link: string;
						_key: Key | null | undefined;
						image: Image;
						title: { children: { text: string }[] }[];
						description: string;
					}) => (
						<FlexCard
							link={post.link}
							key={post._key}
							image={post.image && urlForImage(post.image)}
							title={post.title.map(
								(block: { children: { text: string }[] }, index: number) => (
									<Fragment key={index}>
										<span key={block.children[0].text}>
											{block.children[0].text}
										</span>
										<br />
									</Fragment>
								)
							)}
							description={post.description}
						/>
					)
				)}
			</section>

			{siteConfig.watch_live_url && siteConfig.watch_live_image && (
				<div className="flex justify-center">
					<Link href={siteConfig.watch_live_url} target="_blank">
						<img
							className="mb-3 text-center"
							alt="Watch Live on FloHockey"
							src={
								siteConfig.watch_live_image &&
								urlForImage(siteConfig.watch_live_image).toString()
							}
						/>
					</Link>
				</div>
			)}
			{/* <JoinTheForceBanner /> */}
		</>
	);
}
