"use client";
import { Hero } from "@/components/Hero";
import { SanityDocument } from "next-sanity";
import { urlForImage } from "../../../../../sanity/lib/image";
import Link from "next/link";

export type PlayerProfileProps = {
	profile: SanityDocument;
};

const PlayerProfile = ({ profile }: PlayerProfileProps) => {
	return (
		<>
			<Hero
				className="bg-[url('/default_bg.png')]"
				title={profile.name}
				description={profile.position}
			/>
			<section className="container">
				<img
					src={profile.image ? urlForImage(profile.image) : "/hforce_icon.svg"}
					alt={`${profile.name} Headshot`}
					className="bg-black h-36 md:h-48 w-36 md:w-48 rounded-full mx-auto mt-8 mb-6 md:-mt-24 border-4 border-white"
				/>
				<div className="space-y-6">
					<Link
						href="/team/players"
						className="btn text-center mx-auto w-max block"
					>
						« Back to Players
					</Link>
					<div className="grid grid-cols-1 md:grid-cols-2">
						<div className="">
							{profile.position && (
								<>
									<h4>Position</h4>
									<p>{profile.position}</p>
								</>
							)}
							{profile.number && (
								<>
									<h4>Jersey Number</h4>
									<p>{profile.number}</p>
								</>
							)}
						</div>
						<div className="">
							{profile.bio && (
								<>
									<h4>Bio:</h4>
									{profile.bio?.map((block: any) => (
										<div key={block._key}>
											{block._type === "block" && (
												<p className="text-lg">{block.children[0].text}</p>
											)}
										</div>
									))}
								</>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PlayerProfile;
